

import { useState, useEffect } from 'react'
import axios from 'axios'
import env from 'react-dotenv'


const MyProfile = (props) => {

    let id = localStorage.getItem('id')
    const labelName = localStorage.getItem('labelName')

    const [newLabel,setNewLabel] = useState(null)
    const [myLabel,setMyLabel] = useState(null)
    const [newLabelMade, setNewLabelMade] = useState(null)
    console.log(id)

    const createLabel = async (e) => {
        let userId = localStorage.getItem('id')
        // let newEmail = localStorage.getItem('email')
        try {
        let ress = await axios.post(`${process.env.REACT_APP_API_URL}/label/new`, {
            name: newLabel,
            userId: userId
        })
            setNewLabelMade(ress)
            console.log(newLabelMade)
            localStorage.setItem('labelName', labelName)
            localStorage.setItem('labelId', ress.data.label.labelId)


        } catch (error) {
            console.log(error)
        }
    }

    // const fetchLabel= async () =>{
    //     try {
    //         let response = await axios.post(`${process.env.REACT_APP_API_URL}/label/mylabel`,{
    //             userId: id
    //         })
    //         console.log(response)
    //         setMyLabel(response.data.user)
    //         console.log(myLabel)

    //     } catch (error) {
    //         console.log({error});
    //     }
    // }

    // useEffect(() => {
    //     fetchLabel()
    // }, [])





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


                <h3>Create Your Label </h3>
                    <form onSubmit={createLabel}>

                    <label htmlFor="new-label"><h4>What will your record label be called?</h4></label>

                    <input name="newName" placeholder="New Label Name" type="text" value={newLabel} onChange={(e) => setNewLabel(e.target.value)} />

                    <input type="submit" value="submit"/>
                    </form>

                    {/* <h1>My Label</h1>
                    <div className="userDetails" key={user.id}>
                            <p className="titles">Name: </p>
                            <p>{user.name}</p>
                            <p className="titles">Email: </p>
                            <p>{user.email}</p>
                            <p className="titles">Label: </p>
                            <p>{user.labelId}</p>
                    </div> */}
                    <h3> Delete My Label </h3>
                    <form onSubmit={handleDelete}>

                    <button type="submit" value="submit">delete</button>
                </form>

       </div>
    )
}



export default MyProfile
