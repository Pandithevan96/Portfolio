// useRefsStore.js
import { create } from 'zustand';

const useRefsStore = create((set) => ({
  sectionRefs: [],  // Initialize with an empty array to store refs
  addRef: (el) => {
    set((state) => {
      // Add the element ref to the store's sectionRefs array if it's not already present
      if (el && !state.sectionRefs.includes(el)) {
        return { sectionRefs: [...state.sectionRefs, el] };
      }
      return state;  // Return current state if the element is already added
    });
  },
}));

export default useRefsStore;
