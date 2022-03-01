import React, {ChangeEvent, ReactElement, useContext} from 'react';
import './search.css';
import {TextField} from "@material-ui/core";
import SearchContext, {SearchData} from "../../providers/SearchProvider";

const Search = ({onChange}: {onChange: (event: ChangeEvent<HTMLInputElement>) => void}): ReactElement => {
    const {keyword} = useContext<SearchData>(SearchContext);
    return (
        <div className='search'>
            <TextField label="Search Teams" variant="outlined" value={keyword} onChange={onChange}/>
        </div>
    );
}

export default Search;