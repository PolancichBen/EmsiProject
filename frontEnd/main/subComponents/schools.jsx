import React, { useState } from 'react';
import UpperCard from './schoolSubComponents/upperCard.jsx';
import LowerCard from './schoolSubComponents/lowerCard.jsx';

const Schools = ({ school, index }) => {
  console.log(school)
  return (
    <React.Fragment>
      <UpperCard 
      schoolName={school.name} 
      schoolCity={school.city} 
      schoolState={school.school.city} 
      studentSize={school.latest.student.size} 
      admissionRate={school.latest.admissions.admission_rate.overall}
      />
      <LowerCard 
      programCounts={school.latest.programs.cip_4_digit}
      />
    </React.Fragment>
  )
}

export default Schools;