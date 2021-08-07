export const getPrettyTime = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const day = date.getDate();
  const month = months[date.getMonth()];

  return `${month} ${day}, ${year}`;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
