import React from 'react';
import Layout from '@/components/layouts/Layout';
import firebase_app from "@/firebase/config";
import { getFirestore, collection, query, where, doc, getDoc, getDocs } from "firebase/firestore";
import Link from 'next/link';

const db = getFirestore(firebase_app)

interface Product {
  name: string;
  description: string;
  quantity: number;
  price: number;
}

const ProductsPage = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      console.log("starting");
        try {
          const querySnapshot = await getDocs(collection(db, "Products"));
          const documents: Product[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().Name,
            description: doc.data().Description,
            quantity: doc.data().Quantity,
            price: doc.data().Price,
          }));
          console.log(documents);
          setProducts(documents); 
          return documents;

        } catch (error) {
          console.error('Error getting documents:', error);
          return [];
        }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-sandstone">
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-4">Products Page</h1>
        <Link className="text-blue-600 text-lg p-5 mb-8" href="/products/newProduct">Add New Product Listing</Link>
        <section className="product-grid  m-4 space-y-4">
          {products.map((product, index) => (
            <div key={index} className="product-car border-black outline rounded-lg p-4">
              <h2 className='text-lg font-bold'>{product.name}</h2>
              <p><label className='text-md font-bold'>Description: </label>{product.description}</p>
              <p>Quantity Available: {product.quantity}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

ProductsPage.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default ProductsPage;
