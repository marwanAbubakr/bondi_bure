import Link from 'next/link'
import React, { useState } from 'react'
import { OurData } from './data'

const Items = () => {
  return (
    <div>
      {OurData.map((item) => {
        const { id, title } = item
        return (
          <li key={id}>
            <Link href={`/items/${id}`}>{title}</Link>
          </li>
        )
      })}
    </div>
  )
}

export default Items
