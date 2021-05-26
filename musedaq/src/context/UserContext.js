import {useState, createContext, useEffect } from 'react'
import axios from 'axios'



const UserContext = createContext()

const UserProvider = ({children}) => {

    const [user, setUser] = useState({
        id: '',
        name: null,
        email: '',
    })

    const backEnd = process.env.API_URL

    const verifyUser = async () => {
        const userId = localStorage.getItem('userId')

        if (userId) {
            let response = await axios.get(`${backEnd}/users/verify`, {
                headers: {
                    Authorization: userId
                }
            })

            console.log(response)
            setUser({
                ...user,
                id: response.data.user_id,
                name: response.data.user.name,
                email: response.data.user.email,
            })
        }
    }



    const state = {
        userState: [user, setUser],
        verifyUser: verifyUser
    }

    const fetchUser = () => {

    if (!localStorage.getItem('userId')) { return }

        axios.get(`${backEnd}/users/verify`, {
            headers: {
                Authorization: localStorage.getItem('userId')
            }
        }).then((response) => {
            setUser(response.data.user)
    })
}
useEffect(fetchUser)


return (
    <UserContext.Provider value={state}>
        {children}
    </UserContext.Provider>
)

}

export { UserContext, UserProvider}
