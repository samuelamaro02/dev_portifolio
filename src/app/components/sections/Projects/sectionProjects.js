"use client";
import Image from 'next/image';
import styles from "./sectionProjects.module.css";

export default function SectionProjetcs(){
    return (
        <div id="projectsSection" className={styles.container}>
            <div className={styles.containerProjects}>
                <h1>Meus projetos</h1>
                <div className={styles.gridProjects}>
                    <div className={styles.cardProjects}>
                            <Image 
                                src="/images/seustand.webp"  
                                alt="seustand"
                                layout="intrinsic"
                                width={530}
                                height={397.73}
                            />
                            <div className={styles.projectsDescription}>
                                <h1>01</h1>
                                <h2>Seu Stand</h2>
                                <p>Seu Stand é um SaaS inovador que conecta empresas a stands em eventos, facilitando a reserva e gestão de espaços. A plataforma simplifica a logística para organizadores e expositores, tornando eventos mais eficientes. Confira nossa landing page para saber mais!</p>
                            </div>
                    </div>
                    <div className={styles.cardProjects}>
                            <Image 
                                src="/images/resolve.webp"  
                                alt="resolve"
                                layout="intrinsic"
                                width={530}
                                height={397.73}
                            />
                            <div className={styles.projectsDescription}>
                                <h1>02</h1>
                                <h2>Resolve Eventos</h2>
                                <p>Resolve Eventos é uma empresa especializada na produção e gestão de eventos corporativos, oferecendo soluções completas e personalizadas. Com expertise em planejamento e execução, garantem experiências memoráveis e alinhadas aos objetivos do cliente.</p>
                            </div>
                    </div>
                    <div className={styles.cardProjects}>
                            <Image 
                                src="/images/fisica.webp"  
                                alt="fisica"
                                layout="intrinsic"
                                width={530}
                                height={397.73}
                            />
                            <div className={styles.projectsDescription}>
                                <h1>03</h1>
                                <h2>Física Arretada</h2>
                                <p>Física Arretada é o projeto do professor que descomplica a física com aulas práticas e linguagem acessível. Desenvolvi uma landing page moderna, incluindo protótipo interativo no Figma e código otimizado para performance.</p>
                            </div>
                    </div>
                    <div className={styles.cardProjects}>
                            <Image 
                                src="/images/obi.webp"  
                                alt="fisica"
                                layout="intrinsic"
                                width={530}
                                height={397.73}
                            />
                            <div className={styles.projectsDescription}>
                                <h1>04</h1>
                                <h2>Obi Revestimentos</h2>
                                <p>Obi Revestimentos produz revestimentos e tijolos rústicos com design autêntico e alta durabilidade para projetos residenciais e comerciais. Desenvolvemos uma landing page clean e visual, destacando os produtos com fotos reais e seções de orçamento simplificado. </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}