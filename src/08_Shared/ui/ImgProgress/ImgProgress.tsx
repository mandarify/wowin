/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: ImgProgress

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import React from "react";
import type { JSX } from "react";
import { useRef, useCallback, useEffect } from "react";

// ########## ТИПЫ
import type IImgProgress from "./ImgProgress.types";

// ########## СТИЛИ
import "./ImgProgress.styles.css";

// ########## КОМПОНЕНТЫ

// ########## МОДУЛИ

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const ImgProgress = ({ srcs, alt, blur, extraClass }: IImgProgress): JSX.Element => {

   const isLoaded = useRef<boolean>(false);

   const imgBoxRef = useRef<HTMLDivElement>(null);
   const imgLowRef = useRef<HTMLImageElement>(null);
   const imgHighRef = useRef<HTMLImageElement>(null);

   useEffect(() => {
      const imgBox = imgBoxRef.current;
      const imgHigh = imgHighRef.current;
      const imgLow = imgLowRef.current;
      if (!imgBox || !imgHigh || !imgLow) return;

      // Проверить изображение в кеше.
      if (imgHigh.complete && imgHigh.naturalWidth > 0) {
         imgHigh.style.transition = 'none';
         imgLow.style.opacity = '0';
         imgLow.style.animation = 'none';
      }

   }, []);

   const handlerError = useCallback(() => {
      const imgBox = imgBoxRef.current;
      const imgLow = imgLowRef.current;
      if (!imgBox || !imgLow) return;

      imgLow.classList.add('img-progress_hidden');
      if (!isLoaded.current) imgBox.classList.add("_empty-shimmer");

   }, []);

   const loadedImgHigh = useCallback(() => {
      const imgBox = imgBoxRef.current;
      const imgHigh = imgHighRef.current;
      const imgLow = imgLowRef.current;
      if (!imgBox || !imgHigh || !imgLow) return;

      imgHigh.classList.remove('img-progress_hidden');
      imgBox.classList.remove("_empty-shimmer");
      imgLow.classList.add("img-hidden");
      isLoaded.current = true;

   }, []);

   return (
      <div ref={imgBoxRef} className={`img-progress-box ${extraClass ?? ''}`.trim()}>
         <img key={`${srcs.low}-low`} ref={imgLowRef} src={srcs.low} alt={alt} onError={handlerError} className={`img-progress img-low _unselect ${blur === false ? '' : 'img-progress-blur'}`.trim()} />
         <img key={`${srcs.high}-high`} ref={imgHighRef} src={srcs.high} alt={alt} onLoad={loadedImgHigh} className="img-progress img-high _unselect img-progress_hidden" />
      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default React.memo(ImgProgress);
