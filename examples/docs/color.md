## Color 色彩

Mo UI 为保持组件及页面间视觉保持一致，采用以下调色板的颜色作为组件的设计开发规范。

### 主色

<mo-row :gutter="16">
    <mo-col span="6">
        <div class="doc__color" style="background: #7FCFFB">
            <p>主色</p>
            <p class="item__color">#7FCFFB</p>
        </div>
    </mo-col>
    <mo-col span="6">
        <div class="doc__color" style="background: #559CE0">
            <p>突出 ／ 焦点</p>
            <p class="item__color">#559CE0</p>
        </div>
    </mo-col>
</mo-row>

### 辅助色 

<mo-row :gutter="16">
    <mo-col span="6">
        <div class="doc__color" style="background: #00DC5D">
            <p>成功</p>
            <p class="item__color">#00DC5D</p>
        </div>
    </mo-col>
    <mo-col span="6">
        <div class="doc__color" style="background: #EE9000">
            <p>警告</p>
            <p class="item__color">#EE9000</p>
        </div>
    </mo-col>
    <mo-col span="6">
        <div class="doc__color" style="background: #EC1101">
            <p>错误</p>
            <p class="item__color">#EC1101</p>
        </div>
    </mo-col>
    <mo-col span="6">
        <div class="doc__color" style="background: #90969c">
            <p>信息</p>
            <p class="item__color">#90969c</p>
        </div>
    </mo-col>
</mo-row>

### 中性色

<mo-row :gutter="16">
    <mo-col span="6">
        <div class="doc__color" style="background: #2D2F33">
            <p>主要文字</p>
            <p class="item__color">#2D2F33</p>
        </div>
    </mo-col>
    <mo-col span="6">
        <div class="doc__color" style="background: #5A5E66">
            <p>常规文字</p>
            <p class="item__color">#5A5E66</p>
        </div>
    </mo-col>
    <mo-col span="6">
        <div class="doc__color" style="background: #878D99">
            <p>次要文字</p>
            <p class="item__color">#878D99</p>
        </div>
    </mo-col>
    <mo-col span="6">
        <div class="doc__color" style="background: #B4BCCC">
            <p>占位文字</p>
            <p class="item__color">#B4BCCC</p>
        </div>
    </mo-col>
</mo-row>

<mo-row :gutter="16">
    <mo-col span="6">
        <div class="doc__color--anti" style="background: #D8DCE5">
            <p>一级边框</p>
            <p class="item__color">#D8DCE5</p>
        </div>
    </mo-col>
    <mo-col span="6">
        <div class="doc__color--anti" style="background: #DFE4ED">
            <p>二级边框</p>
            <p class="item__color">#DFE4ED</p>
        </div>
    </mo-col>
    <mo-col span="6">
        <div class="doc__color--anti" style="background: #E6EBF5">
            <p>三级边框</p>
            <p class="item__color">#E6EBF5</p>
        </div>
    </mo-col>
    <mo-col span="6">
        <div class="doc__color--anti" style="background: #EDF2FC">
            <p>四级边框</p>
            <p class="item__color">#EDF2FC</p>
        </div>
    </mo-col>
</mo-row>

<style scoped>
.doc__color {
    &--anti p {
        color: #000000;
    }

    & p {
        color: var(--color-white);
    }

    & .item__color{
        color: var(--color-extra-light-gray);
    }

    &, &--anti {
        border-radius: 4px;
        color: #FFFFFF;
        padding: 15px;
        margin-top: 15px;
        box-sizing: border-box;

        .item__color {
            font-size: 12px;
            opacity: .6;
            margin-top: 5px;
        }
    }
}
</style>
