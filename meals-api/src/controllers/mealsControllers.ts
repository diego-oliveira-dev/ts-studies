import type { Request, Response } from 'express';

interface Meal {
    id: number,
    name: string,
    calories: number,
    mealType: string
}

const meals: Meal[] = [];
let nextId = 1;

// GET /meals
export const listMeals = (request: Request, response: Response) => {
    return response.status(200).json(meals);
}

// GET /meals/:id
export const getMealById = (request: Request, response: Response) => {
    const id = Number(request.params.id);
    const meal = meals.find((meal) => meal.id === id);
    if (!meal) return response.status(404).json({error: "Meal not found"});
    return response.status(200).json(meal);
}

// POST /meals
export const createMeal = (request: Request, response: Response) => {
    const { name, calories, mealType } = request.body;
    if (!name || !calories || !mealType) {
        return response
            .status(400)
            .json({
                error: "Fields 'name', 'calories' and 'mealType' are necessary"
            })
    }
    const newMeal: Meal = { id: nextId++, name, calories, mealType };
    meals.push(newMeal);
    return response.status(201).json(newMeal);
}

// PUT /meals/:id
export const replaceMeal = (request: Request, response: Response) => {
    const id = Number(request.params.id);
    const mealIndex = meals.findIndex((meal) => meal.id === id);
    if (mealIndex === -1) return response.status(404).json({error: "Meal not found"});
    const { name, calories, mealType } = request.body;
    if (!name || !calories || !mealType) {
        return response
            .status(400)
            .json({
                error: "Fields 'name', 'calories' and 'mealType' are necessary"
            })
    }
    meals[mealIndex] = {id, name, calories, mealType};
    return response.status(200).json(meals[mealIndex]);
}

// PATCH /meals/:id
export const updateMeal = (request: Request, response: Response) => {
    const id = Number(request.params.id);
    const mealIndex = meals.findIndex((meal) => meal.id === id);
    if (mealIndex === -1) return response.status(404).json({error: "Meal not found"});
    meals[mealIndex] = { ...meals[mealIndex], ...request.body, id };
    return response.status(200).json(meals[mealIndex]);
}

// DELETE /meals/:id
export const deleteMeal = (request: Request, response: Response) => {
    const id = Number(request.params.id);
    const mealIndex = meals.findIndex((meal) => meal.id === id);
    if (mealIndex === -1) return response.status(404).json({error: "Meal not found"});
    meals.splice(mealIndex, 1);
    return response.status(204).json(meals[mealIndex]);
}