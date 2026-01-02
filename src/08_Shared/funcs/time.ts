/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: Time
  - модуль с набором функций для работы со временем.

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

/** Unix Date Now */
export const unixNow = (): number => Math.floor(Date.now() / 1000);

/**
 * Получить строку времени для отображения в интерфейсе.
 * @param sec секунды.
 * @returns форматированная строка.
 */
export const toWebTimeFormat = (sec: number): string => {

   const h = Math.floor(sec / 3600);
   const m = Math.floor((sec % 3600) / 60);
   const s = sec % 60;

   const pad = (n: number) => String(n).padStart(2, "0");

   return h
      ? `${pad(h)}:${pad(m)}:${pad(s)}`
      : `${pad(m)}:${pad(s)}`;
};

/**
 * Получить время человеческого вида.
 * @param sec секунды.
 * @returns 
 */
export const toHumanTime = (sec: number): string => {
   if (sec <= 0) return "0с";

   const DAY = 86400;
   const HOUR = 3600;
   const MIN = 60;

   let seconds = sec;

   let days = Math.floor(seconds / DAY);
   seconds %= DAY;

   let hours = Math.floor(seconds / HOUR);
   seconds %= HOUR;

   let minutes = Math.floor(seconds / MIN);
   seconds %= MIN;

   // ⬆ округление вверх
   if (seconds > 0) {
      minutes += 1;
   }

   if (minutes >= 60) {
      hours += 1;
      minutes = 0;
   }

   if (hours >= 24) {
      days += 1;
      hours = 0;
   }

   // дни → часы
   if (days > 0) {
      return `${days}д ${hours}ч`;
   }

   // часы
   if (hours > 0) {
      return `${hours}ч`;
   }

   // минуты
   if (minutes > 0) {
      return `${minutes}м`;
   }

   // секунды (без округления)
   return `${sec}с`;
};

/**
 * Высчитать сколько осталось секунд с определенного времени некой продолжительности.
 * @param dtStart дата начала.
 * @param duration длительность.
 * @returns количество секунд до конца продолжительности.
 */
export const getRemainingSeconds = (dtStart: number, duration: number): number => {
   const now = Math.floor(Date.now() / 1000);
   return dtStart + duration - now;
};

/**
 * Проверить прошло ли определенное количество дней с начальной даты.
 * @param unixSeconds начальная дата.
 * @param days количество дней для проверки.
 * @returns true | false
 */
export const isWithinDays = (unixSeconds: number, days: number): boolean => {
   const now = Date.now();
   const target = unixSeconds * 1000;
   return now - target < days * 86400000;
}

/**
 * Получить время в ms до обновления таймера.
 * @param sec количество секунд.
 * @returns 
 */
export const getUpdateDelay = (sec: number): number => {
   if (sec <= 0) return 0;

   // секунды
   if (sec < 60) {
      return 1000;
   }

   // минуты (< 59 минут)
   if (sec < 60 * 60) {
      const secondsLeftInMinute = sec % 60;
      return (secondsLeftInMinute || 60) * 1000;
   }

   // часы (>= 1 часа)
   const minutesLeftInHour = Math.floor((sec % 3600) / 60);
   return (minutesLeftInHour || 60) * 60_000;
};
