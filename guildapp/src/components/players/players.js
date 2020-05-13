import React, {useState, useEffect} from 'react';
import './player.css';

function Players(props) {
  const guildApi = `https://scottguildapp2.herokuapp.com/api/player-list`
  const [data,setData] = useState([])

    useEffect(()=>{
        const makeApiCall = async () => {
          const res = await fetch(guildApi);
          const json = await res.json();
          setData(json)  
          console.log('players', json)    
        };
        makeApiCall();
        }, []);
        

  const api = data.map((data,index) =>{
    
    return(
      <div key ={index} className='Main-Class' >
        <div className='box'>
        <h1>{data.player_name}</h1>
        <p>{data.player_description}</p>
        <p>{data.player_race}</p>
        <p>{data.player_spec}</p>
        <p>{data.class_name}</p>
       
       
        </div>

      </div>
    )
  })

  return (
  
    <div className='Players'>
      <section>
          <div>
            <img className='img2'src='https://i.imgur.com/ucNqohr.jpg'></img>
            <h2>Raid Team <br></br>
            Peel Team Six
            </h2> 
            {api}
         
        </div>
      </section>
    </div>
  );
}



export default Players;