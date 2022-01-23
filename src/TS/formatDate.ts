export default function formatDate(timestamp: string) {
  let date = new Date(timestamp);

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  let day = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();

  return `${day} ${month} ${year}`
}