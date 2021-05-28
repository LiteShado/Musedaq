

import { useState, useEffect } from 'react'
import axios from 'axios'



const MyProfile = (props) => {

    const [user, setUser] = useState({})
    let id = localStorage.getItem('id')
    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')
    const [myLabels,setMyLabels] = useState('')


    console.log(id)

    const fetchProfile= async () =>{
        try {
            let response = await axios.post(`${process.env.REACT_APP_API_URL}/users/profile`,{
                id: id
            })
            console.log(response)
            setUser(response.data.user)

        } catch (error) {
            console.log({error});
        }
    }

    const fetchLabel= async () =>{
        try {
            let response = await axios.post(`${process.env.REACT_APP_API_URL}/label/mylabels`,{
                userId: id
            })
            console.log(response.data)

            setMyLabels(response.data)
            console.log(myLabels)

        } catch (error) {
            console.log({error});
        }

    }

    useEffect(() => {
        fetchProfile()
        fetchLabel()
    }, [])


    const [newName,setNewName] = useState('')
    const [newEmail,setNewEmail] = useState('')
    const [newProfile, setNewProfile] = useState('')

    const editSubmit = async (e) => {
        e.preventDefault()

        // let newPassword = localStorage.getItem('password')
        // let newEmail = localStorage.getItem('email')
        try {

            let email = localStorage.getItem('email')
            let ress = await axios.put(`${process.env.REACT_APP_API_URL}/users/edit`, {
                name: newName,
                email: email
                // password: newPassword
            })
            setNewProfile(ress)
            console.log(ress)
            localStorage.setItem('name', newName)
            localStorage.setItem('email', newEmail)
            console.log(newProfile)


        } catch (error) {
            console.log(error)
        }
    }


    const handleDelete = async () => {
        let userId = localStorage.getItem('userId')
        try {
            let resss = await axios.delete(`${process.env.REACT_APP_API_URL}/users/delete`, {
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

    return (
        <div>
        {/* {
        myLabel.length ?
            myLabel.map((name) => {
        return<div> */}
        <div className="background">
            <h2>My Profile</h2>
                <div className="userDetails" key={user.id}>
                                <h3 className="titles">Name: </h3>
                                <p>{user.name}</p>
                                <p>______________</p>
                                <h3 className="titles">Email: </h3>
                                <p>{user.email}</p>
                                <p>______________</p>

                                <h3 className="titles">Labels: </h3>


            <div>
                {
                myLabels.length ?
                    myLabels.map((data) => {
                return<div>
                                <p>{data.name}</p>
            </div>
                    }
                    )
            :
            <p>{myLabels.name}</p>
            }
         <p>______________</p>

        </div>
                <h1>Edit Your Profile </h1>
                    <form onSubmit={editSubmit}>

                        <input name="newName" placeholder="New Name" type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />


                        <input type="submit" value="submit" />
                    </form>

                <h3> Delete My Profile </h3>
                    <form onSubmit={handleDelete}>

                    <button type="submit" value="submit">delete</button>
                </form>

            </div>
    </div>
    </div>
    )

}



export default MyProfile
