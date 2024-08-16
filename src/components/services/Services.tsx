"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });
import classes from "./Services.module.css";
import { Poppins } from "next/font/google";
import Servicio1 from "/public/planos/plano.jpg";
import Servicio2 from "/public/planos/render.jpg";
import Servicio3 from "/public/planos/supervisor.jpg";

const Services = () => {
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
    <section className={classes["container-services"]}>
      <h1
        id="services"
        className={`${poppins.className} ${isInView ? "faden-up" : ""}`}
        ref={elementRef}
      >
        Servicios
      </h1>
      <div
        className={classes.dividor}
        style={{ width: isInView ? "100%" : "0%" }}
      />

      <div className={classes.services}>
        <div className={classes.service}>
          <Image
            src={Servicio1}
            alt="diseño de planos"
            style={{ objectFit: "cover" }}
          />
          <div className={classes["service-content"]}>
            <h2 className={poppins.className}>Diseño de planos</h2>
            <p>
              Combino creatividad y precisión técnica para desarrollar planos
              detallados que son la base estructural de cualquier proyecto. Me
              aseguro de que cada plano maximice tanto la funcionalidad como la
              estética, reflejando fielmente tu visión mientras cumplo con los
              más altos estándares arquitectónicos.
            </p>
          </div>
        </div>
        <div className={classes.service}>
          <Image
            src={Servicio2}
            alt="diseño de planos"
            style={{ objectFit: "cover" }}
          />
          <div className={classes["service-content"]}>
            <h2 className={poppins.className}>Diseño de renders</h2>
            <p>
              Utilizo herramientas avanzadas para crear renders realistas que te
              permiten visualizar el proyecto antes de iniciar la construcción.
              Estos renders son fundamentales para explorar diferentes opciones
              de diseño y materiales, garantizando que el resultado final cumpla
              con todas tus expectativas.
            </p>
          </div>
        </div>
        <div className={classes.service}>
          <Image
            src={Servicio3}
            alt="diseño de planos"
            style={{ objectFit: "cover" }}
          />
          <div className={classes["service-content"]}>
            <h2 className={poppins.className}>Supervisor de obras</h2>
            <p>
              Aunque mi enfoque principal no es la supervisión, cuento con
              experiencia en supervisar obras, asegurándome de que cada fase del
              proyecto se realice de acuerdo a los planos y especificaciones
              técnicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
