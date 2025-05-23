// Clock function
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").innerText = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Enhanced Calendar with Date Highlighting
function generateCalendar() {
  const now = new Date();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getDay();

  let table = "<table>";
  table += `<tr><th colspan='7'>${monthNames[now.getMonth()]} ${now.getFullYear()}</th></tr>`;
  table += "<tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr><tr>";

  // Empty cells for days before the 1st of the month
  for (let i = 0; i < firstDayOfMonth; i++) table += "<td></td>";

  // Fill in the days of the month
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = d === now.getDate() && now.getMonth() === new Date().getMonth() && now.getFullYear() === new Date().getFullYear();
    table += `<td class="${isToday ? 'current-date' : ''}" data-day="${d}" data-month="${now.getMonth()}" data-year="${now.getFullYear()}">${d}</td>`;
    if ((firstDayOfMonth + d) % 7 === 0) table += "</tr><tr>";
  }

  table += "</tr></table>";
  document.getElementById("calendar").innerHTML = table;
}

// Initialize calendar and highlight today's date
generateCalendar();