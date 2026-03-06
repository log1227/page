// DOM元素
const html = document.documentElement;
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const prevChapterBtn = document.getElementById('prevChapter');
const nextChapterBtn = document.getElementById('nextChapter');
const decreaseFontBtn = document.getElementById('decreaseFont');
const increaseFontBtn = document.getElementById('increaseFont');
const fontSizeDisplay = document.querySelector('.font-size-display');
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const closeSearchBtn = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const readingProgress = document.getElementById('readingProgress');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const collapseToggle = document.getElementById('collapseToggle');
const readingTools = document.querySelector('.reading-tools');

// 新增DOM元素
const currentChapterInfo = document.getElementById('currentChapterInfo');
const readingProgressDisplay = document.getElementById('readingProgressDisplay');

// 状态管理
let currentFontSize = 16;
let currentTheme = 'light';
const chapters = Array.from(document.querySelectorAll('.chapter'));

// 初始化
function init() {
    // 初始化主题
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // 初始化字体大小（每次刷新重置）
    currentFontSize = 16;
    setFontSize(currentFontSize);
    localStorage.removeItem('fontSize'); // 移除之前保存的字体大小
    
    // 初始化工具栏折叠状态
    const isToolbarCollapsed = localStorage.getItem('toolbarCollapsed') === 'true';
    if (isToolbarCollapsed) {
        readingTools.classList.add('collapsed');
        collapseToggle.textContent = '+';
        collapseToggle.setAttribute('aria-label', '展开工具栏');
    }
    
    // 绑定事件
    bindEvents();
    
    // 初始化进度条
    updateReadingProgress();
    
    // 更新章节信息
    updateChapterInfo();
}

// 绑定事件
function bindEvents() {
    // 主题切换
    themeToggle.addEventListener('click', toggleTheme);
    
    // 章节导航
    prevChapterBtn.addEventListener('click', goToPrevChapter);
    nextChapterBtn.addEventListener('click', goToNextChapter);
    
    // 字体大小调整
    decreaseFontBtn.addEventListener('click', () => adjustFontSize(-1));
    increaseFontBtn.addEventListener('click', () => adjustFontSize(1));
    
    // 搜索功能
    searchBtn.addEventListener('click', openSearch);
    closeSearchBtn.addEventListener('click', closeSearch);
    searchInput.addEventListener('input', performSearch);
    
    // 点击搜索结果跳转
    searchResults.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            const targetId = e.target.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            closeSearch();
        }
    });
    
    // 目录切换
    sidebarToggle.addEventListener('click', toggleSidebar);
    
    // 工具栏折叠
    collapseToggle.addEventListener('click', toggleToolbar);
    
    // 阅读进度更新
    window.addEventListener('scroll', () => {
        updateReadingProgress();
        highlightCurrentChapter();
        updateChapterInfo();
    });
}

// 主题切换
function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function setTheme(theme) {
    currentTheme = theme;
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// 章节导航
function goToPrevChapter() {
    const currentChapter = getCurrentChapter();
    if (currentChapter > 0) {
        chapters[currentChapter - 1].scrollIntoView({ behavior: 'smooth' });
    }
}

function goToNextChapter() {
    const currentChapter = getCurrentChapter();
    if (currentChapter < chapters.length - 1) {
        chapters[currentChapter + 1].scrollIntoView({ behavior: 'smooth' });
    }
}

function getCurrentChapter() {
    for (let i = chapters.length - 1; i >= 0; i--) {
        const rect = chapters[i].getBoundingClientRect();
        if (rect.top <= 100) {
            return i;
        }
    }
    return 0;
}

// 字体大小调整
function adjustFontSize(delta) {
    const newSize = Math.max(12, Math.min(24, currentFontSize + delta));
    setFontSize(newSize);
}

function setFontSize(size) {
    currentFontSize = size;
    document.documentElement.style.setProperty('--font-size', `${size}px`);
    fontSizeDisplay.textContent = `${size}px`;
    localStorage.setItem('fontSize', size);
}

// 搜索功能
function openSearch() {
    searchModal.classList.add('open');
    searchInput.focus();
}

function closeSearch() {
    searchModal.classList.remove('open');
    searchInput.value = '';
    searchResults.innerHTML = '';
}

function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = '';
    
    if (!query) return;
    
    let results = [];
    
    // 搜索所有章节
    chapters.forEach(chapter => {
        const chapterId = chapter.id;
        const chapterTitle = chapter.getAttribute('data-chapter-title');
        const content = chapter.textContent.toLowerCase();
        
        if (content.includes(query)) {
            // 简单的匹配高亮
            const startIndex = content.indexOf(query);
            const endIndex = startIndex + query.length;
            const snippet = chapter.textContent.substring(
                Math.max(0, startIndex - 50),
                Math.min(content.length, endIndex + 50)
            );
            
            results.push({
                chapterId,
                chapterTitle,
                snippet: snippet.replace(new RegExp(query, 'gi'), `<mark>$&</mark>`)
            });
        }
    });
    
    // 显示结果
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="no-results">没有找到匹配的内容</p>';
    } else {
        results.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <h4><a href="#${result.chapterId}">${result.chapterTitle}</a></h4>
                <p>${result.snippet}...</p>
            `;
            searchResults.appendChild(resultItem);
        });
    }
}

// 目录切换功能
function toggleSidebar() {
    if (window.innerWidth >= 768) {
        // 宽屏：通过body类控制栅格布局
        document.body.classList.toggle('sidebar-closed');
    } else {
        // 窄屏：通过侧边栏类控制显示隐藏
        sidebar.classList.toggle('open');
    }
}

// 工具栏折叠功能
function toggleToolbar() {
    const isCollapsed = readingTools.classList.toggle('collapsed');
    collapseToggle.textContent = isCollapsed ? '+' : '−';
    collapseToggle.setAttribute('aria-label', isCollapsed ? '展开工具栏' : '折叠工具栏');
    localStorage.setItem('toolbarCollapsed', isCollapsed);
}

// 更新章节信息
function updateChapterInfo() {
    const currentChapter = getCurrentChapter();
    const chapterNumber = currentChapter + 1;
    const totalChapters = chapters.length;
    currentChapterInfo.innerHTML = `<span class="chapter-number">${chapterNumber}/${totalChapters}</span>`;
}

// 阅读进度更新
function updateReadingProgress() {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const progress = Math.round((scrolled / totalHeight) * 100);
    readingProgress.style.width = `${progress}%`;
    readingProgressDisplay.innerHTML = `<span class="progress-text">${progress}%</span>`;
}

// 高亮当前章节
function highlightCurrentChapter() {
    const tocLinks = document.querySelectorAll('.toc-link');
    const currentChapter = getCurrentChapter();
    
    tocLinks.forEach(link => link.classList.remove('active'));
    
    if (currentChapter >= 0 && currentChapter < tocLinks.length) {
        tocLinks[currentChapter + 1].classList.add('active'); // +1 是因为第一个是封面
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', init);