import "./App.css";

import { Header } from "./28/header";

import UserItemCard from "./28/user-item";

import { HtmlFor } from "./29/html-for";
import { Click } from "./29/click";
import { Input } from "./29/input";
import { State } from "./29/state";
import { Todos } from "./30/todos";
import { Cursuri } from "./30/cursuri";
import { Tailwind } from "./31/tailwind";
import { VoteProvider } from "./34/vote-provider";

function App() {
  return (
    <>

        <Todos name="Vadym" />

      <hr />

      <Tailwind />

      <Cursuri
        lista={[
          { id: 101, titlu: "Introducere în React", categorie: "Programare" },
          { id: 102, titlu: "Design UI/UX", categorie: "Design" },
          { id: 103, titlu: "Baze de Date SQL", categorie: "Programare" },
        ]}
      />

      {/* Sesiunea 29 */}
      {/* <HtmlFor />

      <Click/>

      <Input/>

      <State/> */}

      {/* Sesiunea 28 */}
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
