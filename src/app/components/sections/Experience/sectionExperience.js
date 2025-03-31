"use client";
import Image from 'next/image';
import styles from "./sectionExperience.module.css"; 

export default function SectionExperience() {
    return (
        <div id="experienceSection" className={styles.container}>
            <div className={styles.containerExperience}>
                <h1>Minha jornada</h1>
                <div className={styles.gridExperience}>
                    <div className={styles.cardExperience}>
                        <div className={styles.cardTittle}>
                            <Image 
                                src="/icons/ufpb.svg"  
                                alt="ufpb"
                                width={70}
                                height={50}
                            />
                            <h4>Comunicação em Mídias Digitais</h4>
                            <h6>Fev 2021 - Dez 2024</h6>
                        </div>
                        <div className={styles.cardDescription}>
                            <p>Durante meu curso em Comunicação em Mídias Digitais, mergulhei profundamente no universo da criação estratégica para plataformas online, com um forte foco em desenvolvimento web. Aprendi a dominar linguagens como HTML, CSS e JavaScript, além de explorar frameworks modernos e práticas de design responsivo e UX/UI para construir sites intuitivos e visualmente impactantes.</p>
                        </div>
                    </div>

                    <div className={styles.cardExperience}>
                        <div className={styles.cardTittle}>
                            <Image 
                                src="/icons/freelancer.svg"  
                                alt="freelancer"
                                width={70}
                                height={50}
                            />
                            <h4>Dev Freelancer</h4>
                            <h6>Jan 2020 - Dez 2021</h6>
                        </div>
                        <div className={styles.cardDescription}>
                            <p>Atuei como desenvolvedor web freelancer, criando sites institucionais, blogs, e-commerces e landing pages com foco em experiência do usuário e performance. Gerenciei projetos do início ao fim: desde o entendimento das necessidades do cliente até a entrega, passando por prototipagem (Figma/Adobe XD), codificação (HTML, CSS, JavaScript, React, Node.js) e integração de APIs. </p>
                        </div>
                    </div>

                    <div className={styles.cardExperience}>
                        <div className={styles.cardTittle}>
                            <Image 
                                src="/icons/bump.svg"  
                                alt="bump"
                                width={70}
                                height={50}
                            />
                            <h4>Co-founder Bump Mídia</h4>
                            <h6>Jan 2022 - Atualmente</h6>
                        </div>
                        <div className={styles.cardDescription}>
                            <p>Junto ao meu sócio Arthur Julius, co-fundei a Bump Mídia, uma agência de marketing focada em soluções digitais. Na empresa, fui responsável pela gestão operacional e pelo setor de tecnologia, liderando a criação e implementação de estratégias técnicas para clientes. Desenvolvi e otimizei processos internos, gerei equipes e garanti que todos os projetos web — desde sites institucionais até plataformas personalizadas — alinhassem inovação, performance e usabilidade.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
