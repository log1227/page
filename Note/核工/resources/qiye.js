// 气液两相流笔记内容
const qiyeNotes = {
    title: "气液两相流基本参数",
    isDynamic: true,
    contentData: [
        {
            type: 'header',
            level: 1,
            text: '气液两相流基本参数'
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 2,
            text: '1. 基本概念'
        },
        {
            type: 'text',
            text: '<strong>两相流：</strong>固体、液体、气体三个相中的任何两个组合在一起、具有相间界面的流动体系'
        },
        {
            type: 'header',
            level: 3,
            text: '两相流分类'
        },
        {
            type: 'list',
            items: [
                '<strong>按相的类别分：</strong>气液两相流、气固两相流、液固两相流、液液两相流',
                '<strong>按化学成份分：</strong>',
                '单组分两相流：同一种化学成分的物质的两种相态混合在一起的流动，如水 - 水蒸汽、钠 - 钠蒸汽及冰水混合物等',
                '双组分两相流：不同化学成分的两种物质处于同一个系统内的流动，如空气 - 水，油 - 水，烟 - 气等',
                '<strong>按流道是否存在热交换可分：</strong>',
                '绝热两相流——无相变，无相间质量交换。如汽水分离',
                '加热两相流——有相变，有相间质量交换。如沸腾、冷凝'
            ]
        },
        {
            type: 'text',
            text: '<strong>公式上标：</strong>′′ 表示气相，′ 表示液相，无表示总'
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 2,
            text: '2. 气相介质含量'
        },
        {
            type: 'header',
            level: 3,
            text: '2.1 质量含气率 $x$'
        },
        {
            type: 'text',
            text: '单位时间内，流过通道<strong>某一截面</strong>的两相流体<strong>总质量</strong> $M$ 中<strong>气相</strong>所占的<strong>比例份额</strong>。'
        },
        {
            type: 'formula',
            latex: 'x = \\frac{M\'\'}{M} = \\frac{M\'\'}{M\'\' + M\'}'
        },
        {
            type: 'list',
            items: [
                '$M$: 质量流量 [kg/s]',
                '<strong>质量含液率（湿度）</strong>就是 $1-x$',
                '<strong>热力学含气率：</strong>$x=\\frac{i-i_s\'}{r}$'
            ]
        },
        {
            type: 'text',
            text: '<strong>热平衡方程：</strong>$i = i_s\' + r x$'
        },
        {
            type: 'list',
            items: [
                '$i_s\'$ 为饱和水焓，$r$ 为汽化潜热',
                '焓表示能量',
                '方程表示气液两相流系统总能量=纯饱和液体能量 + 气体部分的汽化潜热×气体份额',
                'x 可以＜0 是因为欠热沸腾（未达沸点的沸腾）；＞1 是因为过热蒸汽（纯蒸汽继续加热），在热力学上因为焓的关系拓展了定义域'
            ]
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 3,
            text: '2.2 容积含气率 $\\beta$'
        },
        {
            type: 'text',
            text: '指<strong>单位时间</strong>内流过某一截面的<strong>两相总容积</strong>中，<strong>气相</strong>所占的比例份额。'
        },
        {
            type: 'formula',
            latex: '\\beta = \\frac{V\'\'}{V} = \\frac{V\'\'}{V\' + V\'\'}'
        },
        {
            type: 'list',
            items: [
                '$V $：容积流量 [m³/s]'
            ]
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 3,
            text: '2.3 截面含气率 $\\alpha$（空泡份额）'
        },
        {
            type: 'text',
            text: '又称<strong>空泡份额</strong>。指两相流<strong>某一截面上</strong>，<strong>气相所占截面</strong>与<strong>总流道截面</strong>之比。'
        },
        {
            type: 'formula',
            latex: '\\alpha = \\frac{A\'\'}{A} = \\frac{A\'\'}{A\'\' + A\'}'
        },
        {
            type: 'list',
            items: [
                '$A $: 截面积 [m²]',
                '<strong>$\\alpha$ 与 $\\beta$ 的区别：</strong>',
                '$\\alpha$ 是体积比，表示<strong>存在</strong>管道中的气相容积份额',
                '$\\beta$ 是容积流量比，表示<strong>流过</strong>通道的气相容积份额'
            ]
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 2,
            text: '3. 两相流的流量和流速'
        },
        {
            type: 'header',
            level: 3,
            text: '3.1 质量流量 $M$'
        },
        {
            type: 'list',
            items: [
                '单位：$kg/s$'
            ]
        },
        {
            type: 'header',
            level: 3,
            text: '3.2 质量流速（质量流密度） $G$'
        },
        {
            type: 'formula',
            latex: 'G = \\frac{M}{A}'
        },
        {
            type: 'list',
            items: [
                '单位：$kg/(m^2×s)$'
            ]
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 3,
            text: '3.3 容积流量 $V$'
        },
        {
            type: 'list',
            items: [
                '单位：$m^3/s$'
            ]
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 3,
            text: '3.4 真实平均速度 $W$'
        },
        {
            type: 'formula',
            latex: 'W=\\frac{V}{A}=\\frac{M}{\\rho A}'
        },
        {
            type: 'list',
            items: [
                '单位：$m/s$'
            ]
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 3,
            text: '3.5 折算速度 $J$'
        },
        {
            type: 'text',
            text: '又称为<strong>容积流密度</strong>或<strong>表观质量流速</strong>，定义为<strong>单位流道截面上的两相流容积流量</strong>，也表示<strong>两相流的平均速度</strong>。'
        },
        {
            type: 'formula',
            latex: 'J = \\frac{V}{A} = \\frac{V\'}{A} + \\frac{V\'\'}{A} = J_g + J_f'
        },
        {
            type: 'list',
            items: [
                '单位：$m/s$'
            ]
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 3,
            text: '3.6 漂移速度'
        },
        {
            type: 'text',
            text: '各相真实速度与两相混合平均速度 J 的差值，气相 $W_{gm}=W\'\'-J$，液相 $W_{fm}=W\'-J$'
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 3,
            text: '3.7 漂移通量'
        },
        {
            type: 'text',
            text: '相相对于两相混合平均速度 J 运动的截面所流过的体积通量'
        },
        {
            type: 'list',
            items: [
                '<strong>气相：</strong>$J_{gm}=\\frac{A^{\\prime\\prime}}{A}(W^{\\prime\\prime}-J)=J_{g}-\\alpha\\cdot J$',
                '<strong>液相：</strong>$J_{fm}=\\frac{A^{\\prime}}{A}(W^{\\prime}-J)=(1-\\alpha)(W^{\\prime}-J)=J_{f}-(1-\\alpha)J=\\alpha\\cdot J-J_{g}$',
                '有 $J_{gm}=-J_{fm}$',
                '注意，单位也是<strong>m/s</strong>'
            ]
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 3,
            text: '3.8 循环速度 $W_o$'
        },
        {
            type: 'text',
            text: '与两相混合物<strong>总质量流量</strong> $M$ 相等的<strong>液相介质</strong>流过<strong>同一截面</strong>的通道时的速度。'
        },
        {
            type: 'formula',
            latex: 'W_o = \\frac{M}{\\rho\' A} = \\frac{\\rho\'\'}{\\rho\'} J_g + J_f'
        },
        {
            type: 'list',
            items: [
                '单位：<strong>m/s</strong>',
                '对于沸腾通道，循环速度在数值上等于上升管入口处水的速度'
            ]
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 3,
            text: '3.9 循环倍率 $K\'$'
        },
        {
            type: 'text',
            text: '单位时间内，流过通道某一截面的<strong>两相介质总质量</strong>与其中<strong>气相质量</strong>之比，也就是<strong>质量含气率的倒数</strong>。'
        },
        {
            type: 'formula',
            latex: 'K\' = \\frac{M}{M\'\'} = \\frac{1}{x} = \\frac{W_o \\rho\'}{J_g \\rho\'\'}'
        },
        {
            type: 'list',
            items: [
                '无量纲',
                '<strong>实际意义：</strong>表示上升管中实际产生 1 公斤蒸汽需要的循环水流量（公斤数）',
                '<strong>实际取值：</strong>一般设计状态应大于 <strong>4 ~ 4.5</strong>，保证管壁润湿（防干涸）、维持流动稳定性、防止管材腐蚀。'
            ]
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 3,
            text: '3.10 滑移速度与滑速比'
        },
        {
            type: 'text',
            text: '<strong>滑移速度：</strong>$W_{xd}=W\'\'-W\'$'
        },
        {
            type: 'formula',
            latex: '\\text{滑速比 } S=\\frac{W\'\'}{W\'}=(\\frac{x}{1-x})(\\frac{\\rho\'}{\\rho\'\'})(\\frac{1-\\alpha}{\\alpha})'
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 2,
            text: '4. 两相介质密度及比容'
        },
        {
            type: 'header',
            level: 3,
            text: '4.1 流动密度 $\\rho_m$'
        },
        {
            type: 'text',
            text: '单位时间内<strong>流过</strong>流道某一截面的两相介质质量和体积之比。'
        },
        {
            type: 'formula',
            latex: '\\rho_m = \\frac{M}{V} = \\beta \\cdot \\rho\'\' + (1 - \\beta) \\cdot \\rho\''
        },
        {
            type: 'list',
            items: [
                '单位：kg/m³'
            ]
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 3,
            text: '4.2 真实密度 $\\rho_o$'
        },
        {
            type: 'text',
            text: '即单位体积内两相介质的质量，反映了<strong>存在于</strong>流道中的两相介质的实际密度。'
        },
        {
            type: 'formula',
            latex: '\\rho_o = \\alpha \\cdot \\rho\'\' + (1 - \\alpha) \\cdot \\rho\''
        },
        {
            type: 'list',
            items: [
                '单位：kg/m³'
            ]
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 3,
            text: '4.3 比容'
        },
        {
            type: 'text',
            text: '单位时间内流过流道某一截面的两相介质<strong>体积和质量之比</strong>。'
        },
        {
            type: 'formula',
            latex: 'v_m = \\frac{V}{M} = \\frac{1}{\\rho_m} = x v\'\' + (1 - x) v\''
        },
        {
            type: 'header',
            level: 4,
            text: '截面平均比容 $v_A$'
        },
        {
            type: 'formula',
            latex: 'v_A = \\left[ \\frac{1}{A} \\int_A \\rho dA \\right]^{-1} = \\frac{(1 - x) v\' S + x v\'\'}{x + (1 - x) S}'
        },
        {
            type: 'header',
            level: 4,
            text: '动量平均比容 $v_M$'
        },
        {
            type: 'formula',
            latex: 'v_M = \\frac{1}{G^2 A} \\int_A \\rho W^2 dA = \\frac{(1 - x)^2 v\'}{1 - \\alpha} + \\frac{x^2 v\'\'}{\\alpha}'
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 2,
            text: '5. 加热通道内沸腾段长度的确定'
        },
        {
            type: 'header',
            level: 3,
            text: '目的'
        },
        {
            type: 'text',
            text: '确定沸腾起始面，用于分区计算（与加热方式及来流温度有关）。'
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 3,
            text: '5.1 均匀加热'
        },
        {
            type: 'header',
            level: 4,
            text: '公式'
        },
        {
            type: 'formula',
            latex: '\\frac{q_s}{q_t} = \\frac{L_o}{L} = \\frac{i\' - i_i}{i\' + x_e r - i_i}'
        },
        {
            type: 'list',
            items: [
                '$q_s$: 用于预热的热量',
                '$q_t$: 总加热量',
                '$L_o$: 预热段长度',
                '$L$: 总加热段长度',
                '$i_i$: 入口焓',
                '$i\'$: 饱和水焓',
                '$x_e$: 出口含气率',
                '$r$: 汽化潜热'
            ]
        },
        {
            type: 'text',
            text: '→ 图解：含气率从 $z=0$ 开始线性增长至 $z=L$ 处达 $x=x_e$'
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 3,
            text: '5.2 正弦加热'
        },
        {
            type: 'header',
            level: 4,
            text: '热流分布'
        },
        {
            type: 'formula',
            latex: 'q\' = q_c\' \\sin\\left(\\frac{\\pi z}{L}\\right)'
        },
        {
            type: 'header',
            level: 4,
            text: '预热段比例'
        },
        {
            type: 'formula',
            latex: '\\frac{q_s}{q_t} = \\frac{i\' - i_i}{i\' + x_e r - i_i} = \\frac{1}{2} \\left(1 - \\cos\\frac{\\pi L_o}{L}\\right)'
        },
        {
            type: 'text',
            text: '→ 图解：含气率曲线呈非线性，阴影面积正比于 $q_s$'
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 2,
            text: '6. 关键转换关系总结'
        },
        {
            type: 'table',
            headers: ['转换对', '核心依赖', '公式'],
            rows: [
                ['$x \\leftrightarrow \\beta$', '密度 $\\rho=\\frac{M}{V}$', '\\beta = \\dfrac{x / \\rho\'\'}{x / \\rho\'\' + (1 - x)/\\rho\'}'],
                ['$\\alpha \\leftrightarrow \\beta$', '真实平均速度 $W=\\frac{V}{A}$', '\\alpha = \\dfrac{\\beta}{\\beta + (1 - \\beta)/S}'],
                ['$W\'\' \\leftrightarrow J_g$', '空泡份额 $\\alpha$', '$W\'\' = J_g / \\alpha$'],
                ['$W\' \\leftrightarrow J_f$', '空泡份额 $\\alpha$', '$W\' = J_f / (1 - \\alpha)$'],
                ['$K\' \\leftrightarrow x$', '—', '$K\' = 1/x$']
            ]
        },
        {
            type: 'text',
            text: '<strong>常用转换公式：</strong>$M=W\\rho A$'
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 3,
            text: '6.1 $S$ 的影响'
        },
        {
            type: 'table',
            headers: ['情况', '关系'],
            rows: [
                ['$W\'\' = W\'$', '$S = 1,\\ \\alpha = \\beta，W\'=J=W\'\',\\rho_0=\\rho_m$'],
                ['$W\'\' > W\'$', '$S > 1,\\ \\alpha < \\beta，W\'<J<W\'\',\\rho_0>\\rho_m$'],
                ['$W\'\' < W\'$', '$S < 1,\\ \\alpha > \\beta，W\'>J>W\'\',\\rho_0<\\rho_m$']
            ]
        }
    ]
};

// 导出笔记内容
if (typeof module !== 'undefined' && module.exports) {
    module.exports = qiyeNotes;
} else {
    window.qiyeNotes = qiyeNotes;
}
