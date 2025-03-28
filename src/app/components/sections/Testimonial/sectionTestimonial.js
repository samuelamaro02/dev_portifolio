"use client";
import Image from 'next/image';
import styles from "./sectionTestimonial.module.css";

export default function sectionTestimonial (){ 
    return(
        <div id="testimonialSection" className={styles.container}>
            <div className={styles.containerTestimonial}>
                <h1> My Testimonial</h1>
                <div className={styles.gridTestimonial}>
                    <div className={styles.cardTestimonial}>
                        <Image 
                            src="/images/testimonial-01.webp"  
                            alt="Portifólio"
                            layout="intrinsic"
                            width={96}
                            height={96}
                        />
                        <p>I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
                        <h5>Evren Shah</h5>
                        <h6>Designer</h6>
                    </div>
                    <div className={styles.cardTestimonial}>
                        <Image 
                            src="/images/testimonial-02.webp"  
                            alt="Portifólio"
                            layout="intrinsic"
                            width={96}
                            height={96}
                        />
                        <p>I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
                        <h5>Flora sheen</h5>
                        <h6>Designer</h6>
                    </div>
                    <div className={styles.cardTestimonial}>
                        <Image 
                            src="/images/testimonial-01.webp"  
                            alt="Portifólio"
                            layout="intrinsic"
                            width={96}
                            height={96}
                        />
                        <p>I recently had to jump on 10+ different calls across eight different countries to find the right owner.</p>
                        <h5>Evren Shah</h5>
                        <h6>Designer</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}