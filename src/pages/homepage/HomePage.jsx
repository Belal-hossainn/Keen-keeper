import AllFriends from "../../components/homepage/AllFriends"
import Hero from "../../components/homepage/Hero"
import Info from "../../components/homepage/Info"


const HomePage = () => {

  return (
    <div className=' container md:max-w-5xl mx-auto  py-8'>
        <Hero />
        <Info />
        <AllFriends />
    </div>
  )
}

export default HomePage