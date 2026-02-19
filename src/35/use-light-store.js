import { create } from "zustand";

// v1
[].map(() => {
  const dist = { name: "TEst" };

  return dist;
});

// v2
[].map(() => ({ name: "TEst" }));

/* 
 1. (() => { console.log() }) // se asteapta sa fie cod in acolade iar ulerior un return
 2. (() => ({})) hey sunt o functie care retruneaza un obiect sa mai aiba cod
*/

export const useLightStore = create((set) => ({
    isOpen: false, // 'light' | 'dark'
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

/* 
// const [active, toggle] = useToggle(false);
// toggle() -> active false -> true
// toggle() -> active true -> false

import { useState } from "react";

export function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);

  function toggleValue() {
    setValue(!value);
  }

  return [value, toggleValue];
} */
