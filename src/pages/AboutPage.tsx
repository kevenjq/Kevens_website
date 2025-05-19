import Navbar from "../components/Navbar";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center px-4">
      <Navbar />

      <div className="w-full max-w-4xl border-t-4 border-black mb-12" />

      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-4xl">

        <div className="text-left text-lg font-medium mb-8 md:mb-0 md:mr-8 md:w-1/3">
          <p>Question one e.x.</p>
          <p>A little about me</p>
        </div>

        <div className="text-center md:text-left text-base font-normal md:w-2/3">
          <p>
            I am a 20 year old student living in Berlin, I love traveling since
            I was one year old. I have been gifted with an amazing family where
            we have travelled to many countries. I grew up in China for most of
            my life, finished high school and A levels in London and now I am
            pursuing my bachelors in Berlin, Germany.
          </p>
        </div>
      </div>


      <div className="w-full max-w-4xl border-b-4 border-black mt-12" />
    </div>
  );
};

export default AboutMe;
