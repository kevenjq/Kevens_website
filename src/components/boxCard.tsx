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
    <div className="flex flex-col justify-evenly overflow-hidden mx-5 my-10 lg:my-0 items-center shrink-0 rounded-md p-5 bg-amber-300 w-[70%] h-[80%] lg:w-[40%] lg:h-full shadow-2xl snap-center ">
      <h4 className="text-lg font-semibold">{title}</h4>
      <img src={image} alt={title} className="max-w-40 max-h-30 mx-auto" />

      <p className="font-semibold w-[30%] text-center">{date}</p>
      <p className="font-semibold w-[30%] text-center">{`${
        active ? "Active" : "Finished"
      }`}</p>
      <a
        href={githubURL}
        target="_blank"
        className="z-40 mx-auto text-center bg-emerald-300 rounded-4xl w-[50%]"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default BoxCard;
