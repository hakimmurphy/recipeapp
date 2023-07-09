import Meal from './Meal'

export default function MealList({ mealInfo }) {

    return (
        <section className="meals">
            {mealInfo.map(meal => {
                return <Meal key={meal.id} meal={meal} />
            })}
        </section>
    )
}