import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Artist from '../components/Artist'


const OneArtist = (props) => {

    const [oneArtist, setOneArtist] = useState({})
    const {id} = useParams()

    const fetchArtist = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/artist/${props.id}`).then((res) => {

            setOneArtist(res)
            console.log(res);
        })

    }
    useEffect(fetchArtist, [props.id])


    const signArtist = async (e) =>{

        e.preventDefault()
        let artistId = oneArtist.id
        let labelId = localStorage.getItem('labelId')

        let signn = await axios.put(`${process.env.REACT_APP_API_URL}/artist/signed`, {
           id: artistId,
           labelId: labelId
       })
        alert('you signed an artist!!');
        window.location.reload()
        console.log(signn)
    }
    return(
        <div>
            <h1>Artist Spotlight</h1>
            <Artist />


       </div>
    )

}



export default OneArtist
