import { useState } from 'react'
import './App.scss'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  const counter = (num1) => {
    return num1;
  }
  return (
    <div className="App">

      <nav>
        <div>
          <img src='./logo.png' alt="LOGO DNC"/>
          <ul>
            <li className='nav_item'>Food</li>
            <li className='nav_item'>Variedades</li>
            <li className='nav_item'>Lanches</li>
            <li className='nav_item'>Pizzas</li>
            <li className='nav_item'>Doces</li>
            <li className='nav_item'>Promoções</li>
          </ul>
        </div>
        <div>
          <span className='nav_item'>Minhas Compras</span>
          <img src='./cart.svg'></img>
        </div>
      </nav>

      <main>
        <div className='grid'>
          <Card image="./Burguer.png" name="X-Burguer"/>
          <Card image="./Acai.png" name="Açai com mix de frutas"/>
          <Card image="./Frango.png" name="Frango frito crocante"/>
          <Card image="./Pastel.png" name="Pastel"/>
          <Card image="./Pizza.png" name="Pizza"/>
          <Card image="./Biscoitos.png" name="Biscoitos"/>
        </div>
      </main>


    </div>
  )
}

export default App
