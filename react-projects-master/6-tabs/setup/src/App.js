import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState()
  const [value, setValue] = useState([0])

  const fetchJobs = async () =>{
    const response = await fetch(url);
    const newJobws = await response.json();
    setJobs(newJobws);// il faut appeler setJobs avant le setLoading
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, [])


  if(loading){
    return(
      <section className="loading">
        <h1>Loading..</h1>
      </section>
    )
  }

  // toujours utiliser jobs array after if(loading)
  const {company, dates, duties, title} = jobs[value];

  return(
    <section className="section">

      {/* btn container */}
      <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
      </div>


      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          
            {jobs.map((item, index) => {
              return(
              <button  
              key={item.id}
              onClick={()=>setValue(index)}
              className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>)
            })}
        </div>

        {/* jobs info */}
        <article className="MyArticle">
          <h3>{title}</h3>
          <h4>{company}</h4>
          {duties.map((duty, index) => {
            return(
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
             
              </div>
            )
          })}
        </article>
  
      </div>
    </section>
  )
}

export default App
