// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Get all list items
    const listItems = document.querySelectorAll('ul li a');

    // Fade-in animation for the list
    const ul = document.querySelector('ul');
    ul.style.opacity = '0';
    ul.style.transition = 'opacity 1s ease-in';
    setTimeout(() => {
        ul.style.opacity = '1';
    }, 100);

    // Add click and hover effects to each link
    listItems.forEach((link, index) => {
        // Add initial styling
        link.style.transition = 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease';
        link.style.cursor = 'pointer';

        // Hover effect
        link.addEventListener('mouseenter', () => {
            link.style.backgroundColor = '#2980b9';
            link.style.transform = 'scale(1.05)';
            link.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.backgroundColor = '';
            link.style.transform = 'scale(1)';
            link.style.boxShadow = '';
        });

        // Click effect: Highlight selected link
        link.addEventListener('click', (e) => {
            // Prevent default if you want to test without navigating
            // e.preventDefault(); // Uncomment to test without page change

            // Remove active class from all links
            listItems.forEach(item => {
                item.classList.remove('active');
                item.style.backgroundColor = '';
            });

            // Add active class and style to clicked link
            link.classList.add('active');
            link.style.backgroundColor = '#2ecc71';
        });
    });

    // Add a subtle page load animation for the title
    const title = document.querySelector('h1');
    title.style.transform = 'translateY(-20px)';
    title.style.opacity = '0';
    title.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    setTimeout(() => {
        title.style.transform = 'translateY(0)';
        title.style.opacity = '1';
    }, 200);

    // Add a welcome message animation for the paragraph
    const paragraph = document.querySelector('p');
    paragraph.style.transform = 'translateX(-20px)';
    paragraph.style.opacity = '0';
    paragraph.style.transition = 'transform 0.7s ease, opacity 0.7s ease';
    setTimeout(() => {
        paragraph.style.transform = 'translateX(0)';
        paragraph.style.opacity = '1';
    }, 300);
    
    for (let day = 1; day <= daysInMonth; day++) {
    const li = document.createElement("li");
    li.textContent = day;

    if (day === now.getDate()) {
        li.classList.add("today");
    }

    calendar.appendChild(li);
}
});