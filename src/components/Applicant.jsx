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
        {props.skills.map((skill) => <li key={skill.id}>{skill.skillName}</li>)}
      </ul>
      <button className='btn-edit'>Edit information</button>
    </div>
  )
}

function EditData(props) {
  const skillsList = [...props.skills].map((skill) => skill.skillName).join(', ');
  return (
    <form action='' className='applicant applicant-edit'>
        <input type="url" name="photoUrl" id="photoUrl" defaultValue={props.photoUrl}/>
      <label htmlFor="photoUrl"> Photo URL</label>

        <input type="text" name="name" id="name" defaultValue={props.name}/>
      <label htmlFor="name"> Name</label>

        <input type="text" name="surname" id="surname" defaultValue={props.surname}/>
      <label htmlFor="surname"> Last Name</label>

        <input type="text" name="currentJob" id="currentJob" defaultValue={props.currentJob}/>
      <label htmlFor="currentJob"> Current Job</label>

        <input type="text" name="skillsList" id="skillsList" defaultValue={skillsList}/>
      <label htmlFor="skillsList"> Skills (separated by commas)</label>
    </form>
  )
}

export default function Applicant() {
  const example = {
    name: 'John',
    surname: 'Doe',
    photoUrl: 'https://i.imgur.com/TR28rqs.jpg',
    currentJob: 'Web Dev',
    skills: [
      {id: 0, skillName: 'HTML'},
      {id: 1, skillName: 'CSS'},
      {id: 2, skillName: 'JavaScript'},
      {id: 3, skillName: 'Webpack'},
      {id: 4, skillName: 'Vite'},
      {id: 5, skillName: 'React'},
    ],
  }

  const [data, setData] = useState(example);
  const [editMode, setEditMode] = useState(false);
  
  return (
    // <DisplayData photoUrl={example.photoUrl} name={example.name} surname={example.surname} currentJob={example.currentJob} skills={example.skills}/>
    <>
      {
        editMode
        ? <EditData photoUrl={data.photoUrl} name={data.name} surname={data.surname} currentJob={data.currentJob} skills={data.skills}/>
        : <DisplayData photoUrl={data.photoUrl} name={data.name} surname={data.surname} currentJob={data.currentJob} skills={data.skills}/>
      }
    </>
  )
}
