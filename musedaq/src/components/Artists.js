import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'




const Artists = (props) => {
    const [allArtists, setAllArtists] = useState([])

    const fetchAllArtists = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/artists`)
        .then((response) => {
            setAllArtists(response.data.product)
        })
    }
    useEffect(fetchAllArtists,[])


    return(
        <div className="allArtists">
            <h2>Official Musedaq Directory</h2>
        <div>
        {
            allArtists.length ?
            allArtists.map((artist) => {
                return <div key={artist.id}
                            className="artists">
                            <Link to={`/artists/${artist.id}`}>
                                <div>
                                    <h3 className="artist">{artist.name}</h3>
                                    <img className="artistPics" src={artist.image} alt="pic" />
                                    <div>
                                    <p className="artistBio">{artist.biograpy}</p>
                                    </div>
                                    <p className="ProductT">{artist.price}</p>
                                    <div>
                                    <p>{artist.genre}</p>
                                    </div>
                                    <p>{artist.rating}</p>
                                </div>
                            </Link>
                        </div>
              })
              :
              <p>Loading...</p>
          }
      </div>
      </div>
    )
}



export default Artists
