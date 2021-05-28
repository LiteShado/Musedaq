import { useState, useEffect } from 'react'
import axios from 'axios'


const OneArtist = (props) => {
    const [oneArtist, setOneArtist] = useState({})
    const [labelTitle, setLabelTitle] = useState('')
    const [labelNum, setLabelNum] = useState('')
    const [oneArtistId, setOneArtistId] = useState('')


    const fetchArtist = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/artist/${props.id}`).then((res) => {
            console.log(res)
            setOneArtist(res.data.artist)
            setLabelNum(res.data.artist.labelId)
            setOneArtistId(res.data.artist.id)
        })

    }

    let idd = localStorage.getItem('theLabelId')
    console.log(oneArtistId)
    console.log(labelNum)

    let id = labelNum

    const FetchLabelName = async () => {
        console.log(id)
        try {
            let response = await axios.post(`${process.env.REACT_APP_API_URL}/label/mylabelname`,{
                id
            })
            setLabelTitle(response.data.userLabelName.name)

        } catch (error) {
            console.log({error});
        }
    }

    const signArtist = async (e) =>{
        e.preventDefault()
        let signn = await axios.put(`${process.env.REACT_APP_API_URL}/artist/signed`, {
            id: oneArtistId,
            labelId: idd
       })
        console.log(signn)
    }

    useEffect(() => {
        fetchArtist()
        FetchLabelName()
}, [])


    return(
        <div>
            <h1>Artist Spotlight</h1>
            <div className="artist-container">
            <div>
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
                                <p>{labelTitle}</p>

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
