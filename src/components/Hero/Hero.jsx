import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Adib</h1>
                <p className={styles.description}>
                    Cloud and DevOps Engineer
                </p>
                <p className={styles.subtitle}>
                    Specializing in cloud infrastructure, automation, and system deployment across AWS, Azure, and GCP.
                    Certified in Azure Administration, Google Cloud Security, and AWS re/Start Graduate.
                </p>
                <div className={styles.buttonContainer}>
                    <a href="mailto:adibahnaf24@email.com" className={styles.contactBtn}>
                        Contact Me
                    </a>
                    <a href="#projects" className={styles.projectsBtn}>
                        View Projects
                    </a>
                </div>
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