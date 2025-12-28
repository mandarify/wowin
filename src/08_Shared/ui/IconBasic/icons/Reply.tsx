/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: Reply

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
import type IIconBasic from "../IconBasic.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const Reply = ({ size }: IIconBasic): JSX.Element => {
   return (
      <div className={`basic-icon basic-icon-${size}`}>
         <svg className="basic-icon-element" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.4138 21.3793L3.8147e-06 12L9.4138 2.6207L12.4483 5.65518L8.27587 9.82759H24V14.1724H8.27587L12.4483 18.3448L9.4138 21.3793Z" />
         </svg>
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default Reply;
