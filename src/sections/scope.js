import React from "react";
import styles from "../styles/scope.module.css";

function ScopeOfEvent({ scopeTitleRef, scopeSubtitleRef, cardsContainerRef,scopeSectionRef }) {
  return (
    <section className={styles.scopeSection} id="scope" ref={scopeSectionRef}>
      <div className={styles.scopeContainer}>
        <h2 className={styles.scopeTitle} ref={scopeTitleRef}>
          Scope Of Event
        </h2>
        <p className={styles.scopeSubtitle} ref={scopeSubtitleRef}>
          Connecting innovation, talent, and expertise across Kerala
        </p>

        <div className={styles.cardsContainer} ref={cardsContainerRef}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <span className={styles.cardNumber}>1000+</span>
            </div>
            <h3 className={styles.cardTitle}>Attendees</h3>
            <p className={styles.cardDescription}>
              From colleges across Kerala, bringing diverse perspectives and
              talents
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <span className={styles.cardNumber}>30+</span>
            </div>
            <h3 className={styles.cardTitle}>Startups</h3>
            <p className={styles.cardDescription}>
              Showcasing innovative solutions and cutting-edge technologies
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <span className={styles.cardNumber}>50+</span>
            </div>
            <h3 className={styles.cardTitle}>Mentors</h3>
            <p className={styles.cardDescription}>
              Industry experts providing guidance and valuable insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScopeOfEvent;
