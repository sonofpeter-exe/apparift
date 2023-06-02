window.addEventListener('DOMContentLoaded', function() {
  var catShoes = document.querySelector('.cat-shoes');
  var catSports = document.querySelector('.cat-sports');
  var catC2 = document.getElementById('cat-c2');
  var catC3 = document.getElementById('cat-c3');
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function applyChanges() {
  // Move cat-shoes to cat-c2
  catC2.appendChild(catShoes);

  // Add cat-large class and remove cat-medium class from cat-sports
  catSports.classList.add('cat-large');
  catSports.classList.remove('cat-medium');

  // Move cat-sports to cat-c3
  catC3.appendChild(catSports);
}

function revertChanges() {
  // Move cat-shoes back to cat-c3
  catC3.appendChild(catShoes);

  // Remove cat-large class and add cat-medium class to cat-sports
  catSports.classList.remove('cat-large');
  catSports.classList.add('cat-medium');

  // Move cat-sports back to cat-c2
  catC2.appendChild(catSports);
}

if (screenWidth <= 767) {
  applyChanges();
} else {
  revertChanges();
}

window.addEventListener('resize', function() {
  screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth <= 767) {
    applyChanges();
  } else {
    revertChanges();
  }
});
});



// JavaScript code

// Get references to the search button, back button, search screen, and search input
const searchBtn = document.getElementById('search-btn');
const backBtn = document.getElementById('back-btn');
const searchScreen = document.getElementById('search-screen');
const searchInput = document.getElementById('search-input');

// Add event listeners for click events
searchBtn.addEventListener('click', showSearchScreen);
backBtn.addEventListener('click', hideSearchScreen);
searchInput.addEventListener('input', toggleSearchText);

// Function to show the search screen
function showSearchScreen() {
  searchScreen.style.display = 'block';
  // Add a new history state to prevent the browser from navigating back to the previous page
  history.pushState({ searchScreenActive: true }, '');
  searchInput.focus();
}

// Function to hide the search screen
function hideSearchScreen() {
  searchScreen.style.display = 'none';
  // Go back in history only if the search screen was active
  if (history.state && history.state.searchScreenActive) {
    history.back();
  }
}

// Function to toggle the search text
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



