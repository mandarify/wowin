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
import InventoryPage from "./basic/Inventory/InventoryPage";
import ShopPage from "./basic/Shop/ShopPage";
import MenuPage from "./basic/Menu/MenuPage";

import ProfilePage from "./basic/Profile/ProfilePage";
import ProfileWalletPage from "./basic/ProfileWallet/ProfileWalletPage";
import ProfileFriendsPage from "./basic/ProfileFriends/ProfileFriendsPage";
import ProfileTasksPage from "./basic/ProfileTasks/ProfileTasksPage";

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
      Inventory: InventoryPage,
      Shop: ShopPage,
      Menu: MenuPage,
      Mail: MailPage,
      Settings: SettingsPage,
      Profile: ProfilePage,
      ProfileWallet: ProfileWalletPage,
      ProfileFriends: ProfileFriendsPage,
      ProfileTasks: ProfileTasksPage,
   },
   games: {
      Case: CasePage
   }
};

export default Pages;
