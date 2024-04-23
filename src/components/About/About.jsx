import React, { useState } from "react";
import history from "../../data/history.json";
import education from "../../data/education.json";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    
  const [showWorkExperience, setShowWorkExperience] = useState(true);

  const handleWorkExperienceClick = () => {
    setShowWorkExperience(true);
  };

  const handleEducationClick = () => {
    setShowWorkExperience(false);
  };

  const renderWorkExperience = () => {
    return (
      <ul className={styles.history}>
        {history.map((historyItem, id) => (
          <li key={id} className={styles.historyItem}>
            <img
              src={getImageUrl(historyItem.imageSrc)}
              alt={`${historyItem.organisation} Logo`}
            />
            <div className={styles.historyItemDetails}>
            <h3>{`${historyItem.role},`}<br />{`${historyItem.organisation}`}</h3>
              <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
              <ul>
                <br/>
              <p>{historyItem.experiences.map((experience, id) => (
                  <li key={id}>{experience}</li>
                ))}
              </p>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const renderEducation = () => {
    return (
      <ul className={styles.history}>
        {education.map((educationItem, id) => (
          <li key={id} className={styles.historyItem}>
            <img
              src={getImageUrl(educationItem.imageSrc)}
              alt={`${educationItem.university} Logo`}
            />
            <div className={styles.historyItemDetails}>
            <h3>{`${educationItem.course},`}<br />{`${educationItem.university}`}</h3>
              <p>{`${educationItem.startDate} - ${educationItem.endDate}`}</p>
              <p>CGPA: {educationItem.CGPA}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/Infineon.jpg")}
          alt="Me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem1}>
            <div className={styles.aboutItemText}>
              <p className={`${styles.justifyText}`}>
                A trilingual recent graduate in Mechatronic Engineering with
                valuable internship experience and a Bachelor’s degree, aiming
                to contribute effectively to your team. Collaborating with
                Universiti Malaysia Pahang and HsKA University of Applied
                Sciences, Germany, I'm eager for hands-on industry experience
                to advance my career goals. Passionate about supporting a
                greener future through Sustainable Development Goals (SDGs) and
                the National Energy Transition Roadmap (NETR).
              </p>
            </div>
          </li>

          <li className={styles.aboutItem2}>
            <div className={styles.aboutItemText}>
            <div className={styles.toggleButtons}>
              <h3 onClick={handleWorkExperienceClick}>Work Experience</h3>
              <h3>|</h3>
              <h3 onClick={handleEducationClick}>Education</h3>
              </div>
              <div className={styles.details}>
              {showWorkExperience ? renderWorkExperience() : renderEducation()}
              </div>
            </div>
          </li>
        </ul>
      </div>
      
    </section>
  );
};
