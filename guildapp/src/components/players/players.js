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
      <div key ={index}className='Main-Class' >
      <div className='box3'>
      <h1>{data.player_name}</h1>
      <p>{data.player_description}</p>
      <p><span className='word'>Spec</span><br></br> {data.player_spec}</p>
      <p><span className='word2'>Race</span><br></br>{data.player_race}</p>
      
     
      </div>

    </div>
    )
  })

  return (
  
    <div className='Players'>
      <section>
          <div>
          <h1>Raid Team 
            " Peel Team Six "
            </h1> 
            <img className='img5'src='https://i.imgur.com/ucNqohr.jpg'></img>
            <div className= 'bigbox1'>
            {api}
         </div>
        </div>
      </section>
    </div>
  );
}



export default Players;