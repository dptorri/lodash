import UsersSample from './common/UsersSample';
import MapSample from './common/MapSample';
import FilterSample from './common/FilterSample';

import Title from './common/Title';


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
    <div>
      <Title />
      <UsersSample />
      {/* _.map */}
      <MapSample users={users}/>
      {/* _.filters */}
      <FilterSample users={users}/>
    </div>
  );
}

export type { User };
export default App;
