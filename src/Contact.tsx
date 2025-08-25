
function Contact() {
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
