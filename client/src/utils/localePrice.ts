type localePrice = {
  minor_units: number;
  code: string;
};

export function localePrice({ minor_units, code }: localePrice) {
  return (minor_units / 100).toLocaleString("fr-FR", {
    style: "currency",
    currency: code,
  });
}
