import * as React from 'react'

export default function List (props) {
    return (
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
              <span>
                {item.first_name}
              </span>
          </li>
        ))}
      </ul>
    )
}