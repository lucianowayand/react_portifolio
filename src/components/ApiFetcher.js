import axios from "axios"
import { useState } from "react"
import Capitalize from "../services/StringDealer"

export default function ApiFetcher(){
    const [url, setUrl] = useState('pikachu')
    const [pokemonName , setPokename] = useState('Pikachu')
    const [imgUrl, setImgUrl] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png')

    const base_url = 'https://pokeapi.co/api/v2/pokemon/'
    const handleChange = event =>{
        setUrl(event.target.value)

        console.log("Url is:", base_url+String(url))
    }

    function getPokemon(){
        axios.get(base_url+url).then((response) =>{
            setPokename(Capitalize(response.data.species.name))
            setImgUrl(response.data.sprites.front_default)
            console.log(response.data)
        }).catch((err)=>{
            console.warn(err)
            alert(err.message)
        })
    }

    return(
        <div>
            <h1>ApiFetcher</h1>
            <p>Insert a pokemon name in the input — Information fetched from <a href="https://pokeapi.co">pokeapi.co</a></p>
            <div>
                <img src={imgUrl} alt={pokemonName}></img>
                <p>{pokemonName}</p>
                <input type="text" 
                    id="poke_name_input" 
                    name="poke_name" 
                    onChange={handleChange}
                    value={url}> 
                </input>
                <button onClick={getPokemon}>Enviar</button>
            </div>
            
        </div>
        

    )
}