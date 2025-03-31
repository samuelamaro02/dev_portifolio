"use client";
import Image from 'next/image';
import styles from "./sectionAbout.module.css";

export default function SectionAbout() { 
    return (
        <div id="aboutSection" className={styles.container}>
            <div className={styles.containerAbout}>
                <div className={styles.imageAbout}>
                    <Image 
                        src="/images/about.webp"  
                        alt="About logo"
                        layout="intrinsic"
                        width={525}
                        height={572}
                    />
                </div>
                <div className={styles.aboutDescription}>
                    <h1>Sobre mim</h1>
                    <p>Quando criança, ganhei um <b>notebook</b> em um concurso de poesia. Eu estava feliz pelo prêmio, claro, mas a verdadeira mudança veio depois: aquela máquina se tornou minha <b>porta de entrada</b> para o mundo da tecnologia. Passei horas explorando, desmontando e aprendendo, como se cada clique fosse uma <b>nova descoberta</b>.</p>
                    <br />
                    <p>Na faculdade, escolhi <b>Comunicação em Mídias Digitais</b> porque queria entender a fundo o impacto da tecnologia na criação de conteúdo. Aprendi sobre <b>edição de vídeo</b>, <b>fotografia</b>, <b>design</b> e <b>storytelling</b>, mas nada me empolgava tanto quanto a <b>web</b>. Criar sites e aplicativos, dar vida a ideias no navegador – aquilo, sim, parecia um <b>superpoder</b>.</p>
                    <br />
                    <p>Não demorei a mergulhar de vez na área, primeiro como <b>freelancer</b> e depois cofundando uma <b>empresa</b> ao lado do meu sócio, <b>Arthur</b>. Desde então, venho transformando projetos em <b>experiências digitais</b> funcionais e bem planejadas. Afinal, para mim, programar nunca foi só sobre <b>código</b>, e sim sobre construir algo que realmente <b>faça sentido</b> para as pessoas.</p>
                </div>
            </div>
        </div>
    );
}
