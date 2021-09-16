import React, { useState } from 'react'
import './index.css';

// Painike
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

// Tilastorivi
const StatisticLine = ({ text, value }) => {
  return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>{text}</td>
              <td>{value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

// Komponentti huolehtii tilastojen laskemisesta ja näyttämisestä
const Statistics = ({ good, neutral, bad }) => {
    if (good === 0 && neutral === 0 && bad === 0) {
      return (
        <div>
          <h1>Tilastot</h1>
          <h2>Palautetta ei ole annettu</h2>
        </div>
      )
    }
    return(
        <div> 
          <h1>Tilastot</h1>
          <StatisticLine text="hyvä" value={good} />
          <StatisticLine text="neutraali" value={neutral} />
          <StatisticLine text="huono" value={bad} />
          <StatisticLine text="kaikki" value={good + neutral + bad} />
          <StatisticLine text="keskiarvo" value={(good + 0 - bad) / (good + neutral + bad)} />
          <StatisticLine text="positiviiset" value={good / (good + neutral + bad) * 100 + ' \u0025'} /> 
        </div>
      )
}

const App = () => {
  // Tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button handleClick={() => setGood(good + 1)} text="hyvä" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutraali"  />   
      <Button handleClick={() => setBad(bad + 1)} text="huono" />  
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App