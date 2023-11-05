function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleDetails(button) {
  var details = button.nextElementSibling; // This gets the .additional-details div
  
  // Check if the details are already expanded
  var isExpanded = details.style.display !== 'none';
  
  // Toggle the display property
  if (isExpanded) {
    details.style.display = 'none';
    button.innerText = 'Learn More';
  } else {
    details.style.display = 'block';
    button.innerText = 'Learn Less';
  }
}

function loadHTMLModule(url, elementId) {
  fetch(url).then(function(response) {
    return response.text();
  }).then(function(html) {
    document.getElementById(elementId).innerHTML = html;
  }).catch(function(err) {
    console.warn('Something went wrong.', err);
  });
}
