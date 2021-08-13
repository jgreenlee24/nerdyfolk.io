export const colors = [
  "primary",
  "secondary",
  "accent",
  "info",
  "warning",
  "error",
  "success"
];

export function getDate(date) {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let convert = date ? new Date(date) : new Date();

  return convert.toLocaleDateString("en-US", options);
}

export default function randomData(slice) {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

  let data = Array.from({
    length: 10
  }, () =>
    Math.floor(Math.random() * 40)
  );
  let labels = [];

  for (let index = 0; index < data.length; index++) {
    labels[index] = alphabet[index];
  }

  return {
    data: slice ? data.slice(0, slice) : data,
    labels: slice ? labels.slice(0, slice) : labels,
  };
}
