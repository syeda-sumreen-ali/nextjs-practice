import { GetCharacterResults , Characters} from '../../types'
import React, { FC, ReactNode } from 'react'
import Image from 'next/image'
import imageLoader from '../../imageLoader'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import style from '../../styles/character.module.css'

const CharactersDetails = ({character}:{character:Characters}) => {
    const router= useRouter()
    console.log(router.query.id)


  
  return (
    <div 
   className={style.container}
    key={character.id}>
            <p>{character.name}</p>
            <p>server side rendering</p>
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

// CharactersDetails.getLayout= function getLayout(page: typeof CharactersDetails){
//     return(
//         <Layout>{page}</Layout>
//     )
// }

export const getServerSideProps:GetServerSideProps = async(context)=> {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`)
    const character:Characters= await res.json()
    return{
        props:{
            character
        }
    }
}
export default CharactersDetails