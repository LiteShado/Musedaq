import {useState, createContext, useEffect } from 'react'
import axios from 'axios'
const UserContext = createContext()

const UserProvider = (props) => {
    const [user, setUser] = useState({})

    const fetchUser = () => {
        if (!localStorage.getItem('id')) { return }
        let id = localStorage.getItem('id')

        axios.post(`${process.env.REACT_APP_API_URL}/users/profile`, {

                id: id

        }).then((response) => {
            setUser(response.data.user)
            console.log(response)
        })
    }

    useEffect(fetchUser, [])


    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )

}


export { UserContext, UserProvider }
