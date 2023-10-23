import "./App.css";
import "./components/Fonts.css";
import MountainSnow from "./images/pxfuel.jpg";
import { AiOutlineUser } from "react-icons/ai";
import {
  BsFacebook,
  BsInstagram,
  BsArrowDown,
  BsArrowRight,
} from "react-icons/bs";
import HikingLevel from "./images/HikingLevel.jpg";
import HikingGear from "./images/HikingGear.png";
import MapAndTiming from "./images/Map&Timing.jpg";

function App() {
  return (
    <>
      <div>
        <img
          src={MountainSnow}
          alt="Mountain Snow"
          className="max-h-screen w-full absolute top-0 opacity-90"
        />
        <div>
          <p
          className="text-3xl font-normal leading-normal absolute text-[#FEE] not-italic pt-[22px] pl-[40px]"
          style={{ fontFamily: "Zen Dots" }}
        >
          HIKE
        </p>
        <ul
          className="list-none flex left-[35%] absolute py-[30px]"
          style={{ fontFamily: "Inter" }}
        >
          <li className="">Home</li>
          <li className="pl-[47px] relative">Equipment</li>
          <li className="pl-[47px] relative">About Us</li>
          <li className="pl-[47px] relative">Blog</li>
        </ul>
        <div className="float-right right-[102px] absolute flex py-[26px]">
          <AiOutlineUser className="relative top-[4px]" />
          <span className="pl-2">Account</span>
        </div>
        </div>
        
        <div className="relative flex w-[130.675px] h-[13.666px] transform rotate-90 top-[15em]">
          <span
            className="shrink-0 leading-normal font-normal text-sm"
            style={{ fontFamily: "Fredericka the Great" }}
          >
            Follow Us
          </span>
        </div>
        <div className="relative flex w-[130.675px] h-[13.666px] transform rotate-90 top-[18em]">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            {<BsInstagram className="pl-1 ml-1" />}
          </a>
          <a
            href="https://www.facebook.com/diox_121"
            target="_blank"
            rel="noreferrer"
          >
            {<BsFacebook className="pl-1 ml-1" />}
          </a>
        </div>
        <div className="top-[11em] left-[27%] w-[30em] h-[50px] absolute flex flex-col">
          <span
            style={{ fontFamily: "Rubik" }}
            className="text-center font-normal "
          >
            A HIKING GUIDE
          </span>
          <span
            className="text-[#222] font-extrabold relative left-[2em] capitalize text-[40px]"
            style={{ fontFamily: "Fredericka the Great" }}
          >
            Be Prepared for the mountains and beyond
          </span>
          <div className="flex">
            <span
              className="capitalize relative"
              style={{ fontFamily: "fredericka the Great", left: "17%" }}
            >
              Scroll down
            </span>
            <BsArrowDown
              className="relative"
              style={{ left: "6em", top: "5px" }}
            />
          </div>
        </div>
        <div className="block float-right right-[102px] absolute top-[11em]">
          <div className="w-[2px] h-[40px] bg-slate-50"></div>
          <div className="w-[2px] h-[90px] bg-slate-700"></div>
        </div>
        <div className="flex flex-col float-right right-[102px] absolute top-[11em]">
          <span
            className="text-[16px] top-1 relative pr-11"
            style={{ fontFamily: "Fredericka the great" }}
          >
            start
          </span>
          <span
            className="text-[16px] top-7 relative"
            style={{ fontFamily: "Fredericka the great" }}
          >
            01
          </span>
          <span
            className="text-[16px] top-8 relative"
            style={{ fontFamily: "Fredericka the great" }}
          >
            02
          </span>
          <span
            className="text-[16px] top-9 relative"
            style={{ fontFamily: "Fredericka the great" }}
          >
            03
          </span>
        </div>
      </div>
      <div className="bg-[#3e3f80] w-full h-[337px] top-[40em] absolute">
        <span
          style={{ fontFamily: "Rubik" }}
          className="relative -top-[0.8em] left-[77px] text-[100px] tracking-wide text-[#222]"
        >
          01
        </span>
        <span
          style={{ fontFamily: "Rubik" }}
          className="relative -top-[5.175em] left-[5em] text-[20px] text-[#ffd700]"
        >
          Get Started
        </span>
        <img
          src={HikingLevel}
          alt="A Female Mountain Hiker"
          className="w-[298px] h-[409px] float-right right-[200px] relative rounded-[20px] -top-[5.5em]"
        />
        <h2
          style={{ fontFamily: "Rubik" }}
          className="text-[50px] tracking-[0.6px] w-[8em] left-[120px] -top-[2.5em] relative text-gray-100"
        >
          What level of hiker are you?
        </h2>
        <p
          className="w-[600px] relative -top-[8em] left-[120px] text-[#1f1e1e]"
          style={{ fontFamily: "Rubik" }}
        >
          Determining the level of hiker you are can be important tool when
          planning future hikes. This hiking level guide will help you plan
          hikes according to different hike ratings set by various websites like
          All Trails and Modern hiker. What type of hiker are you - novice,
          moderate, advanced moderate, expert, or expert bacpacker?
        </p>
        <span
          className="relative -top-[7.5em] left-[120px] text-[#FFF700]"
          style={{ fontFamily: "Rubik" }}
        >
          Read more
        </span>
        <BsArrowRight className="relative -top-[8.75em] left-[220px]" />
      </div>
      <div className="bg-[#3e3f80] w-full h-[500px] top-[61em] absolute">
        <span
          style={{ fontFamily: "Rubik" }}
          className="relative top-5 float-right right-[50%] text-[100px] tracking-wide text-[#222]"
        >
          02
        </span>
        <span
          style={{ fontFamily: "Rubik" }}
          className="relative top-[4em] right-[28%] float-right text-[20px] text-[#ffd700]"
        >
          Hiking Essentials
        </span>
        <img
          src={HikingGear}
          alt="A Female Mountain Hiker"
          className="w-[298px] h-[409px] float-left left-[120px] relative rounded-[20px] top-[2em]"
        />
        <div className="float-right top-[16.5em] relative">
          <h2
            style={{ fontFamily: "Rubik" }}
            className="text-[50px] tracking-[0.6px] w-[8em] left-[120px] -top-[2.5em] relative text-gray-100"
          >
            Picking the right Hiking Gear!
          </h2>
          <p
            className="w-[600px] relative -top-[8em] left-[120px] text-[#1f1e1e]"
            style={{ fontFamily: "Rubik" }}
          >
            The nice thing about beginning hiking is that you don’t really need
            any special gear, you can probably get away with this things you
            already have. Let’s with clothing. A typical mistake hiking
            beginners make is wearing jeans and regualar clothes, which will get
            heavy and chafe wif they get sweaty or wet.
          </p>
          <span
            className="relative -top-[7.5em] left-[120px] text-[#FFF700]"
            style={{ fontFamily: "Rubik" }}
          >
            Read more
          </span>
          <BsArrowRight className="relative -top-[8.75em] left-[220px]" />
        </div>
        <div className="bg-[#3e3f80] w-full h-[500px] top-[30em] absolute">
          <div className="top-[5em] relative">
            <span
              style={{ fontFamily: "Rubik" }}
              className="relative -top-[0.8em] left-[77px] text-[100px] tracking-wide text-[#222]"
            >
              03
            </span>
            <span
              style={{ fontFamily: "Rubik" }}
              className="relative -top-[5.175em] left-[5em] text-[20px] text-[#ffd700]"
            >
              WHERE YOU GO IS THE KEY
            </span>
            <img
              src={MapAndTiming}
              alt="Understand Your Map & Timing"
              className="w-[298px] h-[409px] float-right right-[200px] relative rounded-[20px] -top-[5.5em]"
            />
            <h2
              style={{ fontFamily: "Rubik" }}
              className="text-[50px] tracking-[0.6px] w-[8em] left-[120px] -top-[2.5em] relative text-gray-100"
            >
              Understand Your Map & Timing
            </h2>
            <p
              className="w-[600px] relative -top-[8em] left-[120px] text-[#1f1e1e]"
              style={{ fontFamily: "Rubik" }}
            >
              To start, Print out the hiking guide and map. If it’s raining,
              throw them in a Zip-lock bag. Read over the map, study the map,
              and have a good idea of what to expect. I like to know what my
              next landmark is as I hike. For example, I’ll read the guide and
              know that say, In a mile, I make a right turn at the junction.
            </p>
            <span
              className="relative -top-[7.5em] left-[120px] text-[#FFF700]"
              style={{ fontFamily: "Rubik" }}
            >
              Read more
            </span>
            <BsArrowRight className="relative -top-[8.75em] left-[220px]" />
          </div>
        </div>
      </div>
      <footer className="bg-[#3e3f80] w-full h-[180px] absolute top-[120em] flex">
        <div className="flex flex-col">
          <p
            className="text-3xl font-normal leading-normal absolute text-[#FEE] not-italic pt-[22px] pl-[40px]"
            style={{ fontFamily: "Zen Dots" }}
          >
            HIKE
          </p>
          <span
            style={{ fontFamily: "Rubik" }}
            className="font-normal leading-normal absolute text-[#222] not-italic pt-[22px] w-[260px] ml-[40px] top-[3em]"
          >
            Get out there & discover your next slope, mountain & destination!
          </span>
          <span
            style={{ fontFamily: "Rubik" }}
            className="font-normal leading-normal absolute text-[#222] not-italic ml-[40px] top-[9em]"
          >
            Copyright &copy; 2019 HIKE, Inc. Terms & Privacy
          </span>
        </div>
        <div className="flex flex-col">
          <ul
            className="absolute left-[35em] top-[2em] tracking-[0.26px]"
            style={{ fontFamily: "Rubik" }}
          >
            <li className="text-[#FFF700] text-[16px]">More on the blog</li>
            <div className="text-[#222] text-[14px] top-[0.8em] relative">
              <li>About HIKE</li>
              <li>Contributors & Writers</li>
              <li>Write For Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </div>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul
            className="absolute right-[20em] top-[2em] tracking-[0.26px]"
            style={{ fontFamily: "Rubik" }}
          >
            <li className="text-[#FFF700] text-[16px]">The Team</li>
            <div className="text-[#222] text-[14px] top-[0.8em] relative">
              <li>The Team</li>
              <li>Jobs</li>
              <li>Press</li>
            </div>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
