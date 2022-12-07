import { User } from "../App"
import { map as map_, filter } from 'lodash-es';

interface Prop {
  users: User[]
}

export default function MapSample(props: Prop) {

const mapSample = `     
  <ul>
  {map_(users, user => (
    <li>{user.user}</li>
  ))}
  </ul>
`

  return(
    <div>
      <code>
        <pre>{mapSample}</pre>
      </code>
      <strong>Users using map</strong>
      <ul>
          { map_(props.users, user => (
            <li>{user.user}</li>
          ))}
      </ul>
    </div>
  )
};








