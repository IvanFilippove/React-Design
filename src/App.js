import React, { useEffect, Fragment } from "react";
import AOS from "aos";
import $ from "jquery";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'react-bootstrap';

import Header from "./components/Header/Header";
import Route from "./Route";
import Footer from "./components/Footer/Footer";
import "aos/dist/aos.css";
import "./assets/styles/main.scss";

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });

    let navElement = $("nav");

    // $(function() {
    //   $(window).scrollTop() > navElement.innerHeight()
    //     ? navElement.addClass("sticky")
    //     : navElement.removeClass("sticky");
    // });
    // $(window).on("scroll", function() {
    //   $(window).scrollTop() > navElement.innerHeight()
    //     ? navElement.addClass("sticky")
    //     : navElement.removeClass("sticky");
    // });
  });

  return (
    <Fragment>
      <BrowserRouter>
        <ThemeProvider>
          <Route />
        </ThemeProvider>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
};

export default App;
