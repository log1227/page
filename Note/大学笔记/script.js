// 笔记数据结构
const notesData = {
    math: {
        name: '数学',
        notes: [
            {
                title: '一元分析学',
                files: [
                    { name: '一元分析学.pdf', type: 'pdf', path: 'resources/一元分析学.pdf' }
                ]
            },
            {
                title: '多元分析学',
                files: [
                    { name: '多元分析学.pdf', type: 'pdf', path: 'resources/多元分析学.pdf' }
                ]
            },
            {
                title: '概率论',
                files: [
                    { name: '概率论1.jpg', type: 'img', path: 'resources/概率论1.jpg' },
                    { name: '概率论2.jpg', type: 'img', path: 'resources/概率论2.jpg' },
                    { name: '概率论3.jpg', type: 'img', path: 'resources/概率论3.jpg' }
                ],
                isProbability: true
            },
            {
                title: '线代笔记',
                files: [
                    { name: '线代笔记.pdf', type: 'pdf', path: 'resources/线代笔记.pdf' }
                ]
            }
        ]
    },
    major: {
        name: '专业课',
        notes: [
            {
                title: '信号与系统',
                files: [
                    { name: '信号与系统.pdf', type: 'pdf', path: 'resources/信号与系统.pdf' }
                ],
                hasSummary: true
            },
            {
                title: '数据结构',
                files: [
                    { name: '数据结构.pdf', type: 'pdf', path: 'resources/数据结构.pdf' }
                ]
            },
            {
                title: '计算机网络',
                files: [
                    { name: '计算机网络.pdf', type: 'pdf', path: 'resources/计算机网络.pdf' }
                ]
            }
        ]
    }
};

// 全局变量
let currentCategory = null;
let currentSubcategory = null;

// DOM元素
let elements = {};

// 初始化DOM元素
function initElements() {
    elements = {
        contentArea: document.getElementById('contentArea'),
        loading: document.getElementById('loading'),
        summaryModal: document.getElementById('summaryModal'),
        closeModal: document.getElementById('closeModal'),
        
        // 新增元素
        header: document.querySelector('.header'),
        backBtn: document.getElementById('backBtn'),
        notesListContainer: document.getElementById('notesListContainer'),
        noteContent: document.getElementById('noteContent'),
        noteTitle: document.getElementById('noteTitle'),
        noteFilesContainer: document.getElementById('noteFilesContainer'),
        noteActions: document.getElementById('noteActions')
    };
    
    // 检查所有元素是否都成功获取
    for (const [key, element] of Object.entries(elements)) {
        if (!element) {
            console.error(`元素 ${key} 未找到`);
        }
    }
}

// 初始化
function init() {
    // 初始化DOM元素
    initElements();
    
    // 绑定导航事件
    bindNavEvents();
    
    // 绑定弹窗事件
    bindModalEvents();
    
    // 绑定返回按钮事件
    bindBackBtnEvent();
    
    // 默认显示数学分类
    showCategory('math');
}

// 绑定导航事件
function bindNavEvents() {
    // 一级分类导航
    document.querySelectorAll('.nav-item a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            showCategory(category);
        });
    });
}

// 绑定弹窗事件
function bindModalEvents() {
    // 关闭总结弹窗
    if (elements.closeModal && elements.summaryModal) {
        elements.closeModal.addEventListener('click', function() {
            elements.summaryModal.classList.remove('show');
        });
        
        // 点击弹窗外部关闭
        window.addEventListener('click', function(e) {
            if (e.target === elements.summaryModal) {
                elements.summaryModal.classList.remove('show');
            }
        });
    }
}

// 绑定返回按钮事件
function bindBackBtnEvent() {
    if (elements.backBtn && elements.noteContent && elements.notesListContainer && elements.header) {
        elements.backBtn.addEventListener('click', function() {
            // 检查当前是否在笔记内容页面
            if (elements.noteContent.style.display === 'block') {
                // 显示笔记列表
                elements.notesListContainer.style.display = 'block';
                // 隐藏笔记内容
                elements.noteContent.style.display = 'none';
                // 恢复头部
                elements.header.classList.remove('collapsed');
                // 恢复头部标题
                const headerTitle = document.querySelector('.header h1');
                if (headerTitle) {
                    headerTitle.textContent = '大学笔记';
                }
            } else {
                // 在笔记选择界面，返回主页
                window.location.href = '../../index.html';
            }
        });
    }
}

// 显示分类内容
function showCategory(category) {
    currentCategory = category;
    currentSubcategory = null;
    
    // 更新导航状态
    updateNavStatus();
    
    // 显示加载状态
    showLoading();
    
    // 显示返回按钮（在笔记选择界面）
    if (elements.backBtn) {
        elements.backBtn.style.display = 'block';
    }
    
    // 模拟加载延迟
    setTimeout(() => {
        const categoryData = notesData[category];
        if (categoryData) {
            renderNotes(categoryData.notes);
        }
        hideLoading();
    }, 300);
}

// 更新导航状态
function updateNavStatus() {
    // 更新一级分类导航
    document.querySelectorAll('.nav-item a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-category') === currentCategory) {
            link.classList.add('active');
        }
    });
}

// 渲染笔记列表
function renderNotes(notes) {
    if (!elements.notesListContainer) {
        console.error('notesListContainer 元素未找到');
        return;
    }
    
    elements.notesListContainer.innerHTML = '';
    
    if (!notes || notes.length === 0) {
        elements.notesListContainer.innerHTML = '<p class="no-notes">暂无笔记</p>';
        return;
    }
    
    const notesList = document.createElement('div');
    notesList.className = 'notes-list';
    
    notes.forEach(note => {
        const noteItem = createNoteItem(note);
        notesList.appendChild(noteItem);
    });
    
    elements.notesListContainer.appendChild(notesList);
}

// 创建笔记项
function createNoteItem(note) {
    const noteItem = document.createElement('div');
    noteItem.className = 'note-item';
    
    const title = document.createElement('h3');
    title.textContent = note.title;
    noteItem.appendChild(title);
    
    // 为笔记项添加点击事件，显示笔记内容
    noteItem.addEventListener('click', function() {
        showNoteContent(note);
    });
    
    return noteItem;
}

// 显示笔记内容
function showNoteContent(note) {
    // 显示加载状态
    showLoading();
    
    // 模拟加载延迟
    setTimeout(() => {
        // 隐藏加载状态
        hideLoading();
        
        // 检查必要的元素是否存在
        if (!elements.notesListContainer || !elements.noteContent || !elements.backBtn || !elements.header || !elements.noteFilesContainer || !elements.noteActions) {
            console.error('缺少必要的DOM元素');
            return;
        }
        
        // 隐藏笔记列表
        elements.notesListContainer.style.display = 'none';
        // 显示笔记内容
        elements.noteContent.style.display = 'block';
        // 显示返回按钮
        elements.backBtn.style.display = 'block';
        // 收缩头部
        elements.header.classList.add('collapsed');
        
        // 清空文件容器
        elements.noteFilesContainer.innerHTML = '';
        
        // 检查是否已存在嵌入容器
        let embedContainer = document.getElementById('embedContainer');
        if (!embedContainer) {
            // 添加文件内容嵌入区域
            embedContainer = document.createElement('div');
            embedContainer.id = 'embedContainer';
            embedContainer.className = 'embed-container';
            elements.noteContent.appendChild(embedContainer);
        } else {
            // 清空现有内容
            embedContainer.innerHTML = '';
        }
        
        // 清空操作容器
        elements.noteActions.innerHTML = '';
        
        // 添加总结按钮（信号与系统）
        if (note.hasSummary && elements.summaryModal) {
            const summaryBtn = document.createElement('button');
            summaryBtn.className = 'summary-btn';
            summaryBtn.textContent = '总结';
            summaryBtn.addEventListener('click', function() {
                elements.summaryModal.classList.add('show');
            });
            elements.noteActions.appendChild(summaryBtn);
        }
        
        // 更新头部标题为课本名字
        const headerTitle = document.querySelector('.header h1');
        if (headerTitle) {
            headerTitle.textContent = note.title + '';
        }
        
        // 直接嵌入第一个文件（如果有）
        if (note.files && note.files.length > 0) {
            embedFile(note.files[0], note);
        }
    }, 300);
}

// 嵌入文件内容
function embedFile(file, note) {
    const embedContainer = document.getElementById('embedContainer');
    if (!embedContainer) {
        console.error('embedContainer 元素未找到');
        return;
    }
    
    embedContainer.innerHTML = '';
    
    // 显示加载状态
    const loading = document.createElement('div');
    loading.className = 'loading show';
    loading.textContent = '加载中...';
    embedContainer.appendChild(loading);
    
    // 模拟加载延迟
    setTimeout(() => {
        // 清空加载状态
        embedContainer.innerHTML = '';
        
        if (note.isProbability && note.files) {
            // 概率论笔记显示所有图片
            const imgContainer = document.createElement('div');
            imgContainer.className = 'probability-images';
            
            note.files.forEach(file => {
                if (file.type === 'img') {
                    const img = document.createElement('img');
                    img.src = file.path;
                    img.alt = file.name;
                    img.style.maxWidth = '100%';
                    img.style.height = 'auto';
                    img.style.borderRadius = '4px';
                    img.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                    img.style.marginBottom = '20px';
                    imgContainer.appendChild(img);
                }
            });
            
            embedContainer.appendChild(imgContainer);
        } else if (file && file.type === 'pdf') {
            // 检查是否有多个PDF文件
            const pdfFiles = note.files ? note.files.filter(f => f.type === 'pdf') : [];
            
            if (pdfFiles.length > 1) {
                // 创建PDF文件导航
                const navContainer = document.createElement('div');
                navContainer.className = 'pdf-nav';
                
                // 创建PDF嵌入容器
                const pdfEmbed = document.createElement('embed');
                pdfEmbed.src = file.path;
                pdfEmbed.type = 'application/pdf';
                pdfEmbed.width = '100%';
                pdfEmbed.height = '800px';
                pdfEmbed.style.border = '1px solid #e0e0e0';
                pdfEmbed.style.borderRadius = '4px';
                pdfEmbed.style.marginTop = '10px';
                
                pdfFiles.forEach((pdfFile, index) => {
                    const navButton = document.createElement('button');
                    navButton.className = index === 0 ? 'pdf-nav-btn active' : 'pdf-nav-btn';
                    navButton.textContent = pdfFile.name;
                    navButton.addEventListener('click', () => {
                        // 更新活动状态
                        document.querySelectorAll('.pdf-nav-btn').forEach(btn => btn.classList.remove('active'));
                        navButton.classList.add('active');
                        // 更新PDF嵌入
                        updatePdfEmbed(pdfFile, pdfEmbed);
                    });
                    navContainer.appendChild(navButton);
                });
                embedContainer.appendChild(navContainer);
                embedContainer.appendChild(pdfEmbed);
            } else {
                // 单个PDF文件，直接嵌入
                const embed = document.createElement('embed');
                embed.src = file.path;
                embed.type = 'application/pdf';
                embed.width = '100%';
                embed.height = '800px';
                embed.style.border = '1px solid #e0e0e0';
                embed.style.borderRadius = '4px';
                embedContainer.appendChild(embed);
            }
        } else if (file && file.type === 'img') {
            // 嵌入图片文件
            const img = document.createElement('img');
            img.src = file.path;
            img.alt = file.name;
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
            img.style.borderRadius = '4px';
            img.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            embedContainer.appendChild(img);
        }
    }, 500);
}

// 更新PDF嵌入
function updatePdfEmbed(file, embedElement) {
    // 显示加载状态
    const loading = document.createElement('div');
    loading.className = 'loading show';
    loading.textContent = '加载中...';
    loading.style.position = 'absolute';
    loading.style.top = '50%';
    loading.style.left = '50%';
    loading.style.transform = 'translate(-50%, -50%)';
    loading.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    loading.style.padding = '10px 20px';
    loading.style.borderRadius = '4px';
    loading.style.zIndex = '10';
    embedElement.parentNode.appendChild(loading);
    
    // 更新PDF源
    embedElement.src = file.path;
    
    // 移除加载状态
    setTimeout(() => {
        loading.remove();
    }, 1000);
}

// 显示加载状态
function showLoading() {
    if (elements.loading) {
        elements.loading.classList.add('show');
    }
}

// 隐藏加载状态
function hideLoading() {
    if (elements.loading) {
        elements.loading.classList.remove('show');
    }
}

// 当DOM加载完成后初始化应用
document.addEventListener('DOMContentLoaded', function() {
    init();
});