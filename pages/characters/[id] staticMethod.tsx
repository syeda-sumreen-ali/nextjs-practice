import { GetCharacterResults , Characters} from '../../types'
import React, { FC } from 'react'
import Image from 'next/image'
import imageLoader from '../../imageLoader'

const CharactersDetails:FC<{character:Characters}> = ({character}) => {
  return (
    <div key={character.id}>
            <p>{character.name}</p>
            <Image 
            loader={imageLoader}
            src={character.image}
            alt={character.name}
            unoptimized={true}
            width={'200'}
            height={'200'}
            />
          </div>
  )
}

export async function getStaticPaths() {
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const {results}: GetCharacterResults= await  res.json();

    return{
        paths: results.map((character)=>{
            return{ params:{id:String(character.id)}}
        }),
        fallback:false
    }
    
}

export async function getStaticProps({params}:{params:{id:string}}) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
    const character:Characters= await res.json()
    return{
        props:{
            character
        }
    }
}
export default CharactersDetails