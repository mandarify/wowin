/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: TextGame

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";

// ########## ТИПЫ
import type ITextGame from "./TextGame.types";

// ########## СТИЛИ
import "./TextGame.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const TextGame = ({ type, content, gradient, extraClass }: ITextGame): JSX.Element => {
   return (
      <div className={`game-text game-${type} ${extraClass ?? ''}`.trim()}>
         <span className={`game-${type}-main _unselect ${gradient ? 'game-text-gradient' : ''}`.trim()}>{content}</span>
         <span className={`game-${type}-shadow _unselect`}>{content}</span>
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(TextGame);
