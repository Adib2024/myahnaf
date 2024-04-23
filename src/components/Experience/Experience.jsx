import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/certs.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Skills and Certificates</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
                
                <ul className={styles.history}>
                    {history.map((certsItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img
                                    src={getImageUrl(certsItem.imageSrc)}
                                    alt={`${certsItem.organisation} Logo`}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>
                                        {`${certsItem.name}`} {/* Role */}
                                        <br /> {/* Line break */}
                                        {`${certsItem.organisation}`} {/* Organization */}
                                    </h3>
                                    <p>{`${certsItem.issueDate}`}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>

            </div>
        </section>
    );
};
