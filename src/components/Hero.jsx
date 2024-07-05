import group from '../images/group.png';

const Hero = () => {
  return (
    <main className='main'>
      <img src={ group } alt="Group of pictures" className="group-picture"/>
      <h1>Online Experience</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </main>
  )
}

export default Hero;
