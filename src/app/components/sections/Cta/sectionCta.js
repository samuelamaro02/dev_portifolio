"use client";
import styles from "./sectionCta.module.css";

export default function SectionCta(){
    return (
       <div id="contactSection" className={styles.container}>
            <div className={styles.containerCta}>
                <div className={styles.infoCta}>
                    <h1>Let’s talk for<br></br>Something special</h1>
                    <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                    <h3>Youremail@gmail.com<br></br>1234567890</h3>

                </div>
                <div className={styles.containerForm}>
                </div>
            </div>
       </div>
    )
}