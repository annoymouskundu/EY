/*  JavaScript to handle search dialog visibility on hover and click
const searchIcon = document.querySelector('.search-container .nav-link');
const searchDialog = document.querySelector('.search-dialog');

// Show the search dialog when hovering over the search icon
searchIcon.addEventListener('mouseenter', function() {
    searchDialog.style.display = 'block';  // Show the dialog
});

// Hide the search dialog when the mouse leaves the search container
searchIcon.addEventListener('mouseleave', function(event) {
    if (!searchDialog.contains(event.relatedTarget)) {
        searchDialog.style.display = 'none';  // Hide the dialog if the mouse leaves both
    }
});

// Keep the dialog visible when the mouse is hovering over the dialog
searchDialog.addEventListener('mouseenter', function() {
    searchDialog.style.display = 'block';  // Keep dialog open
});

// Hide the dialog when the mouse leaves the dialog area
searchDialog.addEventListener('mouseleave', function() {
    searchDialog.style.display = 'none';  // Hide the dialog when mouse leaves
});
*/

const searchIcon = document.querySelector('.search-container .nav-link');
const searchDialog = document.querySelector('.search-dialog');

// Flag to track whether the dialog should remain visible
let isDialogVisible = false;

// Show the search dialog when hovering over the search icon
searchIcon.addEventListener('mouseenter', function() {
    searchDialog.style.display = 'block';  // Show the dialog
    isDialogVisible = true;
});

// Keep the dialog visible when the mouse is hovering over the dialog
searchDialog.addEventListener('mouseenter', function() {
    searchDialog.style.display = 'block';  // Keep dialog open
    isDialogVisible = true;
});

// Hide the search dialog when the mouse leaves the search container or dialog area
searchIcon.addEventListener('mouseleave', function(event) {
    if (!searchDialog.contains(event.relatedTarget) && isDialogVisible) {
        // Check if mouse moves horizontally, hide the dialog
        if (event.clientX < searchIcon.getBoundingClientRect().left || 
            event.clientX > searchIcon.getBoundingClientRect().right) {
            searchDialog.style.display = 'none';  // Hide the dialog if mouse leaves horizontally
            isDialogVisible = false;
        }
    }
});

searchDialog.addEventListener('mouseleave', function(event) {
    // Only hide if the mouse moves away horizontally
    if (event.clientX < searchDialog.getBoundingClientRect().left || 
        event.clientX > searchDialog.getBoundingClientRect().right) {
        searchDialog.style.display = 'none';  // Hide the dialog if mouse leaves horizontally
        isDialogVisible = false;
    }
});
