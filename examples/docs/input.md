## Input 输入框

<mo-row :gutter="16">
    <mo-col span="6">
        <mo-input @change="logValue" @input="logValue" @focus="logEvent" @blur="logEvent" value="" placeholder="请输入内容"></mo-input>
    </mo-col>
</mo-row>

<script>
export default {
    methods: {
        logValue(value) {
            console.log(value);
        },
        logEvent(event) {
            console.log(event);
        }
    }
}
</script>
