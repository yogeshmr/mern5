import {create} from "zustand"

export const useProductStore = create((set) => ({
  products: [],
  isLoading: false,
  setProducts: (products) => set({products}),
  
  createProduct: async(newProduct) =>{
    try{
    if(!newProduct.name || !newProduct.price || !newProduct.image){
      return {success:false, message:"Please fill all the fields (product.js)"}
    }
    const res = await fetch("/api/products",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(newProduct),
    });
    const data = await res.json();
      // Ensure products is always an array before spreading
      set((state) => ({
        products: Array.isArray(state.products) ? [...state.products, data.data] : [data.data]
      }));
    return {success:true, message:"Product added successfully(product.js)"};
    } catch(error){
      console.error("Error creating product:", error);
      return {success:false, message:"Error creating product"};
    }
  },

  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      set({ products: data.data, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      console.error(error);
    }
  },

  deleteProduct: async (pid) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({ products: state.products.filter((product) => product._id !== pid) }));
    return { success: true, message: data.message };
  },

  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({
      products: state.products.map((product) => (product._id === pid ? data.data : product)),
    }));

    return { success: true, message: data.message };
  },
  
}));

