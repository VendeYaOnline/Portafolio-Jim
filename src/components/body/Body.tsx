import Image from "next/image";
import classes from "./Body.module.css";
import Poster from "/public/poster.jpg";
import { Poppins } from "next/font/google";
import { ChevronRight } from "lucide-react";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const Body = () => {
  return (
    <section className={classes["container-body"]}>
      <h1 className={poppins.className}>Proyectos</h1>
      <div className={classes.dividor} />
      <div className={classes["container-project"]}>
        <div className={classes.project}>
          <div>
            <h2 className={poppins.className}>Render</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              alias obcaecati aspernatur sequi voluptatibus officiis accusantium
              nesciunt sed libero voluptate tenetur quia, distinctio laborum
              ratione debitis sapiente dicta est quibusdam!
            </p>
            <button className={classes["button-project"]}>
              <div>Ver</div>
              <ChevronRight size={20} className={classes["icon-button"]} />
            </button>
          </div>
          <Image
            src={
              "https://assets.lummi.ai/assets/QmVB9nNLq9sVr39iJzTGTDs498RAbTyMuZQN3S9yjw1qW4?auto=format&w=1500"
            }
            alt="Poryecto-1"
            width={300}
            height={300}
            className={classes["image-image-mobil"]}
          />
          <Image
            src={
              "https://assets.lummi.ai/assets/QmVB9nNLq9sVr39iJzTGTDs498RAbTyMuZQN3S9yjw1qW4?auto=format&w=1500"
            }
            alt="Poryecto-1"
            width={400}
            height={400}
            className={classes["image-image-web"]}
          />
        </div>

        <div className={classes.project}>
          <div>
            <h2 className={poppins.className}>Render</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              alias obcaecati aspernatur sequi voluptatibus officiis accusantium
              nesciunt sed libero voluptate tenetur quia, distinctio laborum
              ratione debitis sapiente dicta est quibusdam!
            </p>
            <button className={classes["button-project"]}>
              <div>Ver</div>
              <ChevronRight size={20} className={classes["icon-button"]} />
            </button>
          </div>
          <Image
            src={
              "https://assets.lummi.ai/assets/QmNQv79gNXSTS8VERJe8DDybh1pzgwZ6WVi7Zw79UyQc4W?auto=format&w=1500"
            }
            alt="Poryecto-1"
            width={300}
            height={300}
            className={classes["image-image-mobil"]}
          />
          <Image
            src={
              "https://assets.lummi.ai/assets/QmNQv79gNXSTS8VERJe8DDybh1pzgwZ6WVi7Zw79UyQc4W?auto=format&w=1500"
            }
            alt="Poryecto-1"
            width={400}
            height={400}
            className={classes["image-image-web"]}
          />
        </div>
      </div>
      <div className={classes["dividor-2"]} />

      <div className={classes["container-project"]}>
        <div className={classes.project}>
          <div>
            <h2 className={poppins.className}>Render</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              alias obcaecati aspernatur sequi voluptatibus officiis accusantium
              nesciunt sed libero voluptate tenetur quia, distinctio laborum
              ratione debitis sapiente dicta est quibusdam!
            </p>
            <button className={classes["button-project"]}>
              <div>Ver</div>
              <ChevronRight size={20} className={classes["icon-button"]} />
            </button>
          </div>
          <Image
            src={Poster}
            alt="Poryecto-1"
            width={300}
            height={300}
            className={classes["image-image-mobil"]}
          />
          <Image
            src={Poster}
            alt="Poryecto-1"
            width={400}
            height={400}
            className={classes["image-image-web"]}
          />
        </div>

        <div className={classes.project}>
          <div>
            <h2 className={poppins.className}>Render</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              alias obcaecati aspernatur sequi voluptatibus officiis accusantium
              nesciunt sed libero voluptate tenetur quia, distinctio laborum
              ratione debitis sapiente dicta est quibusdam!
            </p>
            <button className={classes["button-project"]}>
              <div>Ver</div>
              <ChevronRight size={20} className={classes["icon-button"]} />
            </button>
          </div>
          <Image
            src={
              "https://assets.lummi.ai/assets/QmUwUyXCU9615fYAUo3sBjYMT8ZhTJrbzRXhgV7qYrahoK?auto=format&w=1500"
            }
            alt="Poryecto-1"
            width={300}
            height={300}
            className={classes["image-image-mobil"]}
          />
          <Image
            src={
              "https://assets.lummi.ai/assets/QmUwUyXCU9615fYAUo3sBjYMT8ZhTJrbzRXhgV7qYrahoK?auto=format&w=1500"
            }
            alt="Poryecto-1"
            width={400}
            height={400}
            className={classes["image-image-web"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Body;
