import Contact from "./Contact";
import Footer from "./Footer";
import PoweredBy from "./PoweredBy";

function App() {
  return (
    <>
      <section className="container mx-auto pt-20 pr-20 pl-20">
        <div className="grid justify-center items-center text-center">
          <h1 className="max-w-2xl mx-auto text-7xl md:text-8xl text-white leading-none">
            Fixit Pro Services
          </h1>
          <span className="material-symbols-outlined text-9xl text-yellow">
            construction
          </span>
        </div>
      </section>

      <section className="text-white">
        <div className="grid text-center">
          <h2 className="max-w-3xl mx-auto px-10 py-14 sm:pt-6 sm:py-18 font-extrabold">
            Turn your house into a dream home with the skillful touch of our
            handyman team. From small repairs to personalized improvements,
            we’ve got you covered.{" "}
          </h2>
          <div className="max-w-full bg-white py-10">
            <p className="max-w-3xl px-8 sm:px-0 mx-auto text-black text-lg">
            In every interaction, we strive to make a lasting impact through top-notch <strong>handyman</strong> and <strong>repair services</strong> in{" "}
              <strong>Toronto</strong> and <strong>Etobicoke</strong>. Our commitment goes beyond transactions, fostering enduring customer relationships built on <strong>trust</strong>,{" "}
              <strong>reliability</strong>, and{" "}
              <strong>unparalleled service</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 max-w-full">
        <h3 className="text-center text-yellow py-12 px-8 sm:px-0">
          Some of the services we offer:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white py-4 px-8 sm:px-6 shadow-md">
            <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Drywall
            </h4>
            <p>
              We specialize in drywall work, including hanging, taping, priming,
              and painting to ensure smooth and seamless surfaces transforming
              raw drywall into flawlessly finished spaces.
            </p>
          </div>

          <div className="bg-white py-4 px-8 sm:px-6 shadow-md">
            <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Carpentry
            </h4>
            <p>
              With expertise in trimming, framing, and small carpentry, we bring
              precision and craftsmanship to every project from framing
              structures to adding elegant trim.
            </p>
          </div>

          <div className="bg-white py-4 px-8 sm:px-6 shadow-md">
            <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Flooring
            </h4>
            <p>
              Specializing in vinyl and laminate flooring installations. From
              precise measurements to seamless placement, we bring a skilled
              approach to transform spaces with both functional and
              aesthetically pleasing flooring solutions.
            </p>
          </div>
          <div className="bg-white py-4 px-8 sm:px-6 shadow-md">
            <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Mounting & Assembly
            </h4>
            <p>
              With precision and attention to detail, we excel in TV and
              furniture mounting, as well as expert furniture assembly ensuring
              both functionality and aesthetic appeal in your living spaces.
            </p>
          </div>
        </div>
      </section>

      <section className="grid py-20">
        <h1 className="sm:text-7xl md:text-8xl py-8 mx-auto text-white">
          Get in touch!
        </h1>
        <Contact />
      </section>
      <Footer />
      <PoweredBy />
    </>
  );
}

export default App;
