import { Redirect } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import axios from 'axios'
import env from 'react-dotenv'

const signArtist = (props) => {

    const [label, setLabel] = useState('')
    const [savedArtist, setSavedArtist] = useState([])
    const [user, setUser] = useContext(UserContext)
    const [shouldReload, setShouldReload ] = useState(true)
    const [redirectToOrder, setRedirectToOrder] = useState(false)

    const fetchSavedArtist = async () =>{
        try {
            let response = await axios.get(`${env.API_URL}/users/label`,{

                headers:{
                    Authorization: localStorage.getItem('userId')

                }
            })
            setSavedArtist(response.data)

        } catch (error) {
            console.log({error});
        }
    }
    useEffect(fetchSavedArtist, [])


    const removeSaved = async (artistId) => {
        try {
            let response = await axios.delete(`${env.API_URL}/users/label/${artistId}`, {
                headers: {
                    Authorization: localStorage.getItem('userId')
                }
            })

            setShouldReload(!shouldReload)

        } catch (error) {
            console.log({error});
        }
    }

    useEffect(fetchSavedArtist,[shouldReload])


   const calculator = () => {

    let c = 0
    for(let i=0; i < savedArtist.length; i++){
        let newString = savedArtist[i].price.replace('$', '')
        let noDollar = parseFloat(newString)
        c += noDollar
    }
    return c
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${env.API_URL}/artist/${artistId}`, {

        label

    },{
        headers: {
            Authorization: localStorage.getItem('userId')
        }
    })
    .then((response) => {

        setShouldReload(!shouldReload)
        setRedirectToOrder(true)
    })
}


    return(
        <div>
            <h1 className="header">Newest Label Signees</h1>

            {
                savedArtist.length > 0 ?
                savedArtist.map((artist, i)=>{
                    return <div key={i}>
                        <p>{artist.name}</p>
                        <img src={artist.image} alt="" />
                        <p>{artist.price}</p>
                        <button onClick={()=> removeSaved(artist.id)}>Remove Signee</button>
                        </div>

                })
                :
                <p>
                    You have no signees
                </p>
            }
            <p>Total price:${calculator()}</p>

            <div>
                <form onSubmit={handleSubmit}>
                    <label><h2>Your Label</h2></label>
                    <input value={label} onChange={(e)=> {setLabel(e.target.value) }} />

                    <input id="submit-button" type="submit" value="Sign This Artist" />
                </form>
            </div>
            {
                redirectToOrder &&
            <Redirect to="/label"></Redirect>
            }
        </div>
    )
}



export default signArtist
