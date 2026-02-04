// Menu Toggle Functionality
(function() {
    'use strict';

    // Get elements
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.getElementById('menuOverlay');
    const menuClose = document.getElementById('menuClose');
    const menuItems = document.querySelectorAll('.menu-item a');
    const body = document.body;

    // Open menu
    function openMenu() {
        menuOverlay.classList.add('active');
        body.style.overflow = 'hidden';
        
        // Animate menu items
        const items = document.querySelectorAll('.menu-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animate');
            }, index * 100);
        });
    }

    // Close menu
    function closeMenu() {
        menuOverlay.classList.remove('active');
        body.style.overflow = '';
        
        // Remove animation classes
        const items = document.querySelectorAll('.menu-item');
        items.forEach(item => {
            item.classList.remove('animate');
        });
    }

    // Event listeners
    if (menuToggle) {
        menuToggle.addEventListener('click', openMenu);
    }

    if (menuClose) {
        menuClose.addEventListener('click', closeMenu);
    }

    // Close menu when clicking menu items
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = item.getAttribute('href');
            
            // Check if it's an internal anchor link
            if (target && target.startsWith('#')) {
                e.preventDefault();
                closeMenu();
                const section = document.querySelector(target);
                if (section) {
                    setTimeout(() => {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                }
            } else {
                // External link or page - just close menu and let it navigate
                closeMenu();
            }
        });
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
            closeMenu();
        }
    });

    // Close menu when clicking outside
    if (menuOverlay) {
        menuOverlay.addEventListener('click', (e) => {
            if (e.target === menuOverlay) {
                closeMenu();
            }
        });
    }

    // Menu item hover effect
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const menuNumber = this.querySelector('.menu-number');
            const menuText = this.querySelector('.menu-text');
            if (menuNumber) menuNumber.style.transform = 'translateX(20px)';
            if (menuText) menuText.style.transform = 'translateX(20px)';
        });

        item.addEventListener('mouseleave', function() {
            const menuNumber = this.querySelector('.menu-number');
            const menuText = this.querySelector('.menu-text');
            if (menuNumber) menuNumber.style.transform = 'translateX(0)';
            if (menuText) menuText.style.transform = 'translateX(0)';
        });
    });

})();
