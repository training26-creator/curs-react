export function Cursuri({ lista }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Cursurile Mele</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {/* PASUL 2 & 3: Folosește .map() aici pentru a genera lista */}

        {lista.map((curs) => {
          return (
            <li className="curs-item" key={curs.id}>
              {curs.titlu}
            </li>
          );
        })}
        {/* Exemplu de structură dorită pentru fiecare curs:

            <li className="curs-item"> 📚 Titlu Curs </li> 

        */}
      </ul>
      {/* PASUL 4: Nu uita de atributul 'key' pe <li>! */}
    </div>
  );
}
