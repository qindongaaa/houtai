<template>
    <main>
     <!-- 左侧导航 -->
        <div class="main-left">
          <el-menu default-active="/active/activePublic" class="el-menu-vertical-demo" :router="true">
            <el-menu-item index="/active/activePublic" :class="{'isActive': active}">活动发布</el-menu-item>
            <el-menu-item index="/active/activeManage" :class="{'isActive': !active}">活动管理</el-menu-item>
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

import 'element-ui/lib/theme-default/index.css'
import $ from 'jquery'

export default {
  name: 'active',
  data: function (){
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






