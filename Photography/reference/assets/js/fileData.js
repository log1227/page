// Text data for image gallery (stored separately for static web compatibility)
const textData = {
    "欣赏/德味/1": "色彩浓郁（高饱和低明度）\n刀锐奶化：焦内锐，焦外滑而细腻，影调均匀",
    "欣赏/灰调/1": "影调：低长调，黑色缺色，像素集中在暗部导致对比度较低，但是局部对比度不低，不会发灰\n色调：饱和度较低，呈灰色，暗部和高光偏红来营造温暖的感觉"
};

// File data for image gallery
const fileData = {
    "欣赏": {
        "德味": ["1.png", "2.png", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"],
        "电影感（黄绿蓝）": ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.png", "10.png"],
        "灰调": ["1.png", "1_zhifangtu.png", "1_secai.png", "1_baohedu.png", "2.png", "3.png", "4.jpg", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.png", "16.jpg"],
        "柔光": ["1.png", "2.png", "3.png", "4.png", "5.jpg", "5_secai.png"],
        "硬质影调": ["1.jpg", "2.jpg"]
    },
    "参考": {
        "粉": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png"],
        "蓝": ["1.jpg", "1_secai.png", "2.jpg", "3.png", "4.jpg", "5.jpg", "5_secai.png"],
        "清新": ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png"],
        "晚霞": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.jpg", "16.png", "17.png", "18.png", "19.jpg", "20.png", "21.png"],
        "橙红": ["1.png"],
        "移轴": ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
        "组图": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg"],
        "国风": ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg"]
    }
};

// Function to get all images
function getAllImages() {
    let allImages = [];
    let id = 1;
    
    // Iterate through all categories
    for (let mainCategory in fileData) {
        for (let subCategory in fileData[mainCategory]) {
            const images = fileData[mainCategory][subCategory];
            images.forEach(image => {
                const baseName = image.replace(/\.(png|jpg|jpeg|txt)$/i, '');
                const isMainImage = !baseName.includes('_zhifangtu') && 
                                   !baseName.includes('_secai') && 
                                   !baseName.includes('_baohedu') && 
                                   !image.endsWith('.txt');
                
                allImages.push({
                    id: id++,
                    src: `assets/${mainCategory}/${subCategory}/${image}`,
                    category: `${mainCategory}/${subCategory}`,
                    folder: subCategory,
                    mainCategory: mainCategory,
                    subCategory: subCategory,
                    fileName: image,
                    baseName: baseName,
                    isMainImage: isMainImage
                });
            });
        }
    }
    
    return allImages;
}

// Function to shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Function to generate image cards
function generateImageCards(images) {
    const gallery = document.getElementById('image-gallery');
    gallery.innerHTML = '';
    
    images.forEach(img => {
        // Skip additional images and text files
        if (!img.isMainImage) {
            return;
        }
        
        const col = document.createElement('div');
        col.className = 'col mb-5';
        col.setAttribute('data-category', img.category);
        
        const card = document.createElement('div');
        card.className = 'card h-100';
        
        // Category badge
        const badge = document.createElement('div');
        badge.className = 'badge bg-dark text-white position-absolute';
        badge.style.cssText = 'top: 0.5rem; right: 0.5rem';
        badge.textContent = img.folder;
        card.appendChild(badge);
        
        // Image
        const image = document.createElement('img');
        image.className = 'card-img-top';
        image.src = img.src;
        image.alt = img.folder;
        image.style.cursor = 'pointer';
        image.addEventListener('click', () => openImageModal(img));
        card.appendChild(image);
        
        col.appendChild(card);
        gallery.appendChild(col);
    });
}

// Function to open image modal
function openImageModal(mainImage) {
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = '';
    
    // Get all files for this category
    const categoryFiles = fileData[mainImage.mainCategory][mainImage.subCategory];
    
    // First, display the main image
    const mainImg = document.createElement('img');
    mainImg.className = 'img-fluid mb-3';
    mainImg.src = mainImage.src;
    modalContent.appendChild(mainImg);
    
    // Get base name of main image (without extension)
    const mainBaseName = mainImage.fileName.replace(/\.(png|jpg|jpeg)$/i, '');
    
    // Find and display only auxiliary image files with the same base name
    categoryFiles.forEach(file => {
        // Skip the main image itself
        if (file === mainImage.fileName) {
            return;
        }
        
        // Check if this is an auxiliary image file for the main image
        const fileBaseName = file.replace(/\.(png|jpg|jpeg)$/i, '');
        
        // Only show image files with the same base name (like 1_zhifangtu.png)
        if (fileBaseName === mainBaseName || fileBaseName.startsWith(`${mainBaseName}_`)) {
            const filePath = `assets/${mainImage.mainCategory}/${mainImage.subCategory}/${file}`;
            const img = document.createElement('img');
            img.className = 'img-fluid mb-3';
            img.src = filePath;
            modalContent.appendChild(img);
        }
    });
    
    // Display text from textData (stored in JavaScript for static web compatibility)
    const textKey = `${mainImage.mainCategory}/${mainImage.subCategory}/${mainBaseName}`;
    const textContent = textData[textKey];
    
    if (textContent) {
        const textDiv = document.createElement('div');
        textDiv.className = 'mt-3 p-3 bg-light rounded';
        const pre = document.createElement('pre');
        pre.textContent = textContent;
        textDiv.appendChild(pre);
        modalContent.appendChild(textDiv);
    }
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
}

// Function to filter images by category
function filterImagesByCategory(category) {
    let imagesToShow = [];
    
    if (category === 'all') {
        // Show all images, shuffled
        const allImages = getAllImages();
        imagesToShow = shuffleArray(allImages);
    } else {
        // Show images from specific category
        const [mainCategory, subCategory] = category.split('/');
        if (fileData[mainCategory] && fileData[mainCategory][subCategory]) {
            const images = fileData[mainCategory][subCategory];
            images.forEach((image, index) => {
                const baseName = image.replace(/\.(png|jpg|jpeg|txt)$/i, '');
                const isMainImage = !baseName.includes('_zhifangtu') && 
                                   !baseName.includes('_secai') && 
                                   !baseName.includes('_baohedu') && 
                                   !image.endsWith('.txt');
                
                imagesToShow.push({
                    id: index + 1,
                    src: `assets/${mainCategory}/${subCategory}/${image}`,
                    category: `${mainCategory}/${subCategory}`,
                    folder: subCategory,
                    mainCategory: mainCategory,
                    subCategory: subCategory,
                    fileName: image,
                    baseName: baseName,
                    isMainImage: isMainImage
                });
            });
        }
    }
    
    generateImageCards(imagesToShow);
}

// Function to generate dropdown menu from fileData
function generateDropdownMenu() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.innerHTML = '';
    
    // Add "All" option
    const allItem = document.createElement('li');
    const allLink = document.createElement('a');
    allLink.className = 'dropdown-item';
    allLink.href = '#!';
    allLink.setAttribute('data-filter', 'all');
    allLink.textContent = '所有';
    allItem.appendChild(allLink);
    dropdownMenu.appendChild(allItem);
    
    // Add divider
    const divider = document.createElement('li');
    divider.innerHTML = '<hr class="dropdown-divider" />';
    dropdownMenu.appendChild(divider);
    
    // Add main categories and their subcategories
    for (let mainCategory in fileData) {
        // Create a container for main category and its subcategories
        const categoryContainer = document.createElement('li');
        categoryContainer.className = 'category-container';
        
        // Add main category
        const mainItem = document.createElement('div');
        mainItem.className = 'main-category-item';
        mainItem.textContent = mainCategory;
        categoryContainer.appendChild(mainItem);
        
        // Add subcategories
        const subCategories = fileData[mainCategory];
        for (let subCategory in subCategories) {
            const subItem = document.createElement('a');
            subItem.className = 'dropdown-item sub-category-item';
            subItem.href = '#!';
            subItem.setAttribute('data-category', `${mainCategory}/${subCategory}`);
            
            // Handle special cases for display text
            let displayText = subCategory;
            if (subCategory === '电影感（黄绿蓝）') {
                displayText = '电影感（黄蓝绿）';
            }
            subItem.textContent = displayText;
            categoryContainer.appendChild(subItem);
        }
        
        dropdownMenu.appendChild(categoryContainer);
    }
}

// Initialize page
function initImageGallery() {
    // Generate dropdown menu from fileData
    generateDropdownMenu();
    
    // Show all images, shuffled
    const allImages = getAllImages();
    const shuffledImages = shuffleArray(allImages);
    generateImageCards(shuffledImages);
    
    // Add event listeners for filter links using event delegation
    document.addEventListener('click', (e) => {
        // Find the closest dropdown-item ancestor
        const dropdownItem = e.target.closest('.dropdown-item');
        
        if (dropdownItem) {
            e.preventDefault();
            
            if (dropdownItem.hasAttribute('data-filter')) {
                const filter = dropdownItem.getAttribute('data-filter');
                filterImagesByCategory(filter);
                // 关闭所有下拉菜单
                document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                    menu.classList.remove('show');
                });
            } else if (dropdownItem.hasAttribute('data-category')) {
                const category = dropdownItem.getAttribute('data-category');
                filterImagesByCategory(category);
                // 关闭所有下拉菜单
                document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                    menu.classList.remove('show');
                });
            }
        }
    });
    
    // 点击页面其他地方关闭所有菜单
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImageGallery);
} else {
    initImageGallery();
}