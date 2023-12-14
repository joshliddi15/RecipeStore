import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firebase_app from '@/firebase/config';
import Layout from '@/components/Layout';
import Router from 'next/router';

const db = getFirestore(firebase_app);

const NewRecipe = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructions, setInstructions] = useState('');
  const [ingredients, setIngredients] = useState([
    { ingredient: '', quantity: 0, measure: '' },
  ]);

  const handleAddIngredient = () => {
    setIngredients([
      ...ingredients,
      { ingredient: '', quantity: 0, measure: '' },
    ]);
  };

  const handleIngredientChange = (index, key, value) => {
    const updatedIngredients = [...ingredients];
    const updatedIngredient = { ...updatedIngredients[index] };
    updatedIngredient[key] = value;
    updatedIngredients[index] = updatedIngredient;
    setIngredients(updatedIngredients);
  };

  const handleAddRecipe = async (e) => {
    e.preventDefault();

    try {
      const recipeRef = collection(db, 'Recipes');
      const newRecipe = {
        title,
        description,
        ingredients,
        instructions,
      };
      await addDoc(recipeRef, newRecipe);
      console.log('Recipe added successfully!');
      Router.push('/recipes');
    } catch (error) {
      console.error('Error adding recipe: ', error);
    }
  };

  return (
    <div>
      <h1>Add New Recipe</h1>
      <form onSubmit={handleAddRecipe} className="space-y-4 m-12">
        <div>
          <label className="block mb-1">Recipe Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Recipe Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Ingredients:</label>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                value={ingredient.quantity}
                onChange={(e) =>
                  handleIngredientChange(index, 'quantity', (e.target.value))
                }
                placeholder="Unit"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                value={ingredient.measure}
                onChange={(e) =>
                  handleIngredientChange(index, 'measure', e.target.value)
                }
                placeholder="Unit (e.g. cups, large, tsp, etc.)"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                value={ingredient.ingredient}
                onChange={(e) =>
                  handleIngredientChange(index, 'ingredient', e.target.value)
                }
                placeholder="Ingredient"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

          ))}
          <button
            type="button"
            onClick={handleAddIngredient}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-2"
          >
            Add Ingredient
          </button>
        </div>
        <div>
          <label className="block mb-1">Recipe Instructions:</label>
          <input
            type="text"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

NewRecipe.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default NewRecipe;
