import React from 'react';
import Layout from '@/components/Layout';
import firebase_app from '@/firebase/config';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';

const db = getFirestore(firebase_app);

interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: { ingredient: string; measure: string; quantity: string }[];
  instructions: string;
}

const RecipesPage = () => {
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);

  React.useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Recipes'));
        const documents: Recipe[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          ingredients: doc.data().ingredients,
          instructions: doc.data().instructions,
        }));
        setRecipes(documents);
      } catch (error) {
        console.error('Error getting recipes:', error);
        setRecipes([]);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="bg-darkSlate">
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-4">Recipes Page</h1>
        <Link href="/recipes/newRecipe" className="text-blue-600 text-lg p-5 mb-8">
          Add New Recipe
        </Link>
        <section className="recipe-grid m-4 space-y-4">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card border-black outline rounded-lg p-4">
              <h2 className="text-lg font-bold">{recipe.name}</h2>
              <p>
                <label className="text-md font-bold">Description: </label>
                {recipe.description}
              </p>
              <p>
                Ingredients:
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>
                      {ingredient.quantity} {ingredient.measure} {ingredient.ingredient}
                    </li>
                  ))}
                </ul>
              </p>
              <p>
                <label className="text-md font-bold">Instructions: </label>
                {recipe.instructions}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

RecipesPage.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default RecipesPage;
