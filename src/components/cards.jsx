import { useState, useEffect } from 'react'




function Cards() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    
      useEffect(() => {
        const getData = async () => {
          const response = await fetch("https://api.jikan.moe/v4/characters?q=naruto%20uzumaki");
  
          const result = await response.json();
          setData(result);
          setLoading(false);
          console.log(data)
        }

        getData()
      }, []);
    
    
    

  return (
    <p>MIA POMBAAAAa</p>
    
  )
}

export default Cards
