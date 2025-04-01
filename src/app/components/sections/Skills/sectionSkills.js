"use client";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiSqlite } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
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
                        <FaHtml5 className={styles.iconSkills} />
                        <h5>HTML</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <FaCss3Alt className={styles.iconSkills} />
                        <h5>CSS</h5>
                    </div>
                    <div className={styles.cardSkills}>
                         <IoLogoJavascript className={styles.iconSkills} />
                        <h5>JavaScript</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <FaReact className={styles.iconSkills}  />
                        <h5>React</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <RiNextjsFill className={styles.iconSkills} />
                        <h5>Next.Js</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <FaFigma className={styles.iconSkills} />
                        <h5>Figma</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <FaGitAlt className={styles.iconSkills} />
                        <h5>Git</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <FaNodeJs className={styles.iconSkills} />
                        <h5>Node.js</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <SiSqlite className={styles.iconSkills} />
                        <h5>SQLite</h5>
                    </div>
                    <div className={styles.cardSkills}>
                        <RiSupabaseFill className={styles.iconSkills} />
                        <h5>Supabase</h5>
                    </div>
            </div>
         </div>
        </div>
        </>
    )

}


