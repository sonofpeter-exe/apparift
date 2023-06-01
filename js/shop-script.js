// JavaScript code

// Get references to the search button and search screen
const searchBtn = document.getElementById('search-btn');
const backBtn = document.getElementById('back-btn');
const searchScreen = document.getElementById('search-screen');
const searchInput = document.getElementById('search-input');

// Add event listeners for click events
searchBtn.addEventListener('click', showSearchScreen);
backBtn.addEventListener('click', hideSearchScreen);
searchInput.addEventListener('input', toggleSearchText);


// Function to toggle the search screen
function toggleSearchScreen() {
  if (searchScreen.style.display === 'none') {
    showSearchScreen();
  } else {
    hideSearchScreen();
  }
}

// Function to show the search screen
function showSearchScreen() {
  searchScreen.style.display = 'block';
  // Add a new history state to prevent the browser from navigating back to the previous page
  history.pushState({ searchScreenActive: true }, '');
}

// Function to hide the search screen
function hideSearchScreen() {
  searchScreen.style.display = 'none';
  // Go back in history only if the search screen was active
  if (history.state && history.state.searchScreenActive) {
    history.back();
  }
}

function toggleSearchText() {
  const searchText = document.getElementById('search-text');
  if (searchInput.value === '') {
    searchText.style.display = 'block';
  } else {
    searchText.style.display = 'none';
  }
}

// Listen for the onpopstate event to handle the back button on mobile devices
window.onpopstate = function (event) {
  // Check if the search screen is active and hide it
  if (searchScreen.style.display === 'block') {
    searchScreen.style.display = 'none';
  }
};
