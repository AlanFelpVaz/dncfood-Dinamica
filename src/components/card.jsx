
function Card({image, name}) {

  return (
          <div className='card'>
            <img src={image}></img>
            <h3>{name}</h3>
            <button>Adicionar</button>
          </div>
  )
}

export default Card
