import React, {useState, useEffect} from 'react'
import axios from 'axios'
import style from './pocemonCard.module.css'

export default function PokemonCard({url, name}) {
	const [image, setImage] = useState('')

	useEffect(() => {
		const fetchPokemonDetails = async () => {
			const response = await axios.get(url)
			setImage(response.data.sprites.other.dream_world.front_default)
		}
		fetchPokemonDetails()
	}, [url])

  return (
	 <div className={style.pokemon_card}>
		<div className={style.pokemon_block}>
			<img src={image || './images/default.png'} alt={name} />
			<p>{name}</p>
			<button>
				<a href="#!">Подробнее</a>
			</button>
		</div>
	 </div>
  )
}
