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
        <div class="but-group">
          <el-button @click.native.prevent="testAjaxPost">提交</el-button>
        </div>
    </div>
    
</template>
<script>
import http from '../../axios/index.js'
export default {
    
    name:'test3',
    data:function(){
        return{}
    },
    methods:{
        testAjaxPost:function(){

            this.$post("func/auth/webLogin",
            {
                loginName:"lxq",
                password:1
            }).then(function(data){
                    console.log(data);
                }).catch(function(error){
                    console.log(error);
                });
            // this.$http.post('/badmintonhot/func/auth/webLogin', 
            // {   'loginName' :'lxq',
            //     'password' : 1,
              
            // }, response => {
            //             if (response.status >= 200 && response.status < 300) {
            //                 console.log(response.data);//请求成功，response为成功信息参数
            //             } else {
            //                 console.log(response.message);//请求失败，response为失败信息
            //             }
            //         }) .then(function (data) {
            //         console.log(data);
            //     }).catch(function (error) {
            //     console.log(error)
            // })


   
            
        

        },
        
    },
    
    
  
}
</script>
