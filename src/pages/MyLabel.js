

import { useState, useEffect } from 'react'
import axios from 'axios'


const MyLabel = (props) => {

    let id = localStorage.getItem('id')
    let idd = localStorage.getItem('theLabelId')

    const [myLabels,setMyLabels] = useState('')
    const [myArtists,setMyArtists] = useState('')
    const [thisId,setThisId] = useState('')

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
            let response = await axios.post(`${process.env.REACT_APP_API_URL}/artist/roster`,{
                labelId: idd
            })
            console.log(response)
            setMyArtists(response.data.artists)

        } catch (error) {
            console.log({error});
        }
    }


    useEffect(() => {
        fetchLabel()
        fetchArtists()
    }, [])

    const removeArtist = async () => {
        console.log(myArtists.id)
        try {
            let resss = await axios.put(`${process.env.REACT_APP_API_URL}/artist/unsign`, {
            where: {
                id: myArtists.id
            }
        })
        console.log(resss)
        localStorage.clear()

        } catch (error) {
            console.log(error)
        }
    }



    const handleDelete = async () => {
        let i
        console.log(myLabels)

        for (i = 0; i<myLabels.length; i++) {
            console.log(myLabels[i].id)
            setThisId(myLabels[i].id)
            let idi = (myLabels[i].id)

        try {
            console.log(idi)
            let resss = await axios.delete(`${process.env.REACT_APP_API_URL}/label/delete`, {
            where: {
                id: idi
            }
        })
        console.log(resss)

        } catch (error) {
            console.log(error)
        }
    }
    }

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
                                    <p>{data.name} <button onClick={handleDelete}>Delete</button></p>
                                </div>
                                }
                                )
                                :
                                <p>{myLabels.name} <button onClick={handleDelete} value={thisId}>Delete</button></p>
                                }

                        </div>
                    </div>


                    <div className="labelDetails" key={myArtists.id}>
                            <h2 className="artists"> My Artists </h2>

                            {
                            myArtists.length ?
                            myArtists.map((data) => {
                            return<div>
                                <p>{data.name} <button onClick={removeArtist}>Unsign</button></p>
                                </div>
                                }
                                )
                                :
                            <p>{myArtists.name}</p>
                                }
                    </div>


                    {/* <h3> Delete My Label </h3>
                    <form onSubmit={handleDelete}>

                    <button type="submit" value="submit">delete</button>
                    </form> */}
            </div>
    )
}



export default MyLabel
