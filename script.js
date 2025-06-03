// Menu Data
const menuItems = [
    {
        id: 1,
        name: "Classic Burger",
        category: "main",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Juicy beef patty with fresh vegetables and special sauce"
    },
    {
        id: 2,
        name: "Caesar Salad",
        category: "starters",
        price: "$8.99",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Fresh romaine lettuce with Caesar dressing and croutons"
    },
    {
        id: 3,
        name: "Chocolate Cake",
        category: "desserts",
        price: "$6.99",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Rich chocolate cake with ganache frosting"
    },
    {
        id: 4,
        name: "Margherita Pizza",
        category: "main",
        price: "$14.99",
        image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Classic pizza with tomato sauce and mozzarella"
    },
    {
        id: 5,
        name: "Garlic Bread",
        category: "starters",
        price: "$5.99",
        image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Toasted bread with garlic butter and herbs"
    },
    {
        id: 6,
        name: "Tiramisu",
        category: "desserts",
        price: "$7.99",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Classic Italian dessert with coffee-soaked ladyfingers"
    }
];

// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const categoryButtons = document.querySelectorAll('.category-btn');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form');

// Display Menu Items
function displayMenuItems(category = 'all') {
    menuGrid.innerHTML = '';
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p class="price">${item.price}</p>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Category Filter
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Display filtered items
        displayMenuItems(button.dataset.category);
    });
});

// Mobile Navigation
hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize the menu
displayMenuItems();

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = '#fff';
    }
}); 