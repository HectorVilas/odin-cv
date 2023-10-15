import { useState } from 'react'
import '../styles/ProfessionalInfo.css'

function Category(props) {
  return (
    <div className={props.title.split(" ").join("-").toLowerCase()}>
      <h2>{props.title}</h2>
      <ul>
      {props.items.map((item) => {
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

function EditCategory(props) {
  const convertedClassName = props.title.split(" ").join("-").toLowerCase();
  return (
    <div className={`${convertedClassName} ${convertedClassName}-edit`}>
      <h2>{props.title}</h2>
      <ul>
        {props.items.map((item) => {
          return (
            <li key={item.id}>
              <label htmlFor={`title-${item.id}`}>Title</label>
              <input type="text" name={`title-${item.id}`} id={`title-${item.id}`} />
              <label htmlFor={`place-${item.id}`}>Place</label>
              <input type="text" name={`place-${item.id}`} id={`place-${item.id}`} />
              <label htmlFor={`from-year-${item.id}`}>From</label>
              <input type="tel" name={`from-year-${item.id}`} id={`from-year-${item.id}`} />
              <label htmlFor={`to-year-${item.id}`}>To</label>
              <input type="tel" name={`to-year-${item.id}`} id={`to-year-${item.id}`} />
              <label htmlFor={`description-${item.id}`}>Description</label>
              <textarea name={`description-${item.id}`} id={`description-${item.id}`} cols="30" rows="10"></textarea>
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
      <button onClick={() => props.setEditMode(true)} className='btn-edit-professional'>Edit information</button>
    </div>
  )
}

function EditData(props) {
  return (
    <div className="professional-info professional-info-edit">
      {props.categories.map((category) => {
        return <EditCategory key={category.type} title={category.type} items={category.items}/>
      })}
      <button onClick={() => props.setEditMode(false)} className='btn-edit-professional'>Apply changes</button>
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
    editMode
    ? <EditData categories={data} setEditMode={setEditMode} editData={editData}/>
    : <DisplayData categories={data} setEditMode={setEditMode}/>
  )
}
