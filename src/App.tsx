const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('http://localhost:5173/src/assets/images/FPS-bg.avif')",
        }}
      ></div>

      {/* Overlay content */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen text-[#140F2D]">
        {/* Left column (empty for spacing on desktop) */}
        <div className="hidden md:block"></div>

        {/* Right column (content) */}
        <div className="flex flex-col justify-start md:justify-center items-center md:items-end md:pr-20 space-y-6 text-center mt-16 md:mt-0">
          <section>
            <h1 className="text-[#F49D37] text-[70px] md:text-[110px] tracking-[15px] md:tracking-[45px] font-climate-crisis">
              FIXIT
            </h1>
            <h2 className="text-[#F49D37] text-[26px] md:text-[30px] tracking-[8px] md:tracking-[25px] font-hanken-grotesk">
              PRO SERVICES
            </h2>
          </section>

          <section className="font-hanken-grotesk text-[#FFFFFF] md:text-left mx-10 md:mx-0">
            <p className="pb-4">
              <span className="font-semibold">FIXIT Pro Services</span> delivers
              specialized expertise in handyman and general contracting
              throughout Etobicoke and the GTA.
            </p>
            <p className="pb-4">
              We are committed to building lasting partnerships by ensuring
              impeccable quality and reliability on every project.
            </p>
            <p>
              <a
                href="mailto:info.fixitproservices@gmail.com"
                className="text-[#F49D37]"
              >
                info.fixitproservices@gmail.com
              </a>{" "}
              <br /> <a href="tel:437-717-8294">437-717-8294</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
