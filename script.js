// YEAR COPYRIGHT UPDATE
const currentYear = new Date().getFullYear();
if (currentYear > 2024) {
    document.getElementById('current-year').textContent = '-' + currentYear;
}

// ===============================================
// LACE COLOR PICKER - OPTIMIZED WITH LAZY LOADING
// ===============================================

const laceColors = [
    // BLACKS & GRAYS (8 colors)
    { name: 'Black AL', img: 'lace-grid-images/black-al.jpeg' },
    { name: 'Black SC', img: 'lace-grid-images/black-sc.jpeg' },
    { name: 'Black TT', img: 'lace-grid-images/black-tt.jpeg' },
    { name: 'Black Metallic AL', img: 'lace-grid-images/black_metallic-al.jpeg' },
    { name: 'Dark Gray', img: 'lace-grid-images/dark_gray.jpeg' },
    { name: 'Gray TT', img: 'lace-grid-images/gray-tt.jpeg' },
    { name: 'Light Gray', img: 'lace-grid-images/light_gray.jpeg' },
    { name: 'Smoke Gray', img: 'lace-grid-images/smoke_gray.jpeg' },
    
    // BROWNS & TANS (14 colors)
    { name: 'Bean Cherokee', img: 'lace-grid-images/bean_cherokee.jpeg' },
    { name: 'Camel AL', img: 'lace-grid-images/camel-al.jpeg' },
    { name: 'Camel TT', img: 'lace-grid-images/camel-tt.jpeg' },
    { name: 'Chestnut AL', img: 'lace-grid-images/chestnut-al.jpeg' },
    { name: 'Cheyenne TT', img: 'lace-grid-images/cheyenne-tt.jpeg' },
    { name: 'Chieftan Tan SC', img: 'lace-grid-images/chieftan_tan-sc.jpeg' },
    { name: 'Chocolate AL', img: 'lace-grid-images/chocolate-al.jpeg' },
    { name: 'Dark Brown AL', img: 'lace-grid-images/dark_brown-al.jpeg' },
    { name: 'Dark Chocolate AL', img: 'lace-grid-images/dark_chocolate-al.jpeg' },
    { name: 'Dark Chocolate TT', img: 'lace-grid-images/dark_chocolate-tt.jpeg' },
    { name: 'Havana Tan TT', img: 'lace-grid-images/havana_tan-tt.jpeg' },
    { name: 'Indian Tan AL', img: 'lace-grid-images/indian_tan-al.jpeg' },
    { name: 'Japan Tan TT', img: 'lace-grid-images/japan_tan-tt.jpeg' },
    { name: 'Vanilla Cream', img: 'lace-grid-images/vanilla_cream.jpeg' },
    
    // REDS & PINKS (7 colors)
    { name: 'Blood Red TT', img: 'lace-grid-images/blood_red-tt.jpeg' },
    { name: 'Bright Red', img: 'lace-grid-images/bright_red.jpeg' },
    { name: 'Burgundy Prime', img: 'lace-grid-images/burgundy-prime.jpeg' },
    { name: 'Cardinal Red TT', img: 'lace-grid-images/cardinal_red-tt.jpeg' },
    { name: 'Maroon TT', img: 'lace-grid-images/maroon-tt.jpeg' },
    { name: 'Bright Pink Tulip', img: 'lace-grid-images/bright_pink_tulip.jpeg' },
    { name: 'Passion Pink TT', img: 'lace-grid-images/passion_pink-tt.jpeg' },
    
    // BLUES (7 colors)
    { name: 'Carolina Blue TT', img: 'lace-grid-images/carolina_blue-tt.jpeg' },
    { name: 'Electric Blue AD', img: 'lace-grid-images/electric_blue-ad.jpeg' },
    { name: 'Navy TT', img: 'lace-grid-images/navy-tt.jpeg' },
    { name: 'Royal Blue', img: 'lace-grid-images/royal_blue.jpeg' },
    { name: 'Sapphire Blue', img: 'lace-grid-images/sapphire_blue.jpeg' },
    { name: 'Teal', img: 'lace-grid-images/teal.jpeg' },
    { name: 'Wildcat Blue AL', img: 'lace-grid-images/wildcat_blue-al.jpeg' },
    
    // GREENS (6 colors)
    { name: 'Aqua Green', img: 'lace-grid-images/aqua_green.jpeg' },
    { name: 'Dark Green TT', img: 'lace-grid-images/dark_green-tt.jpeg' },
    { name: 'Kelly Green', img: 'lace-grid-images/kelly_green.jpeg' },
    { name: 'Mint', img: 'lace-grid-images/mint.jpeg' },
    { name: 'Neon Green', img: 'lace-grid-images/neon_green.jpeg' },
    { name: 'Ocean Mint', img: 'lace-grid-images/ocean_mint.jpeg' },
    
    // YELLOWS & ORANGES (6 colors)
    { name: 'Gold Metallic AL', img: 'lace-grid-images/gold_metallic-al.jpeg' },
    { name: 'Lemon Yellow', img: 'lace-grid-images/lemon_yellow.jpeg' },
    { name: 'Orange Peel AD', img: 'lace-grid-images/orange_peel-ad.jpeg' },
    { name: 'Orange TT', img: 'lace-grid-images/orange-tt.jpeg' },
    { name: 'Pirate Yellow AL', img: 'lace-grid-images/pirate_yellow-al.jpeg' },
    { name: 'Yellow TT', img: 'lace-grid-images/yellow-tt.jpeg' },
    
    // PURPLES (1 color)
    { name: 'Purple TT', img: 'lace-grid-images/purple-tt.jpeg' },
    
    // WHITES & METALLICS (3 colors)
    { name: 'Gold Foil', img: 'lace-grid-images/gold_foil.jpeg' },
    { name: 'Silver Foil', img: 'lace-grid-images/silver_foil.jpeg' },
    { name: 'White TT', img: 'lace-grid-images/white-tt.jpeg' }
];

let selectedColorIndex = 11; // Indian Tan AL (default)

// ===============================================
// CREATE GRID SWATCHES (with lazy loading)
// ===============================================
const colorGrid = document.getElementById('laceColorGrid');
laceColors.forEach((color, index) => {
    const swatch = document.createElement('div');
    swatch.className = 'lace-swatch';
    swatch.dataset.name = color.name;
    swatch.dataset.index = index;
    swatch.dataset.img = color.img; // Store image path
    
    // Show placeholder color initially
    swatch.style.backgroundColor = '#e5e7eb';
    
    if (index === 11) swatch.classList.add('selected'); // Indian Tan AL
    
    // Load image on hover (performance boost!)
    swatch.addEventListener('mouseenter', function() {
        if (!this.style.backgroundImage) {
            this.style.backgroundImage = `url('${this.dataset.img}')`;
            this.style.backgroundSize = 'cover';
            this.style.backgroundPosition = 'center';
        }
    }, { once: true });
    
    // IMPORTANT: Click handler to change colors!
    swatch.addEventListener('click', () => selectLaceColor(index));
    
    colorGrid.appendChild(swatch);
});

// ===============================================
// CREATE THUMBNAIL GALLERY (with lazy loading)
// ===============================================
const thumbnailGallery = document.getElementById('laceThumbnailGallery');
laceColors.forEach((color, index) => {
    const thumb = document.createElement('div');
    thumb.className = 'relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden cursor-pointer border-3 transition-all' + 
                     (index === 11 ? ' border-blue-900' : ' border-gray-300');
    thumb.innerHTML = `
        <img src="${color.img}" 
             alt="${color.name}" 
             loading="lazy"
             class="w-full h-full object-cover">
        <div class="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-1 text-center">${color.name}</div>
    `;
    thumb.addEventListener('click', () => selectLaceColor(index));
    thumb.dataset.index = index;
    thumbnailGallery.appendChild(thumb);
});

// ===============================================
// SELECT COLOR FUNCTION (with loading state)
// ===============================================
function selectLaceColor(index) {
    const color = laceColors[index];
    selectedColorIndex = index;
    
    // Fade effect while loading
    const mainImg = document.getElementById('laceMainImage');
    mainImg.style.opacity = '0.3';
    mainImg.src = color.img;
    mainImg.onload = function() {
        this.style.opacity = '1';
    };
    
    document.getElementById('laceColorName').textContent = color.name;
    
    // Update selected states
    document.querySelectorAll('.lace-swatch').forEach(swatch => {
        swatch.classList.remove('selected');
    });
    document.querySelector(`.lace-swatch[data-index="${index}"]`).classList.add('selected');
    
    document.querySelectorAll('#laceThumbnailGallery > div').forEach(thumb => {
        if (parseInt(thumb.dataset.index) === index) {
            thumb.className = thumb.className.replace('border-gray-300', 'border-blue-900');
        } else {
            thumb.className = thumb.className.replace('border-blue-900', 'border-gray-300');
        }
    });
}

// ===============================================
// BEFORE/AFTER SLIDERS
// ===============================================
function initAllSliders() {
    const containers = document.querySelectorAll('.before-after-container');
    
    containers.forEach(container => {
        const handle = container.querySelector('.slider-handle');
        const afterImage = container.querySelector('.after-image');
        let isDragging = false;

        function updateSlider(clientX) {
            const rect = container.getBoundingClientRect();
            const offsetX = clientX - rect.left;
            const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
            
            handle.style.left = percentage + '%';
            afterImage.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
        }
        
        handle.style.left = '50%';
        afterImage.style.clipPath = 'polygon(0 0, 50% 0, 50% 100%, 0 100%)';

        handle.addEventListener('mousedown', () => isDragging = true);
        container.addEventListener('mousedown', (e) => {
            isDragging = true;
            updateSlider(e.clientX);
        });

        handle.addEventListener('touchstart', (e) => {
            e.preventDefault();
            isDragging = true;
        });
        container.addEventListener('touchstart', (e) => {
            isDragging = true;
            updateSlider(e.touches[0].clientX);
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            if (document.querySelector('.before-after-container:hover') === container || 
                container.contains(document.activeElement)) {
                updateSlider(e.clientX);
            }
        });

        document.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            updateSlider(e.touches[0].clientX);
        });

        document.addEventListener('mouseup', () => isDragging = false);
        document.addEventListener('touchend', () => isDragging = false);
    });
}

// Initialize sliders
initAllSliders();

// ===============================================
// SMOOTH SCROLLING
// ===============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
