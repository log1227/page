// 最近活动数据
const recentData = [
    {
        "date": "2026-01-28",
        "text": "修复了一些已知问题。"
    }
];

// Recent Activities Script
// 获取DOM元素
const recentBtn = document.getElementById('recent-btn');
const recentOverlay = document.getElementById('recent-overlay');
const closeRecent = document.getElementById('close-recent');
const recentContent = document.getElementById('recent-content');

// 更新最近活动内容
function updateRecentContent(data) {
    // 使用从data/recent.js加载的静态数据
    // 生成弹窗HTML
    const popupHTML = data.map(item => `
        <div class="popup-item">
            <span class="popup-date">${item.date}</span>
            <span class="popup-text">${item.text}</span>
        </div>
    `).join('');
    
    // 更新弹窗内容
    if (recentContent) {
        recentContent.innerHTML = popupHTML;
    }
}

// 显示最近活动界面
if (recentBtn) {
    recentBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (recentOverlay) {
            recentOverlay.style.display = 'flex';
            updateRecentContent(recentData);
        }
    });
}

// 关闭最近活动界面
const closeRecentModal = () => {
    if (recentOverlay) {
        recentOverlay.style.display = 'none';
    }
};

if (closeRecent) {
    closeRecent.addEventListener('click', closeRecentModal);
}

// 点击阴影关闭
if (recentOverlay) {
    recentOverlay.addEventListener('click', (e) => {
        if (e.target === recentOverlay) {
            closeRecentModal();
        }
    });
}

// 按ESC键关闭
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && recentOverlay && recentOverlay.style.display === 'flex') {
        closeRecentModal();
    }
});