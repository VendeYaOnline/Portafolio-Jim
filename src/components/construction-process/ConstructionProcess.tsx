"use client";

import Image from "next/image";
import classes from "./ConstructionProcess.module.css";
import { Poppins } from "next/font/google";
import { useEffect, useRef, useState } from "react";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const ConstructionProcess = () => {
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
        Proceso constructivo
      </h1>
      <div
        className={classes.dividor}
        style={{ width: isInView ? "100%" : "0%" }}
      />
      <div className={classes["father-knowledges"]}>
        <div className={classes.knowledges}>
          <div className={classes.content}>
            <h2 className={poppins.className}>Renders</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              sunt fuga reiciendis at facere esse eum minus incidunt debitis
              optio? Ad, est omnis expedita delectus officiis quasi saepe ullam
              voluptatum?
            </p>
          </div>
          <Image
            width={450}
            height={450}
            priority
            src={
              "https://assets.lummi.ai/assets/Qmaidx8HjpxhdoQBDgxXBVpLxSLxyi6gWZnTSkxqd7nqTa?auto=format&w=1500"
            }
            alt="Renders"
            className={classes["image-web"]}
          />

          <Image
            width={300}
            height={300}
            priority
            src={
              "https://assets.lummi.ai/assets/Qmaidx8HjpxhdoQBDgxXBVpLxSLxyi6gWZnTSkxqd7nqTa?auto=format&w=1500"
            }
            alt="Renders"
            className={classes["image-mobil"]}
          />
        </div>

        <div className={classes.knowledges}>
          <div className={classes.content}>
            <h2 className={poppins.className}>Planos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              sunt fuga reiciendis at facere esse eum minus incidunt debitis
              optio? Ad, est omnis expedita delectus officiis quasi saepe ullam
              voluptatum?
            </p>
          </div>
          <Image
            width={450}
            height={450}
            priority
            src={
              "https://assets.lummi.ai/assets/Qmaidx8HjpxhdoQBDgxXBVpLxSLxyi6gWZnTSkxqd7nqTa?auto=format&w=1500"
            }
            alt="Renders"
            className={classes["image-web"]}
          />

          <Image
            width={300}
            height={300}
            priority
            src={
              "https://assets.lummi.ai/assets/Qmaidx8HjpxhdoQBDgxXBVpLxSLxyi6gWZnTSkxqd7nqTa?auto=format&w=1500"
            }
            alt="Renders"
            className={classes["image-mobil"]}
          />
        </div>
      </div>
      <div className={classes["dividor-2"]} />
      <div className={classes["father-knowledges"]}>
        <div className={classes.knowledges}>
          <div className={classes.content}>
            <h2 className={poppins.className}>Mediciones</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              sunt fuga reiciendis at facere esse eum minus incidunt debitis
              optio? Ad, est omnis expedita delectus officiis quasi saepe ullam
              voluptatum?
            </p>
          </div>
          <Image
            width={450}
            height={450}
            priority
            src={
              "https://assets.lummi.ai/assets/Qmaidx8HjpxhdoQBDgxXBVpLxSLxyi6gWZnTSkxqd7nqTa?auto=format&w=1500"
            }
            alt="Renders"
            className={classes["image-web"]}
          />

          <Image
            width={300}
            height={300}
            priority
            src={
              "https://assets.lummi.ai/assets/Qmaidx8HjpxhdoQBDgxXBVpLxSLxyi6gWZnTSkxqd7nqTa?auto=format&w=1500"
            }
            alt="Renders"
            className={classes["image-mobil"]}
          />
        </div>

        <div className={classes.knowledges}>
          <div className={classes.content}>
            <h2 className={poppins.className}>Dibujos</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              sunt fuga reiciendis at facere esse eum minus incidunt debitis
              optio? Ad, est omnis expedita delectus officiis quasi saepe ullam
              voluptatum?
            </p>
          </div>
          <Image
            width={450}
            height={450}
            priority
            src={
              "https://assets.lummi.ai/assets/Qmaidx8HjpxhdoQBDgxXBVpLxSLxyi6gWZnTSkxqd7nqTa?auto=format&w=1500"
            }
            alt="Renders"
            className={classes["image-web"]}
          />

          <Image
            width={300}
            height={300}
            priority
            src={
              "https://assets.lummi.ai/assets/Qmaidx8HjpxhdoQBDgxXBVpLxSLxyi6gWZnTSkxqd7nqTa?auto=format&w=1500"
            }
            alt="Renders"
            className={classes["image-mobil"]}
          />
        </div>
      </div>
    </section>
  );
};

export default ConstructionProcess;
