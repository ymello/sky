import React from "react";
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

export function TabNav() {
  const { data: horrorMovies } = useQuery("horrorMovies", fetchHorrorMovies);
  const { data: brazilianMovies } = useQuery(
    "brazilianMovies",
    fetchBrazilianMovies
  );
  const { data: dcComicsMovies } = useQuery(
    "dcComicsMovies",
    fetchDCComicsMovies
  );
  const { data: marvelMovies } = useQuery("marvelMovies", fetchMarvelMovies);

  const { data: PopularMovies } = useQuery("movieData", fetchPopularMovies);
  return (
    <Tabs.Root
      className="flex flex-col shadow-[0_2px_10px] shadow-blackA2"
      defaultValue="tab1"
    >
      <Tabs.List className="shrink-0 flex border-b border-mauve6">
        <Tabs.Trigger
          className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
          value="tab1"
        >
          Filmes
        </Tabs.Trigger>
        <Tabs.Trigger
          className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
          value="tab2"
        >
          Séries
        </Tabs.Trigger>
        <Tabs.Trigger
          className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
          value="tab3"
        >
          Canais
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">
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
      </Tabs.Content>
    </Tabs.Root>
  );
}
