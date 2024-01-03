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
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange", // Trigger validation on input change
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
      <div className="mx-auto px-8">
        <p className="mx-auto max-w-xl py-4 text-white text-xl">
          Connect with us for consultations, questions, or to brainstorm ideas.
          Whether you have a specific project in mind or are simply exploring
          possibilities, we’'re here to assist.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pt-4 mx-auto max-w-xl"
        >
          <div className="mb-4">
            <label htmlFor="user_name" className="block text-lg text-white">
              Name (Required)
            </label>
            <input
              id="user_name"
              className="w-full p-2"
              type="text"
              {...register("user_name", {
                pattern: {
                  value: /^[a-zA-Z ]*$/,
                  message:
                    "Please enter a valid personal name without numbers or special characters",
                },
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters long",
                },
                required: "Name is a required field",
              })}
            />
            {errors.user_name && (
              <div className="text-yellow pt-1">{errors.user_name.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="contact" className="block text-lg text-white">
              Phone or Email
            </label>
            <input
              id="contact"
              className="w-full p-2"
              type="text"
              {...register("contact", {
                pattern: {
                  value:
                    /^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(\d{3}-\d{3}-\d{4})$/,
                  message:
                    "Invalid phone or email format. Phone number should follow: 000-000-0000",
                },
                required: "Contact information is a required field",
              })}
            />
            {errors.contact && (
              <div className="text-yellow pt-1">{errors.contact.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg text-white">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2"
              rows={4}
              {...register("message", {
                required:
                  "A short message is required for us to learn about your project!",
              })}
            />
            {errors.message && (
              <div className="text-yellow">{errors.message.message}</div>
            )}
          </div>

          <div className="mb-4">
            <ReCAPTCHA
              sitekey="6Lcs9zMpAAAAAAppcq1mJcDVYhbeWTyikW4Q0IyM"
              onChange={(token) => setRecaptchaToken(token)}
            />
          </div>

          <div>
            <input
              type="submit"
              value="Submit"
              className="w-full bg-yellow py-2 px-4"
            />
          </div>
        </form>
        {isEmailSent && (
          <div className="bg-green-500 text-black my-2 py-2 px-4">
            Email successfully sent! Thank you for contacting us.
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;
