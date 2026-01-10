/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: ProfileTasksPage

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
// import type IProfilePage from "./ProfilePage.types";

// ########## СТИЛИ
import "./ProfileTasksPage.styles.css";

// ########## КОМПОНЕНТЫ
import { TitleMain } from "@shared/ui";

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const ProfileTasksPage = (): JSX.Element => {

   return (
      <div>
         <TitleMain title="задания" icon="chess-queen" />
      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default ProfileTasksPage;
