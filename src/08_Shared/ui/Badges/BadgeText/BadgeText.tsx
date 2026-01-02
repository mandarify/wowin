/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: BadgeText

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";

// ########## ТИПЫ
import type IBadgeText from "./BadgeText.types";

// ########## СТИЛИ
import "./BadgeText.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const BadgeText = ({ text, style, extraClass }: IBadgeText): JSX.Element => {
   return (
      <div className={`badge badge-text badge-style-${style} ${extraClass ?? ""}`.trim()}>
         <span className="badge-text-content _unselect">{text}</span>
      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(BadgeText);
