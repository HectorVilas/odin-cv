import { useState } from 'react'
import '../styles/ProfessionalInfo.css'

function Category({title, items}) {
  return (
    <div className={title.split(" ").join("-").toLowerCase()}>
      <h2>{title}</h2>
      <ul>
      {items.map((item) => {
        return (
        <li key={item.id}>
          <div>
          <h3>{item.title}</h3>
          <p className='place-year'>{item.place} | {item.dates.from} - {item.dates.to}</p>
          <p className='description'>{item.description}</p>
          </div>
          </li>
          )
      })}
      </ul>
    </div>
  )
}

function DisplayData(props) {
  return (
    <div className="professional-info">
    {props.categories.map((category) => {
      return <Category key={category.type} title={category.type} items={category.items}/>
    })}
  </div>
  )
}

export default function ProfessionalInfo() {
  const example = [
    {
      type: 'Education',
      items: [
        {
          id: crypto.randomUUID(),
          place: 'School Name',
          title: 'Title',
          dates: {from: '199x', to: '200x'},
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, cupiditate.',
        },
        {
          id: crypto.randomUUID(),
          place: 'University Name',
          title: 'Software Engineer',
          dates: {from: '200x', to: '200x'},
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem neque voluptates possimus perspiciatis, rerum odit.',
        },
      ],
    },
    {
      type: 'Work Experience',
      items: [
        {
          id: crypto.randomUUID(),
          place: 'Company Name',
          title: 'Job Position',
          dates: {from: '199x', to: '200x'},
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, cupiditate.',
        },
        {
          id: crypto.randomUUID(),
          place: 'Company Name',
          title: 'Frontend Web Developer',
          dates: {from: '200x', to: '201x'},
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem neque voluptates possimus perspiciatis, rerum odit.',
        },
      ],
    },
  ]
  
  const [data, editData] = useState(example)
  const [editMode, setEditMode] = useState(false)

  return (
    <DisplayData categories={data} setEditMode={setEditMode}/>
  )
}
