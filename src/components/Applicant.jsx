import '../styles/applicant.css'

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
      // {id: 6, skillName: 'TEST'},
      // {id: 7, skillName: 'TEST'},
      // {id: 8, skillName: 'TEST'},
      // {id: 9, skillName: 'TEST'},
      // {id: 10, skillName: 'TEST'},
      // {id: 11, skillName: 'TEST'},
      // {id: 12, skillName: 'TEST'},
      // {id: 13, skillName: 'TEST'},
      // {id: 14, skillName: 'TEST'},
      // {id: 15, skillName: 'TEST'},
      // {id: 16, skillName: 'TEST'},
      // {id: 17, skillName: 'TEST'},
      // {id: 18, skillName: 'TEST'},
      // {id: 19, skillName: 'TEST'},
      // {id: 20, skillName: 'TEST'},
    ],
  }
  return (
    <div className='applicant'>
      <img src={example.photoUrl} />
      <h1>{example.name} {example.surname}</h1>
      <p>{example.currentJob}</p>
      <h2>Skills/Stack</h2>
      <ul>
        {example.skills.map((skill) => <li key={skill.id}>{skill.skillName}</li>)}
      </ul>
    </div>
  )
}
