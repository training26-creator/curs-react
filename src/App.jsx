import "./App.css";

import { Header } from "./28/header";

import UserItemCard from "./28/user-item";

function App() {
  // console.log(addTwo(1, 2), 'rezultat adunare')

  return (
    <>
      <input id="" className="" />

      <Header userName="Vasi" />
      <Header userName="Radu" />
      <Header userName="Alex" />

      <UserItemCard
        name="Ron"
        email="test@gmail.com"
        comment="Ce poza frumoasa!"
      />
      <UserItemCard name="Dol" email="test@gmail.com" />
      <UserItemCard name="Typ" email="test@gmail.com" />
      <UserItemCard name="Zoi" email="test@gmail.com" />
    </>
  );
}

export default App;
