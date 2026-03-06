// 核反应堆热工水力学笔记内容
const regongshuiliNotes = {
    title: "核反应堆热工水力学",
    content: `
        <div class="chapter-tags">
            <a href="#" class="chapter-tag" data-section="1">核燃料、包壳材料、冷却剂及其热物性</a>
        </div>
        <div class="notes-content">
            <section id="section-1" class="note-section">
                <h3>核燃料、包壳材料、冷却剂及其热物性</h3>
                <div style="margin: 30px; color: black;">

                    <p style="font-size: 24px; font-weight: bold;">易裂变核素：</p>
                        <p style="text-indent: 4em; font-size: 16px;">²³⁵U、²³³U、²³⁹Pu</p>
                    <p style="font-size: 10px; text-indent: 10em;">可转换核素（转变为易裂变核素）：²³²Th、²³⁸U</p>

                    <p style="font-size: 20px; font-weight: bold;">要求：</p>
                        <p style="text-indent: 4em; font-size: 20px;">核燃料：</p>
                            <p style="text-indent: 8em; font-size: 16px;">UO₂陶瓷材料</p>
                            <p style="text-indent: 8em; font-size: 16px;">含UO₂弥散体的燃料</p>
                        <p style="text-indent: 4em; font-size: 20px;">包壳材料：</p>
                            <p style="text-indent: 8em; font-size: 16px;">压水堆：锆合金和不锈钢</p>
                            <p style="text-indent: 8em; font-size: 16px;">包壳外表面最高限制温度：350°C</p>
                        <p style="text-indent: 4em; font-size: 20px;">冷却剂：</p>
                    
                    <p style="font-size: 20px; font-weight: bold;">热物性：</p>
                        <p style="text-indent: 4em; font-size: 20px;">核燃料：</p>
                        <div style="margin-left: 8em; font-size: 16px;">
                            <table border="1" cellpadding="5" cellspacing="1">
                                <tr>
                                    <td>密度</td>
                                    <td>孔隙越多密度越小</td>
                                </tr>
                                <tr>
                                    <td>熔点</td>
                                    <td>燃耗（产物积累、杂质）越深熔点越低<br>O/U原子比2熔点有最大值</td>
                                </tr>
                                <tr>
                                    <td>热导率</td>
                                    <td>温度1600度热导率有最小值<br>氧铀比增加热导率下降<br>孔隙越多热导率下降</td>
                                </tr>
                            </table>
                        </div>
                        
                        <p style="text-indent: 4em; font-size: 20px;">包壳：</p>
                            <p style="text-indent: 8em; font-size: 16px;">包壳材料热导率</p>
                            <p style="text-indent: 8em; font-size: 16px;">惰性气体热导率</p>
                            
                        <p style="text-indent: 4em; font-size: 20px;">水和水蒸气：</p>
                            
                        <p style="text-indent: 4em; font-size: 20px;">膨胀系数：</p>
                            <p style="text-indent: 8em; font-size: 16px;">线性膨胀系数α<sub>L</sub> = ΔL/L₀</p>
                            <p style="text-indent: 8em; font-size: 16px;">体积膨胀系数α<sub>V</sub> = ΔV/V₀</p>
                            <p style="text-indent: 6em; font-size: 16px;">ΔL、ΔV是温度增加1°C长度和体积的变化量</p>
                            <p style="text-indent: 6em; font-size: 16px;">L₀、V₀是基准温度下的长度和体积</p>
                    
                    <p style="font-size: 20px; font-weight: bold;">辐照（燃耗）对热物性的影响：</p>
                        <p style="text-indent: 8em; font-size: 16px;">辐照（或燃耗）对二氧化铀熔点的影响：燃耗越深熔点越低</p>
                        <p style="text-indent: 8em; font-size: 16px;">辐照（或燃耗）对二氧化铀热导率的影响：燃耗越深热导率越低</p>
                        <p style="text-indent: 8em; font-size: 16px;">辐照（或燃耗）对燃料芯块肿胀的影响：燃耗越深裂变气体和产物造成芯块肿胀，造成芯块与包壳间隙减小，甚至相互接触挤压</p>
                    </ul>
                </div>
            </section>
            
        </div>
    `
};

// 导出笔记内容
if (typeof module !== 'undefined' && module.exports) {
    module.exports = regongshuiliNotes;
} else {
    window.regongshuiliNotes = regongshuiliNotes;
}