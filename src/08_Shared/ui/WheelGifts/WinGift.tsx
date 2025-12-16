/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: WinGift

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useCallback } from "react";

// ########## ТИПЫ
import type { IWinGift } from "./WheelGifts.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ
import ImgBasic from "../ImgBasic/ImgBasic";

// ########## МОДУЛИ
import useVibrate from "@shared/hooks/useVibrate";
import { GameIcons } from "@shared/consts/data.consts";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const WinGift = ({ data }: IWinGift): JSX.Element => {

   const vibrate = useVibrate();

   const handleClick = useCallback(() => {
      vibrate.apply("soft");
   }, [vibrate]);

   return (
      <div className="wheel-gift" onClick={handleClick}>

         <div className="wheel-gift__top">
            <ImgBasic src={data.content.src} alt={data.content.name} extraClass="wheel-gift-img" />
         </div>

         <div className="wheel-gift__bottom">
            <span className={`svg-icon svg-icon-10 svg-model-${GameIcons[data.type]}`} />
         </div>

      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(WinGift);
