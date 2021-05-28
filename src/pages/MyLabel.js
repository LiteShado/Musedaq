

import { useState, useEffect } from 'react'
import axios from 'axios'


const MyLabel = (props) => {

    let id = localStorage.getItem('id')

    const [myLabels,setMyLabels] = useState('')
    const [myArtists,setMyArtists] = useState('')
    console.log(id)

    const fetchLabel= async () =>{
        console.log(id)
        try {
            let response = await axios.post(`${process.env.REACT_APP_API_URL}/label/mylabels`,{
                userId: id
            })
            console.log(response)
            setMyLabels(response.data)
            // localStorage.setItem('theLabelId', response.data.userLabel.id)
            // localStorage.setItem('labelName', response.data.userLabel.name)

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
            setMyArtists(response.data.userLabel)

        } catch (error) {
            console.log({error});
        }
    }

    useEffect(() => {
        fetchLabel()
        fetchArtists()
    }, [])



    // const handleDelete = async () => {
    //     let userId = localStorage.getItem('userId')
    //     try {
    //         let resss = await axios.delete(`${process.env.REACT_APP_API_URL}/label/delete`, {
    //         headers: {
    //             authorization: userId
    //         }
    //     })
    //     console.log(resss)
    //     localStorage.clear()

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return(
            <div>

                <h1>My Labels</h1>
                    <div className="userDetails" key={myLabels.id}>

                            {/* <p>{myLabel.name}</p> */}
                            {/* </div> */}

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

                        </div>
                    </div>


                    <div className="labelDetails" key={myArtists.id}>
                            <h2 className="artists"> My Artists </h2>
                            <p>{myArtists.name}</p>
                    </div>
                    {/* <h3> Delete My Label </h3>
                    <form onSubmit={handleDelete}>

                    <button type="submit" value="submit">delete</button>
                    </form> */}
            </div>
    )
}



export default MyLabel
