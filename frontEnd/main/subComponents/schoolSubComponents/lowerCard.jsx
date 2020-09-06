import React, { useState, useEffect } from 'react';

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
    <div>
      <div>
        {/* Avaliable Program Counts: */}
        Avaliable Program Counts:
      </div>
      <div>
        {/* Each Degree */}
        {associatesUsed &&  <span>Associate's Degree: <span>{associates}</span></span>}
        {bachelorsUsed && <span>Bachelors Degree: <span>{bachelors}</span></span>}
        {mastersUsed && <span>Master's Degree: <span>{masters}</span></span>}
        {graduateProfessionalUsed && <span>Graduate/Professional Certificate: <span>{graduateProfessional}</span></span>}
        {doctoralUsed && <span>Doctoral Degree: <span>{doctoral}</span></span>}
        {firstProfessionalUsed && <span>First Professional Degree: <span>{firstProfessional}</span></span>}
        {undergradUsed && <span>Undergraduate Certificate or Diploma: <span>{undergrad}</span></span>}
        {postBaccalaureateUsed && <span>Post-baccalaureate Certificate: <span>{postBaccalaureate}</span></span>}
      </div>
    </div>
  )
}

export default LowerCard;