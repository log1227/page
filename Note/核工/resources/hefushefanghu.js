// 核辐射防护笔记内容
const hefushefanghuNotes = {
    title: "核辐射防护",
    isDynamic: true,
    contentData: [
        {
            type: 'header',
            level: 1,
            text: '基本概念'
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 2,
            text: '辐射的概念及分类'
        },
        {
            type: 'header',
            level: 3,
            text: '1. 什么是辐射'
        },
        {
            type: 'text',
            text: '辐射 (Radiation) 是指能量以电磁波（$\\gamma$射线，X 射线）或粒子（如$\\alpha$粒子、$\\beta$粒子等）的形式向外扩散'
        },
        {
            type: 'header',
            level: 3,
            text: '2. 辐射的特点'
        },
        {
            type: 'list',
            items: [
                '视觉、嗅觉不能感知',
                '具有一定的穿透力',
                '可使被照射物质发生电离或激发',
                '具有长期慢性效应'
            ]
        },
        {
            type: 'header',
            level: 3,
            text: '3. 辐射的分类'
        },
        {
            type: 'list',
            items: [
                '<strong>电离辐射：</strong>能使物质产生电离作用的辐射，能量以<strong>电磁波或粒子形式</strong>从原子或原子核内发射出来',
                '<strong>非电离辐射：</strong>波长大于 100 纳米的电磁波，不足以引起生物体电离的辐射'
            ]
        },
        {
            type: 'header',
            level: 3,
            text: '4. 核辐射（电离辐射）'
        },
        {
            type: 'text',
            text: '<strong>分类：</strong>天然电离辐射和人工辐射'
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 2,
            text: '原子结构'
        },
        {
            type: 'header',
            level: 3,
            text: '原子序数、质量数'
        },
        {
            type: 'table',
            headers: ['原子质量数（核子数）', 'A'],
            rows: [
                ['原子序数（质子数）', 'Z'],
                ['中子数', 'N=A-Z']
            ]
        },
        {
            type: 'text',
            text: '<strong>核素：</strong>A 同 Z 同能态同'
        },
        {
            type: 'text',
            text: '<strong>同位素：</strong>Z 同 A 不同'
        },
        {
            type: 'text',
            text: '<strong>丰度：</strong>各同位素天然含量的<strong>原子数</strong>百分比'
        },
        {
            type: 'header',
            level: 3,
            text: '原子结合能'
        },
        {
            type: 'text',
            text: '若干质子、中子结合成一个核时释放的部分能量。'
        },
        {
            type: 'formula',
            latex: 'B(Z,A)=Zm_pc^2+(A-Z)m_nc^2-m(Z,A)c^2'
        },
        {
            type: 'text',
            text: '<strong>质量亏损：</strong>原子核的质量总是小于组成它的所有核子的质量之和，少的那部分质量称为质量亏损。'
        },
        {
            type: 'formula',
            latex: '\\Delta m ( Z , A ) = Z m _ { p } + ( A - Z ) m _ { n } - m ( Z , A ) = B ( Z , A ) / c ^ { 2 }'
        },
        {
            type: 'text',
            text: '<strong>比结合能：</strong>结合能/A，越大稳定性越高（形成这个核时平均每个核子释放的能量多）'
        },
        {
            type: 'text',
            text: '<strong>原子核最后一个核子的结合能：</strong>从核中分离出一个核子所需要给予的能量，反应原子核对邻近的那些原子核的稳定程度'
        },
        {
            type: 'header',
            level: 3,
            text: '核力'
        },
        {
            type: 'list',
            items: [
                '强相互作用力',
                '电荷无关性',
                '短程性和饱和性',
                '核力主要是吸引力，在极短程内有排斥芯'
            ]
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 2,
            text: '放射性及其衰变规律'
        },
        {
            type: 'text',
            text: '<strong>放射性：</strong>原子核自发地发射各种射线的现象'
        },
        {
            type: 'text',
            text: '<strong>不稳定核素：</strong>能自发地发射各种射线的核素称为放射性核素，也称为不稳定核素'
        },
        {
            type: 'text',
            text: '<strong>原子核的衰变：</strong>在没有外界影响的情况下，原子核自发地发射粒子并发生改变的现象'
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 2,
            text: '原子核衰变的主要方式'
        },
        {
            type: 'header',
            level: 3,
            text: '$\\alpha$ 衰变'
        },
        {
            type: 'text',
            text: '不稳定核自发地放出$\\alpha$粒子而蜕变的过程'
        },
        {
            type: 'formula',
            latex: '{}_{Z}^{A}\\mathrm{X} \\to {}_{Z-2}^{A-4}\\mathrm{Y} + \\alpha + Q'
        },
        {
            type: 'text',
            text: '<strong>特点:</strong>'
        },
        {
            type: 'list',
            items: [
                '放射性核素一般为重核，质量数>140',
                '放出的$\\alpha$粒子能量在 4～9MeV 范围',
                '衰变半衰期范围很宽，10-7s～1015a',
                '衰变条件：质量亏损＞0',
                '可根据$\\alpha$粒子的动能测衰变释放的能量：$Q \\approx \\frac{A}{A-4} T_\\alpha$'
            ]
        },
        {
            type: 'header',
            level: 3,
            text: '$\\beta$ 衰变'
        },
        {
            type: 'text',
            text: '核电荷数改变而核子数不变的自发核衰变过程'
        },
        {
            type: 'formula',
            latex: '{}_{Z}^{A}\\mathrm{X} \\to {}_{Z+1}^{A}\\mathrm{Y} + \\beta^- + \\bar{\\nu} + Q'
        },
        {
            type: 'formula',
            latex: '{}_{Z}^{A}\\mathrm{X} \\to {}_{Z-1}^{A}\\mathrm{Y} + \\beta^+ + \\bar{\\nu} + Q'
        },
        {
            type: 'formula',
            latex: '{}_{Z}^{A}\\mathrm{X} + e^- \\to {}_{Z-1}^{A}\\mathrm{Y} + \\nu_e'
        },
        {
            type: 'text',
            text: '<strong>特点：</strong>'
        },
        {
            type: 'list',
            items: [
                '主要包括 b-衰变、b+ 衰变和轨道电子俘获三种形式',
                '其放射性核素遍及整个元素周期表',
                '发射粒子能量在几十 KeV～几 MeV',
                '衰变半衰期范围为，10-3s～1024a',
                '衰变谱连续，是因为中微子'
            ]
        },
        {
            type: 'header',
            level: 3,
            text: '$\\gamma$ 衰变'
        },
        {
            type: 'text',
            text: '原子核从激发态通过发射 g 光子或其他过程跃迁到较低能态的过程。该过程核电荷数不变、核子数不变'
        },
        {
            type: 'text',
            text: '<strong>特点：</strong>'
        },
        {
            type: 'text',
            text: '$\\gamma$跃迁包括$\\gamma$跃迁和内转换电子两种形式。'
        },
        {
            type: 'text',
            text: '$\\gamma$跃迁发射粒子能量在几 KeV～十几 MeV'
        },
        {
            type: 'text',
            text: '$\\gamma$跃迁半衰期范围为，10-16s～10-4s'
        },
        {
            type: 'text',
            text: '其衰变能：'
        },
        {
            type: 'formula',
            latex: 'E_0 = E_i - E_f = E_r + h\\nu \\approx h\\nu'
        },
        {
            type: 'header',
            level: 3,
            text: '重核裂变'
        },
        {
            type: 'header',
            level: 3,
            text: '原子核衰变参数'
        },
        {
            type: 'table',
            headers: ['衰变率$\\Delta N(t)$', '$\\Delta N(t) = -\\lambda N(t)$'],
            rows: [
                ['放射性活度$A$', '$A=-\\Delta N(t)$'],
                ['衰变常数$\\lambda$', '$\\lambda = -\\frac{\\Delta N(t)}{N(t) \\Delta t}$'],
                ['原子核数$N(t)$', '$N(t) = N_0 \\mathrm{e}^{\\lambda t}$'],
                ['半衰期$T_{\\frac{1}{2}}$', '$T_{1/2} = \\frac{\\ln 2}{\\lambda} \\approx \\frac{0.693}{\\lambda}$'],
                ['平均寿命$\\tau$', '$\\tau = \\frac{1}{\\lambda} = \\frac{T_{1/2}}{\\ln 2} = 1.44 T_{1/2}$']
            ]
        },
        {
            type: 'text',
            text: '<strong>放射性活度单位：</strong>居里（Ci）/ 贝可（Bq）'
        },
        {
            type: 'text',
            text: '<strong>比活度：</strong>$a=\\frac{A}{m}$，反应放射源中放射性物质的纯度'
        },
        {
            type: 'divider'
        },
        {
            type: 'header',
            level: 2,
            text: '原子核衰变规律'
        },
        {
            type: 'text',
            text: '<strong>核心公式：</strong>$\\Delta N(t) = -\\lambda N(t)$，通过解微分方程得到各母核子核浓度'
        },
        {
            type: 'header',
            level: 3,
            text: '多次连续衰变下的放射性平衡'
        },
        {
            type: 'list',
            items: [
                '<strong>暂时平衡：</strong>母体半衰期大于子体：母体恒定衰变率，子体衰变率上升到与母体成比例后一直成比例，并按母体半衰期衰减',
                '<strong>长期平衡：</strong>母体半衰期远大于子体：母体数目几乎不变，子体衰变率上升到等于母体衰变率，并按母体半衰期衰减',
                '<strong>不成平衡：</strong>母体半衰期小于子体：母体衰减快，子体达到极大值后按自己的半衰期衰减'
            ]
        },
        {
            type: 'header',
            level: 3,
            text: '放射系（地球上留下的长期平衡衰变体系）'
        },
        {
            type: 'text',
            text: '钍系（4n 系）'
        },
        {
            type: 'text',
            text: '铀系（4n+2 系）'
        },
        {
            type: 'text',
            text: '锕系（4n+3 系）'
        },
        {
            type: 'header',
            level: 3,
            text: '放射性规律的应用'
        },
        {
            type: 'list',
            items: [
                '放射源活度修正',
                '确定放射源活度和制备时间',
                '确定放射源性质',
                '确定远期年代',
                '短寿命核素发生器'
            ]
        }
    ]
};

// 导出笔记内容
if (typeof module !== 'undefined' && module.exports) {
    module.exports = hefushefanghuNotes;
} else {
    window.hefushefanghuNotes = hefushefanghuNotes;
}
