import Image from 'next/image';
import styles from "./footer.module.css"; 

export default function Footer (){
    return (
        <footer className={styles.container}>
            <div className={styles.containerFooter}>
                <div id={styles.logo}>
                    <Image
                        src="/images/logo.webp"
                        alt="logo"
                        layout="intrinsic"
                        width={140}
                        height={40}
                    />
                </div>
                <div id={styles.copyright}>
                    <h6>@ 2019-2023 Personal</h6>
                    <h6>Made In Figma</h6>
                </div>
            </div>
        </footer>
    )

}