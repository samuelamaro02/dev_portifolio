import Image from 'next/image';
import styles from "./sectionProjects.module.css";

export default function SectionProjetcs(){
    return (
        <div className={styles.container}>
            <div className={styles.containerProjects}>
                <h1>My Projects</h1>
                <div className={styles.gridProjects}>
                    <div className={styles.cardProjects}>
                            <Image 
                                src="/images/image-pro-01.webp"  
                                alt="Portifólio"
                                layout="intrinsic"
                                width={530}
                                height={397.73}
                            />
                            <div className={styles.projectsDescription}>
                                <h1>01</h1>
                                <h2>Crypto Screener Application</h2>
                                <p>I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                            </div>
                    </div>
                    <div className={styles.cardProjects}>
                            <Image 
                                src="/images/image-pro-02.webp"  
                                alt="Portifólio"
                                layout="intrinsic"
                                width={530}
                                height={397.73}
                            />
                            <div className={styles.projectsDescription}>
                                <h1>02</h1>
                                <h2>Euphoria - Ecommerce (Apparels) Website Template</h2>
                                <p>I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                                when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                            </div>
                    </div>
                    <div className={styles.cardProjects}>
                            <Image 
                                src="/images/image-pro-03.webp"  
                                alt="Portifólio"
                                layout="intrinsic"
                                width={530}
                                height={397.73}
                            />
                            <div className={styles.projectsDescription}>
                                <h1>03</h1>
                                <h2>Blog Website Template</h2>
                                <p>I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}