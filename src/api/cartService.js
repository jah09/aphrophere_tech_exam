import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const cartService = {
  async createCartData(payload) {
    try {
      const response = await addDoc(collection(db, "cart"), {
        userId: payload.userId,
        productId: payload.productId,
        productName: payload.productName,
      });

      return response;
    } catch (error) {
      throw new Error(`Failed to add item to wishlist: ${error.message}`);
    }
  },

  async getCartData() {
    try {
      const cartRef = collection(db, "cart");
      const querySnapshot = await getDocs(cartRef);
      const cartLength = querySnapshot.docs.length;
        return {
            cartLength: cartLength,
            cartData: querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })),
      };
    } catch (error) {
      throw new Error(`Failed to fetch cart data: ${error.message}`);
    }
  },
};
