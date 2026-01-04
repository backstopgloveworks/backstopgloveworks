/* ============================================
   JAVASCRIPT - GLOVE REPAIR WEBSITE
   All interactive functionality organized by section
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    /* ============================================
       SECTION: MOBILE NAVIGATION
       ============================================ */
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    }
    
    
    /* ============================================
       SECTION: SMOOTH SCROLL WITH OFFSET
       ============================================ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    /* ============================================
       SECTION: LACE COLOR DATA
       Define all lace colors and images
       ============================================ */
    const laceColors = [
        { name: 'Black Cougar AL', color: '#1a1a1a', image: 'https://via.placeholder.com/800x800?text=Black+Cougar' },
        { name: 'Black SC', color: '#2d2d2d', image: 'https://via.placeholder.com/800x800?text=Black+SC' },
        { name: 'Black TT', color: '#000000', image: 'https://via.placeholder.com/800x800?text=Black+TT' },
        { name: 'Indian Tan AL', color: '#d4a373', image: 'https://via.placeholder.com/800x800?text=Indian+Tan' },
        { name: 'Chieftan Tan SC', color: '#c19a6b', image: 'https://via.placeholder.com/800x800?text=Chieftan+Tan' },
        { name: 'Havana Tan TT', color: '#b38b6d', image: 'https://via.placeholder.com/800x800?text=Havana+Tan' },
        { name: 'Japan Tan TT', color: '#daa06d', image: 'https://via.placeholder.com/800x800?text=Japan+Tan' },
        { name: 'Camel AL', color: '#c19a6b', image: 'https://via.placeholder.com/800x800?text=Camel' },
        { name: 'Vanilla Cream', color: '#f3e5ab', image: 'https://via.placeholder.com/800x800?text=Vanilla+Cream' },
        { name: 'White TT', color: '#f5f5f5', image: 'https://via.placeholder.com/800x800?text=White' },
        { name: 'Chocolate AL', color: '#3e2723', image: 'https://via.placeholder.com/800x800?text=Chocolate' },
        { name: 'Dark Chocolate AL', color: '#4e342e', image: 'https://via.placeholder.com/800x800?text=Dark+Chocolate' },
        { name: 'Dark Brown AL', color: '#5d4037', image: 'https://via.placeholder.com/800x800?text=Dark+Brown' },
        { name: 'Chestnut AL', color: '#954535', image: 'https://via.placeholder.com/800x800?text=Chestnut' },
        { name: 'Burgundy Prime', color: '#800020', image: 'https://via.placeholder.com/800x800?text=Burgundy' },
        { name: 'Maroon TT', color: '#800000', image: 'https://via.placeholder.com/800x800?text=Maroon' },
        { name: 'Cardinal Red TT', color: '#c41e3a', image: 'https://via.placeholder.com/800x800?text=Cardinal+Red' },
        { name: 'Bright Red', color: '#ff0000', image: 'https://via.placeholder.com/800x800?text=Bright+Red' },
        { name: 'Bloodline TT', color: '#8b0000', image: 'https://via.placeholder.com/800x800?text=Bloodline' },
        { name: 'Bright Pink Tulip', color: '#ff69b4', image: 'https://via.placeholder.com/800x800?text=Pink' },
        { name: 'Passion Pink TT', color: '#ff1493', image: 'https://via.placeholder.com/800x800?text=Passion+Pink' },
        { name: 'Purple TT', color: '#800080', image: 'https://via.placeholder.com/800x800?text=Purple' },
        { name: 'Orange TT', color: '#ff8c00', image: 'https://via.placeholder.com/800x800?text=Orange' },
        { name: 'Orange Peel AD', color: '#ffa500', image: 'https://via.placeholder.com/800x800?text=Orange+Peel' },
        { name: 'Yellow TT', color: '#ffd700', image: 'https://via.placeholder.com/800x800?text=Yellow' },
        { name: 'Pirate Yellow AL', color: '#f4c430', image: 'https://via.placeholder.com/800x800?text=Pirate+Yellow' },
        { name: 'Lemon Yellow', color: '#fff44f', image: 'https://via.placeholder.com/800x800?text=Lemon+Yellow' },
        { name: 'Light Gray AL', color: '#d3d3d3', image: 'https://via.placeholder.com/800x800?text=Light+Gray' },
        { name: 'Smoke Gray', color: '#708090', image: 'https://via.placeholder.com/800x800?text=Smoke+Gray' },
        { name: 'Dark Gray AL', color: '#696969', image: 'https://via.placeholder.com/800x800?text=Dark+Gray' },
        { name: 'Gray TT', color: '#808080', image: 'https://via.placeholder.com/800x800?text=Gray' },
        { name: 'Kelly Green', color: '#4cbb17', image: 'https://via.placeholder.com/800x800?text=Kelly+Green' },
        { name: 'Dark Green TT', color: '#013220', image: 'https://via.placeholder.com/800x800?text=Dark+Green' },
        { name: 'Neon Green', color: '#39ff14', image: 'https://via.placeholder.com/800x800?text=Neon+Green' },
        { name: 'Carolina Blue TT', color: '#56a0d3', image: 'https://via.placeholder.com/800x800?text=Carolina+Blue' },
        { name: 'Royal Blue TT', color: '#4169e1', image: 'https://via.placeholder.com/800x800?text=Royal+Blue' },
        { name: 'Wildcat Blue AL', color: '#0033a0', image: 'https://via.placeholder.com/800x800?text=Wildcat+Blue' },
        { name: 'Electric Blue AD', color: '#7df9ff', image: 'https://via.placeholder.com/800x800?text=Electric+Blue' },
        { name: 'Sapphire Blue', color: '#0f52ba', image: 'https://via.placeholder.com/800x800?text=Sapphire+Blue' },
        { name: 'Navy TT', color: '#000080', image: 'https://via.placeholder.com/800x800?text=Navy' },
        { name: 'Teal', color: '#008080', image: 'https://via.placeholder.com/800x800?text=Teal' },
        { name: 'Green Aqua', color: '#00ffff', image: 'https://via.placeholder.com/800x800?text=Green+Aqua' },
        { name: 'Mint', color: '#98ff98', image: 'https://via.placeholder.com/800x800?text=Mint' },
        { name: 'Ocean Mint TT', color: '#3eb489', image: 'https://via.placeholder.com/800x800?text=Ocean+Mint' }
    ];
    
    
    /* ============================================
       SECTION: LACE GALLERY FUNCTIONALITY
       Initialize color selector and image gallery
       ============================================ */
    const colorGrid = document.getElementById('colorGrid');
    const thumbnailGallery = document.getElementById('thumbnailGallery');
    const mainImage = document.getElementById('mainImage');
    const selectedColorName = document.getElementById('selectedColorName');
    const selectedColorDesc = document.getElementById('selectedColorDesc');
    
    if (colorGrid && mainImage) {
        // Generate color swatches
        laceColors.forEach((lace, index) => {
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch' + (index === 0 ? ' selected' : '');
            swatch.style.backgroundColor = lace.color;
            swatch.dataset.index = index;
            
            const swatchName = document.createElement('span');
            swatchName.className = 'color-swatch-name';
            swatchName.textContent = lace.name;
            swatch.appendChild(swatchName);
            
            swatch.addEventListener('click', function() {
                selectColor(index);
            });
            
            colorGrid.appendChild(swatch);
        });
        
        // Generate thumbnail gallery
        const thumbnailCount = Math.min(8, laceColors.length);
        for (let i = 0; i < thumbnailCount; i++) {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail-item' + (i === 0 ? ' active' : '');
            thumbnail.dataset.index = i;
            
            const img = document.createElement('img');
            img.src = laceColors[i].image;
            img.alt = laceColors[i].name;
            thumbnail.appendChild(img);
            
            thumbnail.addEventListener('click', function() {
                selectColor(i);
            });
            
            thumbnailGallery.appendChild(thumbnail);
        }
        
        // Function to select a color
        function selectColor(index) {
            const lace = laceColors[index];
            
            // Update main image
            mainImage.src = lace.image;
            mainImage.alt = lace.name;
            
            // Update selected color info
            selectedColorName.textContent = lace.name;
            
            // Update color swatches
            document.querySelectorAll('.color-swatch').forEach((swatch, i) => {
                swatch.classList.toggle('selected', i === index);
            });
            
            // Update thumbnails
            document.querySelectorAll('.thumbnail-item').forEach((thumb, i) => {
                thumb.classList.toggle('active', i === index);
            });
        }
    }
    
    
    /* ============================================
       SECTION: IMAGE ZOOM MODAL
       Click main image to zoom
       ============================================ */
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    
    if (mainImage && modal) {
        mainImage.addEventListener('click', function() {
            modal.classList.add('show');
            modalImg.src = this.src;
        });
        
        if (modalClose) {
            modalClose.addEventListener('click', function() {
                modal.classList.remove('show');
            });
        }
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                modal.classList.remove('show');
            }
        });
    }
    
    
    /* ============================================
       SECTION: BEFORE & AFTER COMPARISON SLIDER
       Interactive image comparison with drag
       ============================================ */
    const comparisonSliders = document.querySelectorAll('.comparison-slider');
    
    comparisonSliders.forEach(slider => {
        const afterImage = slider.querySelector('.after');
        const handle = slider.querySelector('.comparison-handle');
        let isDragging = false;
        
        // Function to update slider position
        function updateSliderPosition(x) {
            const rect = slider.getBoundingClientRect();
            const offsetX = x - rect.left;
            const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
            
            afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
            handle.style.left = `${percentage}%`;
        }
        
        // Mouse events
        slider.addEventListener('mousedown', function(e) {
            isDragging = true;
            updateSliderPosition(e.clientX);
        });
        
        document.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
            updateSliderPosition(e.clientX);
        });
        
        document.addEventListener('mouseup', function() {
            isDragging = false;
        });
        
        // Touch events
        slider.addEventListener('touchstart', function(e) {
            isDragging = true;
            updateSliderPosition(e.touches[0].clientX);
        });
        
        document.addEventListener('touchmove', function(e) {
            if (!isDragging) return;
            updateSliderPosition(e.touches[0].clientX);
        });
        
        document.addEventListener('touchend', function() {
            isDragging = false;
        });
        
        // Click to position
        slider.addEventListener('click', function(e) {
            updateSliderPosition(e.clientX);
        });
    });
    
    
    /* ============================================
       SECTION: CONTACT FORM HANDLING
       Form submission with validation
       ============================================ */
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Here you would typically send the data to a server
            console.log('Form submitted with data:', data);
            
            // Show success message
            alert('Thank you for your inquiry! We will contact you soon with a quote.');
            
            // Reset form
            this.reset();
        });
    }
    
    
    /* ============================================
       SECTION: SCROLL ANIMATIONS
       Add animations on scroll
       ============================================ */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animation
    const animateOnScroll = document.querySelectorAll('.service-card, .process-step, .fix-item, .comparison-container');
    animateOnScroll.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    
    /* ============================================
       SECTION: HEADER SCROLL EFFECT
       Add shadow to header on scroll
       ============================================ */
    const header = document.querySelector('.site-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    
    /* ============================================
       SECTION: LAZY LOADING IMAGES
       Improve page load performance
       ============================================ */
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
    
    
    /* ============================================
       SECTION: LACE SIZE SELECTOR
       Handle lace size selection
       ============================================ */
    const laceSizeInputs = document.querySelectorAll('input[name="laceSize"]');
    
    laceSizeInputs.forEach(input => {
        input.addEventListener('change', function() {
            const selectedSize = this.value;
            const description = selectedSize === '3/16' 
                ? '3/16 x 72 INCH - Standard width for most baseball and softball gloves'
                : '1/4 x 72 INCH - Wider lace often used for web itself';
            
            if (selectedColorDesc) {
                selectedColorDesc.textContent = description;
            }
        });
    });
    
    
    console.log('Glove Repair Website - All JavaScript initialized successfully!');
});


/* ============================================
   UTILITY FUNCTIONS
   Helper functions for the website
   ============================================ */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll to element
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const headerHeight = document.querySelector('.site-header').offsetHeight;
        const targetPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Get URL parameters
function getUrlParameter(name) {
