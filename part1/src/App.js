import React from 'react'

const Hello = ({name, age}) => {

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name} you are {age} years old.</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Dani';
  const age = 22;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Kíra" age={10 + 10}/>
      <Hello name={name} age={age}/>
      <Footer />
    </>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

export default App