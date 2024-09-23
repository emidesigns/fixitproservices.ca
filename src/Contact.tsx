import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

type FormValues = {
  user_name: string;
  contact: string;
  message: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted, isValid },
  } = useForm<FormValues>({
    mode: "onSubmit",
  });

  const [isEmailSent, setIsEmailSent] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      if (!recaptchaToken) {
        // Optionally: Handle the case where reCAPTCHA token is missing
        console.error("reCAPTCHA token is missing");
        return;
      }

      // Call Email.js service to send email
      await emailjs.send(
        "service_mhh61vv",
        "fixitproservices-email",
        {
          ...data,
          "g-recaptcha-response": recaptchaToken, // Include reCAPTCHA token
        },
        "r7pVp8RTkV6PiUVw3"
      );

      // Set state to display success message and store the response
      setIsEmailSent(true);

      // Store the response details without exposing them to the UI
    } catch (error) {
      console.error("Email failed to send:", error);

      // Optionally: Show an error message to the user
    }
  };

  useEffect(() => {
    if (isEmailSent) {
      // Reset the form in useEffect after the email is sent
      reset();
    }
  }, [isEmailSent, reset]);

  return (
    <>
      <section id="contact-section" className="grid pb-20 bg-gray-900">
        <h1 className="text-4xl md:text-6xl py-8 mx-auto text-white">
          Get in touch!
        </h1>
        <div className="mx-auto px-8">
          <p className="mx-auto max-w-xl py-4 text-white text-lg">
            Connect with us for consultations, questions, or to brainstorm
            ideas. Whether you have a specific project in mind or are simply
            exploring possibilities, we’re here to assist.{" "}
            <a
              className="underline underline-offset-4"
              href="mailto:info.fixitproservices@gmail.com"
            >
              info.fixitproservices@gmail.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

export default Contact;
