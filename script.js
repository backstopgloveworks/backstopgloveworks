/* ============================================
   JAVASCRIPT - GLOVE REPAIR WEBSITE
   All interactive functionality organized by section
   ============================================ */

// LACE COLORS DATA - Define at top level
const laceColors = [
    // Row 1
    { name: 'Black', hex: '#2b2b2b' },
    { name: 'Black AD', hex: '#1a1a1a' },
    { name: 'Black TX', hex: '#0d0d0d' },
    { name: 'Saddle Tan', hex: '#8B4513' },
    { name: 'Tan', hex: '#D2691E' },
    { name: 'Gold', hex: '#DAA520' },
    { name: 'Orange', hex: '#FF6B35' },
    { name: 'Cream', hex: '#F5DEB3' },
    { name: 'Beige', hex: '#C4A574' },
    { name: 'Wheat', hex: '#D4B896' },
    { name: 'White', hex: '#FFFFFF', soldOut: true },
    { name: 'Brown', hex: '#654321' },
    { name: 'Dark Brown', hex: '#3d2817' },
    
    // Row 2
    { name: 'Dark Brown TX', hex: '#2d1810' },
    { name: 'Burgundy', hex: '#800020' },
    { name: 'Maroon', hex: '#691b1b' },
    { name: 'Cardinal', hex: '#8B1A1A' },
    { name: 'Red', hex: '#DC143C' },
    { name: 'Bright Red', hex: '#FF0000' },
    { name: 'Scarlet', hex: '#C8102E' },
    { name: 'Pink', hex: '#FF69B4' },
    { name: 'Hot Pink', hex: '#FF1493' },
    { name: 'Purple', hex: '#800080' },
    { name: 'Orange AD', hex: '#FF8C00' },
    { name: 'Orange TX', hex: '#FF4500' },
    { name: 'Yellow', hex: '#FFD700' },
    
    // Row 3
    { name: 'Canary', hex: '#FFFF99' },
    { name: 'Neon Yellow', hex: '#CCFF00' },
    { name: 'Olive', hex: '#6B8E23' },
    { name: 'Gray', hex: '#808080' },
    { name: 'Silver', hex: '#C0C0C0' },
    { name: 'Forest Green', hex: '#228B22' },
    { name: 'Teal', hex: '#008080' },
    { name: 'Mint', hex: '#98FF98' },
    { name: 'Tiger', hex: '#CC8800' },
    { name: 'Camo', hex: '#4a5d23' },
    { name: 'Vegas Gold', hex: '#C5B358' },
    { name: 'Dark Brown AD', hex: '#362214' },
    { name: 'Royal Blue', hex: '#0041C2' },
    
    // Row 4
    { name: 'Navy Blue', hex: '#1e3a5f' },
    { name: 'Electric Blue', hex: '#0080FF' },
    { name: 'Navy', hex: '#000080' },
    { name: 'Black Blue', hex: '#1a1a2e' },
    { name: 'Columbia Blue', hex: '#B9D9EB' },
    { name: 'Turquoise', hex: '#40E0D0' },
    { name: 'Aqua', hex: '#00FFFF', soldOut: true },
    { name: 'Seafoam', hex: '#93E9BE' }
];

let currentColorIndex = -1;

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
       SECTION: LACE GALLERY
       ============================================ */
    generateColorGrid();
    generateThumbnails();
    setupSizeButtons();
    
   
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
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}


/* ============================================
   LACE GALLERY FUNCTIONS
   ============================================ */

// GENERATE COLOR GRID
function generateColorGrid() {
    const colorGrid = document.getElementById('colorGrid');
    if (!colorGrid) return;
    
    laceColors.forEach((color, index) => {
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch' + (color.soldOut ? ' sold-out' : '');
        swatch.style.backgroundColor = color.hex;
        swatch.dataset.index = index;
        swatch.title = color.name;
        
        if (!color.soldOut) {
            swatch.onclick = () => selectColor(index);
        }
        
        colorGrid.appendChild(swatch);
    });
}

// GENERATE THUMBNAIL GALLERY
function generateThumbnails() {
    const gallery = document.getElementById('thumbnailGallery');
    if (!gallery) return;
    
    laceColors.forEach((color, index) => {
        if (!color.soldOut) {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail-item';
            thumbnail.dataset.index = index;
            thumbnail.onclick = () => selectColor(index);
            
            // Create colored preview
            const preview = document.createElement('div');
            preview.className = 'thumbnail-preview';
            preview.style.backgroundColor = color.hex;
            
            // Create label
            const label = document.createElement('div');
            label.className = 'thumbnail-label';
            label.textContent = color.name;
            
            thumbnail.appendChild(preview);
            thumbnail.appendChild(label);
            gallery.appendChild(thumbnail);
        }
    });
}

// SELECT COLOR
function selectColor(index) {
    const color = laceColors[index];
    currentColorIndex = index;
    
    // Update main preview
    const preview = document.getElementById('lacePreview');
    if (preview) {
        preview.style.backgroundColor = color.hex;
    }
    
    // Update label
    const label = document.getElementById('laceColorLabel');
    if (label) {
        label.textContent = color.name;
    }
    
    // Update active state on color swatches
    document.querySelectorAll('.color-swatch').forEach(swatch => {
        swatch.classList.remove('active');
    });
    const activeSwatch = document.querySelector(`.color-swatch[data-index="${index}"]`);
    if (activeSwatch) {
        activeSwatch.classList.add('active');
    }
    
    // Update active state on thumbnails
    document.querySelectorAll('.thumbnail-item').forEach(thumb => {
        thumb.classList.remove('active');
    });
    const activeThumbnail = document.querySelector(`.thumbnail-item[data-index="${index}"]`);
    if (activeThumbnail) {
        activeThumbnail.classList.add('active');
        
        // Scroll thumbnail into view
        activeThumbnail.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest', 
            inline: 'center' 
        });
    }
}

// SIZE BUTTON TOGGLE
function setupSizeButtons() {
    document.querySelectorAll('.size-btn').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.size-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}
/* ============================================
   PARALLAX SCROLLING EFFECT
   ============================================ */

function initParallax() {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    
    function updateParallax() {
        parallaxSections.forEach(section => {
            const parallaxBg = section.querySelector('.parallax-bg');
            if (!parallaxBg) return;
            
            const rect = section.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const sectionTop = rect.top + scrolled;
            const sectionHeight = section.offsetHeight;
            
            // Only apply parallax when section is in viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = (scrolled - sectionTop) * 0.5; // 0.5 = parallax speed
                parallaxBg.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
        });
    }
    
    // Update on scroll with throttling for performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Initial update
    updateParallax();
}

// Initialize parallax
document.addEventListener('DOMContentLoaded', function() {
    initParallax();
});
