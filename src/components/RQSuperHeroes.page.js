import React from 'react'
import { useQuery } from 'react-query'

import axios from 'axios'

const fetchSuperHeros = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroespage = () => {
    const {isLoading, data, isError, error, isFetching,refetch} = useQuery('super-heroes', fetchSuperHeros,{
        // staleTime: 3000,
        // refetchOnMount: false,
        // refetchOnWindowFocus: false,
        // refetchInterval: false,
        enabled: false,
    })

    console.log("isloading",isLoading, isFetching)

    if(isLoading) {
        return <h2>Loading...</h2>
    }
    if(isError) {
        return <h2>{error.message}</h2>
    }
  return (
    <div>RQSuperHeroes.page
        <button onClick={refetch}>Fetch Data</button>
        {data?.data.map(hero => <div key={hero.name}>{hero.name} </div>)}
    </div>
  )
}

export default RQSuperHeroespage