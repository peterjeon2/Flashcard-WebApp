import * as React from 'react'

export default function List (props) {
    return (
      <ul>
        {props.items.map((item) => (
          <li key={item._id}>
              <span>
                {item.name}
                {item.description}
              </span>
          </li>
        ))}
      </ul>
    )
}