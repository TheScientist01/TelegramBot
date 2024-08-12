import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type LevelFieldTypes = {
  className?: string;
  startContent: ReactNode;
  mainContent: ReactNode;
};

export default function LevelField({
  className,
  startContent,
  mainContent,
}: LevelFieldTypes) {
  return (
    <div
      className={twMerge(
        "w-full h-[58px] flex items-center gap-2 rounded-full bg-gradient-to-r",
        className
      )}
    >
      {startContent}
      {mainContent}
    </div>
  );
}
