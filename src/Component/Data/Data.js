import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Data = () => {
    const [data, setData] = useState([]);

    const url = `http://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=12`

    const getAllNotes = () => {
        axios.get(`${url}`)
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getAllNotes();
    }, [])

    console.log(data);
  return (
    <div>
    
        {/* {data.map(e => {
                    <h1 >{e.album}</h1>    
        })} */}
    </div>
  )
}

export default Data;
