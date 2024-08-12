import Image from "next/image";
import LevelField from "src/components/level-field";
import countryObject from "src/utils/country-dictionary";
import { useDictionary } from "../app/dictionary-provaider";
import DefenseLevel from "src/components/defense-level";
import Ufo from "src/assets/images/ufo.png";
import Happy from "src/assets/images/avatars/happy.png";
import Sad from "src/assets/images/avatars/sad.png";
import Shocked from "src/assets/images/avatars/shocked.png";
import Angry from "src/assets/images/avatars/angry.png";
import "../styles/global.css";
import GradientButton from "src/ui/gradientButton";
import { RocketIcon } from "src/assets/icons";
import { useEffect, useState } from "react";

export default function Home({ user }: { user: any }) {
  const { currentLevelInfo, boost, energy } = useDictionary();
  const [clickCount, setClickCount] = useState(0);

  const clickEmotions = [
    { count: 15, emotion: Angry },
    { count: 10, emotion: Shocked },
    { count: 4, emotion: Sad },
    { count: 0, emotion: Happy },
  ];

  useEffect(() => {
    if (clickCount) {
      const clickDelay = setTimeout(() => {
        setClickCount(0);
      }, 1000);

      return () => clearTimeout(clickDelay);
    }
  }, [clickCount]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div className="text-[23px] font-bold leading-[28.29px] text-white">
          {user.username}
        </div>
        <div className="w-10 h-10 rounded-full bg-primary">
          {user?.country && (
            <Image
              src={countryObject(user.country).src}
              alt=""
              width={40}
              height={40}
            />
          )}
        </div>
      </div>
      <div className="mt-3 pr-[57px] mb-[75px] text-[16px]">
        {currentLevelInfo}
      </div>
      <div>
        <DefenseLevel percentage={0.7} />
      </div>
      <div className="relative mt-[82px]">
        <Image src={Ufo} alt="Ufo" />
        <div
          onClick={() => {
            setClickCount((prev) => prev + 1);
          }}
        >
          <Image
            src={
              clickEmotions.find((emotion) => emotion.count <= clickCount)
                ?.emotion
            }
            alt="happy"
            width={151}
            height={283}
            className="absolute left-1/2 -translate-x-1/2 top-0"
          />
        </div>
        <div className="relative flex justify-between items-center mt-[30px]">
          <div className="flex flex-col">
            <LevelField
              startContent={""}
              mainContent={""}
              className="w-[182px] h-[58px]"
            />
            <div className="text-[16px]">{energy}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full w-[58px] h-[58px] bg-mainGreen flex items-center justify-center">
              <RocketIcon />
            </div>
            <div className="text-[16px]">{boost}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
