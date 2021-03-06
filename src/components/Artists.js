import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Artists = (props) => {
    console.log(props)
    const [allArtists, setAllArtists] = useState([])
    const [labelTitle, setLabelTitle] = useState('')
    const [genre,setGenre] = useState('')


    const FetchAllArtists = async () => {
        let response = await axios.get(`${process.env.REACT_APP_API_URL}/artist`, {
            setAllArtists
    })
    console.log(response)
    // let i

    const array = response.data.artist
    setAllArtists(array)

    }

    const findGenre = async (e) => {
        e.preventDefault()
        let foundGenre = genre
        let genreSearch = await axios.get(`${process.env.REACT_APP_API_URL}/genre/search`, {
                genre: foundGenre
    })
    console.log(genreSearch)
    setAllArtists(genreSearch)
    }

    let id = localStorage.getItem('id')

    const FetchLabelName = async () => {
        console.log(id)
        try {
            let response = await axios.post(`${process.env.REACT_APP_API_URL}/label/mylabel`,{
                userId: id
            })
            console.log(response)
            setLabelTitle(response.data.userLabel.name)
            localStorage.setItem('theLabelId', response.data.userLabel.id)
            localStorage.setItem('labelName', response.data.userLabel.name)

        } catch (error) {
            console.log({error});
        }
    }

    // for (i = 0; i<array.length; i++) {
    //     console.log(array[i].artist)
    //     // setLyric(array[i].lyric)
    //     console.log(artist)


    useEffect(() => {
        FetchAllArtists()
        FetchLabelName()
}, [])



    return(
        <div className="allArtists">
            <h2>Official Musedaq Directory</h2>

            <form onSubmit={findGenre}>

            <label for="genre">Choose your Genre:</label>

            <select name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
                        <option>Select Genre</option>
                        <option name="HipHop" value="HipHop">Hip Hop</option>
                        <option value="Rap" name="Rap">Rap</option>
                        <option value="Pop" name="Pop">Pop</option>
                        <option value="RnB" name="RnB">RnB</option>
                        <option value="Acoustic" name="Acoustic">Acoustic</option>
                        <option value="EDM" name="EDM">EDM</option>
                        <option value="Country" name="Country">Country</option>
                        <option value="Rock" name="Rock">Rock</option>

            </select>
                        <button>
                        Search</button>
            </form>

        {
            allArtists.length ?
            allArtists.map((artist) => {
                return<div key={artist.id}>

                            <div>
                            <Link to={`/artist/${artist.id}`}>
                                    <h3 className="artist">{artist.name}</h3>
                            </Link>
                                    <img className="artistPics" src= {artist.image} alt="pic" />
                                    <div>
                                    <p className="titles">Bio: </p>
                                    <p className="artistBio">{artist.biograpy}</p>
                                    </div>
                                    <p className="titles">Marketplace Price: </p>
                                    <p className="artistPrice">${artist.price}</p>
                                    <div>
                                    <p className="titles">Genre: </p>
                                    <p>{artist.genre}</p>
                                    </div>
                                    <p className="titles">Rating: </p>
                                    <p>{artist.rating}</p>
                                    {/* <p className="titles">Label: </p>
                                    <p>{labelTitle}</p> */}
                                    <div className = "divider"> __________________
                                    __________________
                                    </div>
                            </div>
                        </div>
              })
              :
              <p>Loading...</p>
          }
      </div>
    )
}



export default Artists
