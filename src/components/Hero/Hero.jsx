import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Adib</h1>
                <p className={styles.description}>
                    Welcome to my portfolio!<br/>
                    <br/>
                    I am a dedicated and ambitious Mechatronic Engineering <br/>
                    graduate with a passion for technology and innovation.<br/>
                    
                    I have a keen interest in leveraging technology to solve real-world <br/>
                    problems and contribute to the development of cutting-edge solutions.
                </p>

                <a href="mailto:adibahnaf24@email.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("hero/Adib.png")}
                alt="Muhammad Adib Ahnaf"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
