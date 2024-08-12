import Image from "next/image";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Level0 from "src/assets/images/level0.png";
import Level1 from "src/assets/images/level1.png";
import { useDictionary } from "src/app/dictionary-provaider";

type LevelFieldTypes = {
  className?: string;
  startContent?: ReactNode;
  mainContent?: ReactNode;
  percentage: number;
};

export default function DefenseLevel({
  className,
  startContent,
  mainContent,
  percentage,
}: LevelFieldTypes) {
  const { nextLevel } = useDictionary();

  return (
    <div className="relative">
      <div className="absolute left-1/2 top-2 -translate-x-1/2 text-[23px] leading-[29px] text-white font-semibold">
        333/999
      </div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-[3px] text-[16px]">
        <p>Defense Level 0</p>
        <Image src={Level1} alt="level" width={85} height={95} />
        <p>{nextLevel}</p>
      </div>
      <svg
        width="361"
        height="45"
        viewBox="0 0 361 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-10"
      >
        <path
          d="M26.9375 1.5H26.3971L25.9809 1.84465L4.04336 20.009L2.74089 21.0875L3.96701 22.252L25.9045 43.0876L26.3387 43.5H26.9375H339.59H340.318L340.768 42.9281L357.178 22.0925L358.035 21.005L357.02 20.0642L337.418 1.89978L336.987 1.5H336.399H26.9375Z"
          stroke="url(#paint0_linear_0_1)"
          strokeWidth="3"
        />
        <path
          d="M17.77 3H360V21V42H17.77L-4.19 21.1644L17.77 3Z"
          fill="url(#paint1_linear_0_1)"
          transform={`scale(${percentage}, 1)`}
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_1"
            x1="5"
            y1="22.5"
            x2="356"
            y2="22.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7700FF" />
            <stop offset="0.525" stopColor="white" />
            <stop offset="1" stopColor="#7700FF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_1"
            x1="5"
            y1="22.5"
            x2="320"
            y2="22.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7700FF" stopOpacity="0" />
            <stop offset="1" stopColor="#7700FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
