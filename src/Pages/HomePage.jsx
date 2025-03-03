import React from 'react'
import HomeCards from "../Components/HomeCards";
import JobListings from "../Components/JobListings";
import Main from "../Components/Main";
import ViewAll from "../Components/ViewAll";

const HomePage = () => {
  return (
    <div>
      <Main/>
      <HomeCards/>
      <JobListings isHome={true}/>
      <ViewAll/>
    </div>
  )
}

export default HomePage