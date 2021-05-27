import { useState, useEffect } from 'react'
import axios from 'axios'
import Artist from '../components/Artist'


const OneArtist = (props) => {
    const [oneArtist, setOneArtist] = useState({})

    const fetchArtist = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/artist/${props.id}`).then((res) => {

            setOneArtist(res.data.artist)
            console.log(res);
        })

    }
    useEffect(fetchArtist, [])


    const signArtist = async (e) =>{

        e.preventDefault()
        let artistId = oneArtist.id
        let labelId = localStorage.getItem('labelId')

        let signn = await axios.put(`${process.env.REACT_APP_API_URL}/artist/signed`, {
           id: artistId,
           labelId: labelId
       })
        // alert('you signed an artist!!');
        console.log(signn)
    }
    return(
        <div>
            <h1>Artist Spotlight</h1>
            <div className="artist-container">
            <div>
                <h4>This artist is looking for a label!</h4>
                <div className="artistDetails" key={oneArtist.id}>
                    <div key={oneArtist.id}>
                        <div to={`/artist/${oneArtist.id}`}>
                            <h3>{oneArtist.name}</h3>
                                <img className="artistPic" src={oneArtist.image} alt="pic" />
                                <p className="titles">Bio: </p>
                                <p>{oneArtist.biograpy}</p>
                                <p className="titles">Marketplace Price: </p>
                                <p>${oneArtist.price}</p>
                                <p className="titles">Genre: </p>
                                <p>{oneArtist.genre}</p>
                                <p className="titles">Rating: </p>
                                <p>{oneArtist.rating}</p>
                                <p className="titles">Label: </p>
                                <p>{oneArtist.labelId}</p>

                        </div>

                    </div>

                    <button onClick={signArtist} className = "signed">
                        I wanna sign this artist!</button>
                </div>
            </div>
        </div>


       </div>
    )

}



export default OneArtist