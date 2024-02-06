import Contact from "./Contact";
import Footer from "./Footer";
import PoweredBy from "./PoweredBy";
import backgroundImage from "./assets/images/fixitproservices-bg.jpg";

function App() {
  return (
    <>
      <div
        className="max-w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <section className="container mx-auto pt-20 px-20 main-bg">
          <div className="grid justify-center text-center">
            <h1 className="max-w-xl mx-auto text-5xl md:text-7xl text-white pb-10">
              Fixit Pro Services
            </h1>
            <span className="material-symbols-outlined text-9xl text-yellow">
              construction
            </span>
          </div>
        </section>
        <section>
        <div className="grid text-center">
          <h2 className="max-w-3xl mx-auto text-xl md:text-3xl px-10 pb-20 sm:pt-6 font-medium text-white">
            Turn your house into a dream home with our handyman team. From small
            repairs to home improvements, we’ve got you covered.{" "}
          </h2>
        </div>
        </section>
      </div>

      <section>
        <div className="grid text-center">
          <div className="max-w-full bg-white py-10">
            <p className="max-w-3xl px-8 sm:px-0 mx-auto text-black text-lg">
              In every interaction, we strive to make a lasting impact through
              top-notch <strong>handyman</strong> and{" "}
              <strong>repair services</strong> in <strong>Toronto</strong> and{" "}
              <strong>Etobicoke</strong>. Our commitment goes beyond
              transactions, fostering enduring customer relationships built on{" "}
              <strong>trust</strong>, <strong>reliability</strong>, and{" "}
              <strong>unparalleled service</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 max-w-full pb-8">
        <h3 className="text-center text-yellow py-12 px-8">
          Some of the services we offer:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8">
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white py-4 px-8 sm:px-6 shadow-md">
            <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Painting
            </h4>
            <p>
              Revitalize your space with our expert painting services, from
              priming to perfect sheens on walls and ceilings. Transform your
              environment effortlessly.
            </p>
          </div>

          <div className="bg-white py-4 px-8 sm:px-6 shadow-md">
            <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Appliances
            </h4>
            <p>
              Code-compliant minor appliance installations. We follow
              manufacturers' instructions meticulously, guaranteeing optimal
              functionality for your appliances.
            </p>
          </div>

          <div className="bg-white py-4 px-8 sm:px-6 shadow-md">
            <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Hardscaping
            </h4>
            <p>
              Elevate your outdoor space with our hardscaping services. We
              specialize in precise subfloor preparation, effective drainage,
              and meticulous leveling, ensuring lasting retention of interlock,
              pavers, and more for a stunning and durable landscape.
            </p>
          </div>
          <div className="bg-white py-4 px-8 sm:px-6 shadow-md">
            <h4 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Electrical
            </h4>
            <p>
              Upgrade your space effortlessly with our small electrical
              projects. From light fixtures to outlet replacements, we ensure
              expert solutions for a safer and more functional home.
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
