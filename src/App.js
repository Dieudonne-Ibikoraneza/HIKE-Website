import './App.css'
import "./components/Fonts.css"
import MountainSnow from "./images/pxfuel.jpg"
import { AiOutlineUser } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"

function App() {
  return (
  <>
    <div>
      <img src={MountainSnow} alt="Mountain Snow" className="max-h-screen w-full absolute top-0 opacity-90"/>
      <p className="text-3xl font-normal leading-normal absolute text-[#FEE] not-italic pt-[22px] pl-[40px]" style={{ fontFamily: "Zen Dots"}}>MNTN</p>
      <ul className='list-none flex left-[35%] absolute py-[30px]' style={{ fontFamily: "Inter"}}>
        <li className=''>Home</li>
        <li className='pl-[47px] relative'>Equipment</li>
        <li className='pl-[47px] relative'>About Us</li>
        <li className='pl-[47px] relative'>Blog</li>
      </ul>
      <div className='float-right right-[102px] absolute flex py-[26px]'>
        <AiOutlineUser className='relative top-[4px]'/>
        <span className='pl-2'>Account</span>
      </div>
      <div className='relative flex w-[130.675px] h-[13.666px] transform rotate-90 top-[15em]'>
        <span className='shrink-0 leading-normal font-normal text-sm' style={{ fontFamily: "Fredericka the Great" }}>Follow Us</span>
      </div>
      <div className='relative flex w-[130.675px] h-[13.666px] transform rotate-90 top-[18em]'>
          <a href="https://www.instagram.com/diox_121" target='_blank' rel='noreferrer'>{<BsInstagram className='pl-1 ml-1' />}</a>
          <a href="https://www.facebook.com/diox_121" target='_blank' rel='noreferrer'>{<BsFacebook className='pl-1 ml-1' />}</a>
      </div>
      <div className='top-[11em] left-[27%] w-[30em] h-[50px] absolute flex flex-col'>
        <span style={{ fontFamily: "Rubik" }} className='text-center font-normal '>A HIKING GUIDE</span>
        <span className='text-[#222] font-extrabold relative left-[2em] capitalize text-[40px]' style={{ fontFamily: "Fredericka the Great"}}>Be Prepared for the mountains and beyond</span>
      </div>
      <div className='block float-right right-[102px] absolute top-[11em]'>
        <div className='w-[2px] h-[40px] bg-slate-50'></div>
        <div className='w-[2px] h-[90px] bg-slate-700'></div>
      </div>
      <div className='flex flex-col float-right right-[102px] absolute top-[11em]'>
        <span className='text-[16px] top-1 relative pr-11' style={{ fontFamily: "Fredericka the great" }}>start</span>
        <span className='text-[16px] top-7 relative' style={{ fontFamily: "Fredericka the great" }}>01</span>
        <span className='text-[16px] top-8 relative' style={{ fontFamily: "Fredericka the great" }}>02</span>
        <span className='text-[16px] top-9 relative' style={{ fontFamily: "Fredericka the great" }}>03</span>
      </div>
    </div>
    
  </>
    
  );
}

export default App;
