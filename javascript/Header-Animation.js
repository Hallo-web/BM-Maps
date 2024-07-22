document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('nav ul li a');
    const indicator = document.createElement('div');
    indicator.className = 'indicator';
    document.querySelector('nav ul').appendChild(indicator);

    // Function to set indicator position
    function setIndicatorPosition(element) {
        indicator.style.width = `${element.offsetWidth}px`;
        indicator.style.left = `${element.offsetLeft}px`;
    }

    // Add hover effect
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            indicator.style.backgroundColor = '#800080'; // Purple color
            setIndicatorPosition(this);
        });

        item.addEventListener('mouseleave', function () {
            indicator.style.backgroundColor = '#ed028c'; // Pink color

        });
    });

    // Set active page
    const currentPage = window.location.pathname.split("/").pop();
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
            setIndicatorPosition(item);
        }
    });
});