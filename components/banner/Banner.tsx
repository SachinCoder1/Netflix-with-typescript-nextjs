import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Movie } from '../../typings'

interface Props {
  netflixOriginals: Movie[];
}
const Banner = ({ netflixOriginals}:Props) => {
    const [movie, setmovie] = useState<Movie | null>(null)
    useEffect(() => {
        setmovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    }, [netflixOriginals])
    
  return (<div>
      <div>
          <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
      </div>

  </div>)
}

export default Banner