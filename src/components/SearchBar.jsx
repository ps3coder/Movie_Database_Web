import React from "react";
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = ({ searchTerm, setSearchTerm }) => (
    <TextField
        variant="outlined"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            ),
        }}
        className="search-bar"
    />
);

export default SearchBar;
