import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PokemonCard from '../../components/pocemonCard/PokemonCard'
import Pagination from '../../components/pagination/Pagination'
import style from './PokemonPage.module.css'

export default function PokemonPage() {
	const [pokemon, setPokemon] = useState([])
	const [offset, setOffset] = useState(0)
	const limit = 12
	const page = offset / limit + 1
	const URL = 'https://pokeapi.co/api/v2/pokemon/'

	useEffect(() => {
		axios.get(`${URL}?limit=${limit}&offset=${offset}`).then((response) => {
			setPokemon(response.data.results)
		})
	}, [offset])

	const handleNext = () => {
		setOffset(prev => prev + limit)
	}

	const handlePrev = () => {
		if (offset > 0)
		setOffset(prev => prev - limit)
	}

  return (
	 <div className={style.pokemonPage}>
		<div className={style.text_block}>
			<h2>Pokemon</h2>
		</div>
		<div className={style.pocemonList}>
			{pokemon.map((poke, index) => (
				<PokemonCard key={index} url={poke.url} name={poke.name} />
			))}
		</div>
		<Pagination prev={handlePrev} next={handleNext} page={page} />
	 </div>
  )
}
