/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: User

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/


// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
import type IconDouble from "../IconDouble.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const Menu = ({ size }: IconDouble): JSX.Element => {
   return (
      <div className={`double-icon double-icon-${size}`}>
         <svg className="double-icon-element" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_111_239)">
               <path className="double-icon-color-dark" d="M40 55C42.7614 55 45 57.2386 45 60V95C45 97.7614 42.7614 100 40 100H5C2.23858 100 2.03395e-06 97.7614 0 95V60C0 57.2386 2.23858 55 5 55H40ZM95 0C97.7614 0 100 2.23858 100 5V40C100 42.7614 97.7614 45 95 45H60C57.2386 45 55 42.7614 55 40V5C55 2.23858 57.2386 2.0133e-08 60 0H95Z" />
               <path className="double-icon-color-light" d="M95 55C97.7614 55 100 57.2386 100 60V95C100 97.7614 97.7614 100 95 100H60C57.2386 100 55 97.7614 55 95V60C55 57.2386 57.2386 55 60 55H95ZM40 0C42.7614 0 45 2.23858 45 5V40C45 42.7614 42.7614 45 40 45H5C2.23858 45 2.03395e-06 42.7614 0 40V5C0 2.23858 2.23858 2.0133e-08 5 0H40Z" />
            </g>
            <defs>
               <clipPath id="clip0_111_239">
                  <rect width="100" height="100" fill="white" />
               </clipPath>
            </defs>
         </svg>
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default Menu;
