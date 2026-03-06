// 主JS文件，实现笔记切换逻辑

// 核电厂仪表与控制笔记内容
const yibiaoNotes = {
    title: "核电厂仪表与控制",
    content: `
        <div class="pdf-container">
            <h3>核电厂仪表与控制</h3>
            <div class="pdf-nav">
                <button class="pdf-nav-btn active" onclick="switchPdf('resources/核电厂仪表与控制_01.pdf', this)">核电厂仪表与控制_01.pdf</button>
                <button class="pdf-nav-btn" onclick="switchPdf('resources/核电厂仪表与控制_02.pdf', this)">核电厂仪表与控制_02.pdf</button>
            </div>
            <div class="pdf-embed">
                <embed id="yibiaoPdf" src="resources/核电厂仪表与控制_01.pdf" type="application/pdf" width="100%" height="800px">
            </div>
        </div>
    `
};

// 核反应堆物理笔记内容
const hefanyingduiNotes = {
    title: "核反应堆物理",
    content: `
        <div class="pdf-container">
            <embed src="resources/核反应堆物理.pdf" type="application/pdf" width="100%" height="800px">
        </div>
    `
};

// 核电厂电气原理与设备笔记内容
const dianqiNotes = {
    title: "核电厂电气原理与设备",
    content: `
        <div class="pdf-container">
            <h3>核电厂电气原理与设备</h3>
            <div class="pdf-nav">
                <button class="pdf-nav-btn active" onclick="switchPdf('resources/核电厂电气原理与设备_01.pdf', this)">核电厂电气原理与设备_01.pdf</button>
                <button class="pdf-nav-btn" onclick="switchPdf('resources/核电厂电气原理与设备_02.pdf', this)">核电厂电气原理与设备_02.pdf</button>
                <button class="pdf-nav-btn" onclick="switchPdf('resources/核电厂电气原理与设备_03.pdf', this)">核电厂电气原理与设备_03.pdf</button>
                <button class="pdf-nav-btn" onclick="switchPdf('resources/核电厂电气原理与设备_04.pdf', this)">核电厂电气原理与设备_04.pdf</button>
                <button class="pdf-nav-btn" onclick="switchPdf('resources/核电厂电气原理与设备_05.pdf', this)">核电厂电气原理与设备_05.pdf</button>
                <button class="pdf-nav-btn" onclick="switchPdf('resources/核电厂电气原理与设备_06.pdf', this)">核电厂电气原理与设备_06.pdf</button>
                <button class="pdf-nav-btn" onclick="switchPdf('resources/核电厂电气原理与设备_07.pdf', this)">核电厂电气原理与设备_07.pdf</button>
            </div>
            <div class="pdf-embed">
                <embed id="dianqiPdf" src="resources/核电厂电气原理与设备_01.pdf" type="application/pdf" width="100%" height="800px">
            </div>
        </div>
    `
};

// 切换PDF文件函数
function switchPdf(pdfPath, button) {
    // 移除所有按钮的active类
    const buttons = button.parentElement.querySelectorAll('.pdf-nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    // 添加当前按钮的active类
    button.classList.add('active');
    
    // 找到当前的PDF嵌入元素
    const embedElement = button.parentElement.nextElementSibling.querySelector('embed');
    
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
    button.parentElement.nextElementSibling.appendChild(loading);
    
    // 更新PDF源
    embedElement.src = pdfPath;
    
    // 移除加载状态
    setTimeout(() => {
        loading.remove();
    }, 1000);
}

// 笔记数据映射
const notesMap = {
    regongshuili: regongshuiliNotes,
    hefanyingdui: hefanyingduiNotes,
    yibiao: yibiaoNotes,
    dianqi: dianqiNotes
};

// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', function() {
    // 初始加载第一个笔记
    loadNotes('hefanyingdui');
    
    // 绑定返回按钮点击事件
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.location.href = '../../index.html';
        });
    }
    
    // 绑定导航栏点击事件
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有导航项的active类
            navItems.forEach(nav => nav.classList.remove('active'));
            // 添加当前点击项的active类
            this.classList.add('active');
            // 获取要加载的笔记主题
            const subject = this.dataset.subject;
            // 加载对应的笔记
            loadNotes(subject);
        });
    });
});

// 加载笔记函数
function loadNotes(subject) {
    const container = document.getElementById('notes-container');
    
    // 显示加载状态
    container.innerHTML = '<div class="loading">加载中...</div>';
    
    // 模拟加载延迟，提升用户体验
    setTimeout(() => {
        // 获取笔记数据
        const notes = notesMap[subject];
        
        if (notes) {
            // 加载笔记内容
            container.innerHTML = notes.content;
        } else {
            // 显示错误信息
            container.innerHTML = '<div class="error">笔记加载失败</div>';
        }
    }, 300);
}
