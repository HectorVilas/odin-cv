import { useState } from 'react'
import '../styles/PersonalInfo.css'

function DisplayData(props) {
  return (
    <div className="personal-info">
      <div className="about">
        <h2>About Me:</h2>
        <p>{props.about}</p>
      </div>
      <div className="contact">
        <h2>Contact Info:</h2>
        <ul>
        {props.contact.map((medium) => {
          return <li key={medium.id}><img src={medium.imageUrl}/>{medium.content}</li>
        })}
        </ul>
      </div>
      <button onClick={() => props.setEditMode(true)} className='btn-edit-info'>Edit information</button>
    </div>
  )
}

function EditData(props) {
  return (
    <div className="personal-info personal-info-edit">
      <div className="about">
        <h2>About Me:</h2>
        <textarea
          name="personal-about"
          id="personal-about"
          cols="30" rows="10"
          defaultValue={props.about}
          onChange={(e) => {
            props.editData({...props, about: e.target.value})
          }}
          />
      </div>
      <div className="contact">
        <h2>Contact Info:</h2>
        <ul>
        {props.contact.map((medium, itemIdx) => {
          return <li key={medium.id}>
            <label htmlFor={`contact-img-${medium.id}`}>Img</label>
            <input type="text" name={`contact-img-${medium.id}`} id={`contact-img-${medium.id}`} defaultValue={medium.imageUrl} onChange={(e) => {
              const newValue = {
                id: medium.id,
                imageUrl: e.target.value,
                content: medium.content,
              };
              props.editData({...props, contact: props.contact.map((item, i) => i === itemIdx ? newValue : item)})
            }}/>
            <label htmlFor={`contact-info-${medium.id}`}>Info</label>
            <input type="text" name={`contact-info-${medium.id}`} id={`contact-info-${medium.id}`} defaultValue={medium.content} onChange={(e) => {
              const newValue = {
                id: medium.id,
                imageUrl: medium.imageUrl,
                content: e.target.value,
              };
              props.editData({...props, contact: props.contact.map((item, i) => i === itemIdx ? newValue : item)})
            }}/>
            <button className='btn-delete-info' onClick={() => {
              props.editData({...props, contact: props.contact.filter((item, i) => i !== itemIdx)})
            }}>X</button>
            </li>
        })}
        </ul>
        <button className='btn-add-info'>Add another item</button>
      </div>
      <button onClick={() => props.setEditMode(false)} className='btn-edit-info'>Apply changes</button>
    </div>
  )
}

export default function PersonalInfo() {
  const example = {
    about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium enim placeat quae suscipit culpa voluptatibus asperiores nulla debitis ipsam non.',
    contact: [
      {
        id: 0,
        imageUrl: 'https://i.imgur.com/NVWfDrG.png',
        content: 'john-doe@example.com',
      },
      {
        id: 1,
        imageUrl: 'https://i.imgur.com/CiLmN6M.png',
        content: '12-3456-7890',
      },
      {
        id: 2,
        imageUrl: 'https://i.imgur.com/jSITzbE.png',
        content: '?????',
      },
      {
        id: 3,
        imageUrl: 'https://i.imgur.com/XQebNSH.png',
        content: 'Lorem Road 1234, Ipsum City, Dolor Sit State',
      },
    ],
  }

  const [data, editData] = useState(example)
  const [editMode, setEditMode] = useState(false)

  return (
    editMode
    ? <EditData about={data.about} contact={data.contact} setEditMode={setEditMode} editData={editData}/>
    : <DisplayData about={data.about} contact={data.contact} setEditMode={setEditMode}/>
  )
}
