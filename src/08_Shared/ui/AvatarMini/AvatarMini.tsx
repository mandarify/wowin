/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: AvatarMini

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useCallback } from "react";

// ########## ТИПЫ
import type IAvatarMini from "./AvatarMini.types";

// ########## СТИЛИ
import "./AvatarMini.styles.css";

// ########## КОМПОНЕНТЫ
import { NavLink } from "react-router-dom";
import ImgBasic from "../ImgBasic/ImgBasic";

// ########## МОДУЛИ
import useVibrate from "@shared/hooks/useVibrate";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const AvatarMini = ({ src, path }: IAvatarMini): JSX.Element => {

   const vibrate = useVibrate();

   const goToLink = useCallback(() => vibrate.apply("soft"), [vibrate]);

   return (
      <NavLink end to={path} className="avatar-mini" onClick={goToLink}>
         <div className="avatar-img">
            <ImgBasic src={src} alt="Mini Avatar." extraClass="avatar-img-content" />
         </div>
      </NavLink>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(AvatarMini);
