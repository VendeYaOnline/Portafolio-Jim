"use client";

import Image from "next/image";
import classes from "./ProcessExecuted.module.css";
import { Poppins } from "next/font/google";
import { useEffect, useRef, useState } from "react";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });
import Construction1 from "/public/construction/construction-1.jpg";
import Construction2 from "/public/construction/construction-2.jpg";
import Construction3 from "/public/construction/construction-3.jpg";
import Construction4 from "/public/construction/construction-4.jpg";
import Construction5 from "/public/construction/construction-5.jpg";
import Construction6 from "/public/construction/construction-6.jpg";
import Construction7 from "/public/construction/construction-7.jpg";

const ProcessExecuted = () => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Solo actualiza el estado si el elemento está en vista y aún no se ha activado
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isInView]);

  return (
    <section className={classes["container-knowledge"]} id="knowledge">
      <h1
        className={`${poppins.className} ${isInView ? "faden-up" : ""}`}
        ref={elementRef}
      >
        Proceso de construcción
      </h1>
      <div
        className={classes.dividor}
        style={{ width: isInView ? "100%" : "0%" }}
      />
      <p className={classes.parrafo}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
        obcaecati vel molestiae? Esse blanditiis consequuntur eveniet ipsam
        voluptatibus ea laborum sapiente? Iste eum a assumenda, minima adipisci
        optio earum voluptatum!
      </p>
      <br />
      <div className={classes.galery}>
        <div className={classes["card-image"]}>
          <Image src={Construction1} alt="s" />
        </div>

        <div className={classes["card-image"]}>
          <Image src={Construction2} alt="s" />
        </div>

        <div className={classes["card-image"]}>
          <Image src={Construction3} alt="s" />
        </div>

        <div className={classes["card-image"]}>
          <Image src={Construction4} alt="s" />
        </div>

        <div className={classes["card-image"]}>
          <Image src={Construction5} alt="s" />
        </div>

        <div className={classes["card-image"]}>
          <Image src={Construction6} alt="s" />
        </div>

        <div className={classes["card-image"]}>
          <Image src={Construction7} alt="s" />
        </div>
      </div>
    </section>
  );
};

export default ProcessExecuted;
