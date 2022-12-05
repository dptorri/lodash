import React from 'react';
import { map as map_ } from 'lodash-es';


interface User {
  user: string
  age: number
  active: boolean
}

const users: User[] = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred', 'age': 40, 'active': false }
];


function App() {
  return (
    <div className="App">
      <p>map_(u, users)</p>
    </div>
  );
}

export default App;
