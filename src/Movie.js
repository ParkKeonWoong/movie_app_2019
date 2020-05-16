import React from "react";
import Proptypes from "prop-types";

function Movie({id, year, title, summary, poster}){
return <h1>{id}</h1>;
}

Movie.propTypes = {
    id : Proptypes.number.isRequired,
    year : Proptypes.number.isRequired,
    title : Proptypes.string.isRequired,
    summary : Proptypes.string.isRequired
}
export default Movie;