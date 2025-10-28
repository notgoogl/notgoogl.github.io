const searchInput = document.getElementById('keyword');

searchInput.addEventListener('keypress', function(event) {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.key === 'Enter') {
        // Prevent the default form submission behavior (if the input is inside a form)
        event.preventDefault(); 

        const url = './results/';

        // Navigate to the constructed URL
        window.location.href = url;
    }
});

