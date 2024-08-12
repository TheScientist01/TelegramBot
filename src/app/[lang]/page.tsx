"use client";

import { useEffect, useState } from "react";
import Navbar from "src/components/navbar";
import { Provider } from "react-redux";
import { store } from "src/store";
import Home from "src/screens/home";
import Image from "next/image";
import LevelField from "src/components/level-field";
import countryObject from "src/utils/country-dictionary";
import { useDictionary } from "../dictionary-provaider";
import DefenseLevel from "src/components/defense-level";
import Ufo from "src/assets/images/ufo.png";
import Happy from "src/assets/images/avatars/happy.png";
import { Defense } from "src/screens/defense";
import Missions from "src/screens/missions";
import Troops from "src/screens/troops";

export default function MainPage() {
  const [user, setUser] = useState<any>(null);
  const [page, setPage] = useState<string>("home");

  const pages = {
    home: <Home user={user} />,
    defense: <Defense />,
    missions: <Missions />,
    troops: <Troops />,
  };

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      setUser(JSON.parse(localUser));
    } else {
      localStorage.setItem(
        "user",
        JSON.stringify({ username: "Username", country: "canada" })
      );
      // router.push("/auth");
    }
  }, []);

  return (
    <main className="h-[800px] max-w-[430px] flex flex-col bg-gradient-to-b from-[#010D1D] via-[#010D1D] to-[#210038]">
      <Provider store={store()}>
        {/* <button className="relative bg-primary h-[50px] overflow-hidden"> */}
        {/* </button> */}
        {/* {user && <Home user={user} />} */}

        {user && pages[page]}
        <footer className="mt-auto">
          <Navbar page={page} setPage={setPage} />
        </footer>
      </Provider>
    </main>
  );
}
