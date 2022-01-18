import { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState('yusuf');
  const [age, setAge] = useState(24)
  const [friends, setFriends] = useState(['yusuf', 'mehmet'])
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

    </div>
  );
}

export default App;
