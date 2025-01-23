const apiUrl = 'https://jsonplaceholder.typicode.com/todos/';
const rowsPerPage = 5; // Number of rows to display per page
let currentPage = 1; // Track the current page
let data = []; // Store fetched data

// Fetch data from API and initialize the table
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }
    data = await response.json();
    renderTable();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Render the table with current page data
function renderTable() {
  const tableBody = document.getElementById('table-body');
  tableBody.innerHTML = ''; // Clear existing rows

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageData = data.slice(start, end);

  pageData.forEach((item) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${item.id}</td>  
        <td>${item.userId}</td>
        <td>${item.id==1? "Dhruv" : item.title}</td>
        <td>${item.completed ? 'Yes' : 'No'}</td>
        <td><img src="https://th.bing.com/th/id/OIP.OCW5ZGg9HvdfEgGLEs8jqgHaFk?rs=1&pid=ImgDetMain" alt="image" hight=20% width="25%"/></td>  
        <td>${(item.id%2)== 0? 'False' : 'True'}</td>
    `;
    tableBody.appendChild(row);
  });

  

  // Update button states
  document.getElementById('prev-button').disabled = currentPage === 1;
  document.getElementById('next-button').disabled = end >= data.length;
}

// Event listeners for navigation buttons
document.getElementById('prev-button').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
});

document.getElementById('next-button').addEventListener('click', () => {
  if (currentPage * rowsPerPage < data.length) {
    currentPage++;
    renderTable();
  }
});

// Fetch data when the page loads
fetchData();
