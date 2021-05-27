

import { useState, useEffect } from 'react'
import axios from 'axios'
import env from 'react-dotenv'


const MyProfile = (props) => {

    const [user, setUser] = useState({})
    let id = localStorage.getItem('id')
    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')

    const [newName,setNewName] = useState('')
    const [newEmail,setNewEmail] = useState('')
    const [newProfile, setNewProfile] = useState('')
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

    useEffect(() => {
        fetchProfile()
    }, [])



    const editSubmit = async (e) => {
        let newPassword = localStorage.getItem('password')
        // let newEmail = localStorage.getItem('email')
        try {
        let ress = await axios.put(`${process.env.REACT_APP_API_URL}/users/edit`, {
            name: newName,
            email: newEmail,
            password: newPassword
        })
            setNewProfile(ress)
            console.log(ress)
            localStorage.setItem('name', name)
            localStorage.setItem('email', email)


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

    return(
        <div>
            <h2>My Profile</h2>
                <div className="userDetails" key={user.id}>
                                <p className="titles">Name: </p>
                                <p>{user.name}</p>
                                <p className="titles">Email: </p>
                                <p>{user.email}</p>
                                <p className="titles">Label: </p>
                                <p>{user.labelId}</p>
                </div>


                <h1>Edit Your Profile </h1>
                    <form onSubmit={editSubmit}>
                        <input name="name" placeholder="Name" type="hidden" value={name} onChange={(e) => setNewName(e.target.value)} />

                        <input name="newName" placeholder="New Name" type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />

                        <input name="email" placeholder="Email" type="hidden" value={email} onChange={(e) => setNewEmail(e.target.value)} />

                        <input name="newEmail" placeholder="New Email" type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />

                        <input type="submit" value="submit" />
                    </form>

                <h3> Delete My Profile </h3>
                    <form onSubmit={handleDelete}>

                    <button type="submit" value="submit">delete</button>
                </form>

       </div>
    )
}



export default MyProfile
