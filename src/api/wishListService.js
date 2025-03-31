import { db, addDoc, collection, getDocs } from "../firebase/firebaseConfig";

export const wishListService = {
  async createWishlist(payload) {
    try {
      const response = await addDoc(collection(db, "wishlist"), {
        userId: payload.userId,
        productId: payload.productId,
        heart: payload.heart,
        productName: payload.productName,
      });

      return response;
    } catch (error) {
      throw new Error(`Failed to add item to wishlist: ${error.message}`);
    }
  },

  async getWishlist(userId) {
    try {
      const wishlistRef = collection(db, "wishlist");
      const querySnapshot = await getDocs(wishlistRef);
      const wishlist = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return wishlist;
    } catch (error) {
      throw new Error(`Failed to fetch wishlist: ${error.message}`);
    }
  },
};
