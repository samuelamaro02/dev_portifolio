"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import Image from 'next/image';
import styles from "./footer.module.css";


export default function Footer() {

    const [menuOpen] = useState(false);
      const router = useRouter(); 
  
      const scrollToSection = (sectionId) => {
          const section = document.getElementById(sectionId);
  
          if (section) {
              window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
          } else {
              router.push(`/#${sectionId}`);
          }
      };

  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.infoFooter}>
          <div className={styles.logoFooter}>
            <a onClick={() => scrollToSection("heroSection")} className={styles.navItem}> 
              <Image
                src="/icons/logo.svg"
                alt="logo-black"
                layout="intrinsic"
                width={132}
                height={40}
              />
            </a>
            <p>Front-end é minha linguagem, mas a criatividade é meu framework.</p>
          </div>
          <div className={styles.menuFooter}>
                <h6>Explore</h6>
                <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
                    <a onClick={() => scrollToSection("heroSection")} className={styles.navItem}>Home</a>
                    <a onClick={() => scrollToSection("aboutSection")} className={styles.navItem}>Sobre</a>
                    <a onClick={() => scrollToSection("skillsSection")} className={styles.navItem}>Skills</a>
                    <a onClick={() => scrollToSection("experienceSection")} className={styles.navItem}>Experiência</a>
                    <a onClick={() => scrollToSection("projectsSection")} className={styles.navItem}>Projetos</a>
                    <a onClick={() => scrollToSection("testimonialSection")} className={styles.navItem}>Depoimentos</a>
                    <a onClick={() => scrollToSection("contactSection")} className={styles.navItem}>Contato</a>
                </nav>
          </div>
          <div className={styles.socialFooter}>
            <h6>Redes Sociais</h6>
            <div className={styles.socialIcons}>
              <a href='https://www.behance.net/samuelamaro4' target='blank'>
                <Image
                  src="/icons/behance.svg"
                  alt="icon-behance"
                  width={30}
                  height={30}
                />
              </a>
              <a href='https://www.linkedin.com/in/samuel-amaro-230678186/' target='blank'>
               <Image
                src="/icons/linkedin.svg"
                alt="icon-linkedin"
                width={30}
                height={30}
              />
              </a>
              <a href='https://github.com/samuelamaro02' target='blank'>
               <Image
                src="/icons/github.svg"
                alt="icon-github"
                width={30}
                height={30}
              />
              </a>
              <a href='https://www.instagram.com/osamuelamaro/' target='blank'>
               <Image
                src="/icons/instagram.svg"
                alt="icon-instagram"
                width={30}
                height={30}
              />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerAnimation}>
        <div className={styles.animationBackground}>
            <div className={styles.animationFusca}></div>
            <div className={styles.animationBike}></div>
        </div>
      </div>

    </footer>
  );
}
