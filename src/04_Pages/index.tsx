/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: PAGES

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

/* TECHNICAL */
import E404Page from "./technical/E404/E404Page";
import ETechWorkPage from "./technical/ETechWork/ETechWorkPage";

/* BASIC */
import HomePage from "./basic/Home/HomePage";
import ProfilePage from "./basic/Profile/ProfilePage";
import InventoryPage from "./basic/Inventory/InventoryPage";
import ShopPage from "./basic/Shop/ShopPage";
import MenuPage from "./basic/Menu/MenuPage";

import MailPage from "./basic/Mail/MailPage";
import SettingsPage from "./basic/Settings/SettingsPage";

/* GAMES */
import CasePage from "./games/CasePage/CasePage";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const Pages = {
   technical: {
      E404: E404Page,
      ETachWork: ETechWorkPage,
   },
   basic: {
      Home: HomePage,
      Profile: ProfilePage,
      Inventory: InventoryPage,
      Shop: ShopPage,
      Menu: MenuPage,
      Mail: MailPage,
      Settings: SettingsPage,
   },
   games: {
      Case: CasePage
   }
};

export default Pages;
