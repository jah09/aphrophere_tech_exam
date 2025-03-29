import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const productService = {
  async getProducts() {
    try {
      // Reference the "products" collection in Firestore
      const productsRef = collection(db, "products");

      // Fetch all documents from the "products" collection
      const querySnapshot = await getDocs(productsRef);

      // Map the documents to an array of product data
      const products = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Include the document ID
        ...doc.data(), // Spread the document data
      }));

      return products;
    } catch (error) {
      throw new Error(`Failed to fetch products: ${error.message}`);
    }
  },
};
