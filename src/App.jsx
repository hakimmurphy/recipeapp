import { useState } from 'react'
import MealList from './MealList'
import Header from './Header'
import Footer from './Footer'
import './App.css'


function App() {
  const [mealData, setMealData] = useState(null)
  const [ingredients, setIngredients] = useState([])

  const handleChange = (e) => {
    setIngredients(e.target.value)
  }

  const getMealData = () => {
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${import.meta.env.VITE_API}&ingredients=${ingredients}&number=3&limitLicense=true&ignorePantry=true`)
      .then((response) => response.json())
      .then((data) => {
        setMealData(data)
        console.log(data)
      })
      .catch(() => {
        console.log('error')
      })
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      getMealData()
  }
}

  return (
    <div className="App">
      <Header />
      <section className="controls">
        <input
          type="text"
          placeholder="Ingredients"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      </section>
      <button onClick={getMealData}>Click for a Recipe</button>
      {mealData && <MealList mealInfo={mealData} />}
      <Footer />
    </div>
  )
}

export default App
