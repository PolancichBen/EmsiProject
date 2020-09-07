import React, { useState, useEffect } from 'react';
import styles from './upperCard.css';

const UpperCard = ({ schoolName, schoolCity, schoolState, studentSize, admissionRate }) => {

  return (
    <div className={styles.upperCardContainer}>
      <div className={styles.universityImage}>
        <img src="./university.svg"></img>
      </div>
      <div className={styles.namingContainer}>
        <div className={styles.schoolName}>{schoolName}</div>
        <div className={styles.cityStateContainer}>
          <div className={styles.cityState}>{schoolCity + ', ' + schoolState}</div>
        </div>
        <div className={styles.studentContainer}>
          <div className={styles.schoolContainer}>
            <span className={styles.studentLabel}>Student Size:</span>
            <span className={styles.studentCount}>{studentSize}</span>
          </div>
          <div className={styles.admissionContainer}>
            <span className={styles.admissionLabel}>Admission Rate:</span>
            <span className={styles.admissionProgressMainContainer}>
              <span className={styles.admissionCount}>{Math.round(admissionRate * 100)}%</span>
              <progress className={styles.progressBar} max="100" value={Math.round(admissionRate * 100)}/>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default UpperCard;