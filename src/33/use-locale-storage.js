import { useState } from "react";

export function useLocaleStorage(key, defaultValue) {
  // Funcție pentru a recupera valoarea inițială
  function getDefaultValue() {
    try {
      const localeValue = localStorage.getItem(key);
      
      // Dacă există în storage, îl transformăm din string înapoi în obiect/array
      if (localeValue !== null) {
        return JSON.parse(localeValue);
      }
    } catch (error) {
      console.error("Eroare la citirea din localStorage:", error);
    }

    // Dacă nu există sau e eroare, returnăm valoarea default
    return defaultValue;
  }

  const [value, setValue] = useState(getDefaultValue());

  // Funcție pentru a actualiza atât starea, cât și storage-ul
  function setLocaleStorageValue(updatedValue) {
    try {
      // Permitem updatedValue să fie o funcție (la fel ca la useState standard)
      const valueToStore = updatedValue instanceof Function ? updatedValue(value) : updatedValue;
      
      setValue(valueToStore);
      
      // Convertim în string înainte de salvare
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Eroare la salvarea în localStorage:", error);
    }
  }

  return [value, setLocaleStorageValue];
}
// const { votes, upVote, downVite } = useSimpleVote(15);
// upVote -> votes = votes + 1
// downVite -> votes = votes - 1 ?? Sa nu fie sub 0