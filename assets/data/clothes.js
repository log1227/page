// 尺码表数据
const clothesData = {
    "headers": ["项目", "衣长", "胸围", "肩宽", "袖长", "腰围", "裤长", "臀围", "脚口", "鞋子", "头围"],
    "rows": [
        {
            "name": "身体",
            "data": ["", "86", "45", "", "67", "103", "91", "22", "42", "57"]
        },
        {
            "name": "衣服尺码",
            "data": [
                "67(到一半屁股)<br>外套71",
                "内 (短袖) 108 (刚好)<br>中114 (刚好)<br>外套120 (刚好)",
                "≥51 (51刚好)",
                "短袖21.5 (刚好)<br>长袖60 (刚好手腕)<br>外套64",
                "74-86",
                "101-106<br>103刚好",
                "≤116",
                "37不算窄<br>44刚好<br>60太宽",
                "42",
                "57"
            ]
        }
    ],
    "considerBuy": [
        "黑黄/黄色/绿色/假两件T恤",
        "绿色衬衫",
        "风衣",
        "毛呢大衣",
        "休闲西装",
        "绿色裤子",
        "围巾",
        "针织帽/贝雷帽",
        "墨镜",
        "发带"
    ]
};

// Clothes Size Script
// 获取DOM元素
const clothesBtn = document.getElementById('clothes-btn');
const clothesOverlay = document.getElementById('clothes-overlay');
const closeClothes = document.getElementById('close-clothes');
const clothesTableHeader = document.getElementById('clothes-table-header');
const clothesTableBody = document.getElementById('clothes-table-body');

// 渲染衣服尺码表格
function renderClothesTable() {
    // 使用从data/clothes.js加载的静态数据
    const data = clothesData;
    
    // 渲染表头
    if (clothesTableHeader) {
        let headerHTML = '<tr>';
        data.headers.forEach(header => {
            headerHTML += `<th>${header}</th>`;
        });
        headerHTML += '</tr>';
        clothesTableHeader.innerHTML = headerHTML;
    }
    
    // 渲染表格内容
    if (clothesTableBody) {
        let bodyHTML = '';
        data.rows.forEach(row => {
            bodyHTML += '<tr>';
            bodyHTML += `<td>${row.name}</td>`;
            row.data.forEach(cell => {
                bodyHTML += `<td>${cell}</td>`;
            });
            bodyHTML += '</tr>';
        });
        
        // 渲染"考虑买"列表
        bodyHTML += `
            <tr>
                <td colspan="11" class="consider-buy-container">
                    <h4 class="consider-buy-title">考虑买</h4>
                    <ul class="consider-buy-list">
        `;
        
        data.considerBuy.forEach(item => {
            bodyHTML += `<li class="consider-buy-item">${item}</li>`;
        });
        
        bodyHTML += `
                    </ul>
                </td>
            </tr>
        `;
        
        clothesTableBody.innerHTML = bodyHTML;
    }
}

// 显示衣服尺码界面
if (clothesBtn) {
    clothesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        renderClothesTable();
        if (clothesOverlay) {
            clothesOverlay.style.display = 'flex';
        }
    });
}

// 关闭衣服尺码界面
const closeClothesModal = () => {
    if (clothesOverlay) {
        clothesOverlay.style.display = 'none';
    }
};

if (closeClothes) {
    closeClothes.addEventListener('click', closeClothesModal);
}

// 点击阴影关闭
if (clothesOverlay) {
    clothesOverlay.addEventListener('click', (e) => {
        if (e.target === clothesOverlay) {
            closeClothesModal();
        }
    });
}

// 按ESC键关闭
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && clothesOverlay && clothesOverlay.style.display === 'flex') {
        closeClothesModal();
    }
});