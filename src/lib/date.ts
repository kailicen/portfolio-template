// lib/date.ts

const monthNames = [
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

export function formatDateOnly(dateString?: string | null) {
  if (!dateString) return "";

  const datePart = dateString.split("T")[0]; // "2025-05-20"
  const [year, month, day] = datePart.split("-");

  const monthIndex = Number(month) - 1;

  if (!year || !month || !day || monthIndex < 0 || monthIndex > 11) {
    return dateString;
  }

  return `${Number(day)} ${monthNames[monthIndex]} ${year}`;
}
