// JavaScript code

// Get references to the search button and search screen
const searchBtn = document.getElementById('search-btn');
const backBtn = document.getElementById('back-btn');
const searchScreen = document.getElementById('search-screen');
const searchInput = document.getElementById('search-input');
const searchText = document.getElementById('search-text');

// Add event listeners for click events
searchBtn.addEventListener('click', toggleSearchScreen);
backBtn.addEventListener('click', hideSearchScreen);
searchInput.addEventListener('input', toggleSearchText);

// Variable to track search screen visibility
let isSearchScreenVisible = false;

// Function to toggle the search screen
function toggleSearchScreen() {
  if (!isSearchScreenVisible) {
    showSearchScreen();
  } else {
    hideSearchScreen();
  }
}

// Function to show the search screen
function showSearchScreen() {
  searchScreen.style.backgroundColor = 'white';
  backBtn.style.color = 'grey';
  searchText.style.display = 'block'
  // Add a new history state to prevent the browser from navigating back to the previous page
  history.pushState({ searchScreenActive: true }, '');
  searchInput.focus();
  isSearchScreenVisible = true;
}

// Function to hide the search screen
function hideSearchScreen() {
  searchScreen.style.backgroundColor = 'transparent';
  backBtn.style.color = 'transparent';
  searchText.style.display = 'none'
  // Go back in history only if the search screen was active
  if (history.state && history.state.searchScreenActive) {
    history.back();
  }
  isSearchScreenVisible = false;
}

// Function to toggle the search text
function toggleSearchText() {
  const searchText = document.getElementById('search-text');
  if (searchInput.value === '' && isSearchScreenVisible) {
    searchText.style.display = 'block';
  } else {
    searchText.style.display = 'none';
  }
}

// Listen for the onpopstate event to handle the back button on mobile devices
window.onpopstate = function (event) {
  // Check if the search screen is active and hide it
  if (isSearchScreenVisible) {
    hideSearchScreen();
  }
};



const filterBtn = document.getElementById('bot-fltr');
const filterBox = document.getElementById('filter-box');
const searchHeader = document.getElementById('search-header');

filterBtn.addEventListener('click', () => {
  filterBtn.style.display = 'none';
  filterBox.style.transform = 'translateY(100%)';
  filterBox.style.backgroundColor = 'transparent';
  filterBox.style.display = 'none';
  searchHeader.style.backgroundColor = '#FFF';
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    filterBox.style.transform = 'translateY(-100%)';
    filterBox.style.backgroundColor = 'transparent';
    filterBox.style.display = 'none';
    searchHeader.style.backgroundColor = 'transparent';
  } else {
    filterBtn.style.display = 'block';
    filterBox.style.transform = 'translateY(0)';
    filterBox.style.backgroundColor = 'initial';
    filterBox.style.display = 'block';
    searchHeader.style.backgroundColor = 'initial';
  }
});
