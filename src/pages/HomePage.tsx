import Navbar from "../components/Navbar";

import kivymd from "../assets/kivymd.png";
import BoxCard from "../components/boxCard";
import jobscrapperimg from "../assets/Screenshot 2025-05-13 at 19.02.24.png";
import Javaimg from "../assets/image.png";
import reacttsx from "../assets/image copy.png";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <div className="fixed flex flow-col p-2 justify-between items-center bottom-5 left-5 w-fit h-auto z-10">
        <ul className="flex flex-col gap-5 justify-center items-center">
          <li className="duration-500 hover:text-cyan-600">
            <a
              href="https://www.canva.com/design/DAGnbV_AWvY/6Aao7IgAZe4xadbCND-8kA/edit?utm_content=DAGnbV_AWvY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
            >
              {CVsvg()}
            </a>
          </li>
          <li className="duration-500 ease-in-out hover:text-cyan-600">
            <a
              href="https://www.instagram.com/jaffet_qc/?utm_source=ig_web_button_share_sheet"
              target="_blank"
            >
              {instasvg()}
            </a>
          </li>

          <li className="duration-500 hover:text-cyan-600">
            <a href="https://www.linkedin.com/in/kevenquevedo" target="_blank">
              {linkedInsvg()}
            </a>
          </li>
          <li className="duration-500 hover:text-cyan-600">
            <a href="https://github.com/kevenjq" target="_blank">
              {githubsvg()}
            </a>
          </li>
        </ul>
      </div>

      <div className="w-screen h-screen mt-16 bg-gray-200 flex flex-row justify-start items-center z-20">
        <p className="fixed top-20 left-[42%] lg:left-[45%] -z-10 font-extrabold">
          easy on the scroll...
        </p>
        <div className="flex flex-col justify-center items-center w-[90%] lg:items-start md:items-start h-fit lg:w-fit px-5 py-5 mx-18 my-40">
          <h1 className="text-[20px] font-bold text-yellow-950 text-center sm:w-[80%] md:w-[400px] md:text-left md:text-3xl lg:w-[600px] lg:text-left lg:text-4xl ">
            Hola! <br />
            Welcome to my website.
          </h1>
          <p className="text-lg text-left text-yellow-950 mt-10 md:text-left lg:text-left">
            Keven Quevedo - 2005
          </p>
        </div>
        <div className="flex justify-center w-1 h-1 invisible mt-23.5 -translate-x-50 md:w-80 md:h-100  md:-translate-x-25 md:visible lg:w-140 lg:h-160 lg:-translate-x-44 lg:visible">
          {treeBGsvg()}
        </div>
      </div>

      <div className="w-screen h-fit bg-gray-200 flex flex-col justify-start items-center border-t-white border-t-8">
        <div className="relative flex flex-row items-center justify-center w-[80%] outline-2 hover:outline-white outline-transparent translate-x-3 h-[390px] md:h-[320px] py-20 lg:py-5 bg-amber-300 rounded-2xl mx-auto lg:w-[80%] lg:h-[70%] ">
          <h3 className="text-[12px] font-semibold text-left w-[70%] sm:text-1xl lg:text-2xl ">
            <span className="text-center block">Nice to meet you!</span>
            <br />I am a university student studying Software Engineering I am
            beginning a my journey in Web development, as a sail towards full
            stack development.
            <br />I am currently learning React and TypeScript, and I am excited
            to apply my knowledge to real-world projects. I am also interested
            in exploring other areas of software development, such as mobile app
            development and cloud computing. I am always looking for new
            challenges and opportunities to grow as a developer.
            <br />
            <br />
            <span className="text-white text-center block">
              Take a look at my projects in Github posted below.
            </span>
          </h3>
        </div>

        <div className=" h-[350px] w-[80%]  lg:h-[80%] lg:w-[80%] overflow-hidden outline-2 hover:outline-white outline-transparent rounded-2xl translate-x-3 my-10 overflow-y-scroll ">
          <div className="flex justify-start items-center flex-col lg:flex-row rounded-2xl  lg:overflow-x-scroll snap-x gap-5 lg:w-full lg:h-full">
            <BoxCard
              title="Portfolio / Blog Website"
              image={reacttsx}
              date="On-going"
              active={true}
              githubURL="https://github.com/kevenjq"
            />
            <BoxCard
              title="KCARE Website"
              image={jobscrapperimg}
              date="December 2022"
              active={false}
              githubURL="https://github.com/kevenjq/KCARE-Website.git"
            />
            <BoxCard
              title="Face Recognition Application"
              image={kivymd}
              date="April 2023"
              active={false}
              githubURL="https://github.com/kevenjq/Face-Recognition.git"
            />
            <BoxCard
              title="Job Scrapper Application"
              image={jobscrapperimg}
              date="December 2023"
              active={false}
              githubURL="https://github.com/kevenjq/Job-Scrapper.git"
            />
            <BoxCard
              title="War Card Game"
              image={Javaimg}
              date="April 2022"
              active={false}
              githubURL="https://github.com/kevenjq/Face-Recognition.git"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

function instasvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-instagram"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
    </svg>
  );
}

function linkedInsvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-linkedin"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
  );
}

function githubsvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-github"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  );
}

const treeBGsvg = () => {
  return (
    <svg
      viewBox="185 0 650 1060"
      className="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M637.69 789c46.82-14.7 73.85 24.35 135.43-22.21s71.34-128.41 63.08-153.2c-16.52-64.58-60.08-84.11-63-125.54-3-41.93 41.23-57.69 20.65-120.95-26.45-81.3-65.48-61.71-71.49-70.72s15.32-27-19.83-97.32c-24.78-49.56-41.3-36-57.82-54.07s-4.5-27.36-21.78-39c-25.53-17.27-18.77 3.75-60.08-9C527.56 86 505 54.15 469.74 66.91c-82.17 29.72-55.73 87.7-72.25 105.72s-43.39 14.43-58.41 31-30 61.58-30 76.6 3 52.57 0 61.58-26.13-2.1-44.16 15.92-5.42 29.74-21.92 53.77-57.4 30.89-57.73 92.5c-0.4 75.85 33.41 81.6 26.69 111.23-7.56 33.32-35.1 84-6.56 136.59S282 840.4 340.57 838.9s39-19.53 75.1-19.53 73.59 24 139.68 10.51 53.33-31.75 82.34-40.88z"
          fill="#3499a2"
        ></path>
        <path
          d="M646 604.6c5.32 0 16.52 1.5 18 20.53a39.16 39.16 0 0 1-10.26 30.16s-9.26-10.14-11.26-20.15c-3.03-15.71 4.52-23.78 3.52-30.54zM754 688.08c-2.75-4.55-7.27-14.91 8.23-26a39.16 39.16 0 0 1 31.12-6.84s-3.88 13.17-11.41 20.07c-11.87 10.69-22.67 8.41-27.94 12.77zM398.35 593.07c5 1.94 14.84 7.42 9.3 25.68a39.16 39.16 0 0 1-20.55 24.35s-4.93-12.82-3.15-22.87c2.93-15.72 12.87-20.5 14.4-27.16zM331.52 535.27c5.25-0.87 16.54-1.22 21.13 17.31a39.16 39.16 0 0 1-5.2 31.43s-10.79-8.49-14.41-18c-5.52-15.01 0.57-24.23-1.52-30.74zM248.41 711.5c5.25-0.87 16.54-1.22 21.13 17.31a39.16 39.16 0 0 1-5.2 31.43s-10.79-8.49-14.41-18c-5.52-15.05 0.57-24.24-1.52-30.74zM465.43 430.07c5.29 0.56 16.27 3.23 15.76 22.31a39.16 39.16 0 0 1-13.38 28.92s-8.14-11.06-9.08-21.22c-1.33-15.95 6.99-23.18 6.7-30.01zM380.65 327.94c5.29 0.56 16.27 3.23 15.76 22.31A39.16 39.16 0 0 1 383 379.16s-8.14-11.06-9.08-21.22c-1.31-15.94 7.01-23.17 6.73-30zM481.56 223.27c5.32 0.1 16.49 1.82 17.63 20.87a39.16 39.16 0 0 1-10.84 30s-9.07-10.31-10.88-20.36c-2.7-15.78 4.96-23.78 4.09-30.51zM538 278.32c5.28-0.67 16.58-0.59 20.46 18.1a39.16 39.16 0 0 1-6.39 31.21s-10.46-8.89-13.71-18.58c-4.93-15.2 1.5-24.15-0.36-30.73zM614.89 179.31c5.29 0.55 16.28 3.2 15.81 22.27a39.16 39.16 0 0 1-13.32 28.95s-8.17-11-9.13-21.2c-1.36-15.94 6.94-23.2 6.64-30.02zM665 230.53c5.29 0.55 16.28 3.2 15.81 22.27a39.16 39.16 0 0 1-13.32 28.95s-8.17-11-9.13-21.2c-1.36-15.94 6.89-23.2 6.64-30.02zM698.68 321.54c5.31-0.36 16.58 0.39 19.35 19.28a39.16 39.16 0 0 1-8.22 30.78s-9.92-9.5-12.59-19.35c-4.04-15.48 2.91-24.04 1.46-30.71zM637.09 346.12c4.72-2.46 15.35-6.3 25.47 9.88a39.16 39.16 0 0 1 4.83 31.49s-12.9-4.71-19.3-12.67c-9.92-12.54-6.99-23.16-11-28.7zM679.4 451.67c4.5 0.29 13.89 2.17 14.13 18.34a33.19 33.19 0 0 1-10.32 25s-7.28-9.08-8.43-17.65c-1.69-13.5 5.1-19.92 4.62-25.69zM736.92 372.89c4.17-1.7 13.44-4.11 20.71 10.34a33.19 33.19 0 0 1 1.6 27s-10.51-5-15.29-12.2c-7.38-11.42-4.07-20.16-7.02-25.14zM491.11 328.54c4.17-1.7 13.44-4.11 20.71 10.34a33.19 33.19 0 0 1 1.6 27s-10.51-5-15.29-12.2c-7.38-11.42-4.07-20.16-7.02-25.14zM259.52 495.22c-4.29-1.39-12.92-5.53-9.16-21.26a33.19 33.19 0 0 1 16.16-21.63s4.81 10.59 3.81 19.19c-1.68 13.48-9.85 17.99-10.81 23.7zM244.43 584c-3.22-2.06-9.43-7.3-3-19.41a28.15 28.15 0 0 1 17.89-14.3s1.69 9.73-1 16.57c-4.21 10.69-11.88 12.67-13.89 17.14zM296.62 602.79c-3.22-2.06-9.43-7.3-3-19.41a28.15 28.15 0 0 1 17.89-14.3s1.69 9.73-1 16.57c-4.21 10.67-11.88 12.66-13.89 17.14zM332 342.07c-2.4-3-6.61-9.93 3.36-19.35a28.15 28.15 0 0 1 21.52-7.86s-1.5 9.76-6.2 15.39c-7.46 8.75-15.36 8.22-18.68 11.82zM365.78 269.79c-2.4-3-6.61-9.93 3.36-19.35a28.15 28.15 0 0 1 21.52-7.86s-1.5 9.76-6.2 15.39c-7.46 8.77-15.35 8.21-18.68 11.82zM444.16 258.72c-3.79 0.48-11.92 0.42-14.71-13a28.15 28.15 0 0 1 4.55-22.45s7.52 6.39 9.86 13.35c3.6 10.93-1.02 17.38 0.3 22.1zM448.46 318c-3.54 1.45-11.39 3.52-17.59-8.72a28.15 28.15 0 0 1-1.42-22.86s8.93 4.21 13 10.32c6.28 9.65 3.5 17.07 6.01 21.26zM491.38 196.75c-3.77 0.63-11.89 0.88-15.2-12.44a28.15 28.15 0 0 1 3.73-22.6s7.76 6.1 10.36 13c3.98 10.76-0.39 17.36 1.11 22.04zM575.77 176.12c2.87 2.52 8.21 8.65 0 19.64a28.15 28.15 0 0 1-19.86 11.42s-0.19-9.87 3.48-16.23c5.83-9.95 13.72-10.71 16.38-14.83zM620.08 293.21c-3.81 0.37-11.93 0.08-14.33-13.42a28.15 28.15 0 0 1 5.23-22.3s7.34 6.6 9.47 13.63c3.25 11.02-1.56 17.32-0.37 22.09zM603.76 397c-3.81 0.37-11.93 0.08-14.33-13.42a28.15 28.15 0 0 1 5.23-22.3s7.34 6.6 9.47 13.63c3.25 11.01-1.56 17.31-0.37 22.09z"
          fill="#60d79e"
        ></path>
        <path
          d="M515.53 671.23s24.08-63.58 20.94-102.15-10.33-139-10.33-139h27.21l13 129.42 27-129.42 20 12.32s-22 86.09-31.06 150.68-17.77 129.68-17.9 146.7c0 0 29.24-14.12 57.11-28.59s59.93-56.09 71.94-56.81 20 18.31 20 22.31-57.79 53.07-76.46 63.08-41.7 14-58.72 36S546.48 839.9 547.91 892s4.43 68.09 4.43 68.09H469.9s0.34-111.14-4.67-157.2-5-83.36-12-114.77-39.48-106.62-56.79-128.59S309 475.82 296 430.07c-10-19.89 6-27.08 12-19.89s53.07 102.3 93.12 118.33c-10.49-41.05-56.07-101.13-52.07-109.14s25.91-13 34.48-5 1.56 22.72 29.6 59.42 40.34 47.93 63.73 93.38 38.67 104.06 38.67 104.06z"
          fill="#022f36"
        ></path>
      </g>
    </svg>
  );
};

const CVsvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="currentColor"
      className="bi bi-file-earmark-person-fill"
      viewBox="0 0 16 16"
    >
      <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
    </svg>
  );
};
