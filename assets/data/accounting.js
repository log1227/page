// 记账数据
const accountingData = [
    { amount: 779.92, date: '2026-03-06', note: '余额' },
    { amount: -39.00, date: '2026-03-16', note: 'QQ音乐会员' },
    { amount: 2350.00, date: '2026-03-25', note: '助学金' },
    { amount: -535.66, date: '2026-03-25', note: '花呗' },
    { amount: -39.00, date: '2026-03-28', note: '话费' },
    { amount: 5000.00, date: '2026-03-31', note: '联培生活费' },
    { amount: 1300.00, date: '2026-04-05', note: '生活费' },
    { amount: -39.00, date: '2026-04-16', note: 'QQ音乐会员' },
    { amount: -83.78, date: '2026-04-25', note: '花呗' },
    { amount: -39.00, date: '2026-04-29', note: '话费' },
   
];

// Accounting Script
// 获取DOM元素
const accountingBtn = document.getElementById('accounting-btn');
const accountingOverlay = document.getElementById('accounting-overlay');
const closeAccounting = document.getElementById('close-accounting');
const accountingBody = document.getElementById('accounting-body');

// 渲染记账表格
function renderAccountingTable() {
    // 使用从data/accounting.js加载的静态数据
    const data = accountingData;
    
    // 按日期排序
    const sortedData = [...data].sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });
    
    // 按月份分组
    const groupedByMonth = {};
    sortedData.forEach(record => {
        const month = record.date.substring(0, 7); // YYYY-MM
        if (!groupedByMonth[month]) {
            groupedByMonth[month] = [];
        }
        groupedByMonth[month].push(record);
    });
    
    // 计算每月余额
    let prevBalance = 0;
    const months = Object.keys(groupedByMonth).sort();
    const resultHTML = [];
    
    months.forEach(month => {
        const records = groupedByMonth[month];
        let monthTotal = 0;
        
        // 添加月份分隔线
        resultHTML.push(`<tr class="month-separator"><td colspan="3"></td></tr>`);
        
        // 添加记录
        records.forEach((record) => {
            const amountClass = record.amount >= 0 ? 'amount-positive' : 'amount-negative';
            const formattedAmount = record.amount.toFixed(2);
            resultHTML.push(`
                <tr>
                    <td class="${amountClass}">${formattedAmount}</td>
                    <td>${record.date}</td>
                    <td>${record.note}</td>
                </tr>
            `);
            monthTotal += record.amount;
        });
        
        // 计算本月余额
        const currentBalance = prevBalance + monthTotal;
        resultHTML.push(`
            <tr class="month-balance">
                <td colspan="2">本月余额:</td>
                <td class="${currentBalance >= 0 ? 'amount-positive' : 'amount-negative'}">${currentBalance.toFixed(2)}</td>
            </tr>
        `);
        
        prevBalance = currentBalance;
    });
    
    accountingBody.innerHTML = resultHTML.join('');
}

// 显示记账界面
if (accountingBtn) {
    accountingBtn.addEventListener('click', () => {
        accountingOverlay.style.display = 'flex';
        renderAccountingTable();
    });
}

// 关闭记账界面
const closeAccountingModal = () => {
    if (accountingOverlay) {
        accountingOverlay.style.display = 'none';
    }
};

if (closeAccounting) {
    closeAccounting.addEventListener('click', closeAccountingModal);
}

// 点击阴影关闭
if (accountingOverlay) {
    accountingOverlay.addEventListener('click', (e) => {
        if (e.target === accountingOverlay) {
            closeAccountingModal();
        }
    });
}

// 按ESC键关闭
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && accountingOverlay && accountingOverlay.style.display === 'flex') {
        closeAccountingModal();
    }
});