import { Suspense } from "react"
import AllFriends from "../../components/homepage/AllFriends"
import Hero from "../../components/homepage/Hero"
import Info from "../../components/homepage/Info"
import {  HashLoader } from "react-spinners"
import LoadingSpinner from "../../components/ui/LoadingSpinner"


const HomePage = () => {

  return (
    <div className=' container md:max-w-5xl mx-auto  py-8'>
        <Hero />
        <Info />
        <Suspense fallback={<LoadingSpinner />}>
          <AllFriends />
        </Suspense>
    </div>
  )
}

export default HomePage