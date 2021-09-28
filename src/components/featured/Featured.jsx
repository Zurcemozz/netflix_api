import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './featured.scss'

const Featured = ({type}) => {
    const [content,setContent] = useState({})
    useEffect(() =>{
        const getRandomContent = async () =>{
            try {
                
                //from api kukuha sya ng random TYPe which is series or Movies
                const res = await axios.get(`/movies/random?type=${type}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTJhY2EwZTg1YjJkMGQ3NDBjODllMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjgwODEzNywiZXhwIjoxNjMzMjQwMTM3fQ.TICDmkiyz71muFHOrKQazo2fk8gxy55PZmn7wPhuuJc"
                    }
                })
                //the reason we use array, is because we are galing sa movie.js from API, nag aggregate tayo duon, so when we catch the sample we received an array
                setContent(res.data[0])
            } catch (error) {
                console.log(error)
            }
        }
        getRandomContent()
        //mag rurun ulit itong function na ito each time na may mag palit ng type
    },[type])


    return (
        <div className="featured">
             {type && (
        <div className="category">
            {/* easy True or false lang to, kung True, movies, else sa false. Ung type is props na galing sa Home */}
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
             <img
             src={content.img}
            alt=""
        />

            <div className="info">
                <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
                 alt=""  />
                 <span className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus vero odio magnam quia qui non cupiditate ullam, repellat quidem esse laborum totam consequuntur ad necessitatibus, voluptas eos fugit? Harum omnis nemo voluptates doloribus tenetur, dolor ullam praesentium, aspernatur sed ratione totam in quos quam distinctio placeat expedita aut temporibus tempora.</span>
                 <div className="buttons">
                     <button className="play">
                         <PlayArrow />
                         <span>Play</span>
                     </button>
                     <button className ="more">
                         <InfoOutlined/>
                         <span>Info</span>
                     </button>
                 </div>
            </div>
        </div>
    )
}

export default Featured
