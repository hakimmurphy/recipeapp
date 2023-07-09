import { useState, useEffect } from 'react'

export default function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState('')
    const [sourceUrl, setSourceUrl] = useState('')


    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${import.meta.env.VITE_API}&includeNutrition=false`)
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(data.image)
                setSourceUrl(data.sourceUrl)
            })
            .catch(() => {
                console.log('error')
            })
    }, [meal.id])

    return (
        <article>
            <h1>{meal.title}</h1>
            <img src={imageUrl} alt="recipe" />
            <ul className='instructions'>
                <h2>Missed Ingredients:</h2>
                {meal.missedIngredients.map(m => {
                    return <li key={m.id}>{m.name}</li>
                })}
            </ul>
            <a href={sourceUrl} target='blank'>Go to Recipe</a>
        </article>
    )
}