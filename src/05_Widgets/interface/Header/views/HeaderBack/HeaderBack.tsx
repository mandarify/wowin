/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: HeaderBack

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import { useSelector } from "react-redux";
import { getCurrentLanguage } from "@entities/Language/Language.selectors";

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
   const language = useSelector(getCurrentLanguage)!;

   const back = useCallback(() => {
      navigate("/");
   }, [navigate]);

   return (
      <div className="header-content header-back">
         <BtnSimple title={language.labels["header_back_button"]} icon="reply" isBlock={false} action={back} />
      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default HeaderBack;
