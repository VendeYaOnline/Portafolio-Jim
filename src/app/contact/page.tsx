"use client";

import classes from "./contact.module.css";
import { ArrowLeft } from "lucide-react";
import { Mail, Phone, User } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const Contact = () => {
  return (
    <section className={classes["container-contact"]}>
      <div className={classes["header-contact"]}>
        <Link href="/">
          <button className={classes["button-back"]}>
            <ArrowLeft />
            <h2>Atras</h2>
          </button>
        </Link>
      </div>

      <div className={classes["circle-1"]} />
      <div className={classes["circle-2"]} />
      <div className={classes.col}>
        <div className="flex justify-between items-center flex-wrap gap-1">
          <h1 className={poppins.className}>Contacto</h1>
          <div className={classes["container-cards"]}>
            <div className={classes["card-active"]}>
              <User />
            </div>
          </div>
        </div>
        <div className={classes["container-texts"]}>
          <div className={classes["card-contact"]}>
            <a href="mailto:jimparrado960@gmail.com" target="_blank">
              <Mail size={20} />
            </a>
          </div>

          <span>jimparrado960@gmail.com</span>
        </div>

        <div className={classes["container-texts"]}>
          <a
            href="https://wa.me/573123601001"
            target="_blank"
          >
            <div className={classes["card-contact"]}>
              <Phone size={20} />
            </div>
          </a>

          <span>3123601001</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
