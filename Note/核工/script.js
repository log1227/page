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
    dianqi: dianqiNotes,
    qiye: null  // 将在 DOMContentLoaded 中初始化
};

// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', function() {
    // 初始化 qiye 笔记
    if (typeof window.qiyeNotes !== 'undefined') {
        notesMap.qiye = window.qiyeNotes;
    } else if (typeof qiyeNotes !== 'undefined') {
        notesMap.qiye = qiyeNotes;
    }
    
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
            // 移除所有导航项的 active 类
            navItems.forEach(nav => nav.classList.remove('active'));
            // 添加当前点击项的 active 类
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
            // 检查是否为动态渲染的笔记
            if (notes.isDynamic && notes.contentData) {
                renderDynamicNotes(container, notes.contentData);
            } else {
                // 加载笔记内容
                container.innerHTML = notes.content;
            }
        } else {
            // 显示错误信息
            container.innerHTML = '<div class="error">笔记加载失败</div>';
        }
    }, 300);
}

// 动态渲染笔记函数（用于 KaTeX 公式渲染）
function renderDynamicNotes(container, contentData) {
    container.innerHTML = '';
    
    contentData.forEach(item => {
        let el;
        
        switch (item.type) {
            case 'header':
                el = document.createElement(`h${item.level}`);
                el.className = item.level === 1 ? 'doc-title' : (item.level === 2 ? 'section-title' : 'subsection-title');
                el.innerHTML = item.text;
                break;
            
            case 'text':
                el = document.createElement('p');
                el.className = item.className || 'content-text';
                el.innerHTML = item.text;
                break;
            
            case 'formula':
                el = document.createElement('div');
                el.className = 'formula-container';
                el.textContent = `$$ ${item.latex} $$`;
                break;
            
            case 'list':
                const listContainer = document.createElement('ul');
                listContainer.className = 'list-box';
                item.items.forEach(listItem => {
                    const li = document.createElement('li');
                    li.className = 'list-item';
                    li.innerHTML = listItem;
                    listContainer.appendChild(li);
                });
                el = listContainer;
                break;
            
            case 'table':
                const tableContainer = document.createElement('div');
                tableContainer.className = 'table-container';
                tableContainer.style.overflowX = 'auto';
                tableContainer.style.margin = '20px 0';
                
                const table = document.createElement('table');
                table.style.width = '100%';
                table.style.borderCollapse = 'collapse';
                table.style.marginTop = '10px';
                
                const thead = document.createElement('thead');
                const headerRow = document.createElement('tr');
                item.headers.forEach(header => {
                    const th = document.createElement('th');
                    th.innerHTML = header;
                    th.style.border = '1px solid #ddd';
                    th.style.padding = '12px';
                    th.style.backgroundColor = '#f2f2f2';
                    th.style.textAlign = 'left';
                    headerRow.appendChild(th);
                });
                thead.appendChild(headerRow);
                table.appendChild(thead);
                
                const tbody = document.createElement('tbody');
                item.rows.forEach(row => {
                    const tr = document.createElement('tr');
                    row.forEach(cell => {
                        const td = document.createElement('td');
                        td.innerHTML = cell;
                        td.style.border = '1px solid #ddd';
                        td.style.padding = '12px';
                        tr.appendChild(td);
                    });
                    tbody.appendChild(tr);
                });
                table.appendChild(tbody);
                tableContainer.appendChild(table);
                el = tableContainer;
                break;
            
            case 'divider':
                el = document.createElement('hr');
                el.className = 'divider';
                el.style.border = '0';
                el.style.height = '1px';
                el.style.backgroundImage = 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))';
                el.style.margin = '40px 0';
                break;
            
            default:
                console.warn('Unknown item type:', item.type);
                return;
        }
        
        if (el) {
            container.appendChild(el);
        }
    });
    
    // 触发 KaTeX 渲染
    if (typeof renderMathInElement === 'function') {
        renderMathInElement(container, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false },
                { left: '\\(', right: '\\)', display: false },
                { left: '\\[', right: '\\]', display: true }
            ],
            throwOnError: false
        });
    }
}
