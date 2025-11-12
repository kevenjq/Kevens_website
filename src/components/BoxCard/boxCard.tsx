import React from "react";

interface BoxCardProps {
  title: string;
  image: string;
  date: string;
  active: boolean;
  githubURL: string;
}

const BoxCard: React.FC<BoxCardProps> = ({
  title,
  date,
  image,
  active,
  githubURL,
}) => {
  return (
    <div className="group flex flex-col justify-evenly text-gray-200 overflow-hidden mx-5 my-10 lg:my-0 items-start shrink-0 rounded-md p-5 bg-slate-700 w-[90%] max-w-[390px] h-[300px] lg:w-[40%] lg:h-[400px] shadow-2xl snap-center duration-150 hover:bg-amber-300 hover:text-black">
      <h4 className="text-lg font-semibold">{title}</h4>
      <img src={image} alt={title} className="max-w-40 max-h-30 mx-auto" />

      <p className="font-semibold w-[30%] text-center">{date}</p>
      <p className="font-semibold w-[30%] text-center text-black bg-emerald-300 rounded-2xl ">{`${
        active ? "Active" : "Finished"
      }`}</p>
      <a
        href={githubURL}
        target="_blank"
        className=" mx-auto text-black text-center bg-emerald-300 rounded-4xl w-[50%]"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default BoxCard;
