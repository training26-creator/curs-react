export function HtmlFor() {
  // 1. Cod JS
  // 2. In return punem html-ul returnat

  //   const obj = {
  //     bgColor: '123',
  //   }

  // background-color -> backgroundColor
  return (
    <div
      style={{
        backgroundColor: "red",
      }}
    >
      <label htmlFor="x">Prenume:</label>
      <input id="x" type="text" />

      <hr />
    </div>
  );
}
