import "./App.css";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import JobPage from "./Pages/JobPage";
import NotFound from "./Pages/NotFound";
import JobDetails, { jobLoader } from "./Pages/JobDetails";
import AddPage from './Pages/AddPage'
import EditJob from "./Pages/EditJob";



function App() {
  // Add New Job
  const addJob = async (newJob)=>{
    const res = await fetch('/api/jobs',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return
  }
  // Delete Jobs
  const deleteJob = async(id)=>{
    const res = await fetch(`/api/jobs/${id}`,{
      method: 'DELETE',
    })
    return
  }
  // Update Job
  const updateJobSubmit = async(job)=>{
    const res = await fetch(`/api/jobs/${job.id}`,{
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(job)
    })
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/jobs" element={<JobPage/>}/>
        <Route path="/add-job" element={<AddPage addJobSubmit={addJob}/>}/>
        <Route path="/edit-job/:id" element={<EditJob updateJobSubmit={updateJobSubmit}/>} loader={jobLoader}/>
        <Route path="/jobs/:id" element={<JobDetails deleteJob = {deleteJob}/>} loader={jobLoader}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
  )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
