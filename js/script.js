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
