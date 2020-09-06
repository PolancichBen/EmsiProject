import React, { useState, useEffect } from 'react';
import styles from './lowerCard.css'

const LowerCard = ({ programCounts }) => {

  useEffect(() => {
    sortDegrees(programCounts);
  }, [])

  const [undergrad, setUndergrad] = useState('');
  const [undergradUsed, setUndergradUsed] = useState(false);
  const [associates, setAssociates] = useState('');
  const [associatesUsed, setAssociatesUsed] = useState(false);
  const [bachelors, setBachelors] = useState('');
  const [bachelorsUsed, setBachelorsUsed] = useState(false);
  const [postBaccalaureate, setPostBaccalaureate] = useState('');
  const [postBaccalaureateUsed, setPostBaccalaureateUsed] = useState(false);
  const [masters, setMasters] = useState('');
  const [mastersUsed, setMastersUsed] = useState(false);
  const [doctoral, setDoctoral] = useState('');
  const [doctoralUsed, setDoctoralUsed] = useState(false);
  const [firstProfessional, setFirstProfessional] = useState('');
  const [firstProfessionalUsed, setFirstProfessionalUsed] = useState(false);
  const [graduateProfessional, setGraduateProfessional] = useState('');
  const [graduateProfessionalUsed, setGraduateProfessionalUsed] = useState(false);

  const sortDegrees = (arrOfPrograms) => {
    let undergradCount = 0;
    let associatesCount = 0;
    let bachelorsCount = 0;
    let postBaccalaureateCount = 0;
    let mastersCount = 0;
    let doctoralCount = 0;
    let firstProfessionalCount = 0;
    let graduateProfessionalCount = 0;

    for (var i = 0; i < arrOfPrograms.length; i++) {
      let currentCredential = arrOfPrograms[i].credential;
      if (currentCredential.level === 1 || currentCredential.title === "Undergraduate Certificate or Diploma") {
        undergradCount++;
        setUndergradUsed(true);
      }
      if (currentCredential.level === 2 || currentCredential.title === "Associate's Degree") {
        associatesCount++;
        setAssociatesUsed(true);
      }
      if (currentCredential.level === 3 || currentCredential.title === "Bachelors Degree") {
        bachelorsCount++;
        setBachelorsUsed(true);
      }
      if (currentCredential.level === 4 || currentCredential.title === "Post-baccalaureate Certificate") {
        postBaccalaureateCount++;
        setPostBaccalaureateUsed(true);
      }
      if (currentCredential.level === 5 || currentCredential.title === "Master's Degree") {
        mastersCount++;
        setMastersUsed(true);
      }
      if (currentCredential.level === 6 || currentCredential.title === "Doctoral Degree") {
        doctoralCount++;
        setDoctoralUsed(true);
      }
      if (currentCredential.level === 7 || currentCredential.title === "First Professional Degree") {
        firstProfessionalCount++;
        setFirstProfessionalUsed(true);
      }
      if (currentCredential.level === 8 || currentCredential.title === "Graduate/Professional Certificate") {
        graduateProfessionalCount++;
        setGraduateProfessionalUsed(true);
      }
    }
    setUndergrad(undergradCount);
    setAssociates(associatesCount);
    setBachelors(bachelorsCount);
    setMasters(mastersCount);
    setDoctoral(doctoralCount);
    setFirstProfessional(firstProfessionalCount);
    setGraduateProfessional(graduateProfessionalCount);
    setPostBaccalaureate(postBaccalaureateCount);
  };

  return (
    <div className={styles.lowerCardContainer}>
      <div className={styles.programCountsLabel}>
        {/* Avaliable Program Counts: */}
        Avaliable Program Counts:
      </div>
      <div className={styles.degreeListContainer}>
        {/* Each Degree */}
        {associatesUsed &&  <div className={styles.degreeLine}><span className={styles.degreeTitle}>Associate's Degree: </span><span className={styles.degreeCount}>{associates}</span></div>}
        {bachelorsUsed && <div className={styles.degreeLine}><span className={styles.degreeTitle}>Bachelors Degree: </span><span className={styles.degreeCount}>{bachelors}</span></div>}
        {mastersUsed && <div className={styles.degreeLine}><span className={styles.degreeTitle}>Master's Degree: </span><span className={styles.degreeCount}>{masters}</span></div>}
        {graduateProfessionalUsed && <div className={styles.degreeLine}><span className={styles.degreeTitle}>Graduate/Professional Certificate: </span><span className={styles.degreeCount}>{graduateProfessional}</span></div>}
        {doctoralUsed && <div className={styles.degreeLine}><span className={styles.degreeTitle}>Doctoral Degree: </span><span className={styles.degreeCount}>{doctoral}</span></div>}
        {firstProfessionalUsed && <div className={styles.degreeLine}><span className={styles.degreeTitle}>First Professional Degree: </span><span className={styles.degreeCount}>{firstProfessional}</span></div>}
        {undergradUsed && <div className={styles.degreeLine}><span className={styles.degreeTitle}>Undergraduate Certificate or Diploma: </span><span className={styles.degreeCount}>{undergrad}</span></div>}
        {postBaccalaureateUsed && <div className={styles.degreeLine}><span className={styles.degreeTitle}>Post-baccalaureate Certificate: </span><span className={styles.degreeCount}>{postBaccalaureate}</span></div>}
      </div>
    </div>
  )
}

export default LowerCard;