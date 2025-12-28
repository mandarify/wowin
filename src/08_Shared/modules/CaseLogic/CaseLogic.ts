/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  МОДУЛЬ: CaseLogic

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/


// ########## STANDART

// ########## ТИПЫ
import type { CaseLogicParams, CaseLogicOpts, CaseLogicElement } from "./CaseLogic.types"
import type { GameCaseItem } from "@shared/types/games/case.types";

// ########## СТИЛИ

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ
import { random } from "@shared/funcs/random";


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */


class CaseLogic {

   private _opts: CaseLogicOpts;
   private readonly _elements: GameCaseItem[];
   private readonly _maxPermille: number;

   constructor(opts: CaseLogicParams, items: GameCaseItem[]) {

      const { wrapper, element } = opts.sizes;
      const { timeAcc, timeMax, timeDec, wayWrapperCount } = opts.args;

      this._elements = items;
      this._maxPermille = items.reduce((acc, el) => acc + el.permille, 0);

      // Times
      const times = {
         acc: timeAcc,
         max: timeMax,
         dec: timeDec,
         total: timeAcc + timeMax + timeDec,
      };

      // Counts
      const counts = {
         viewElements: Math.ceil(wrapper / element),
         wayWrapperCount,
      };

      // Sizes
      const sizes = {
         wrapper: wrapper,
         element: element,
         path: wayWrapperCount * wrapper,
      };

      // Speeds
      const acc = sizes.path / (timeAcc * ((timeAcc / 2) + timeMax + (timeDec / 2)));
      const max = acc * timeAcc;
      const dec = max / timeDec;

      // Positions
      const position = {
         xStart: (wrapper - (counts.viewElements * element)) / 2 + wrapper,
      };

      this._opts = { times, speeds: { acc, max, dec }, counts, sizes, position };
   };

   /* ========== ========== GETTERS ========== ========== */

   get opts() { return this._opts; };

   get elements() { return this._elements; };

   /* ========== ========== PRIVATE ========== ========== */

   /**
    * Получить элемент по Id.
    * @param id идентификатор элемента.
    * @returns GameCaseItem | undefined
    */
   private getElementById = (id: number): GameCaseItem | undefined => {
      return this._elements.find(el => el.id === id);
   };

   /* Получить случайный элемент. */
   private getElementByRandom = (): GameCaseItem => {
      const index = random(0, this.elements.length - 1);
      return this._elements[index];
   };

   /* ========== ========== PUBLIC ========== ========== */


   /**
    * Получить элемент по значению которое входит в диапазоны шансов.
    * @param value значение.
    * @returns GameCaseItem
   */
   getElementByValue = (value: number): GameCaseItem => {
      let start = 0;
      for (const el of this._elements) {
         start += el.permille;
         if (value <= start) return el;
      }
      return this._elements[this._elements.length - 1];
   };

   /**
    * Случайный элемент.
    * @returns 
    */
   getRandomElement = (): CaseLogicElement => {
      return {
         x: this._opts.position.xStart,
         element: this.getElementByRandom(),
      }
   };

   /**
    * Получить тестовый выиграшный элемент.
    * @returns 
    */
   getWinElement = () => {
      return this.getElementByValue(random(1, this._maxPermille));
   };

   /**
    * Получить набор случайных элементов.
    * @param count количество элементов.
    * @returns CaseLogicElement[]
    */
   getSetElements = (count: number): CaseLogicElement[] => {
      return Array.from({ length: count }, (_, index) => ({
         x: this._opts.position.xStart - (index * this._opts.sizes.element),
         // element: this.getElementByValue(random(1, this._maxPermille)),
         element: this.getElementByRandom(),
      }));
   };

   /**
    * Получить первый набор случайных элементов для заполнения контейнера.
    * @returns CaseLogicElement[]
    */
   getPlaceholderElements = (): CaseLogicElement[] => {
      return this.getSetElements(this._opts.counts.viewElements * 3);
   };

   /**
    * Получить набор элементов с победителем для финального прокрута к победителю.
    * @param winId идентификатор элемента победителя.
    * @returns CaseLogicElement[]
    */
   getWinnerElements = (winId: number): CaseLogicElement[] => {

      const count = this._opts.counts.viewElements * this._opts.counts.wayWrapperCount;

      const winIndex = count - this._opts.counts.viewElements - Math.floor(this._opts.counts.viewElements / 2) - 1;
      const winElement = this.getElementById(winId);

      const winLineElements = this.getSetElements(count);
      winLineElements[winIndex].element = winElement!;

      return winLineElements;
   };

   /* ========== ========== PUBLIC ========== ========== */

   addOffset = (offset: number) => {
      const newPath = offset > 0 ? this._opts.sizes.path - offset + 100 : this._opts.sizes.path;
      const acc = newPath / (this._opts.times.acc * ((this._opts.times.acc / 2) + this._opts.times.max + (this._opts.times.dec / 2)));
      const max = acc * this._opts.times.acc;
      const dec = max / this._opts.times.dec;
      this._opts.speeds = { acc, max, dec };
   };

   getDistanceAt = (t: number): number => {

      if (t <= 0) return 0;

      if (t < this._opts.times.acc) {
         return 0.5 * this._opts.speeds.acc * t * t;
      }

      const S_acc = 0.5 * this._opts.speeds.acc * this._opts.times.acc * this._opts.times.acc;

      if (t < this._opts.times.acc + this._opts.times.max) {
         return S_acc + this._opts.speeds.max * (t - this._opts.times.acc);
      }

      const S_acc_const = S_acc + this._opts.speeds.max * this._opts.times.max;
      const dt = Math.min(t - (this._opts.times.acc + this._opts.times.max), this._opts.times.dec);
      const S_dec = this._opts.speeds.max * dt - 0.5 * this._opts.speeds.dec * dt * dt;

      return S_acc_const + S_dec;
   };

};


/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default CaseLogic;
