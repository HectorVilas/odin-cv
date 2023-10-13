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
          return <li key={medium.type}><img src={medium.imageUrl}/>{medium.content}</li>
        })}
        </ul>
      </div>
    </div>
  )
}

function EditData(props) {
  return (
    <div className="personal-info personal-info-edit">
      <div className="about">
        <h2>About Me:</h2>
        <textarea name="personal-about" id="personal-about" cols="30" rows="10" defaultValue={props.about}></textarea>
      </div>
      <div className="contact">
        <h2>Contact Info:</h2>
        <ul>
        {props.contact.map((medium, i) => {
          return <li key={medium.type}>
            <label htmlFor={`contact-img-${i}`}>Img</label>
            <input type="text" name={`contact-img-${i}`} id={`contact-img-${i}`} defaultValue={medium.imageUrl}/>
            <label htmlFor={`contact-info-${i}`}>Info</label>
            <input type="text" name={`contact-info-${i}`} id={`contact-info-${i}`} defaultValue={medium.content} />
            </li>
        })}
        </ul>
      </div>
    </div>
  )
}

export default function PersonalInfo() {
  const example = {
    about: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium enim placeat quae suscipit culpa voluptatibus asperiores nulla debitis ipsam non.',
    contact: [
      {
        type: 'email',
        imageUrl: 'https://i.imgur.com/NVWfDrG.png',
        content: 'john-doe@example.com',
      },
      {
        type: 'phone',
        imageUrl: 'https://i.imgur.com/CiLmN6M.png',
        content: '12-3456-7890',
      },
      {
        type: 'linkedin',
        imageUrl: 'https://i.imgur.com/jSITzbE.png',
        content: '?????',
      },
      {
        type: 'adress',
        imageUrl: 'https://i.imgur.com/XQebNSH.png',
        content: 'Lorem Road 1234, Ipsum City, Dolor Sit State',
      },
    ],
  }

  const [data, editData] = useState(example)
  const [editMode, setEditMode] = useState(true)


  return (
    editMode
    ? <EditData about={data.about} contact={data.contact}/>
    : <DisplayData about={data.about} contact={data.contact}/>
  )
}
