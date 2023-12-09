'use client'
import firebase_app from "@/firebase/config";
import { getFirestore, collection, query, where, doc, getDoc, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function getDocument(collection, id) {
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function getAllDocuments(collectionName) {
  console.log("hi");
  try {
    

    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });

    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return documents;
  } catch (error) {
    console.error('Error getting documents:', error);
    return []; // Return empty array in case of an error
  }
};
