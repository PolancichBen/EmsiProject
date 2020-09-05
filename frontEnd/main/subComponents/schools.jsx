import React, { useState } from 'react';
import UpperCard from './schoolSubComponents/upperCard.jsx';
import LowerCard from './schoolSubComponents/lowerCard.jsx';

const Schools = (props) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default Schools;