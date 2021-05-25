

import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'
import env from 'react-dotenv'
import {UserContext} from '../context/UserContext'


const Label = (props) => {

    const {userState} =useContext(UserContext)
    const [user, setUser] = userState
    const [myArtists, setMyArtists] = useState(null)

    const fetchArtists= async () =>{

        try {
            let response = await axios.get(`${env.API_URL}/label/${props.match.params.id}`,{

                headers:{
                    Authorization: localStorage.getItem('userId')
                }
            })

            setMyArtists(response.data.artists)

        } catch (error) {
            console.log({error});
        }
    }

    useEffect(fetchArtists)


    return(
        <div>
            <h2>My Artists</h2>
                <div>
                    {
                        myArtists.length > 0 ?
                        myArtists.map((order)=>{
                        return <div className="artists" key={myArtists.id}>
                        <Link to={`/artists/${myArtists.id}`}>
                        </Link>
                        </div>
                })
                :
                        <p>
                            It's time to start signing some artists!
                        </p>
                    }
                </div>
       </div>
    )
}



export default Label
