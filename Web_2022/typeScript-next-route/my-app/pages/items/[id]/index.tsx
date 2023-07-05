import React from 'react'
import { OurData } from '../data'
interface IProps {
  id: string
  title: string
}
const Item = (props: IProps) => {
  return <div>{props.title}</div>
}

export async function getStaticPaths() {
  const paths = OurData.map((item) => {
    params: {
      id: item.id
    }
  })
  return {
    paths,
    fallback: true, // false or 'blocking'
  }
}
export async function getStaticProps(context: any) {
  return {
    props: {},
  }
}
export default Item
