import styles from "./sectionExperience.module.css"; 

export default function sectionExperience(){
    return (
        <>
        
        <div className={styles.container}>
            <div className={styles.containerExperience}>
                <h1>My Experience</h1>
                <div className={styles.gridExperience}>
                    <div className={styles.cardExperience}>
                        <div className={styles.cardTittle}>
                            <img 
                                src="/icons/google.svg"  
                                alt=""
                            />
                            <h4>Lead Software Engineer at Google</h4>
                            <h6>Nov 2019 - Present</h6>
                        </div>
                        <div className={styles.cardDescription}><p>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p></div>
                    </div>
                    <div className={styles.cardExperience}>
                        <div className={styles.cardTittle}>
                            <img 
                                src="/icons/youtube.svg"  
                                alt=""
                            />
                            <h4>Software Engineer at Youtube</h4>
                            <h6>Jan 2017 - Oct 2019</h6>
                        </div>
                        <div className={styles.cardDescription}><p>At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.</p></div>
                    </div>
                    <div className={styles.cardExperience}>
                        <div className={styles.cardTittle}>
                            <img 
                                src="/icons/apple.svg"  
                                alt=""
                            />
                            <h4>Junior Software Engineer at Apple</h4>
                            <h6>Jan 2016 - Dec 2017</h6>
                        </div>
                        <div className={styles.cardDescription}><p>During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.</p></div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )

}