<template>
    <main>
     <!-- 左侧导航 -->
        <div class="main-left">
          <el-menu default-active="/test/test1" class="el-menu-vertical-demo" :router="true">
            <el-menu-item index="/test/test1" :class="{'isActive': active}">测试1</el-menu-item>
            <el-menu-item index="/test/test2" :class="{'isActive': !active}">测试2</el-menu-item>
          </el-menu>
        </div>

          <!-- 右侧主内容区 -->
          <div  class="main-right" >
            <transition name="fade">
              <router-view class="view"></router-view>
            </transition>
          </div>
    </main>
</template>
<script>
    import $ from 'jquery'

    export default {
    name:'test',
    data: function () {
      return {
        active:true
      }
    },
    methods: {
    
    },
    watch:{
        '$route': function (to,from) {
            this.isRouter = true;
        }
    }
  }

</script>
<style>

</style>
