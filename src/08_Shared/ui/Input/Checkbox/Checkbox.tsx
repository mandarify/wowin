/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: Checkbox

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
import type ICheckbox from "./Checkbox.types";

// ########## СТИЛИ
import "./Checkbox.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const Checkbox = ({ flag }: ICheckbox): JSX.Element => {
   return (
      <div className={`checkbox ${flag ? 'checkbox_active' : ''}`.trim()} />
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default Checkbox;
