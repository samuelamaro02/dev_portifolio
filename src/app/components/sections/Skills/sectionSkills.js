"use client";
import Image from "next/image";
import styles from "./sectionSkills.module.css"; 

export default function SectionSkills (){ 
    return (
        <>
        <div id="skillsSection" className={styles.container}>
         <div className={styles.containerSkills}>
            <h1>Tecnologias</h1>
                <div className={styles.gridSkills}>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/html.svg"
                         alt="icon-html"
                         layout="intrinsic"
                         width={56}
                         height={56}
                        />
                        <h5>HTML</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/css.svg"
                         alt="icon-css"
                         layout="intrinsic"
                         width={56}
                         height={56}
                        />
                        <h5>CSS</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/icon_javascript.svg"
                         alt="icon-javascript"
                         width={56}
                         height={56}
                        />
                        <h5>JavaScript</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/icon_react.svg"
                         alt="icon-react"
                         width={56}
                         height={56}
                        />
                        <h5>React</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/icon_nextjs.svg"
                         alt="icon-next"
                         layout="intrinsic"
                         width={56}
                         height={56}
                        />
                        <h5>Next.Js</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/figma.svg"
                         alt="icon-figma"
                         layout="intrinsic"
                         width={30}
                         height={56}
                        />
                        <h5>Figma</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/git.svg"
                         alt="icon-git"
                         layout="intrinsic"
                         width={56}
                         height={56}
                        />
                        <h5>Git</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/nodejs.svg"
                         alt="icon-nodejs"
                         layout="intrinsic"
                         width={56}
                         height={56}
                        />
                        <h5>Node.js</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/sqlite.svg"
                         alt="icon-sqlite"
                         layout="intrinsic"
                         width={56}
                         height={56}
                        />
                        <h5>SQLite</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <Image
                         src="/icons/supabase.svg"
                         alt="icon-sqlite"
                         layout="intrinsic"
                         width={56}
                         height={56}
                        />
                        <h5>Supabase</h5>
                    </div>
            </div>
         </div>
        </div>
        </>
    )

}


