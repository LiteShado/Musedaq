

import { useState, useEffect } from 'react'
import axios from 'axios'


const MyProfile = (props) => {

    let id = localStorage.getItem('id')

    const [myLabel,setMyLabel] = useState('')
    console.log(id)

    const fetchLabel= async () =>{
        console.log(id)
        try {
            let response = await axios.post(`${process.env.REACT_APP_API_URL}/label/mylabel`,{
                userId: id
            })
            console.log(response)
            setMyLabel(response.data.userLabel)
            localStorage.setItem('theLabelId', response.data.userLabel.id)
            localStorage.setItem('labelName', response.data.userLabel.name)

        } catch (error) {
            console.log({error});
        }
    }

    const fetchArtists= async () =>{
        console.log(id)
        try {
            let response = await axios.post(`${process.env.REACT_APP_API_URL}/label/mylabel`,{
                userId: id
            })
            console.log(response)
            setMyLabel(response.data.userLabel)

        } catch (error) {
            console.log({error});
        }
    }

    useEffect(() => {
        fetchLabel()
        fetchArtists()
    }, [])



    const handleDelete = async () => {
        let userId = localStorage.getItem('userId')
        try {
            let resss = await axios.delete(`${process.env.REACT_APP_API_URL}/label/delete`, {
            headers: {
                authorization: userId
            }
        })
        console.log(resss)
        localStorage.clear()

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>

                    <h1>My Label</h1>
                    <div className="userDetails" key={myLabel.id}>
                            <p className="titles">Name: </p>
                            <p>{myLabel.name}</p>
                    </div>
                    {/* <h3> Delete My Label </h3>
                    <form onSubmit={handleDelete}>

                    <button type="submit" value="submit">delete</button>
                    </form> */}

       </div>
    )
}



export default MyProfile
