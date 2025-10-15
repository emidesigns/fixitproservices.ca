function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8 px-10">
        <div className="container mx-auto grid grid-cols-1">
          <div>
            <span className="material-symbols-outlined text-3xl text-[#3F88C5]">
              construction
            </span>
            <p className="text-xs">
              © Fixit Pro Services {new Date().getFullYear()}{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
