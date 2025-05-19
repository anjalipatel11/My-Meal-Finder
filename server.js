import express from 'express';
import cors from 'cors';
import {createClient} from '@supabase/supabase-js';

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient('https://kpucxjzngvleaenwkicc.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwdWN4anpuZ3ZsZWFlbndraWNjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzYxMDc4MCwiZXhwIjoyMDYzMTg2NzgwfQ.y-1WXk_-6hv_WkUsz-_RIyx1Q-CvlKQbuo-Co22ck8M'
);

app.get('/api/saved-meals', async(req, res) => {
    const {data, error} = await supabase.from('saved_meals').select('*');
    if(error) return res.status(500).json({error: error.message});
    res.json(data);
});

app.get('/api/meal-info/:id', async(req, res) => {
    const mealID = req.params.id;
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
        const data = await response.json();
        const meal = data.meals[0];
        res.json({
            id: meal.idMeal,
            name: meal.strMeal.toUpperCase(),
            area: meal.strArea,
            category: meal.strCategory,
        });
    } catch (err) {
        res.status(500).json({error: 'Failed to get meal info'});
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));