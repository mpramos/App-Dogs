import React from 'react'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function Dogs() {
    const {data, error}=useSWR('https://rickandmortyapi.com/api/character',fetcher)
    if(error) return <div>Failed to load</div>
    if(!data) return <div>loading...</div>
    const arrayData=data.results
  const recorrido=arrayData.map(item=>{
    const name=item.name;
    console.log('name',name)
    return name
  })

    console.log(arrayData[1].name)
    return (
    <div>hello Dogs {recorrido}</div>
  )
}
