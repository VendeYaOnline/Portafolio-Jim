import Image from "next/image";
import classes from "./ProyectApartaments.module.css";
import Poster from "/public/results/result-1.jpg";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const ProyectApartaments = () => {
  return (
    <article className={classes["container-proyect"]}>
      <h1 className={poppins.className}>Diseño de apartamentos</h1>
      <div className="flex gap-5">
        <Image src={Poster} alt="Poster" width={700} className="rounded-md" />
      </div>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur
        quis ipsa qui, vero inventore! Voluptatibus, aperiam excepturi! Possimus
        quis tempora aliquid hic, ipsum nostrum perferendis odit assumenda?
        Incidunt, ullam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Minus pariatur quis ipsa qui, vero inventore! Voluptatibus,
        aperiam excepturi! Possimus quis tempora aliquid hic, ipsum nostrum
        perferendis odit assumenda? Incidunt, ullam.
      </p>
      <Image
        src={Poster}
        alt="Poster"
        width={700}
        className="rounded-md mt-5"
      />
      <p className="mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur
        quis ipsa qui, vero inventore! Voluptatibus, aperiam excepturi! Possimus
        quis tempora aliquid hic, ipsum nostrum perferendis odit assumenda?
        Incidunt, ullam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Minus pariatur quis ipsa qui, vero inventore! Voluptatibus,
        aperiam excepturi! Possimus quis tempora aliquid hic, ipsum nostrum
        perferendis odit assumenda? Incidunt, ullam.
      </p>

      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur
        quis ipsa qui, vero inventore! Voluptatibus, aperiam excepturi! Possimus
        quis tempora aliquid hic, ipsum nostrum perferendis odit assumenda?
        Incidunt, ullam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Minus pariatur quis ipsa qui, vero inventore! Voluptatibus,
        aperiam excepturi! Possimus quis tempora aliquid hic, ipsum nostrum
        perferendis odit assumenda? Incidunt, ullam.
      </p>
    </article>
  );
};

export default ProyectApartaments;
