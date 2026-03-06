// 待办事项数据
const todoData = {
    // 重要紧急
    highImportantHighUrgent: [
	{
            title: "课内"
        },
        {
            title: "毕设"
        }
        
    ],
    // 重要不紧急
    highImportantLowUrgent: [
        {
            title: "经济学"
        },
	{
            title: "AI应用开发"
        },
	{
            title: "AI音轨分离、识别声场"
        },
	{
            title: "神经网络成像"
        }
    ],
    // 紧急不重要
    lowImportantHighUrgent: [

    ],
    // 不重要不紧急
    lowImportantLowUrgent: [
        {
            title: "庐山、温泉、台湾"
        }
    ]
};

// 待办事项算法
const todoAlgorithm = {
    // 获取分类后的待办事项
    getCategorizedTodoItems: function() {
        return todoData;
    }
};

// Todo Script
// 获取DOM元素
const todoBtn = document.getElementById('todo-btn');
const todoOverlay = document.getElementById('todo-overlay');
const closeTodo = document.getElementById('close-todo');
const todoContent = document.getElementById('todo-content');

// 渲染待办事项
function renderTodoItems() {
    // 使用从data/todo.js加载的静态数据和算法
    try {
        // 获取分类后的待办事项
        const todoQuadrants = todoAlgorithm.getCategorizedTodoItems();
    
        // 生成HTML
        const resultHTML = `
            <div class="todo-container">
                <!-- 四象限布局 -->
                <div class="todo-quadrants">
                    <!-- 第一象限：重要紧急 -->
                    <div class="todo-quadrant">
                        <h4>重要紧急</h4>
                        <div class="todo-items">
                            ${todoQuadrants.highImportantHighUrgent.map(item => `
                                <div class="todo-item">
                                    <div class="todo-title">${item.title}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- 第二象限：重要不紧急 -->
                    <div class="todo-quadrant">
                        <h4>重要不紧急</h4>
                        <div class="todo-items">
                            ${todoQuadrants.highImportantLowUrgent.map(item => `
                                <div class="todo-item">
                                    <div class="todo-title">${item.title}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- 第三象限：紧急不重要 -->
                    <div class="todo-quadrant">
                        <h4>紧急不重要</h4>
                        <div class="todo-items">
                            ${todoQuadrants.lowImportantHighUrgent.map(item => `
                                <div class="todo-item">
                                    <div class="todo-title">${item.title}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <!-- 第四象限：不重要不紧急 -->
                    <div class="todo-quadrant">
                        <h4>不重要不紧急</h4>
                        <div class="todo-items">
                            ${todoQuadrants.lowImportantLowUrgent.map(item => `
                                <div class="todo-item">
                                    <div class="todo-title">${item.title}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        if (todoContent) {
            todoContent.innerHTML = resultHTML;
        }
    } catch (error) {
        console.error('渲染待办事项失败:', error);
        if (todoContent) {
            todoContent.innerHTML = `<div class="error-message">渲染待办事项失败: ${error.message}</div>`;
        }
    }
}

// 显示待办事项界面
if (todoBtn) {
    todoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (todoOverlay) {
            todoOverlay.style.display = 'flex';
            renderTodoItems();
        }
    });
}

// 关闭待办事项界面
const closeTodoModal = () => {
    if (todoOverlay) {
        todoOverlay.style.display = 'none';
    }
};

if (closeTodo) {
    closeTodo.addEventListener('click', closeTodoModal);
}

// 点击阴影关闭
if (todoOverlay) {
    todoOverlay.addEventListener('click', (e) => {
        if (e.target === todoOverlay) {
            closeTodoModal();
        }
    });
}

// 按ESC键关闭
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && todoOverlay && todoOverlay.style.display === 'flex') {
        closeTodoModal();
    }
});