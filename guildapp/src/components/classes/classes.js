import React, {useState, useEffect} from 'react';
import './classes.css';

function Classes(props) {
  const guildApi = `https://scottguildapp2.herokuapp.com/api/class-list`
  const [data,setData] = useState([])

  useEffect(()=>{
      const makeApiCall = async () => {
      const res = await fetch(guildApi);
      const json = await res.json();
      setData(json)  
      console.log('classes', json)    
    };
     makeApiCall();
 }, []);
        

  const api = data.map((data,index) =>{
    
    return(
      <div key ={index}className='Main-Class' >
        <div className='box'>
          <h1>{data.class_name}</h1>
          <p>{data.class_description}</p>
          <p><span className='word'>Specs</span><br></br> {data.class_spec}</p>
          <p><span className='word2'>Races</span><br></br>{data.class_race}</p>
         </div>
       </div>
    )
  })
  
  

  return (
  
    <div className='classes'>
      <section>
          <div>
            <img className='img2'src='https://i.imgur.com/ZSQoCBd.jpg'></img>
             <h2>Classes <br></br>World Of Warcraft</h2> 
          <div className='render'>
          <div className='bigbox'>
            {api}
          </div>
          </div>
          </div>
      </section>
    </div>
  );
}
export default Classes;