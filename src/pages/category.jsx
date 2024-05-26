import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";

import { Preloader } from "../components/Preloader";
import { MealList } from "../components/meallist";

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            <button className="btn" onClick={goBack}>
                Go back
            </button>
            {!meals.length ? <Preloader></Preloader> : <MealList meals={meals}></MealList>}
        </>
    );
}

export { Category };