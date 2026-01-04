// YEAR COPYRIGHT UPDATE
const currentYear = new Date().getFullYear();
if (currentYear > 2024) {
    document.getElementById('current-year').textContent = '-' + currentYear;
}

// ===============================================
// LACE COLOR PICKER - FULLY INTEGRATED & OPTIMIZED
// ===============================================

const laceColors = [
    // BLACKS & GRAYS (8 colors)
    { name: 'Black AL', imgSmall: 'assets/lace-grid-small/black-al.jpeg', imgLarge: 'lace-grid-images/black-al.jpeg' },
    { name: 'Black SC', imgSmall: 'assets/lace-grid-small/black-sc.jpeg', imgLarge: 'lace-grid-images/black-sc.jpeg' },
    { name: 'Black TT', imgSmall: 'assets/lace-grid-small/black-tt.jpeg', imgLarge: 'lace-grid-images/black-tt.jpeg' },
    { name: 'Black Metallic AL', imgSmall: 'assets/lace-grid-small/black_metallic-al.jpeg', imgLarge: 'lace-grid-images/black_metallic-al.jpeg' },
    { name: 'Dark Gray', imgSmall: 'assets/lace-grid-small/dark_gray.jpeg', imgLarge: 'lace-grid-images/dark_gray.jpeg' },
    { name: 'Gray TT', imgSmall: 'assets/lace-grid-small/gray-tt.jpeg', imgLarge: 'lace-grid-images/gray-tt.jpeg' },
    { name: 'Light Gray', imgSmall: 'assets/lace-grid-small/light_gray.jpeg', imgLarge: 'lace-grid-images/light_gray.jpeg' },
    { name: 'Smoke Gray', imgSmall: 'assets/lace-grid-small/smoke_gray.jpeg', imgLarge: 'lace-grid-images/smoke_gray.jpeg' },
    
    // BROWNS & TANS (14 colors)
    { name: 'Bean Cherokee', imgSmall: 'assets/lace-grid-small/bean_cherokee.jpeg', imgLarge: 'lace-grid-images/bean_cherokee.jpeg' },
    { name: 'Camel AL', imgSmall: 'assets/lace-grid-small/camel-al.jpeg', imgLarge: 'lace-grid-images/camel-al.jpeg' },
    { name: 'Camel TT', imgSmall: 'assets/lace-grid-small/camel-tt.jpeg', imgLarge: 'lace-grid-images/camel-tt.jpeg' },
    { name: 'Chestnut AL', imgSmall: 'assets/lace-grid-small/chestnut-al.jpeg', imgLarge: 'lace-grid-images/chestnut-al.jpeg' },
    { name: 'Cheyenne TT', imgSmall: 'assets/lace-grid-small/cheyenne-tt.jpeg', imgLarge: 'lace-grid-images/cheyenne-tt.jpeg' },
    { name: 'Chieftan Tan SC', imgSmall: 'assets/lace-grid-small/chieftan_tan-sc.jpeg', imgLarge: 'lace-grid-images/chieftan_tan-sc.jpeg' },
    { name: 'Chocolate AL', imgSmall: 'assets/lace-grid-small/chocolate-al.jpeg', imgLarge: 'lace-grid-images/chocolate-al.jpeg' },
    { name: 'Dark Brown AL', imgSmall: 'assets/lace-grid-small/dark_brown-al.jpeg', imgLarge: 'lace-grid-images/dark_brown-al.jpeg' },
    { name: 'Dark Chocolate AL', imgSmall: 'assets/lace-grid-small/dark_chocolate-al.jpeg', imgLarge: 'lace-grid-images/dark_chocolate-al.jpeg' },
    { name: 'Dark Chocolate TT', imgSmall: 'assets/lace-grid-small/dark_chocolate-tt.jpeg', imgLarge: 'lace-grid-images/dark_chocolate-tt.jpeg' },
    { name: 'Havana Tan TT', imgSmall: 'assets/lace-grid-small/havana_tan-tt.jpeg', imgLarge: 'lace-grid-images/havana_tan-tt.jpeg' },
    { name: 'Indian Tan AL', imgSmall: 'assets/lace-grid-small/indian_tan-al.jpeg', imgLarge: 'lace-grid-images/indian_tan-al.jpeg' },
    { name: 'Japan Tan TT', imgSmall: 'assets/lace-grid-small/japan_tan-tt.jpeg', imgLarge: 'lace-grid-images/japan_tan-tt.jpeg' },
    { name: 'Vanilla Cream', imgSmall: 'assets/lace-grid-small/vanilla_cream.jpeg', imgLarge: 'lace-grid-images/vanilla_cream.jpeg' },
    
    // REDS & PINKS (7 colors)
    { name: 'Blood Red TT', imgSmall: 'assets/lace-grid-small/blood_red-tt.jpeg', imgLarge: 'lace-grid-images/blood_red-tt.jpeg' },
    { name: 'Bright Red', imgSmall: 'assets/lace-grid-small/bright_red.jpeg', imgLarge: 'lace-grid-images/bright_red.jpeg' },
    { name: 'Burgundy Prime', imgSmall: 'assets/lace-grid-small/burgundy-prime.jpeg', imgLarge: 'lace-grid-images/burgundy-prime.jpeg' },
    { name: 'Cardinal Red TT', imgSmall: 'assets/lace-grid-small/cardinal_red-tt.jpeg', imgLarge: 'lace-grid-images/cardinal_red-tt.jpeg' },
    { name: 'Maroon TT', imgSmall: 'assets/lace-grid-small/maroon-tt.jpeg', imgLarge: 'lace-grid-images/maroon-tt.jpeg' },
    { name: 'Bright Pink Tulip', imgSmall: 'assets/lace-grid-small/bright_pink_tulip.jpeg', imgLarge: 'lace-grid-images/bright_pink_tulip.jpeg' },
    { name: 'Passion Pink TT', imgSmall: 'assets/lace-grid-small/passion_pink-tt.jpeg', imgLarge: 'lace-grid-images/passion_pink-tt.jpeg' },
    
    // BLUES (7 colors)
    { name: 'Carolina Blue TT', imgSmall: 'assets/lace-grid-small/carolina_blue-tt.jpeg', imgLarge: 'lace-grid-images/carolina_blue-tt.jpeg' },
    { name: 'Electric Blue AD', imgSmall: 'assets/lace-grid-small/electric_blue-ad.jpeg', imgLarge: 'lace-grid-images/electric_blue-ad.jpeg' },
    { name: 'Navy TT', imgSmall: 'assets/lace-grid-small/navy-tt.jpeg', imgLarge: 'lace-grid-images/navy-tt.jpeg' },
    { name: 'Royal Blue', imgSmall: 'assets/lace-grid-small/royal_blue.jpeg', imgLarge: 'lace-grid-images/royal_blue.jpeg' },
    { name: 'Sapphire Blue', imgSmall: 'assets/lace-grid-small/sapphire_blue.jpeg', imgLarge: 'lace-grid-images/sapphire_blue.jpeg' },
    { name: 'Teal', imgSmall: 'assets/lace-grid-small/teal.jpeg', imgLarge: 'lace-grid-images/teal.jpeg' },
    { name: 'Wildcat Blue AL', imgSmall: 'assets/lace-grid-small/wildcat_blue-al.jpeg', imgLarge: 'lace-grid-images/wildcat_blue-al.jpeg' },
    
    // GREENS (6 colors)
    { name: 'Aqua Green', imgSmall: 'assets/lace-grid-small/aqua_green.jpeg', imgLarge: 'lace-grid-images/aqua_green.jpeg' },
    { name: 'Dark Green TT', imgSmall: 'assets/lace-grid-small/dark_green-tt.jpeg', imgLarge: 'lace-grid-images/dark_green-tt.jpeg' },
    { name: 'Kelly Green', imgSmall: 'assets/lace-grid-small/kelly_green.jpeg', imgLarge: 'lace-grid-images/kelly_green.jpeg' },
    { name: 'Mint', imgSmall: 'assets/lace-grid-small/mint.jpeg', imgLarge: 'lace-grid-images/mint.jpeg' },
    { name: 'Neon Green', imgSmall: 'assets/lace-grid-small/neon_green.jpeg', imgLarge: 'lace-grid-images/neon_green.jpeg' },
    { name: 'Ocean Mint', imgSmall: 'assets/lace-grid-small/ocean_mint.jpeg', imgLarge: 'lace-grid-images/ocean_mint.jpeg' },
    
    // YELLOWS & ORANGES (6 colors)
    { name: 'Gold Metallic AL', imgSmall: 'assets/lace-grid-small/gold_metallic-al.jpeg', imgLarge: 'lace-grid-images/gold_metallic-al.jpeg' },
    { name: 'Lemon Yellow', imgSmall: 'assets/lace-grid-small/lemon_yellow.jpeg', imgLarge: 'lace-grid-images/lemon_yellow.jpeg' },
    { name: 'Orange Peel AD', imgSmall: 'assets/lace-grid-small/orange_peel-ad.jpeg', imgLarge: 'lace-grid-images/orange_peel-ad.jpeg' },
    { name: 'Orange TT', imgSmall: 'assets/lace-grid-small/orange-tt.jpeg', imgLarge: 'lace-grid-images/orange-tt.jpeg' },
    { name: 'Pirate Yellow AL', imgSmall: 'assets/lace-grid-small/pirate_yellow-al.jpeg', imgLarge: 'lace-grid-images/pirate_yellow-al.jpeg' },
    { name: 'Yellow TT', imgSmall: 'assets/lace-grid-small/yellow-tt.jpeg', imgLarge: 'lace-grid-images/yellow-tt.jpeg' },
    
    // PURPLES (1 color)
    { name: 'Purple TT', imgSmall: 'assets/lace-grid-small/purple-tt.jpeg', imgLarge: 'lace-grid-images/purple-tt.jpeg' },
    
    // WHITES & METALLICS (3 colors)
    { name: 'Gold Foil', imgSmall: 'assets/lace-grid-small/gold_foil.jpeg', imgLarge: 'lace-grid-images/gold_foil.jpeg' },
    { name: 'Silver Foil', imgSmall: 'assets/lace-grid-small/silver_foil.jpeg', imgLarge: 'lace-grid-images/silver_foil.jpeg' },
    { name: 'White TT', imgSmall: 'assets/lace-grid-small/white-tt.jpeg', imgLarge: 'lace-grid-images/white-tt.jpeg' }
];

let selectedColorIndex = 11; // Indian Tan AL (default)

// ===============================================
// CREATE GRID SWATCHES (loads mini images immediately!)
// ===============================================
const colorGrid = document.getElementById('laceColorGrid');
laceColors.forEach((color, index) => {
    const swatch = document.createElement('div');
    swatch.className = 'lace-swatch';
    swatch.dataset.name = color.name;
    swatch.dataset.index = index;
    
    // LOAD MINI IMAGE IMMEDIATELY (from assets/lace-grid-small/)
    swatch.style.backgroundImage = `url('${color.imgSmall}')`;
    swatch.style.backgroundSize = 'cover';
    swatch.style.backgroundPosition = 'center';
    
    if (index === 11) swatch.classList.add('selected'); // Indian Tan AL
    
    // Click handler to change colors
    swatch.addEventListener('click', () => selectLaceColor(index));
    
    colorGrid.appendChild(swatch);
});

// ===============================================
// CREATE THUMBNAIL CAROUSEL (scrollable + clickable!)
// ===============================================
const thumbnailGallery = document.getElementById('laceThumbnailGallery');
laceColors.forEach((color, index) => {
    const thumb = document.createElement('div');
    thumb.className = 'relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden cursor-pointer border-3 transition-all' + 
                     (index === 11 ? ' border-4 ring-4 ring-offset-2' : ' border-2');
    thumb.style.borderColor = index === 11 ? '#272263' : '#e5e7eb';
    thumb.innerHTML = `
        <img src="${color.imgSmall}" 
             alt="${color.name}" 
             class="w-full h-full object-cover">
        <div class="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-xs p-2 text-center font-semibold">${color.name}</div>
    `;
    thumb.addEventListener('click', () => selectLaceColor(index));
    thumb.dataset.index = index;
    thumbnailGallery.appendChild(thumb);
});

// ===============================================
// SELECT COLOR FUNCTION (syncs all 3 elements!)
// ===============================================
function selectLaceColor(index) {
    const color = laceColors[index];
    selectedColorIndex = index;
    
    // 1. UPDATE MAIN IMAGE (with fade effect)
    const mainImg = document.getElementById('laceMainImage');
    mainImg.style.opacity = '0.3';
    mainImg.src = color.imgLarge; // Use large version for main display
    mainImg.onload = function() {
        this.style.opacity = '1';
    };
    
    // 2. UPDATE COLOR NAME
    document.getElementById('laceColorName').textContent = color.name;
    
    // 3. UPDATE GRID SWATCHES (selected state)
    document.querySelectorAll('.lace-swatch').forEach(swatch => {
        swatch.classList.remove('selected');
    });
    document.querySelector(`.lace-swatch[data-index="${index}"]`).classList.add('selected');
    
    // 4. UPDATE CAROUSEL (selected state + scroll into view)
    document.querySelectorAll('#laceThumbnailGallery > div').forEach(thumb => {
        const thumbIndex = parseInt(thumb.dataset.index);
        if (thumbIndex === index) {
            // Selected style
            thumb.className = thumb.className.replace('border-2', 'border-4 ring-4 ring-offset-2');
            thumb.style.borderColor = '#272263';
            
            // Scroll selected item into view
            thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            // Unselected style
            thumb.className = thumb.className.replace('border-4 ring-4 ring-offset-2', 'border-2');
            thumb.style.borderColor = '#e5e7eb';
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
