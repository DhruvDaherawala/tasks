const apiUrl = "https://67920209cf994cc680484667.mockapi.io/user";

// Handle image preview and Base64 conversion
const uploadImageInput = document.getElementById("uploadImage");
const imagePreview = document.getElementById("imagePreview");
let base64Image = ""; // To store the Base64 image string

// Function to convert image file to Base64 string 
uploadImageInput.addEventListener("change", async (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (!file) return;

    try {
        base64Image = await convertToBase64(file); // Convert image to Base64
        imagePreview.src = base64Image; // Set image source to Base64 string
        imagePreview.style.display = "block"; // Show image preview
    } catch (error) {
        console.error("Error converting image to Base64:", error);
        alert("Error converting image to Base64.");
    }
});

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);  // Resolve with Base64 string
    reader.onerror = (error) => reject(error);    // Reject if error occurs
    reader.readAsDataURL(file);                   // Convert image to Base64
  });
}

// Event listener to handle image upload and preview
uploadImageInput.addEventListener("change", async () => {
  const file = uploadImageInput.files[0];
  if (file) {
    try {
      base64Image = await convertToBase64(file); // Convert image to Base64
      imagePreview.src = base64Image;
      imagePreview.style.display = "block";
    } catch (error) {
      console.error("Error converting image to Base64:", error);
    }
  } else {
    base64Image = ""; // Clear Base64 string if no file is selected
    imagePreview.style.display = "none";
  }
});

// Fetch and display data
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch data.");
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    alert("Error fetching data.");
  }
}

// Display data in the table
function displayData(data) {
  const tableBody = document.getElementById("dataTable").querySelector("tbody");
  tableBody.innerHTML = ""; // Clear existing rows

  data.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td><img src="${item.image}" alt="${item.name}'s image" width="100"></td>
      <td class="actions">
        <button class="update-btn" onclick="populateForm('${item.id}', '${item.name}', '${item.email}', '${item.image}')">Update</button>
        <button class="delete-btn" onclick="deleteData('${item.id}')">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Populate form for updating
function populateForm(id, name, email, image) {
  document.getElementById("id").value = id;
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("imageURL").value = image;
  imagePreview.src = image;
  imagePreview.style.display = "block";
}

// Insert data
async function insertData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const imageURL = document.getElementById("imageURL").value;
  const imageToUpload = base64Image || imageURL; // Use Base64 string if uploaded, else use URL

  if (!imageToUpload) {
    alert("Please provide an image by uploading or entering a URL.");
    return;
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, image: imageToUpload }),
    });

    if (response.ok) {
      alert("Data inserted successfully!");
      fetchData(); // Refresh table
    } else {
      alert("Failed to insert data.");
    }
  } catch (error) {
    console.error("Error inserting data:", error);
  }
}

// Update data
async function updateData() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const imageURL = document.getElementById("imageURL").value;
  const imageToUpdate = base64Image || imageURL; // Use Base64 string if uploaded, else use URL

  if (!id) {
    alert("Please provide an ID for updating data.");
    return;
  }

  if (!imageToUpdate) {
    alert("Please provide an image by uploading or entering a URL.");
    return;
  }

  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, image: imageToUpdate }),
    });

    if (response.ok) {
      alert("Data updated successfully!");
      fetchData(); // Refresh table
    } else {
      alert("Failed to update data.");
    }
  } catch (error) {
    console.error("Error updating data:", error);
  }
}

// Delete data
async function deleteData(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Data deleted successfully!");
      fetchData(); // Refresh table
    } else {
      alert("Failed to delete data.");
    }
  } catch (error) {
    console.error("Error deleting data:", error);
  }
}

// Fetch data on page load
fetchData();
