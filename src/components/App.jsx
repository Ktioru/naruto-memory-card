import { useState, useEffect } from 'react';
import logo from './../assets/logo.png';
import Card from './cards.jsx';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 18, 77, 131, 151]);
  const [charatersImg, setCharactersImg] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/1735/characters`);
        const result = await response.json();

        const characterImages = characters.map(character => {
          return result.data[character].character.images.jpg.image_url;
        });

        const characterNames = characters.map(character => {
          return result.data[character].character.name;
        });



        setCharactersImg(characterImages);
        setLoading(false);
        console.log(charatersImg)
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className='overlay'>
      <div className='gameTitle'>
        <img src={logo} alt="Naruto Logo" />
        <p className='title'>Memory Card Game</p>
      </div>
      
    </div>
  );
}

export default App;
