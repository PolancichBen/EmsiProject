import React, { useState } from 'react';
import styles from './upperCard.css';

const UpperCard = ({ schoolName, schoolCity, schoolState, studentSize, admissionRate }) => {

  return (
    <div className={styles.upperCardContainer}>
      <div className={styles.image}>
        <img src="./university.svg"></img>
      </div>
      <div className={styles.namingContainer}>
        <div className={styles.schoolName}>{schoolName}</div>
        <div className={styles.cityStateContainer}>
          <div className={styles.cityState}>{schoolCity + ', ' + schoolState}</div>
        </div>
        <div className={styles.studentContainer}>
          <div className={styles.schoolContainer}>
            <span className={styles.studentLabel}>School Size:</span>
            <span className={styles.studentCount}>{studentSize}</span>
          </div>
          <div className={styles.admissionContainer}>
            <span className={styles.admissionLabel}>Admission Rate:</span>
            <span className={styles.admissionCount}>{admissionRate * 10}</span>
            <div id="admissionProgressContainer">
              <div id="admissionProgress"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default UpperCard;