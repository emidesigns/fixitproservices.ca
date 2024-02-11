import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-8 px-10">
        <div className="container mx-auto grid grid-cols-1">
          <div className="text-center">
            <h1 className="text-2xl text-white">Fixit Pro Services</h1>
            <span className="material-symbols-outlined text-3xl text-yellow">
              construction
            </span>
            <p className="text-xs">
              © Fixit Pro Services {new Date().getFullYear()} |{" "}
              <Link to="/privacy-policy">Privacy Policy</Link>
            </p>

            <p className="text-xs">
              Site by:
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
      </footer>
    </>
  );
}

export default Footer;
