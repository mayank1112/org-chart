import {createContext} from "react";

export interface SearchData {
    keyword: string
}
const SearchContext = createContext<SearchData>({keyword: ''});

export default SearchContext;
