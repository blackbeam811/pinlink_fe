import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import store from "./store/store";
import { Provider } from "react-redux";
import { ScreenWidthProvider } from '@context/ScreenWidthContext';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText, ScrollSmoother);
ScrollTrigger.normalizeScroll(false); // disable

// Disable scroll smoothing on touch devices to prevent shaking on scroll
if (!ScrollTrigger.isTouch) {
  ScrollSmoother.create({
    smooth: 2.5,
    // normalizeScroll: true,
    ignoreMobileResize: true,
  });
}


ReactDOM.createRoot(document.getElementById("root")).render(
    <ScreenWidthProvider>
  <Provider store={store}>
    <React.StrictMode>
      <App />
      </React.StrictMode>
  </Provider>
    </ScreenWidthProvider>
);
