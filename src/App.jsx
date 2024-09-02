import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/LandingPage";
import OnBoarding from "./pages/OnBoarding";
import JobPage from "./pages/JobPage";
import JobListing from "./pages/JobListing";
import PostJob from "./pages/PostJob";
import SavedJobs from "./pages/SavedJobs";
import MyJobs from "./pages/MyJobs";

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children:[
      {
        path:'/',
        element: <LandingPage/>
      },
      {
        path:'/onboarding',
        element: <OnBoarding/>
      },
      {
        path:'/jobs',
        element: <JobListing/>
      },
      {
        path:'/job/:id',
        element: <JobPage/>
      },
      {
        path:'/post-job',
        element: <PostJob/>
      },
      {
        path:'/saved-job',
        element: <SavedJobs/>
      },
      {
        path:'/my-jobs',
        element: <MyJobs/>
      },
      {
        path:'/',
        element: <LandingPage/>
      },
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
