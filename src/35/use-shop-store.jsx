import { create } from "zustand";

export const useShopStore = create((set) => ({
  cos: [],
  balanta: 500,
  totalPlata: 0,
  adaugaProdus: (produs, pret) =>
    set((state) => {
      if (state.balanta < pret) {
        alert("Heyy, nu ai bani.");
        return state;
      }

      return {
        balanta: state.balanta - pret,
        totalPlata: state.totalPlata + pret,
        cos: [...state.cos, produs],
      };
    }),
  golesteCosul: () => set(() => ({ balanta: 500, totalPlata: 0, cos: [] })),
}));
