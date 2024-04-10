import React from 'react'
import CardDetailComponent from '../compoents/CardDetailComponent'
import {getMovieByIdService} from '@/services/movies.service';

const DetailPage = async ({params}) => {
    const movieId = params.movieId;
    const data = await getMovieByIdService(movieId);
    const movie = data.payload;
  return (
    <div>
        <CardDetailComponent movie = {movie}/>
    </div>
  )
}

export default DetailPage