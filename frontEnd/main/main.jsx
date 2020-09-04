import React, { useState, useEffect } from 'react';
import Axios from 'axios';
const {deptOfEducationKey} = require('../../config')


const Main = () => {
  const [loading,setLoading] = useState(false);
  const [apiSchoolData, setApiSchoolData] = useState([])

  useEffect(()=>{
    getSchoolinformation();
  },[])

  const getSchoolinformation = () => {
    Axios.get(`https://api.data.gov/ed/collegescorecard/v1/schools.json?per_page=100&_fields=school.name,school.school_url,id,school.city,school.state,latest.student.size,latest.admissions.admission_rate.overall,latest.programs.cip_4_digit.credential&api_key=${deptOfEducationKey}`)
      .then((res) => {
        setApiSchoolData(res.data.results)
      })
      .catch((err) => {
        console.log('Error with School Data Request',err)
      })
  }


  return (
    <div>
      Hooked Up
    </div>
  )
}

export default Main;