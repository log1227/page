// 毕业设计表格数据和样式
const graduationDesignData = {
    "styles": `
        /* 毕业设计表格样式 */
        .graduation-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .graduation-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: center;
            vertical-align: middle;
            font-weight: 600;
            color: #212529;
            background-color: rgba(255, 255, 255, 0.9);
        }
    `,
    "templates": {
        "graduation-features": {
            "title": "毕设特点",
            "html": `
                <table class="graduation-table">
                    <tbody>
                        <tr>
                            <td content="毕设特点" rowspan="9" class="main-title">毕设特点</td>
                            <td content="固定" rowspan="3">固定</td>
                            <td content="形式固定" colspan="3">形式固定</td>
                        </tr>
                        <tr>
                            <td content="内容固定" colspan="3">内容固定</td>
                        </tr>
                        <tr>
                            <td content="任务固定" colspan="3">任务固定</td>
                        </tr>
                        <tr>
                            <td content="背景复杂" rowspan="3">背景复杂</td>
                            <td content="干扰">干扰</td>
                            <td content="→" rowspan="3">→</td>
                            <td content="提升鲁棒性" rowspan="3">提升鲁棒性</td>
                        </tr>
                        <tr>
                            <td content="质量参差不齐">质量参差不齐</td>
                        </tr>
                        <tr>
                            <td content="细节丰富">细节丰富</td>
                        </tr>
                        <tr>
                            <td content="技术指标" rowspan="3">技术指标</td>
                            <td content="轻量化" colspan="3">轻量化</td>
                        </tr>
                        <tr>
                            <td content="正确率高" colspan="3">正确率高</td>
                        </tr>
                        <tr>
                            <td content="高效" colspan="3">高效</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        "ocr-review": {
            "title": "OCR综述",
            "html": `
                <table class="graduation-table">
                    <tbody>
                        <tr>
                            <td rowspan="33">OCR综述</td>
                            <td rowspan="2">引言</td>
                            <td rowspan="2">构建通用型的OCR大模型</td>
                            <td colspan="2">多模态</td>
                            <td colspan="4"></td>
                        </tr>
                        <tr>
                            <td colspan="2">多任务统一</td>
                            <td colspan="4"></td>
                        </tr>
                        <tr>
                            <td rowspan="3">多模态大模型有一定的文档理解能力，在此基础上强化大模型OCR能力</td>
                            <td rowspan="3">训练方法</td>
                            <td colspan="2">OCR相关问答数据、文字检测</td>
                            <td colspan="4"></td>
                        </tr>
                        <tr>
                            <td colspan="2">OCR相关识别数据</td>
                            <td colspan="4"></td>
                        </tr>
                        <tr>
                            <td colspan="2">特定任务的数据进行指令微调</td>
                            <td colspan="4"></td>
                        </tr>
                        <tr>
                            <td rowspan="3">OCR大模型定义与分类</td>
                            <td>定义</td>
                            <td colspan="2">基于LLM或多任务统一建模、具有高通用性和强泛化能力的OCR方法</td>
                            <td colspan="4"></td>
                        </tr>
                        <tr>
                            <td rowspan="2">分类</td>
                            <td>OCR多模态大模型</td>
                            <td colspan="5">利用预训练的大语言模型，构建QA训练数据集，使用大量多模态数据对不同OCR场景进行学习</td>
                        </tr>
                        <tr>
                            <td>OCR多任务统一大模型</td>
                            <td colspan="5">统一不同任务到一个通用架构中，用较大规模的参数量，从不同任务的数据学习一个能完成多种任务且通用能力强的OCR视觉模型</td>
                        </tr>
                        <tr>
                            <td colspan="3">背景与意义</td>
                            <td colspan="5"></td>
                        </tr>
                        <tr>
                            <td rowspan="23">研究现状</td>
                            <td rowspan="4">OCR增强的通用多模态大模型</td>
                            <td>背景</td>
                            <td colspan="3">早期多模态大模型有一定零样本OCR能力但与传统OCR模型差距较大</td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td rowspan="3">方法</td>
                            <td colspan="2">将大量OCR相关问答数据或检测识别数据加入训练数据</td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td colspan="2">提高模型能处理的图像分辨率</td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td colspan="2">结合多个图像编码器或改进特征提取方式</td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td rowspan="9">文档理解多模态大模型</td>
                            <td colspan="5">旨在理解具有丰富文本信息的图片（对文档理解能力要求更高，区别于前面通用性更强的OCR增强的通用多模态大模型）</td>
                        </tr>
                        <tr>
                            <td rowspan="8">分类</td>
                            <td rowspan="8">是否需要调用OCR模型或API对图片中文字进行检测识别</td>
                            <td rowspan="4">OCR-free</td>
                            <td>定义</td>
                            <td colspan="2">直接输入文档图片</td>
                        </tr>
                        <tr>
                            <td rowspan="3">方法</td>
                            <td colspan="2">用大模型合成问答数据</td>
                        </tr>
                        <tr>
                            <td colspan="2">整合现有数据集或设计针对文档场景的训练任务</td>
                        </tr>
                        <tr>
                            <td colspan="2">为了更好适配OCR相关任务，从多模态大模型的图像编码和视觉文本适配等角度进行研究</td>
                        </tr>
                        <tr>
                            <td rowspan="4">OCR-dependent（实体信息抽取任务相比free有明显优势）</td>
                            <td>定义</td>
                            <td colspan="2">先使用OCR工具预处理，输入文档图片和OCR标注</td>
                        </tr>
                        <tr>
                            <td rowspan="3">方法</td>
                            <td>内容方面</td>
                            <td>采用与OCR-free相似的数据集，在此基础上上加入更多OCR信息相关的自监督预训练任务，通过随机掩码、多种预测文本行空间位置的几何相对关系等务任让LLM更好地理解引入的OCR结果</td>
                        </tr>
                        <tr>
                            <td rowspan="2">结构方面</td>
                            <td>利用已有的预训练模型来编码OCR信息</td>
                        </tr>
                        <tr>
                            <td>采用全新初始化的结构，以更灵活的编码OCR信息</td>
                        </tr>
                        <tr>
                            <td rowspan="3">针对特定OCR任务的多模态大模型</td>
                            <td colspan="4">图标理解多模态大模型</td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td colspan="4">表格理解多模态大模型</td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td colspan="4">文档检索与多页文档理解多模态大模型</td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td rowspan="4">OCR多任务统一大模型</td>
                            <td>文档理解预训练模型</td>
                            <td colspan="3">完成包括关键信息抽取、文档分类、文档问答等下游任务</td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td>像素到序列（Pix2Seq）统一模型</td>
                            <td colspan="3">输入文档图片并直接完成下游文档理解任务（OCR-free），避免MCR错误导致文档理解错误</td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td>文档解析统一模型</td>
                            <td colspan="3">专注于将各类文档图像解析为统一的文档表示语言（HTML、Markdowm），作为下游任务基础</td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td>像素级别统一模型</td>
                            <td colspan="3">对图片进行像素级操作，如文本擦除、文本分割、文档矫正等</td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td rowspan="3">OCR大模型相关任务和评估benchmark</td>
                            <td colspan="2">视觉问答数据集</td>
                            <td colspan="4"></td>
                        </tr>
                        <tr>
                            <td colspan="2">视觉富文档信息提取数据集</td>
                            <td colspan="4"></td>
                        </tr>
                        <tr>
                            <td colspan="2">综合评估基准</td>
                            <td colspan="4"></td>
                        </tr>
                        <tr>
                            <td colspan="3">讨论与展望</td>
                            <td colspan="5"></td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        "tech-route": {
            "title": "冠字号码识别技术路线",
            "html": `
                <table class="graduation-table">
                    <tbody>
                        <tr>
                            <td content="冠字号码识别技术路线" rowspan="7" class="main-title">冠字号码识别技术路线</td>
                            <td content="流水线式" rowspan="4">流水线式</td>
                            <td content="预处理" rowspan="2">预处理</td>
                            <td content="图像增强">图像增强</td>
                            <td content="难点" rowspan="4">难点</td>
                            <td content="对预处理、文本检测模型要求极高，否则误差积累" colspan="2" rowspan="4">对预处理、文本检测模型要求极高，否则误差积累</td>
                        </tr>
                        <tr>
                            <td content="文本区域识别">文本区域识别</td>
                        </tr>
                        <tr>
                            <td content="核心模型">核心模型</td>
                            <td content="CRNN">CRNN</td>
                        </tr>
                        <tr>
                            <td content="后处理">后处理</td>
                            <td content="语言模型纠错（WBS）">语言模型纠错（WBS）</td>
                        </tr>
                        <tr>
                            <td content="端到端">端到端</td>
                            <td content="核心模型">核心模型</td>
                            <td content="ResNet（预训练） + BiLSTM + CTC">ResNet（预训练） + BiLSTM + CTC</td>
                            <td content="→">→</td>
                            <td content="后续升级">后续升级</td>
                            <td content="ResNet + Self-Attention（Transformer Encoder） + CTC">ResNet + Self-Attention（Transformer Encoder） + CTC</td>
                        </tr>
                        <tr>
                            <td content="OCR工具+大语言模型后处理" colspan="6">OCR工具+大语言模型后处理</td>
                        </tr>
                        <tr>
                            <td content="微调多模态大模型" colspan="6">微调多模态大模型</td>
                        </tr>
                    </tbody>
                </table>
            `
        }
    }
};

// 毕业设计脚本 - DOM操作和事件处理
(function() {
    // 等待DOM加载完成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGraduationDesign);
    } else {
        initGraduationDesign();
    }
    
    function initGraduationDesign() {
        // 获取DOM元素
        const techRouteBtn = document.getElementById('tech-route-btn');
        const graduationFeaturesBtn = document.getElementById('graduation-features-btn');
        const ocrReviewBtn = document.getElementById('ocr-review-btn');
        const graduationOverlay = document.getElementById('graduation-overlay');
        const closeGraduation = document.getElementById('close-graduation');
        const graduationTitle = document.getElementById('graduation-title');
        const graduationContent = document.getElementById('graduation-content');
        
        // 显示毕业设计界面
        function showGraduationDesign(type) {
            graduationOverlay.style.display = 'flex';
            
            // 渲染表格
            renderGraduationTable(type);
        }
        
        // 关闭毕业设计界面
        const closeGraduationModal = () => {
            graduationOverlay.style.display = 'none';
        };
        
        // 点击关闭按钮
        closeGraduation.addEventListener('click', closeGraduationModal);
        
        // 点击阴影关闭
        graduationOverlay.addEventListener('click', (e) => {
            if (e.target === graduationOverlay) {
                closeGraduationModal();
            }
        });
        
        // 技术路线按钮点击事件
        techRouteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showGraduationDesign('tech-route');
        });
        
        // 毕设特点按钮点击事件
        graduationFeaturesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showGraduationDesign('graduation-features');
        });
        
        // OCR综述按钮点击事件
        ocrReviewBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showGraduationDesign('ocr-review');
        });
        
        // 渲染毕业设计表格
        function renderGraduationTable(type) {
            // 获取模板数据
            const template = graduationDesignData.templates[type];
            if (!template) return;
            
            // 更新标题
            graduationTitle.textContent = template.title;
            
            // 添加样式
            let styleElement = document.getElementById('graduation-styles');
            if (!styleElement) {
                styleElement = document.createElement('style');
                styleElement.id = 'graduation-styles';
                document.head.appendChild(styleElement);
            }
            styleElement.textContent = graduationDesignData.styles;
            
            // 直接设置完整的HTML内容
            graduationContent.innerHTML = template.html;
        }
        
        // 按ESC键关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && graduationOverlay.style.display === 'flex') {
                closeGraduationModal();
            }
        });
    }
})();

