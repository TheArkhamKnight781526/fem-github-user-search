// @ts-ignore
import preact from "preact";
import "@/SCSS/search.scss";
import {useRecoilValue, useRecoilState, atom} from "recoil";
import { themeAtom } from "@/app";
import SearchIcon from "@/assets/icon-search.svg";
import { useDebouncedCallback } from 'use-debounce-preact';
import SearchResults from "@/components/SearchResults";
import { useState } from "preact/compat";

export const search = atom({
  key: "search-value",
  default: ""
});

export const searchResults = atom({
  key: 'results',
  default: {items: []}
})

export const showAtom = atom({
  key: 'show',
  default: false
});

const Searchbar: preact.FunctionalComponent = () => {
    const theme = useRecoilValue(themeAtom);
    const [searchValue, setSearchValue] = useRecoilState(search);
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useRecoilState(searchResults);
    const [showResults, setShowResults] = useRecoilState(showAtom);

    const [debounced] = useDebouncedCallback(
      (value) => {
        setSearchValue(value);
        fetch(`https://api.github.com/search/users?q=${value}`).then(res => res.json().then(res => {
          setResults(res);
        }));
        setLoading(false);
      }, 1000, []
    )
  return <div id="search">
      <div id="searchbar" className={theme}>
        <SearchIcon />
        <input type="text" id="search" placeholder="Search GitHub username..."
               onChange={(e) => {
                // @ts-ignore
                 if(e.target.value && e.target.value !== '') {
                  setShowResults(true);
                  setLoading(true);
                  // @ts-ignore
                   debounced(e.target.value);
                } else {
                  setShowResults(false);
                  setLoading(false);
                }
        }}/>
        <button id="button-search">Search</button>
      </div>
      <SearchResults loading={loading} />
    </div>
}

export default Searchbar;