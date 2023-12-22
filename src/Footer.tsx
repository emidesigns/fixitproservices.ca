function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8 px-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2">
          <div className="text-center sm:text-left">
            <a href="mailto:info@fixitproservices.ca">
              info@fixitproservices.ca
            </a>
          </div>

          <div className="text-center sm:text-right">
            <h1 className="text-2xl text-white">Fixit Pro Services</h1>
            <span className="material-symbols-outlined text-3xl text-yellow">
              construction
            </span>
            <p className="text-xs">
              © Fixit Pro Services {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
