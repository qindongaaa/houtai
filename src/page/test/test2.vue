<template>
<div>
    <h1>my vue test2</h1>
    <el-card class="box-card">
      <h3>活动列表</h3>
      <el-row type="flex" align="middle" :gutter="20" style="padding:20px 0;">
        <el-col :span="5" style="width: 160px;text-align: center;">
          已选择{{ activeNum }}个活动
        </el-col>
        <el-col :span="5" style="width: 140px;">
          <el-select v-model="currentType" placeholder="请选择活动分类">
            <el-option
              v-for="type in types"
              :value="type">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="13">
          <!--<el-button :plain="true" type="info">设置活动分类</el-button>-->
          <el-button :plain="true" @click.native="" type="danger">删除</el-button>
          <el-button :plain="true" @click.native="" type="info">置顶</el-button>
          <el-button :plain="true" @click.native="" type="info">复制</el-button>
        </el-col>
      </el-row>

      <el-table :data="filteredTableData"  style="width: 100%"
                @cell-click="handleSelect" @selection-change="selectionchange"
                >
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column property="pername" label="反馈者"></el-table-column>
        <el-table-column property="type" label="反馈分类" ></el-table-column>
        <el-table-column property="status" label="状态"></el-table-column>
        <el-table-column inline-template label="操作" align="center" property="id">
          <el-button type="text" size="mini" @click.native="">查看详情</el-button>
        </el-table-column>
      </el-table>

      <el-row type="flex" justify="end" style="padding:20px 0; ">
        <el-pagination
          :current-page="1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="sizes, prev, pager, next"
          :total="1000">
        </el-pagination>
      </el-row>
    </el-card>
</div>
</template>
<script>
  export default {
    name: 'test2',
    computed:{
        filteredTableData: function () {
          var type = this.currentType;
          return this.tableData.filter(function (data) {
            if(type == '全部'|| type == '' ){
              return true
            }else{
              return data.type == type
            }
          })
        }
    },
    methods:{
        handleSelect: function (row, column, cell, event) {
            if (column.label == '操作') {
                this.$router.push({path:'/test/test3',query:{id:row.id,name:row.pername}});
                } else if(column.type == 'selection'){
                    row.$info = !row.$selected;
            }else{
                    row.$selected = !row.$selected;
                    row.$info = row.$selected;
            }
        },
         selectionchange: function (val) {
            var arr = [];
            val.forEach(function (item) {
                arr.push(item.id);
            });
            this.selectItems = arr;
            this.activeNum = this.selectItems.length;
        },
    },
    data: function () {
      return {
        totalActiveNum: 3,
        totalSignUp: 204,
        auditNum: 15,
        activeNum: 0,
        currentType: '全部',
        selectItems:[],
        types: ['全部','课程','活动','私教','比赛'],
        tableData: [
          {
            id: '001',
            pername: '王小虎',
            type: '活动',
            status: '已结束',
          }, {
            id: '002',
            pername: '王小豹',
            type: '课程',
            status: '已结束',
          }, {
            id: '003',
            pername: '王小龙',
            type: '私教',
            status: '已结束',
          }, {
            id: '004',
            pername: '王小驴',
            type: '比赛',
            status: '已结束',
          }],
      }
    },
  }
  
  </script>