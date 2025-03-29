"use client";
import Image from "next/image";
import styles from "./sectionSkills.module.css"; 

export default function SectionSkills (){ 
    return (
        <>
        <div id="skillsSection" className={styles.container}>
         <div className={styles.containerSkills}>
            <h1>My Skills</h1>
                <div className={styles.gridSkills}>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/icon_javascript.svg"
                         alt="icon-java"
                         width={56}
                         height={56}
                        />
                        <h5>JavaScript</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/icon_react.svg"
                         alt="icon-java"
                         width={56}
                         height={56}
                        />
                        <h5>React</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/icon_nextjs.svg"
                         alt="icon-java"
                         width={56}
                         height={56}
                        />
                        <h5>Next.Js</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/icon_typescript.svg"
                         alt="icon-java"
                         width={56}
                         height={56}
                        />
                        <h5>Next.Js</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/icon_tailwind.svg"
                         alt="icon-java"
                         width={56}
                         height={56}
                        />
                        <h5>Tailwind</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/icon_javascript.svg"
                         alt="icon-java"
                         width={56}
                         height={56}
                        />
                        <h5>JavaScript</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/icon_react.svg"
                         alt="icon-java"
                         width={56}
                         height={56}
                        />
                        <h5>React</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/icon_nextjs.svg"
                         alt="icon-java"
                         width={56}
                         height={56}
                        />
                        <h5>Next.Js</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/icon_typescript.svg"
                         alt="icon-java"
                         width={56}
                         height={56}
                        />
                        <h5>Next.Js</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/icon_tailwind.svg"
                         alt="icon-java"
                         width={56}
                         height={56}
                        />
                        <h5>Tailwind</h5>
                    </div>
            </div>
         </div>
        </div>
        </>
    )

}


