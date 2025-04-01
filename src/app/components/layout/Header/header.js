"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; 
import { FaBehance } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter(); 
    const navRef = useRef(null); 

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
        } else {
            router.push(`/#${sectionId}`);
        }
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.containerHeader}>
                <div className={styles.logo}>
                    <a onClick={() => scrollToSection("heroSection")} className={styles.headerLogo}>
                        <Image
                            src="/icons/logo.svg"
                            alt="Logo"
                            layout="intrinsic"
                            width={132}
                            height={40}
                        />
                    </a>
                </div>
                <input
                    type="checkbox"
                    id="menu-toggle"
                    checked={menuOpen}
                    onChange={() => setMenuOpen(!menuOpen)}
                    className={styles.checkbox}
                />
                <label htmlFor="menu-toggle" className={styles.menuButton}>
                    <CiMenuFries className={styles.iconMenu}/>
                </label>
                <nav ref={navRef} className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
                    <div onClick={() => setMenuOpen(false)} className={styles.closeButton}>
                        <IoCloseOutline className={styles.iconClose}/>
                    </div>
                    <Image
                        src="/icons/logo.svg"
                        alt="Logo"
                        layout="intrinsic"
                        width={132}
                        height={40}
                    />
                    <a onClick={() => scrollToSection("heroSection")} className={styles.navItem}>Home</a>
                    <a onClick={() => scrollToSection("aboutSection")} className={styles.navItem}>Sobre</a>
                    <a onClick={() => scrollToSection("skillsSection")} className={styles.navItem}>Skills</a>
                    <a onClick={() => scrollToSection("experienceSection")} className={styles.navItem}>Experiência</a>
                    <a onClick={() => scrollToSection("projectsSection")} className={styles.navItem}>Projetos</a>
                    <a onClick={() => scrollToSection("testimonialSection")} className={styles.navItem}>Depoimentos</a>
                    <a onClick={() => scrollToSection("contactSection")} className={styles.navItem}>Contato</a>
                    <div className={styles.socialMenu}>
                        <div className={styles.footerIcons}>
                            <a href='https://www.behance.net/samuelamaro4' target='blank'>
                                <FaBehance className={styles.socialIcons}/>
                            </a>
                            <a href='https://www.linkedin.com/in/samuel-amaro-230678186/' target='blank'>
                                <FaLinkedin className={styles.socialIcons}/>
                            </a>
                            <a href='https://github.com/samuelamaro02' target='blank'>
                                <FaGithub className={styles.socialIcons}/>
                            </a>
                            <a href='https://www.instagram.com/osamuelamaro/' target='blank'>
                                <FaInstagram className={styles.socialIcons}/>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
