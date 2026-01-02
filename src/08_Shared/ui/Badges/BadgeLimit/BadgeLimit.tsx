/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: BadgeLimit

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";

// ########## ТИПЫ
import type IBadgeLimit from "./BadgeLimit.types";

// ########## СТИЛИ
import "./BadgeLimit.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const BadgeLimit = ({ total, purchased, style, extraClass }: IBadgeLimit): JSX.Element => {
   return (
      <div className={`badge badge-limit badge-style-${style} ${extraClass ?? ""}`.trim()}>
         <span className="badge-limit-content _unselect">{purchased}/{total}</span>
      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(BadgeLimit);
