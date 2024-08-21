"use client";

import { useEffect } from "react";
import Image from "next/image";
import classes from "./Home.module.css";
import ImageHeader from "/public/image-header.jpg";
import { Poppins } from "next/font/google";
import Menu from "../menu/Menu";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const Home = () => {
  useEffect(() => {
    const image = document.querySelector(`.${classes["home-image"]}`);
    const textElement = document.querySelector(`.${classes["home-text"]}`);
    const textFooter = document.querySelector(`.${classes["footer-home"]}`);
    const divider = document.querySelector(`.${classes["divider-home"]}`);
    if (image && textElement && textFooter && divider) {
      image.classList.add(classes["zoom-in"]);
      textElement.classList.add(classes["animate-text"]);
      textFooter.classList.add(classes["footer-home-animation"]);
      divider.classList.add(classes["divider-home-animation"]);
    }
  }, []);

  return (
    <section className={classes["container-home"]}>
      <Menu />
      <div className={classes["container-text"]}>
        <h1 className={`${poppins.className} ${classes["home-text"]}`}>
          Diseñando espacios,
          <br /> construyendo sueños
        </h1>
        <div className={classes["divider-home"]} />
      </div>
      <Image
        src={ImageHeader}
        alt="imagen de inicio"
        priority
        className={classes["home-image"]}
      />
      <div className={classes["footer-home"]}>
        <p className="mt-10">
          Soy estudiante de arquitectura con experiencia laboral en el campo, lo
          que me ha permitido combinar la teoría con la práctica y desarrollar
          un enfoque integral en el diseño de espacios que no solo sean
          funcionales, sino que también inspiren y conecten a las personas.
        </p>
        <button className={classes["button-contact"]}>Contactar</button>
      </div>
    </section>
  );
};

export default Home;
