/* eslint-disable react-hooks/rules-of-hooks */
import * as Tabs from "@radix-ui/react-tabs";
import { useQuery } from "react-query";
import {
  fetchHorrorMovies,
  fetchBrazilianMovies,
  fetchDCComicsMovies,
  fetchMarvelMovies,
  fetchPopularMovies,
} from "../service/movies.js";
import { FeaturedRow } from "./FeaturedRow.js";
import { Row } from "./Row.js";
import { Loading } from "./Loading.js";
import { useEffect, useState } from "react";

export function TabNav() {
  const [allDataLoadedFlag, setAllDataLoadedFlag] = useState(false);

  const { data: horrorMovies, isLoading: isLoadingHorrorMovies } = useQuery(
    "horrorMovies",
    fetchHorrorMovies
  );
  const { data: brazilianMovies, isLoading: isLoadingBrazilianMovies } =
    useQuery("brazilianMovies", fetchBrazilianMovies);
  const { data: dcComicsMovies, isLoading: isLoadingDCComicsMovies } = useQuery(
    "dcComicsMovies",
    fetchDCComicsMovies
  );
  const { data: marvelMovies, isLoading: isLoadingMarvelMovies } = useQuery(
    "marvelMovies",
    fetchMarvelMovies
  );
  const { data: PopularMovies, isLoading: isLoadingPopularMovies } = useQuery(
    "PopularMovies",
    fetchPopularMovies
  );

  const allDataLoaded =
    !isLoadingHorrorMovies &&
    !isLoadingBrazilianMovies &&
    !isLoadingDCComicsMovies &&
    !isLoadingMarvelMovies &&
    !isLoadingPopularMovies;

  useEffect(() => {
    if (allDataLoaded) {
      const delay = setTimeout(() => {
        setAllDataLoadedFlag(true);
      }, 2000);

      return () => clearTimeout(delay);
    }
  }, [allDataLoaded]);

  if (!allDataLoadedFlag) {
    return <Loading />;
  }

  return (
    <>
      <Tabs.Root className="flex flex-col" defaultValue="tab1">
        <Tabs.List className="shrink-0 flex">
          <Tabs.Trigger
            className="bg-white px-5 py-4 flex-1 font-bold flex items-center justify-center first:rounded-tl-md last:rounded-tr-md hover:text-gray-700 data-[state=active]:text-red-500 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-red-500 outline-none cursor-default"
            value="tab1"
          >
            Filmes
          </Tabs.Trigger>
          <Tabs.Trigger
            className="bg-white px-5 py-4 flex-1 font-bold flex items-center justify-center first:rounded-tl-md last:rounded-tr-md hover:text-gray-700 data-[state=active]:text-red-500 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-red-500 outline-none cursor-default"
            value="tab2"
          >
            Séries
          </Tabs.Trigger>
          <Tabs.Trigger
            className="bg-white px-5 py-4 flex-1 font-bold flex items-center justify-center first:rounded-tl-md last:rounded-tr-md hover:text-gray-700 data-[state=active]:text-red-500 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-red-500 outline-none cursor-default"
            value="tab3"
          >
            Canais
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
      <div>
        {PopularMovies && (
          <FeaturedRow rowId="0" title="Up Coming" movies={PopularMovies} />
        )}
        <div className="container py-8 space-y-8">
          {horrorMovies && (
            <Row rowId="1" title="Os mais temidos" movies={horrorMovies} />
          )}
          {brazilianMovies && (
            <Row
              rowId="2"
              title="Coletania nacional"
              movies={brazilianMovies}
            />
          )}
          {dcComicsMovies && (
            <Row rowId="3" title="DC comics" movies={dcComicsMovies} />
          )}
          {marvelMovies && (
            <Row rowId="4" title="Marvel" movies={marvelMovies} />
          )}
        </div>
      </div>
    </>
  );
}
