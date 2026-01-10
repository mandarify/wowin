/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: ProfileFriendsPage

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import type { JSX } from "react";

// ########## ТИПЫ
// import type IProfilePage from "./ProfilePage.types";

// ########## СТИЛИ
import "./ProfileFriendsPage.styles.css";

// ########## КОМПОНЕНТЫ
import { TitleMain } from "@shared/ui";

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const ProfileFriendsPage = (): JSX.Element => {

   return (
      <div>
         <TitleMain title="друзья" icon="chess-queen" />
      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default ProfileFriendsPage;
