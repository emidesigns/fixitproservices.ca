import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import Footer from "./Footer";
import PrivacyPolicy from "./PrivacyPolicy";
import "./index.css";
import ScrollToTop from "./ScrollToTop.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/" element={<App />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
