/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Layouts

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART

// ########## ТИПЫ

// ########## СТИЛИ
import "./Layouts.styles.css";

// ########## КОМПОНЕНТЫ
import FullPageLayout from "./FullPage/FullPageLayout";
import PageLayout from "./Page/PageLayout";

import GameCaseLayout from "./GameCase/GameCaseLayout";

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const Layouts = {
   FullPage: FullPageLayout,
   Page: PageLayout,
   GameCase: GameCaseLayout,
};

export default Layouts;
