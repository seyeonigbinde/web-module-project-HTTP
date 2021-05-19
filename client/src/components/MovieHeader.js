import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';

import axios from 'axios';

const MovieHeader = ()=> {


    const [movie, setMovie] = useState('');

    const { id } = useParams();
    const { push } = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/movies/${id}`)
            .then(res=>{
                setMovie(res.data);
            })
            .catch(err=>{
                console.log(err.response);
            })
    }, [id]);


    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>IMDB Movie Database</h2>
        </div>
        <div className="col-sm-6">
            <Link to={`/movies/add/${movie.id}`} className="btn btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
            <Link to="/movies" className="btn btn-primary">View All Movies</Link>
        </div>
        </div>
    </div>);
}

export default MovieHeader;