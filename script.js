// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const burgerMenu = document.getElementById('burger-menu');
    const navList = document.getElementById('nav');
    const navItems = document.querySelectorAll('.nav-item');
    
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on nav items
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // Sticky header on scroll
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.classList.add('scrolled');
        } else {
            // Scrolling up
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active menu item on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-item a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkId = link.getAttribute('href').substring(1);
            
            if (linkId === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Initialize active state for first nav item
    document.querySelector('.nav-item').classList.add('active');
});
