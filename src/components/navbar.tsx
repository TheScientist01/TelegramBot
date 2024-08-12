// "use client";

import { Dispatch, SetStateAction } from "react";
import { useDictionary } from "src/app/dictionary-provaider";
import { DartIcon, FlagIcon, HomeIcon, PistolIcon } from "src/assets/icons";
import { twMerge } from "tailwind-merge";

type NavbarType = {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
};

function Navbar({ page, setPage }: NavbarType) {
  const { home, defense, missions, troops } = useDictionary();

  const elements = [
    {
      name: "home",
      title: home,
      icon: <HomeIcon className="w-7 h-7" />,
    },
    {
      name: "defense",
      title: defense,
      icon: <PistolIcon className="w-10 h-[27px]" />,
    },
    {
      name: "missions",
      title: missions,
      icon: <DartIcon className="w-8.5 h-8" />,
    },
    {
      name: "troops",
      title: troops,
      icon: <FlagIcon className="w-[26px] h-[28.5px]" />,
    },
  ];

  return (
    <div className="flex justify-between items-center h-[87px] w-full px-5 bg-gradient-to-b from-[#010D1D] to-[#210038]">
      {elements.map((element, key) => (
        <div
          key={key}
          onClick={() => {
            setPage(element.name);
          }}
          className={twMerge(
            "w-[69px] h-[69px] rounded-lg flex flex-col gap-1.5 items-center justify-center cursor-pointer border-[3px] border-transparent hover:border-primary hover:bg-primary/30 duration-200 [&>div]:hover:text-mainGreen",
            page === element.name &&
              "border-primary bg-primary/30 text-mainGreen"
          )}
        >
          <div>{element.icon}</div>
          <div className="text-[12px]">{element.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Navbar;
