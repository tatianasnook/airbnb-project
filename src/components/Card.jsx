import swimmer from '../images/swimmer.png';
import star from '../images/star.png';

const Card = () => {
  return (
    <section className="cards">
      <div className="card">
        <img src={ swimmer } alt='Female swimmer picture' className='card-img'/>
        <div className='card-stats'>
          <img src={ star } alt='star icon' className='card-star'/>
          <span>5.0</span>
          <span className='grey'>(6)</span>
          <span className='grey'> • USA</span>
        </div>
        <h2>Life lessons with Katie Zaferes</h2>
        <p><span className='bold'>From $136</span> / person</p>
      </div>
      
    </section>
  )
}

export default Card;
