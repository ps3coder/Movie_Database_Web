import React from "react";
import ListIcon from '@mui/icons-material/List';
import GridOnIcon from '@mui/icons-material/GridOn';

const Header = ({ isGridView, toggleView }) => (
    <header className="header">
        <div className="header-main">
            <h2 className="header-subtitle">IMDb Charts</h2>
            <h1 className="header-title">IMDb Top 250 Movies</h1>
            <p className="header-description">As rated by regular IMDb voters.</p>
            <button className="toggle-view" onClick={toggleView}>
                {isGridView ? <ListIcon /> : <GridOnIcon />}
            </button>
        </div>
    </header>
);

export default Header;
