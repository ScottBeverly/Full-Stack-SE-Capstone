import React, {useState, useEffect} from 'react';
import './bosses.css';

function Bosses(props) {
  const guildApi = `https://scottguildapp2.herokuapp.com/api/boss-list`
  const [data,setData] = useState([])

    useEffect(()=>{
        const makeApiCall = async () => {
          const res = await fetch(guildApi);
          const json = await res.json();
          setData(json)  
          console.log('bosses', json)    
        };
        makeApiCall();
        }, []);
        

  const api = data.map((data,index) =>{
    
    return(
      <div key ={index} className='Main-Class' >
        <div className='box5'>
          <h1>{data.boss_name}</h1>
          <p>{data.boss_description}</p>
        </div>
      </div>
    )
  })

  return (
  
    <div className='Bosses'>
      <section>
          <div>
            <img className='img2'src='https://i.imgur.com/5Zh8VQX.jpg'></img>
              <h2>Ny'alotha <br></br>Bosses</h2> 
            <div className='bigbox3'>
              {api}
            </div>
         </div>
      </section>
    </div>
  );
}
export default Bosses;