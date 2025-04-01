"use client";
import styles from "./sectionCta.module.css";
import LeadForm from '../../leadForm/LeadForm';
import { Toaster } from 'sonner';


export default function SectionCta(){
    return (
       <div id="contactSection" className={styles.container}>
            <div className={styles.containerCta}>
                <div className={styles.infoCta}>
                    <h1>Vamos conversar?</h1>
                    <p>Vamos conversar sobre como aplicar as melhores soluções para sua empresa com desenvolvimento frontend eficiente e moderno.</p>
                </div>
                <div className={styles.containerForm}>
                    <LeadForm />
                    <Toaster richColors />
                </div>
            </div>
       </div>
    )
}