const cartIcon = document.querySelector('.cart-container .nav-link');
const cartDialog = document.querySelector('.cart-dialog');

// Flag to track whether the dialog should remain visible
let isCartDialogVisible = false;

// Show the cart dialog when hovering over the cart icon
cartIcon.addEventListener('mouseenter', function() {
    cartDialog.style.display = 'block';  // Show the dialog
    isCartDialogVisible = true;
});

// Keep the cart dialog visible when the mouse is hovering over the dialog
cartDialog.addEventListener('mouseenter', function() {
    cartDialog.style.display = 'block';  // Keep dialog open
    isCartDialogVisible = true;
});

// Hide the cart dialog when the mouse leaves the cart icon or dialog area
cartIcon.addEventListener('mouseleave', function(event) {
    if (!cartDialog.contains(event.relatedTarget) && isCartDialogVisible) {
        // Check if mouse moves horizontally, hide the dialog
        if (event.clientX < cartIcon.getBoundingClientRect().left || 
            event.clientX > cartIcon.getBoundingClientRect().right) {
            cartDialog.style.display = 'none';  // Hide the dialog if mouse leaves horizontally
            isCartDialogVisible = false;
        }
    }
});

cartDialog.addEventListener('mouseleave', function(event) {
    // Only hide if the mouse moves away horizontally
    if (event.clientX < cartDialog.getBoundingClientRect().left || 
        event.clientX > cartDialog.getBoundingClientRect().right) {
        cartDialog.style.display = 'none';  // Hide the dialog if mouse leaves horizontally
        isCartDialogVisible = false;
    }
});
