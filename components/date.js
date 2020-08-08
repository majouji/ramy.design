function formatDate(dateString) {
  // Create a date object from the timestamp
  var date = new Date(dateString);

  // Create a list of names for the months
  var months = [
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

  // Return a formatted date
  return (
    months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
  );
}

export default function DisplayDate({ dateString }) {
  dateString = formatDate(dateString);
  return (
    <time className="postTimestamp" dateTime={dateString}>
      {dateString}
    </time>
  );
}
