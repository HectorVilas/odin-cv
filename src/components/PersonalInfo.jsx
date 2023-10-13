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

  return (
    <DisplayData about={example.about} contact={example.contact}/>
  )
}
