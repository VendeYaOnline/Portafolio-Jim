"use client";

import Image from "next/image";
import classes from "./Results.module.css";
import { Poppins } from "next/font/google";
import { useEffect, useRef, useState } from "react";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });
import Result1 from "/public/results/result-1.jpg";
import Result2 from "/public/results/result-2.jpg";
import Result3 from "/public/results/result-3.jpg";

const Results = () => {
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
        4. Resultado final
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
          <Image src={Result1} alt="imagen" />
        </div>

        <div className={classes["card-image"]}>
          <Image src={Result2} alt="imagen" />
        </div>

        <div className={classes["card-image"]}>
          <Image src={Result3} alt="imagen" />
        </div>
      </div>
    </section>
  );
};

export default Results;
