import { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState('yusuf');
  const [age, setAge] = useState(24)
  const [friends, setFriends] = useState(['yusuf', 'mehmet'])
  const [adress, setAdress] = useState({ title: 'istanbul', zip: 34000 })

  return (
    <div className="App">
      <h1> {name}</h1>
      <h1> {age}</h1>
      <button onClick={() => setName('ahmooo')}>name </button>
      <button onClick={() => setAge(2)}>age</button>

      <hr />
      <h2>Friends</h2>
      {
        friends.map((y, i) => <div key={i}> {y} </div>)
      }
      <button onClick={() => setFriends([...friends, 'ahmoo'])}>set friends</button>
      <hr />
      <h2>Adress</h2>

      <div > {adress.title} {adress.zip} </div>

      <button onClick={() => setAdress({ ...adress, title: 'ankara', zip: 3434 })}>set adress</button>

    </div>
  );
}

export default App;
