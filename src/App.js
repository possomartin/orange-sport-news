import axios from 'axios';
import { useState } from 'react';
import SportCards from './components/sport-cards/sport-cards';

import './main.css';

function App() {

  let [items, setItems] = useState([]);

  async function getItems()
  {
    var result = await axios.get('https://www.scorebat.com/video-api/v3/').then(result => {return result.data});
    setItems(result.response);
  }  

  function search(evt)
  {
    var value = evt.target.value;
    if(value) setItems(items.filter(element => element.title.toLowerCase().includes(value)));
    else getItems();
  }

  console.log(items);

  return (
    <div className="App">
      <header className='header horizontal'>
        <h1>SPORT</h1>
        <h1 style={{color: "#787675"}}>NEWS</h1>
        <i class="fas fa-futbol"></i>
      </header>
      <div className='search-bar-container horizontal'>
          <input className='search-bar' type="search" id="search" placeholder='Enter to search' onChange={evt => search(evt)}/>
          <button className='btn' onClick={getItems}>SEARCH NEWS</button>
      </div>      
      <ul className='cards'>
        {items.map(element => 
          <SportCards key={element.id} item={element}/>
        )}
      </ul>
    </div>
  );
}

export default App;
