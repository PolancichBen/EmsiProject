import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Header from './subComponents/header.jsx';
import Schools from './subComponents/schools.jsx';
import styles from './main.css'
const { deptOfEducationKey } = require('../../config');


const Main = () => {
  const [loading, setLoading] = useState(false);
  const [apiSchoolData, setApiSchoolData] = useState([])

  useEffect(() => {
    getSchoolinformation();
  }, [])

  const getSchoolinformation = () => {
    setLoading(true);
    Axios.get(`https://api.data.gov/ed/collegescorecard/v1/schools.json?per_page=100&_fields=school.name,school.school_url,id,school.city,school.state,latest.student.size,latest.admissions.admission_rate.overall,latest.programs.cip_4_digit.credential&api_key=${deptOfEducationKey}`)
      .then((res) => {
        setApiSchoolData(res.data.results);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error with School Data Request', err);
      })
  }

  let content;
  if (loading) {
    content =
      <div className={styles.loading}>
        Loading...
    </div>
  } else {
    content = apiSchoolData.map((currSchool, index) => (
      <Schools currSchool={currSchool} key={index} />
    ))
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <div className={styles.contentContainer}>
        {content}
      </div>
    </div>
  )
}

export default Main;