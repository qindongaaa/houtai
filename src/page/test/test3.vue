<template>
    <div>
        <h1>
            <a>可能是最初的一个测试</a>
        </h1>
        <h2>
            测试者是{{this.$route.query.name}},id是{{this.$route.query.id}}
        </h2>
        <el-form>
            <el-form-item label="反馈信息详情">
                <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        :autosize="{minRows: 4, maxRows: 8}"
                        >
                </el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name:'test3',
    data:function(){
        return{}
    },
  
}
</script>
