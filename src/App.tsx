import React from "react";
import Nav from "./Nav";
import ServiceTile from "./ServiceTile";
import Contact from "./Contact";
import services from "./data/servicesData";
import backgroundImage from "./assets/images/fixitproservices-bg.webp";
import "./App.css";

function App() {
  React.useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
  }, []);

  return (
    <>
        <Nav />
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
              Turn your house into a dream home with our handyman team. From
              small repairs to home improvements, we’ve got you covered.{" "}
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

      <section id="services-section" className="bg-gray-900 max-w-full pb-8">
        <h3 className="text-center text-yellow py-12 px-8">Our services:</h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl md:mx-auto mx-8 mb-8">
          {services.map((service, index) => (
            <ServiceTile key={index} {...service} />
          ))}
        </div>
      </section>
      <Contact />
    </>
  );
}

export default App;
