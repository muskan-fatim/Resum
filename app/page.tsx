'use client'
import { useState } from 'react'
import styles from './page.module.css';
import Link from 'next/link';

const Resume = () => {
  const [showSkills, setShowSkills] = useState(true);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>My Resume</h1>


      <section className={styles.section}>
        <h2 className={styles.h2}>Personal Information</h2>
        <p className={styles.p}>Name: Muskan Fatima</p>
        <p className={styles.p}>Email: mushiifatima3456@gmail.com</p>
        <p className={styles.p}>Phone: +1234567890</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Education</h2>
        <p className={styles.p}>Bachelor of Science from Degree college</p>
        <p className={styles.p}>Graduation Year: 2027</p>
      </section>


      <section className={styles.section}>
        <h2 className={styles.h2}>Skills</h2>
        <button  className ={styles.button}onClick={() => setShowSkills(!showSkills)}>
          {showSkills ? 'Hide' : 'Show'} Skills
        </button>
        {showSkills && (
          <ul className={styles.ul}>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Next.js</li>
          </ul>
        )}
        </section>
        <h2 className={styles.h2}>project</h2>
        <ul>
        <li className={styles.p}>CLI Based Node projects</li>
        <li className={styles.p}>Simple HTML Css and Javascript project</li>
        <li className={styles.p}>Next.js project</li>
        </ul>      
    </div>
  );
};

export default Resume;
