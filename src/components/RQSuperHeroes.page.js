import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeros = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroespage = () => {
    const {isLoading, data, isError, error} = useQuery('super-heroes', fetchSuperHeros)

    if(isLoading) {
        return <h2>Loading...</h2>
    }
    if(isError) {
        return <h2>{error.message}</h2>
    }
  return (
    <div>RQSuperHeroes.page
        {data?.data.map(hero => <div key={hero.name}>{hero.name} </div>)}
    </div>
  )
}

export default RQSuperHeroespage