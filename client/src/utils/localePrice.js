export function localePrice(data) {
  const { minor_units, code } = data;
  return (minor_units / 100).toLocaleString("fr-FR", {
    style: "currency",
    currency: code,
  });
}
