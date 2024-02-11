window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    // Adjust the top and height properties based on the scroll position
    var img = document.getElementById('img');
    img.style.top = -450 + scrollPosition / 2  + 'px'; // Adjust the top position
    img.style.height = 220 - scrollPosition / 16  + '%'; // Adjust the height
});
