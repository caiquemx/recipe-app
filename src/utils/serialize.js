export default function serialize(meals) {
  if (meals.length >= 1) {
    const data = meals.map((meal) => {
      const ingredientKeys = Object.keys(meal).filter((e) => e.includes('strIngredient'));
      const ingredients = ingredientKeys?.map((k) => meal[k]).filter((e) => !!e);

      const measuresKeys = Object.keys(meal).filter((e) => e.includes('strMeasure'));
      const measures = measuresKeys?.map((m) => meal[m]).filter((e) => e !== ' ' && !!e);
      const youtubeId = meal.strYoutube?.split('=')[1];

      const value = {
        id: meal.idMeal || null,
        name: meal.strMeal || null,
        category: meal.strCategory || null,
        area: meal.strArea || null,
        instructions: meal.strInstructions || null,
        thumb: meal.strMealThumb || null,
        tags: meal.strTags?.split(',') || null,
        video: meal.strYoutube || null,
        youtubeId,
        ingredients,
        measures,
      };
      return value;
    });
    return data;
  }
}
