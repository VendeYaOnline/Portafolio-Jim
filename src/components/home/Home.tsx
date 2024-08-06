"use client";

import { useEffect } from "react";
import Image from "next/image";
import classes from "./Home.module.css";
import ImageHeader from "/public/image-header.jpg";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const Home = () => {
  useEffect(() => {
    const image = document.querySelector(`.${classes["header-image"]}`);
    const textElement = document.querySelector(`.${classes["header-text"]}`);
    if (image && textElement) {
      image.classList.add(classes["zoom-in"]);
      textElement.classList.add(classes["animate-text"]);
    }
  }, []);

  return (
    <section className={classes["container-header"]}>
      <div className={classes["container-text"]}>
        <h1 className={`${poppins.className} ${classes["header-text"]}`}>
          Diseñando espacios,
          <br /> construyendo sueños
        </h1>
      </div>
      <Image
        src={ImageHeader}
        alt="imagen de inicio"
        priority
        className={classes["header-image"]}
      />
    </section>
  );
};

export default Home;
