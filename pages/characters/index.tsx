import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import React ,{FC} from 'react'
import { Characters, GetCharacterResults } from '../../types'
import imageLoader from '../../imageLoader'
import Link from 'next/link'
const Home : NextPage<{characters: Characters[]}> = ({characters}) => {
  // console.log(characters)
  return (
  <div>
    <p>PUBLIC ENV KEY: { process.env.NEXT_PUBLIC_DB_CONNECT}</p>
    <p>PRIVATE ENV KEY: { process.env.DB_CONNECT}</p>
    
    {
        characters.map((item) =>(
          <Link href={`/characters/${item.id}`}>
            <div key={item.id}>
            <p>{item.name}</p>
            <Image 
            loader={imageLoader}
            src={item.image}
            alt={item.name}
            unoptimized={true}
            width={'200'}
            height={'200'}
            />
          </div>
          </Link>
        ))
    }
  </div>
    // <>hello</>
  )
}


export const getStaticProps:GetStaticProps = async(context)=>{
    let res = await fetch("https://rickandmortyapi.com/api/character")
    let {results}:GetCharacterResults = await res.json()
    return{
      props:{
        characters:results
      }
    }
}
export default Home