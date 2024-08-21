import Image from "next/image";
import classes from "./ProyectBBQ.module.css";
import Render1 from "/public/proyect-3/1.png";
import Render2 from "/public/proyect-3/2.png";
import Construct1 from "/public/proyect-3/3.jpg";
import Construct2 from "/public/proyect-3/4.jpg";
import Construct3 from "/public/proyect-3/5.jpg";
import Result1 from "/public/proyect-3/8.jpg";
import { Poppins } from "next/font/google";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const ProyectBBQ = () => {
  return (
    <article className={classes["container-proyect"]}>
      <Link href="/">
        <button className={classes["button-back"]}>
          <ArrowLeft color="white" />
        </button>
      </Link>

      <h1 className={poppins.className}>Proyecto de zona social BBQ</h1>

      <div className={classes["container-images"]}>
        <Image src={Render1} alt="Proyecto BBQ" className="rounded-md mt-5" />
        <Image src={Render2} alt="Proyecto BBQ" className="rounded-md mt-5" />
      </div>

      <p className="my-5">
        Durante la fase de diseño, nuestro objetivo fue crear una zona social
        BBQ que sirviera como un espacio acogedor y funcional para el
        entretenimiento y la relajación. Diseñamos un área que combina confort y
        estilo, con una distribución que maximiza el uso del espacio y fomenta
        la interacción social. Cada elemento, desde las áreas de descanso hasta
        las zonas de sombra, fue seleccionado para asegurar que el espacio sea
        ideal para disfrutar de reuniones y celebraciones al aire libre.
      </p>
      <div className={classes["container-images"]}>
        <Image src={Construct1} alt="Proyecto BBQ" className="rounded-md" />
        <Image src={Construct2} alt="Proyecto BBQ" className="rounded-md" />
        <Image src={Construct3} alt="Proyecto BBQ" className="rounded-md" />
      </div>

      <p className="my-5">
        En la fase de construcción, nos enfocamos en ejecutar el diseño con
        precisión y calidad. Cada componente de la zona social BBQ fue instalado
        meticulosamente para garantizar su durabilidad y funcionalidad. Desde la
        construcción de las áreas de asientos hasta la integración de elementos
        decorativos, cada etapa fue llevada a cabo con atención al detalle para
        crear un espacio que no solo sea visualmente atractivo, sino también
        resistente y cómodo.
      </p>
      <div className={classes["container-images"]}>
        <Image src={Result1} alt="Proyecto BBQ" className="rounded-md" />
      </div>

      <p className="mt-5">
        El resultado final es una zona social BBQ que ofrece un entorno perfecto
        para disfrutar de momentos especiales con amigos y familia. El diseño y
        la construcción se han combinado para crear un espacio que invita a la
        relajación y al disfrute, con áreas bien definidas para comer y
        socializar. Este proyecto refleja nuestro compromiso con la creación de
        espacios que mejoran la calidad de vida y fomentan la convivencia.
      </p>
    </article>
  );
};

export default ProyectBBQ;
