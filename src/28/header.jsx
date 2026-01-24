// JSX
// JS + X
// JS - JavaScript
// X - XML
// JSX = JS + HTML in acelasi fisier

// !IMPORTANT - 1 singur fisier jsx tine o singura componenta
// 2. numele componentei sa se reflecte in numele fisierului
// 3. toate componentele react trebuie sa inceapa cu litera mare
import { HelloText } from "./hello-text";

// in html ce este = "" este text sau string
// daca avem nevoie de a accesa o variabila in html folsim {}

// props - proprietati
// props = obiect
// obiec.proprietate
export function Header({ userName }) {
    // 1. Parte unde putem face magie cu JS
    const userNameUpdated = userName + ' Familia'
    // 2. Este in return unde avem HTML | HTML + JS
  return <HelloText userName={userNameUpdated} />;
}
