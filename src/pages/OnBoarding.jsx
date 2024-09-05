import { useUser } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import {BarLoader} from 'react-spinners'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
const OnBoarding = () => {
  const {user, isLoaded} = useUser()
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(user?.unsafeMetadata?.role){
      return navigate(user?.unsafeMetadata?.role==='recruiter'?'/post-jobs':'/jobs')
    }
  }, [user])

  
  if(!isLoaded){
    return <BarLoader className='mb-4 ' width={"100%"} color='#36d7b7'></BarLoader>
  }


  const handleRoleSelection = async (role) => {
    await user.update({
      unsafeMetadata: {
        role
      },
    }).then(()=>{
      navigate(role==='recruiter'?'/post-jobs':'/jobs')
    }).catch((err)=>{
      console.error("Error updating the role: ", err);
    })
  }
  
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <h2 className="gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter">
        I am a...
      </h2>
      <div className="mt-16 grid grid-cols-2 gap-4 w-full md:px-40">
        <Button
          variant="blue"
          className="h-36 text-2xl"
          onClick={() => handleRoleSelection("candidate")}
        >
          Candidate
        </Button>
        <Button
          variant="destructive"
          className="h-36 text-2xl"
          onClick={() => handleRoleSelection("recruiter")}
        >
          Recruiter
        </Button>
      </div>
    </div>
  );
}

export default OnBoarding
