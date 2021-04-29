import React from 'react';
import { AutoComplete, Input } from 'antd'

const Search = ({setSearchTerm}) => {
    return (
        <div>
             <AutoComplete>
                <Input.Search size="large" placeholder="Search" 
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                </AutoComplete>
        </div>
    )
}

export default Search
