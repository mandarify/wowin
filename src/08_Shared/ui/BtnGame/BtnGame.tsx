/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: BtnGame

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";

// ########## ТИПЫ
import type IBtnGame from "./BtnGame.types";

// ########## СТИЛИ
import "./BtnGame.styles.css";

// ########## КОМПОНЕНТЫ
import IconBasic from "../IconBasic";

// ########## МОДУЛИ
import useVibrate from "@shared/hooks/useVibrate";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const BtnGame = ({ mode, size, action }: IBtnGame): JSX.Element => {

   const vibrate = useVibrate();

   const clickToBtn = () => {
      vibrate.apply("soft");
      action();
   };

   return (
      <div tabIndex={-1} onClick={clickToBtn} className={`btn-game btn-game-${size} btn-game__${mode}`}>
         <div className="btn-game-center">
            {mode === "add"
               ? <IconBasic.Plus size="fill" />
               : <IconBasic.Close size="fill" />
            }
         </div>
      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(BtnGame);
