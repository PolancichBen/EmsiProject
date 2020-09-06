import React, { useState } from 'react';
import UpperCard from './schoolSubComponents/upperCard.jsx';
import LowerCard from './schoolSubComponents/lowerCard.jsx';
import styles from './schools.css'

const Schools = (props) => {
  return (
    <div className={styles.cardContainer}>
      <UpperCard
        schoolName={props.currSchool["school.name"]}
        schoolCity={props.currSchool["school.city"]}
        schoolState={props.currSchool["school.state"]}
        studentSize={props.currSchool["latest.student.size"]}
        admissionRate={props.currSchool["latest.admissions.admission_rate.overall"]}
      />
      <LowerCard
        programCounts={props.currSchool["latest.programs.cip_4_digit"]}
      />
    </div>
  )
}

export default Schools;