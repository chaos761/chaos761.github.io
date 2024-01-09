document.addEventListener("DOMContentLoaded", function () {
    // Get the current date
    const currentDate = new Date();

    // Get the month and year
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Call a function to populate the calendar table
    generateCalendar(currentMonth, currentYear);
});

function generateCalendar(month, year) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Get the first day of the month
    const firstDay = new Date(year, month, 1);

    // Create a table reference
    const calendarTable = document.getElementById("calendarTable");

    // Clear existing rows in the table
    while (calendarTable.rows.length > 1) {
        calendarTable.deleteRow(1);
    }

    // Create a new row for the days
    let newRow = calendarTable.insertRow(-1);

    // Add empty cells for the days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
        newRow.insertCell(-1);
    }

    // Loop through each day of the month
    for (let day = 1; day <= new Date(year, month + 1, 0).getDate(); day++) {
        // Check if it's the start of a new week
        if (newRow.cells.length === 7) {
            newRow = calendarTable.insertRow(-1);
        }

        // Create a new cell for each day
        const newCell = newRow.insertCell(-1);
        newCell.textContent = day;
    }

    // Update the calendar title with the current month
    document.querySelector(".calendar h2").textContent = `${months[month]} ${year}`;
}