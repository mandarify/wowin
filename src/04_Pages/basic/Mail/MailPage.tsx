/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: MailPage

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
// import type IMailPage from "./MailPage.types";

// ########## СТИЛИ
import "./MailPage.styles.css";

// ########## КОМПОНЕНТЫ
import { TitleMain } from "@shared/ui";

// ########## МОДУЛИ


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


const MailPage = (): JSX.Element => {
   return (
      <div className="content-page">
         <div className="page-mail">
            <TitleMain title="почта" icon="notification" />
         </div>
      </div>
   );
};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default MailPage;
