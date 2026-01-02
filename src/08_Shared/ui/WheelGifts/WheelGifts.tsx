/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: WheelGifts

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";
import { useRef, useEffect } from "react";

// ########## ТИПЫ
// import type IWheelGifts from "./WheelGifts.types";
import type { GameType } from "@shared/types/games.types";
import type { TWinData } from "@shared/types/data.types";

// ########## СТИЛИ
import "./WheelGifts.styles.css";

// ########## КОМПОНЕНТЫ
import WinGift from "./WinGift";

// ########## МОДУЛИ
import { random } from "@shared/funcs/random";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const winGifts = (): TWinData[] => {
   return Array.from({ length: 20 }, (_, index) => {
      const giftNumber = `6${index % 6}`;
      return {
         user: {
            tid: `1`,
            name: `iosif`,
            avatar: `avatar-link`,
         },
         game: {
            id: 0,
            version: 1,
            status: "published",
            isTop: 1,
            position: index + 1,
            title: "Сияние",
            desc: "В сиянии звезд рождаются мечты. Они манят того, кто осмелится взглянуть вверх и дотронуться до небес.",
            slug: "fortune",
            dtPublication: 1,
            dtCreated: 1,
            dtUpdated: 1,
            dtDeleted: 1,
         },
         type: ["case", "duel", "pvp", "solo"][random(0, 3)] as GameType,
         content: {
            id: '123456789',
            type: 'gift',
            name: `Plush Pepe ${giftNumber}`,
            src: `test/imges/small-gifts/plushpepe-${giftNumber}.small.jpg`,
         },
      };
   });
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const WheelGifts = (): JSX.Element => {

   const gifts: TWinData[] = winGifts();

   const wheelRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const wheel = wheelRef.current;
      if (!wheel) return;

      const wheelScroll = (e: WheelEvent) => {
         if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            wheel.scrollLeft += e.deltaY;
         }
      };

      wheel.addEventListener("wheel", wheelScroll, { passive: false });
      return () => wheel.removeEventListener("wheel", wheelScroll);

   }, []);

   return (
      <div ref={wheelRef} className="wheel-gifts">
         {gifts.map((item, index) => <WinGift key={index} data={item} />)}
      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default WheelGifts;
