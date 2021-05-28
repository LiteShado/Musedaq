import { useState, useEffect } from 'react'

import axios from 'axios'



const Artist = (id) => {
    console.log(id)
    const [oneArtist, setOneArtist] = useState([])

    const FetchArtist = async () => {
        let ress = await axios.get(`${process.env.REACT_APP_API_URL}/artist/${id}`, {
            setOneArtist
        })
        // console.log(ress)

        // const foundArtist = ress.data.artist
        // setOneArtist(foundArtist)

        }

        useEffect(() => {
            FetchArtist()
        }, [])


    const signArtist = async (e) =>{

        e.preventDefault()
        let artistId = oneArtist.id
        let labelId = localStorage.getItem('labelId')

        let signn = await axios.put(`${process.env.REACT_APP_API_URL}/artist/signed`, {
           id: artistId,
           labelId: labelId
       })
        alert('you signed an artist!!');
        console.log(signn)
    }


    return (
        <div className="artist-container">
            <div>
                <div className="artistDetails" key={oneArtist.id}>
                    <div key={oneArtist.id}>
                        <div to={`/artist/${oneArtist.id}`}>
                            <h3>{oneArtist.name}</h3>
                                <img className="artistPic" src={oneArtist.image} alt="pic" />
                                <p>{oneArtist.biograpy}</p>
                                <p>{oneArtist.price}</p>
                                <p>{oneArtist.genre}</p>
                                <p>{oneArtist.rating}</p>
                        </div>

                    </div>

                    <button onClick={signArtist} className = "signed">
                        I wanna sign this artist!</button>
                </div>
            </div>
        </div>
    )

}


export default Artist
