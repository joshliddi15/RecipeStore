import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firebase_app from '@/firebase/config';
import Layout from '@/components/Layout';
import Router from 'next/router';

const db = getFirestore(firebase_app);

interface Product {
  Name: string;
  Description: string;
  Price: number;
  Quantity: number;
}

export default function NewProduct() {
  const [Name, setName] = useState<string>('');
  const [Description, setDescription] = useState<string>('');
  const [Price, setPrice] = useState<number>(0);
  const [Quantity, setQuantity] = useState<number>(0);

  const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const productRef = collection(db, 'Products');
      const newProduct: Product = {
        Name,
        Description,
        Price,
        Quantity,
      };
      await addDoc(productRef, newProduct);
      console.log('Product added successfully!');
      Router.push('/products');
    } catch (error) {
      console.error('Error adding product: ', error);
    }
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <form onSubmit={handleAddProduct} className="space-y-4 m-12">
        <div>
          <label className="block mb-1">Product Name:</label>
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Product Description:</label>
          <input
            type="text"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Price:</label>
          <input
            type="number"
            value={Price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block mb-1">Available Quantity:</label>
          <input
            type="number"
            value={Quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

NewProduct.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
