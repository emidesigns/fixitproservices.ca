function PrivacyPolicy() {
  return (
    <>
      <nav className="sticky top-0 bg-gray-900">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="/" className="text-white font-bold text-md nav-logo">
            fixitproservices
          </a>

          <div className="flex space-x-4">
            <a href="/" className="text-white text-sm">
              Home
            </a>
          </div>
        </div>
      </nav>
      <section className="grid py-10">
        <div className="mx-auto px-8">
          <h1>Privacy Policy for Fixit Pro Services</h1>
          <p>Last updated: Feb, 2024</p>

          <p>
            Fixit Pro Services is committed to protecting the privacy of its
            users. This Privacy Policy outlines how we collect, use, disclose,
            and safeguard your personal information.
          </p>

          <ol className="list-decimal list-outside">
            <li>
              <h2>Information We Collect</h2>
              <p>
                We collect and process the following personal information for
                communication purposes with our customers:
              </p>
              <ul>
                <li>
                  <strong>Name</strong>
                </li>
                <li>
                  <strong>Email address</strong>
                </li>
                <li>
                  <strong>Phone number</strong>
                </li>
              </ul>
            </li>
            <li>
              <h2>How We Use Your Information</h2>
              <p>
                We use the collected information for the following purposes:
              </p>
              <ul>
                <li>
                  Communicating with customers regarding their inquiries,
                  requests, or service-related matters.
                </li>
                <li>Providing updates and information about our services.</li>
                <li>Responding to customer service requests.</li>
              </ul>
            </li>
            <li>
              <h2>Information Handling</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties.
              </p>
              <p>
                We use the <strong>emailJS</strong> service as an intermediary
                for handling email submissions. Please refer to{" "}
                <a href="https://www.emailjs.com/legal/privacy-policy/">
                  emailJS Privacy Policy
                </a>{" "}
                for details on their data processing practices.
              </p>
            </li>
            <li>
              <h2>Email Handling</h2>
              <p>
                All emails submitted through our website are received and
                handled via <strong>Outlook</strong>.
              </p>
              <p>
                We take reasonable measures to secure and protect your
                information during email communication.
              </p>
            </li>
            <li>
              <h2>Information Security</h2>
              <p>
                We implement security measures to protect your personal
                information from unauthorized access, disclosure, alteration,
                and destruction.
              </p>
            </li>
            <li>
              <h2>Data Retention</h2>
              <p>
                We retain your personal information for the duration necessary
                to fulfill the purposes outlined in this Privacy Policy.
              </p>
            </li>
            <li>
              <h2>7. Your Rights</h2>
              <p>
                You have the right to access, correct, or request deletion of
                your personal information. Please contact us at{" "}
                <a
                  className="underline underline-offset-4"
                  href="mailto:info@fixitproservices.ca"
                >
                  info@fixitproservices.ca
                </a>{" "}
                for such requests.
              </p>
            </li>
            <li>
              <h2>Policy Changes</h2>
              <p>
                This Privacy Policy may be updated periodically. Any changes
                will be reflected on this page.
              </p>
            </li>
            <li>
              <h2>Contact Information</h2>
              <p>
                For questions or concerns about our Privacy Policy, please
                contact us at:
              </p>
              <address>
                <p>Fixit Pro Services</p>
                <a
                  className="underline underline-offset-4"
                  href="mailto:info@fixitproservices.ca"
                >
                  info@fixitproservices.ca
                </a>{" "}
              </address>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
