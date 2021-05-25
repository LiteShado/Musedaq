import axios from 'axios'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {useParams} from 'react-router-dom'


const Artist = (props) => {
    const { id } = useParams()
    const [artist, setArtist] = useState({})

    const fetchArtist = () => {
     axios.get(`${process.env.REACT_APP_BACKEND_URL}/artist/${id}`)
        .then((response) => {
            setArtist(response.data.artist)
        })
    }
    useEffect(fetchArtist, [])

    const signArtist =(e) =>{
       axios.post(`${process.env.REACT_APP_BACKEND_URL}/artist/${id}`,
       {},
       {
           headers:{
               Authorization: localStorage.getItem('userId')
           }
       })
       .then((response)=>{
       })
   }

    return(
        <div className="artist-container">
        {
            artist ?
            <>
             <div className="artistDetails" key={artist.id}>
                    <h3>{artist.name}</h3>
                    <img className="artistPic" src={artist.image} alt="pic" />
                    <div>
                    <p>{artist.biograpy}</p>
                    </div>
                    <p>{artist.price}</p>
                    <div>
                    <p>{artist.genre}</p>
                    </div>
                    <p>{artist.rating}</p>
            </div>

            <button className="SignThisArtist" onClick={signArtist}>I wanna sign this artist!</button>
            <Link to="/Artists">previous page</Link>
            </>
            :
            <p>Loading...</p>
        }
        </div>
    )
}



export default Artist
