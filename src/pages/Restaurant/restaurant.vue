<template>
  <div class="hotel">
    <div class="header-opera">
      <div class="tap">
        <span>基础设置</span>
        <span>餐厅管理</span>
      </div>

      <div class="opera">
        <el-input size="small" placeholder="请输入餐厅名称" v-model="searchKey" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button size="small" @click="addHotel" type="primary" plain class="add-hotel"> 新建餐厅 </el-button>
      </div>
    </div>

    <!-- <router-view /> -->
    <!-- 表格 -->
    <div class="table" >
      <el-table :data="tableData" :height='height' border>
        <el-table-column :resizable="false" align='center' type="index" label="序号" width="50"></el-table-column>
        <el-table-column :resizable="false"  align='center' label="餐厅封面" width="200">
          <template slot-scope="scope">
            <img v-if="!scope.row.hotelImageUrl" src="@/assets/images/defaultImg.png" class="hotel-img" />
            <img v-else id="updateUserImg" class="hotel-img" :src="`/zhenapi/fileserve/hotelFile/hotel/hotelImage/${loginInfo.companyId}/${scope.row.hotelImageUrl}`" alt="">
          </template>
        </el-table-column> 
        <el-table-column :resizable="false" align='center'
        v-for="(item,index) in tableCate"
        :key="index"
        :prop="item.value" :label="item.label" :width="item.width"
        ></el-table-column>
        <el-table-column :resizable="false"  align='center' label="操作" width="350">
          <template slot-scope="scope">
            <el-button size="small" type="warning" @click="handleEdit(scope.row)" round>修改餐厅</el-button>
            <el-button size="small" type="danger" @click="deleteUsers(scope.row)" round>删除餐厅</el-button>
          </template> 
        </el-table-column> 
      </el-table>
    </div>

    <!-- 分页 -->
    <div class="pagin" >
      <el-pagination
        background
        @size-change="sizeChange"
        @current-change="curChange"
        :current-page="pageNum"
        :page-sizes="[20, 50, 100, 300]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import { dataScrollLoad } from '@/plugins/plugins'

export default {
  data() {
    return {
      searchKey: '',
      tableCate: [
        { label: "餐厅名称", value: "hotelName", width: '200' },
        { label: "餐厅地址", value: "address", width: '300' },
        { label: "描述", value: "remark", width: '' }
      ],
      tableData: [],
      tableData1: [],
      tableData1: [
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
        {hotelName: '西汀大餐厅', address: '西汀大江附近', remark: '餐厅描述'},
      ],
      height: null,
      total: 0,
      pageNum: 1,
      pageSize: 10
    }
  },
  methods: {
    // 添加餐厅
    addHotel(){
      this.$router.push('/addRestaurant')
    },
    // 分页方法
    sizeChange(val){
      this.pageSize = val
    },
    curChange(val){
      this.pageNum = val
    }
  },
  mounted() {
    var dom = document.querySelector('.table')
    this.height = dom.offsetHeight

    var table_scroll = document.querySelector('.el-table__body-wrapper')
    dataScrollLoad(table_scroll, this.tableData1, 1, 20, (res) => {
        this.tableData = res
    })
  }
};
</script>

<style scoped lang='less'>
.hotel {
  width: 100%;
  height: 100%;

  .opera {
    display: flex;
    align-items: center;
    height: 100%;

    .add-hotel {
      margin-left: 10px;
    }
  }

  .table {
    width: 100%;
    height: calc(100% - 97px);

    .hotel-img {
      width: 112px;
      height: 71px;
    }
  }
}
</style>