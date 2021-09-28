import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'

const Home = ({type}) => {
    const [lists, setList] = useState([])
    const [genre, setGenre] = useState(null)

    useEffect(() =>{
        const getRandomLists = async () =>{
            try {
                //so ang mangyayari dito, gamit ang axios, kumukuha tayo ng random list from API side.
                // ung type is props, while ung genre is state
                const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "genre="+ genre : ""}`,{
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTJhY2EwZTg1YjJkMGQ3NDBjODllMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjgwODEzNywiZXhwIjoxNjMzMjQwMTM3fQ.TICDmkiyz71muFHOrKQazo2fk8gxy55PZmn7wPhuuJc"
                    }
                
                })
                setList(res.data)
            } catch (error) {
               console.log("error")
            }
        }
        getRandomLists()
        //use effect, whatever happens between the dependencies or type or genre, the use effect will run again
    },[type,genre])
    return (
        <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list, key) => (
        <List key={key} list={list} />
      ))}
    </div>
  );
}

export default Home
