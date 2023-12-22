function PoweredBy() {
  return (
    <>
      <section className="bg-black text-white py-6 px-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="text-center sm:text-left">
            <p className="text-xs">
              Site development by:
              <a
                href="https://www.emiliodiaz.ca/"
                target="_blank"
                className="text-yellow"
              >
                {" "}
                emiliodiaz.ca
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PoweredBy;
