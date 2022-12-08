import { User } from '../App'
import { filter, map } from 'lodash-es'

interface Prop {
  users: User[]
}

export default function FilterSample(props: Prop) {
  const filterSample = `     
  <ul>
  {filter(users, user => (
    <li>{user.active !== true}</li>
  ))}
  </ul>
`
  const filteredUsers = filter(props.users, (user) => {
    return user.active !== true
  })

  return (
    <div>
      <code>
        <pre>{filterSample}</pre>
      </code>
      <strong>Users using filter</strong>
      <ul>
        {map(filteredUsers, (user) => (
          <li>{user.user}</li>
        ))}
      </ul>
    </div>
  )
}
