import React, {useState} from 'react';

const UpperCard = ({schoolName, schoolCity, schoolState, studentSize, admissionRate}) => {
  return (
    <div>
      <div>
        Picture
      </div>
      <div>
        <div>{schoolName}</div>
        <div>{schoolCity + ', ' + schoolState}</div>
        <div>
        <div>
          <span>School Size:</span>
          <span>{studentSize}</span>
        </div>
        <div>
          <span>Admission Rate:</span>
          <span>{admissionRate * 10}</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default UpperCard;