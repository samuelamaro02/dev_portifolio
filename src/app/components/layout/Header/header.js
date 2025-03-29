"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; 
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
                    <Image
                        src="/images/logo-black.webp"
                        alt="Logo"
                        layout="intrinsic"
                        width={132}
                        height={40}
                    />
                </div>
                <input
                    type="checkbox"
                    id="menu-toggle"
                    checked={menuOpen}
                    onChange={() => setMenuOpen(!menuOpen)}
                    className={styles.checkbox}
                />
                <label htmlFor="menu-toggle" className={styles.menuButton}>
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                    <span className={styles.hamburger}></span>
                </label>

                <nav ref={navRef} className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
                    <button onClick={() => setMenuOpen(false)} className={styles.closeButton}>✖</button>
                    <a onClick={() => scrollToSection("heroSection")} className={styles.navItem}>Home</a>
                    <a onClick={() => scrollToSection("aboutSection")} className={styles.navItem}>Sobre</a>
                    <a onClick={() => scrollToSection("skillsSection")} className={styles.navItem}>Skills</a>
                    <a onClick={() => scrollToSection("experienceSection")} className={styles.navItem}>Experiência</a>
                    <a onClick={() => scrollToSection("projectsSection")} className={styles.navItem}>Projetos</a>
                    <a onClick={() => scrollToSection("testimonialSection")} className={styles.navItem}>Depoimentos</a>
                    <a onClick={() => scrollToSection("contactSection")} className={styles.navItem}>Contato</a>
                </nav>
            </div>
        </header>
    );
}
