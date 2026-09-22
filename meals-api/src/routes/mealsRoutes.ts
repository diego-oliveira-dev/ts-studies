import { Router } from 'express';
import { listMeals, getMealById, createMeal, replaceMeal, updateMeal, deleteMeal } from '../controllers/mealsControllers.js';

const router = Router();

router.get('/meals', listMeals);
router.get('/meals/:id', getMealById);
router.post('/meals', createMeal);
router.put('/meals/:id', replaceMeal);
router.patch('/meals/:id', updateMeal);
router.delete('/meals/:id', deleteMeal);

export default router;