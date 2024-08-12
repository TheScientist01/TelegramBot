import { PistolIcon } from "src/assets/icons";
import "../styles/global.css";
import { useDictionary } from "src/app/dictionary-provaider";
import PrimaryCoin from "src/assets/images/primaryCoin.png";
import Image from "next/image";

export function Defense() {
  const { improveWeapon } = useDictionary();

  const weapons = [
    {
      title: "Cosmic Gun",
      icon: <PistolIcon className="w-[82px] h-[57px]" />,
      price: 222,
    },
    {
      title: "Cosmic Weapons",
      icon: <PistolIcon className="w-[82px] h-[57px]" />,
      price: 666,
    },
    {
      title: "Cosmic Gun",
      icon: <PistolIcon className="w-[82px] h-[57px]" />,
      price: 555,
    },
    {
      title: "Cosmic Semi-Auto",
      icon: <PistolIcon className="w-[82px] h-[57px]" />,
      price: 444,
    },
    {
      title: "Cosmic Semi-Auto",
      icon: <PistolIcon className="w-[82px] h-[57px]" />,
      price: 666,
    },
    {
      title: "Cosmic Gun",
      icon: <PistolIcon className="w-[82px] h-[57px]" />,
      price: 999,
    },
    {
      title: "Cosmic Gun",
      icon: <PistolIcon className="w-[82px] h-[57px]" />,
      price: 1000,
    },
    {
      title: "Cosmic Gun",
      icon: <PistolIcon className="w-[82px] h-[57px]" />,
      price: 1000,
    },
  ];

  return (
    <div>
      <h1 className="mt-[10px] mb-[36px] text-center text-[23px] font-bold">{improveWeapon}</h1>
      <div className="grid grid-cols-2 gap-[18px] p-[21px]">
        {weapons.map((weapon, key) => (
          <div
            key={key}
            className="h-[135px] rounded-[23px] bg-primary p-[9px] grid grid-cols-2 gap-x-[14px] text-[12px] cursor-pointer"
          >
            <div>{weapon.icon}</div>
            <div className="text-[16px] text-right">{weapon.title}</div>
            <p>Profit per hour</p>
            <div className="flex gap-1 items-center">
              <Image src={PrimaryCoin} alt="coin" width={12} height={12} />
              <p>{weapon.price}</p>
            </div>
            <div className="col-span-2 grid grid-cols-3 gap-[10px]">
              <div className="bg-[#010D1D] rounded-full col-span-1 flex gap-[6px] h-[35px] items-center justify-center text-[18px] ">
                <p className="text-white">lvl</p>
                <p className="text-mainGreen">0</p>
              </div>
              <div className="bg-[#010D1D] rounded-full col-span-2 flex gap-[9px] h-[35px] items-center justify-center text-[18px] font-bold">
                <Image src={PrimaryCoin} alt="coin" width={21} height={21} />
                <p className="text-white">888</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
