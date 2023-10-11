import '../styles/applicant.css'
import { useState } from 'react';

function DisplayData(props) {
  return (
    <div className='applicant'>
      <img src={props.photoUrl} />
      <h1>{props.name} {props.surname}</h1>
      <p>{props.currentJob}</p>
      <h2>Skills/Stack</h2>
      <ul>
        {props.skills.split(', ').map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
      <button onClick={() => props.setEditMode(true)} className='btn-edit'>Edit information</button>
    </div>
  )
}

function EditData(props) {
  return (
    <form action='' className='applicant applicant-edit'>
      <input onChange={(e) =>
        props.setData({...props, photoUrl: e.target.value})
      } type="url" name="photoUrl" id="photoUrl" defaultValue={props.photoUrl}/>
      <label htmlFor="photoUrl"> Photo URL</label>
      <input onChange={(e) =>
        props.setData({...props, name: e.target.value})
      } type="text" name="name" id="name" defaultValue={props.name}/>
      <label htmlFor="name"> Name</label>
      <input onChange={(e) =>
        props.setData({...props, surname: e.target.value})
      } type="text" name="surname" id="surname" defaultValue={props.surname}/>
      <label htmlFor="surname"> Last Name</label>
      <input onChange={(e) =>
        props.setData({...props, currentJob: e.target.value})
      } type="text" name="currentJob" id="currentJob" defaultValue={props.currentJob}/>
      <label htmlFor="currentJob"> Current Job</label>
      <input onChange={(e) =>
        props.setData({...props, skills: e.target.value})
      } type="text" name="skillsList" id="skillsList" defaultValue={props.skills}/>
      <label htmlFor="skillsList"> Skills (separated by commas)</label>
      <button onClick={(e) => {
        e.preventDefault()
        props.setEditMode(false)
      }} className='btn-edit btn-visible'>Apply changes</button>
    </form>
  )
}

export default function Applicant() {
  const example = {
    name: 'John',
    surname: 'Doe',
    photoUrl: 'https://i.imgur.com/TR28rqs.jpg',
    currentJob: 'Web Dev',
    skills: 'HTML, CSS, JavaScript, Webpack, Vite, React',
  }

  const [data, setData] = useState(example);
  const [editMode, setEditMode] = useState(false);
  
  return (
    <>
      {
        editMode
        ? <EditData
          photoUrl={data.photoUrl}
          name={data.name}
          surname={data.surname}
          currentJob={data.currentJob}
          skills={data.skills}
          setEditMode={setEditMode}
          setData={setData}
        />
        : <DisplayData
          photoUrl={data.photoUrl}
          name={data.name}
          surname={data.surname}
          currentJob={data.currentJob}
          skills={data.skills}
          setEditMode={setEditMode}
        />
      }
    </>
  )
}
