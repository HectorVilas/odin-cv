import { useState } from 'react'
import '../styles/professionalInfo.css'

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
  const entireData = props.entireData;
  const convertedClassName = props.title.split(" ").join("-").toLowerCase();
  return (
    <div className={`${convertedClassName} ${convertedClassName}-edit`}>
      <h2>{props.title}</h2>
      <ul>
        {props.items.map((item, i) => {
          return (
            <li key={item.id}>
              <label htmlFor={`title-${item.id}`}>Title</label>
              <input type="text" name={`title-${item.id}`} id={`title-${item.id}`} defaultValue={item.title} onChange={(e) => {
                entireData[props.categoryIndex].items[i].title = e.target.value;
                props.editData(entireData)
              }}/>
              <label htmlFor={`place-${item.id}`}>Place</label>
              <input type="text" name={`place-${item.id}`} id={`place-${item.id}`} defaultValue={item.place} onChange={(e) => {
                entireData[props.categoryIndex].items[i].place = e.target.value;
                props.editData(entireData)
              }}/>
              <label htmlFor={`from-year-${item.id}`}>From</label>
              <input type="tel" name={`from-year-${item.id}`} id={`from-year-${item.id}`} defaultValue={item.dates.from} onChange={(e) => {
                entireData[props.categoryIndex].items[i].dates.from = e.target.value;
                props.editData(entireData)
              }}/>
              <label htmlFor={`to-year-${item.id}`}>To</label>
              <input type="tel" name={`to-year-${item.id}`} id={`to-year-${item.id}`} defaultValue={item.dates.to} onChange={(e) => {
                entireData[props.categoryIndex].items[i].dates.to = e.target.value;
                props.editData(entireData)
              }}/>
              <label htmlFor={`description-${item.id}`}>Description</label>
              <textarea name={`description-${item.id}`} id={`description-${item.id}`} cols="30" rows="10" defaultValue={item.description} onChange={(e) => {
              entireData[props.categoryIndex].items[i].description = e.target.value;
              props.editData(entireData)
              }}></textarea>
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
      {props.categories.map((category, i) => {
        return (
        <div key={category.type}>
          <EditCategory title={category.type} items={category.items} editData={props.editData} entireData={props.entireData} categoryIndex={i}/>
          <button className='btn-add-professional' onClick={() => {
          const entireData = props.entireData;
          const newData = {
            id: crypto.randomUUID(),
            place: 'School/Company Name',
            title: 'Title/Job Position',
            dates: {from: 'xxxx', to: 'xxxx'},
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, cupiditate.',
          }
          entireData[i].items.push(newData);
          props.editData(entireData);
          props.setEditMode(false);
        }}>Add another item</button>
        </div>
        )
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
    ? <EditData categories={data} setEditMode={setEditMode} editData={editData} entireData={data}/>
    : <DisplayData categories={data} setEditMode={setEditMode}/>
  )
}
