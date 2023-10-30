function highlight() {
    // Get all <strong> elements within the paragraph
    const boldElements = document.querySelectorAll('p strong');

    // Change the color of all bold elements to green
    boldElements.forEach(element => {
        element.style.color = 'green';
    });
}

function return_normal() {
    // Get all <strong> elements within the paragraph
    const boldElements = document.querySelectorAll('p strong');

    // Revert the color of all bold elements to black
    boldElements.forEach(element => {
        element.style.color = 'black';
    });
}
