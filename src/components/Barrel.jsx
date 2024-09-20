import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import Header from "./Header";

const Barrel = () => {
    const [data, setData] = useState([]);
    const [isGridView, setIsGridView] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get("https://dummyapi.online/api/movies");
                setData(response.data);
            } catch (error) {
                console.error("Error while fetching movie", error);
            }
        };
        fetchMovies();
    }, []);

    const toggleView = () => {
        setIsGridView(!isGridView);
    };

    const filteredMovies = data.filter((movie) =>
        movie.movie.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Header isGridView={isGridView} toggleView={toggleView} />
            <MovieList movies={filteredMovies} isGridView={isGridView} />
        </div>
    );
};

export default Barrel;
