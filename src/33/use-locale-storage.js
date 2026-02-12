import { useState } from "react";

export function useLocaleStorage(key, defaultValue) {
  function getDefaultValue() {
    const localeValue = localStorage.getItem(key);

    if (localeValue) return localeValue;

    return defaultValue;
  }

  const [value, setValue] = useState(getDefaultValue());

  function setLocaleStorageValue(updatedValue) {
    setValue(updatedValue);
    localStorage.setItem(key, updatedValue);
  }

  return [value, setLocaleStorageValue];
}
// const { votes, upVote, downVite } = useSimpleVote(15);
// upVote -> votes = votes + 1
// downVite -> votes = votes - 1 ?? Sa nu fie sub 0