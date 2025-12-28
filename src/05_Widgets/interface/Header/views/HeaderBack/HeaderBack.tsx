/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: HeaderBack

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

// ########## ТИПЫ
// import type IHeaderBack from "./HeaderBack.types";

// ########## СТИЛИ
import "./HeaderBack.styles.css";

// ########## КОМПОНЕНТЫ
import { BtnSimple } from "@shared/ui";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const HeaderBack = (): JSX.Element => {

   const navigate = useNavigate();

   const back = useCallback(() => {
      navigate(-1);
   }, [navigate]);

   return (
      <div className="header-content header-back">
         <BtnSimple title="назад" icon="reply" isBlock={false} action={back} />
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default HeaderBack;
