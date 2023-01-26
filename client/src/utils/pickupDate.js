export function pickupDate(start, end) {
  const dateDiff = Math.round(
    (start.getTime() - Date.now()) / 1000 / 60 / 60 / 24
  );

  const dateTime = new Intl.DateTimeFormat("fr-FR", {
    timeStyle: "short",
    timeZone: "Europe/Paris",
  }).formatRange(start, end);

  const relativeTime = new Intl.RelativeTimeFormat("fr-FR", {
    numeric: "auto",
  }).format(dateDiff, "day");

  return `À récupérer ${relativeTime} : ${dateTime}`;
}
