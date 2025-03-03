import { useState } from "react";
import { Link } from "react-router-dom";


const JobListing = ({ job }) => {
  const [showFullDes, setShowFullDes] = useState(false);

  let description = job.description;

  if (!showFullDes) {
    description
    // description = description.substring(0, 90) + '...'
  }   
  return (
    <div className="bg-white rounded shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
          <div className="mb-5">{description}</div>
          <button className="text-indigo-500 mb-5 hover:text-indigo-600" onClick={()=>setShowFullDes(!showFullDes)}>
            {showFullDes ? "Less" : "More"}
          </button>
          <h3 className="text-blue-900 mb-2">{job.salary} / Year</h3>
          <div className="border border-gray-100 mb-5"></div>
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">{job.location}</div>
            <Link
              to={`/jobs/${job.id}`}
              className="h-[36px] bg-blue-900 hover:bg-blue-500 text-white px-2 py-2 rounded text-center text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
