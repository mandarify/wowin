/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Badges

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART

// ########## ТИПЫ

// ########## СТИЛИ
import "./Badges.styles.css";

// ########## КОМПОНЕНТЫ
import BadgeText from "./BadgeText/BadgeText";
import BadgeLimit from "./BadgeLimit/BadgeLimit";
import BadgeTimer from "./BadgeTimer/BadgeTimer";

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const Badges = {
   Text: BadgeText,
   Limit: BadgeLimit,
   Timer: BadgeTimer,
};

export default Badges;
