import "./App.css";

import { Header } from "./28/header";

import UserItemCard from "./28/user-item";

import { HtmlFor } from "./29/html-for";
import { Click } from "./29/click";
import { Input } from "./29/input";
import { State } from "./29/state";


function App() {
  // console.log(addTwo(1, 2), 'rezultat adunare')

  return (
    <>
      <HtmlFor />

      <Click/>

      <Input/>

      <State/>

      {/* <Header userName="Vasi" />
      <Header userName="Radu" />
      <Header userName="Alex" />

      <UserItemCard
        name="Ron"
        email="test@gmail.com"
        comment="Ce poza frumoasa!"
      />
      <UserItemCard name="Dol" email="test@gmail.com" />
      <UserItemCard name="Typ" email="test@gmail.com" />
      <UserItemCard name="Zoi" email="test@gmail.com" /> */}
    </>
  );
}

export default App;
