export function Time() {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("ro-RO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <span>{formattedDate}</span>;
}
