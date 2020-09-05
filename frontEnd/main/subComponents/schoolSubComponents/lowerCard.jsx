import React, { useState, useEffect } from 'react';

const LowerCard = ({ programCounts }) => {

  useEffect(()=>{
    sortDegrees(programCounts);
  },[])

  const [undergrad, setUndergrad] = useState('')
  const [associates, setAssociates] = useState('')
  const [bachelors, setBachelors] = useState('')
  const [postBaccalaureate, setPostBaccalaureate] = useState('')
  const [masters, setMasters] = useState('')
  const [doctoral, setDoctoral] = useState('')
  const [firstProfessional, setFirstProfessional] = useState('')
  const [graduateProfessional, setGraduateProfessional] = useState('')

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
      if (currentCredential.level === 1 || currentCredential.title === "Undergraduate Certificate or Diploma"){
        undergradCount++;
      }
      if (currentCredential.level === 2 || currentCredential.title === "Associate's Degree"){
        associatesCount++;
      }
      if (currentCredential.level === 3 || currentCredential.title === "Bachelors Degree"){
        bachelorsCount++;
      }
      if (currentCredential.level === 4 || currentCredential.title === "Post-baccalaureate Certificate"){
        postBaccalaureateCount++;
      }
      if (currentCredential.level === 5 || currentCredential.title === "Master's Degree"){
        mastersCount++;
      }
      if (currentCredential.level === 6 || currentCredential.title === "Doctoral Degree"){
        doctoralCount++;
      }
      if (currentCredential.level === 7 || currentCredential.title === "First Professional Degree"){
        firstProfessionalCount++;
      }
      if (currentCredential.level === 8 || currentCredential.title === "Graduate/Professional Certificate"){
        graduateProfessionalCount++;
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
    <div>
      LowerCard
    </div>
  )
}

export default LowerCard;