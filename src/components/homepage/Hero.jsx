import { FaPlus } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero bg-white ">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-3xl md:text-5xl font-bold text-[#1F2937]">Friends to keep close in your life</h1>
      <p className="py-6 text-[#64748B]">
        Your personal self of meaningful connections. Browse, tend and nurture the <br />relationships that matter most. 
      </p>
      <button className="btn bg-[#244D3F] text-white"><FaPlus /> Add Friend</button>
    </div>
  </div>
</div>
  );
}
export default Hero;