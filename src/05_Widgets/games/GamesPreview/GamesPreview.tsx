/*
:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::

  КОМПОНЕНТ: GamesPreview

:::::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::::::
*/

// ########## STANDART
import { useSelector, useDispatch } from "react-redux";

import { getCurrentLanguage } from "@entities/Language/Language.selectors";
import { getGamesState } from "@entities/Games/Games.selectors";

import { getGames } from "@entities/Games/Games.thunks";

// ########## STANDART
import type { JSX } from "react";
import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { useLocation } from "react-router-dom";

// ########## ТИПЫ
import type { AppDispatch } from "@store/store";

// ########## СТИЛИ
import "./GamesPreview.styles.css";

// ########## КОМПОНЕНТЫ
import { BtnBasic } from "@shared/ui";
import PreviewCase from "./Previews/PreviewCase/PreviewCase";
import { GameIcons } from "@shared/consts/data.consts";

// ########## МОДУЛИ
import { sortCases, getTopGames } from "@shared/funcs/sort";
import { getRemainingSeconds } from "@shared/funcs/time";
import { UPDATE_GAMES_SEC } from "@shared/consts/settings.consts";

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

const GamesPreview = (): JSX.Element => {

   const dispatch = useDispatch<AppDispatch>();

   const language = useSelector(getCurrentLanguage)!;
   const games = useSelector(getGamesState);

   const location = useLocation();
   const trackRef = useRef<HTMLDivElement>(null);

   const data = games.current;
   const tops = useMemo(() => {
      if (!data) return null;
      return getTopGames(data);
   }, [data]);

   const [category, setCategory] = useState<number>(() => {
      if (!data) return 0;
      const type = location.hash.replace('#', '');
      const ctg = data.categories.find(c => c.type === type);
      return ctg?.id ?? 0;
   });

   /* Init data. */
   useEffect(() => {

      // Slides
      if (["idle", "error"].includes(games.status) || (games.status === "success" && getRemainingSeconds(games.date!, UPDATE_GAMES_SEC) <= 0)) {
         dispatch(getGames());
      }

   }, [dispatch, games, data, location]);

   /* Горизонтальный скролл. */
   useEffect(() => {
      const track = trackRef.current;
      if (!track || !data) return;

      const horizontalScroll = (e: WheelEvent) => {
         if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            track.scrollLeft += e.deltaY;
         }
      };

      track.addEventListener("wheel", horizontalScroll, { passive: false });
      return () => track.removeEventListener("wheel", horizontalScroll);
   }, [data]);

   /* Сменить категорию. */
   const changeCategory = useCallback((id: number) => {
      if (!data) return;
      setCategory(id);
      const type = data.categories.find(c => c.id === id)?.type;
      if (type) window.history.replaceState(null, '', `#${type}`);
   }, [data]);

   return (
      <div className="games-preview">

         <div className="games-preview-categories">
            <div ref={trackRef} className={`games-preview-categories-track ${!data ? '_empty-shimmer' : ''}`.trim()}>
               {data && data.categories.map((ctg) =>
                  <BtnBasic key={ctg.type} id={ctg.id} title={language.labels[`game_categories_${ctg.type}`]} isActive={ctg.id === category} icon={GameIcons[ctg.type]} action={changeCategory} />
               )}
            </div>
         </div>

         <div className={`games-preview-content ${!data ? 'games-preview-content_empty' : ''}`.trim()}>

            {data &&
               <div className="games-preview-list">

                  {data.categories[category].type === "top" && tops &&
                     <>
                        {tops.case && tops.case.games.map(game => <PreviewCase key={`top-${game.id}`} game={game} order={game.isTop!} />)}
                     </>
                  }

                  {data.categories[category].type === "case" && <>{data.case && sortCases([...data.case.games]).map(game => <PreviewCase key={`case-${game.id}`} game={game} />)}</>}
                  {data.categories[category].type === "duel" && <div className="game-item games-duel">DUEL</div>}
                  {data.categories[category].type === "pvp" && <div className="game-item games-pvp">PvP</div>}
                  {data.categories[category].type === "solo" && <div className="game-item games-solo">SOLO</div>}

               </div>
            }

            {!data &&
               <>
                  <div className="games-preview-content-placeholder _empty-shimmer" />
                  <div className="games-preview-content-placeholder _empty-shimmer" />
               </>
            }

         </div>

      </div>
   );
};

/* ::::::: :::::::::: :::::::::: :::::::::: :::::::::: :::::::::: ::::::: */

export default GamesPreview;
