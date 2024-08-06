"use client";

import { useEffect } from "react";
import Image from "next/image";
import classes from "./Home.module.css";
import ImageHeader from "/public/image-header.jpg";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const Home = () => {
  useEffect(() => {
    const image = document.querySelector(`.${classes["home-image"]}`);
    const textElement = document.querySelector(`.${classes["home-text"]}`);
    const textFooter = document.querySelector(`.${classes["footer-home"]}`);
    if (image && textElement && textFooter) {
      image.classList.add(classes["zoom-in"]);
      textElement.classList.add(classes["animate-text"]);
      textFooter.classList.add(classes["footer-home-animation"]);
    }
  }, []);

  return (
    <section className={classes["container-home"]}>
      <div className={classes["container-text"]}>
        <h1 className={`${poppins.className} ${classes["home-text"]}`}>
          Diseñando espacios,
          <br /> construyendo sueños
        </h1>
      </div>
      <Image
        src={ImageHeader}
        alt="imagen de inicio"
        priority
        className={classes["home-image"]}
      />
      <div className={classes["footer-home"]}>
        <p className="w-[600px] mt-10">
          Arquitecto recién graduado con experiencia en diseño y planificación
          de espacios. Me apasiona crear entornos que mejoran la calidad de vida
          de las personas.
        </p>
        <button className={classes["button-contact"]}>Contactar</button>
      </div>

      <div
        className={`animate__animated animate__fadeInUp animate__delay-1s ${classes["footer-home-mobil"]}`}
      >
        <p>
          Arquitecto recién graduado con experiencia en diseño y planificación
          de espacios. Me apasiona crear entornos que mejoran la calidad de vida
          de las personas.
        </p>
        <button className={classes["button-contact"]}>Contactar</button>
      </div>
    </section>
  );
};

export default Home;
