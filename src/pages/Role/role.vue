<template>
  <div class="role">
    <div class="header-opera">
      <div class="tap">
        <span>权限管理</span>
      </div>

      <el-button size="small" round @click="addRole" type="primary"> 添加角色 </el-button>
    </div>

    <!-- 表格 -->
    <div class="table">
      <el-table :data="tableData" :height='height' border>
        <el-table-column :resizable="false" align='center' type="index" label="序号" width="50"></el-table-column>
        <el-table-column :resizable="false"  align='center'
        v-for="(item,index) in tableCate"
        :key="index"
        :prop="item.value" :label="item.label" :width="item.width"
        ></el-table-column>
        <el-table-column :resizable="false"  align='center' label="操作" width="400">
          <template slot-scope="scope">
            <el-button size="small" type="warning" @click="handleEdit(scope.row)" round>编辑</el-button>
            <el-button size="small" type="primary" @click="addUsers(scope.row)" round>添加成员</el-button>
            <el-button size="small" type="danger" @click="deleteUsers(scope.row)" round>删除成员</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.row)" round>删除</el-button>
          </template> 
        </el-table-column> 
      </el-table>
    </div>

    <!-- 分页 -->
    <div class="pagin">
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


    <!-- 添加角色 -->
    <el-dialog
    title="添加角色" :visible.sync="addRoleOpen" :close-on-click-modal='false' 
    :close-on-press-escape='false' width="10%" custom-class='dialog' center>
      <Addrole ref="Addrole" v-if="addRoleOpen" @close='closeAddRole'></Addrole>
    </el-dialog>

    <!-- 编辑角色 -->
    <el-dialog
    title="编辑角色" :visible.sync="editRoleOpen" :close-on-click-modal='false' 
    :close-on-press-escape='false' width="30%" custom-class='dialog' center>
      <EditRole ref="EditRole" v-if="editRoleOpen" @close='closeAddRole'></EditRole>
    </el-dialog>

    <!-- 添加成员 -->
    <el-dialog
    title="添加成员" :visible.sync="addMember" :close-on-click-modal='false' 
    :close-on-press-escape='false' width="30%" custom-class='dialog' center>
      <AddMember ref="AddMember" v-if="addMember" @close='closeAddRole'></AddMember>
    </el-dialog>

    <!-- 删除成员 -->
    <el-dialog
    title="添加成员" :visible.sync="delMember" :close-on-click-modal='false' 
    :close-on-press-escape='false' width="30%" custom-class='dialog' center>
      <DelMember ref="DelMember" v-if="delMember" @close='closeAddRole'></DelMember>
    </el-dialog>
  </div>
</template>

<script>
import { dataScrollLoad } from '@/plugins/plugins'
import Addrole from './addRole/addRole'
import EditRole from './editRole/editRole'
import AddMember from './addMember/addMember'
import DelMember from './delMember/delMember'

export default {
  components: {
    Addrole,
    EditRole,
    AddMember,
    DelMember
  },
  data() {
    return {
      tableCate: [
        { label: "角色名称", value: "roleName", width: '200' },
        { label: "成员", value: "member" }
      ],
      tableData: [],
      tableData1: [
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
        {roleName: '系统管理员', member: '翘翘12'},
      ],
      height: null,
      addRoleOpen: false,
      editRoleOpen: false,
      addMember: false,
      delMember: false,

      total: 0,
      pageNum: 1,
      pageSize: 10
    }
  },
  methods: {
    // 编辑
    handleEdit(){
      this.editRoleOpen = true
    },
    // 添加成员
    addUsers() {
      this.addMember = true
    },
    // 删除成员
    deleteUsers(){
      this.delMember = true
    },
    // 删除列
    handleDelete(){
      this.$confirm('是否删除该条数据?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          
        }).catch(err => {})
    },
    // 添加角色
    addRole(){
      this.addRoleOpen = true
    },
    // 关闭添加角色 dialog
    closeAddRole(mess){
      console.log(mess)
      if(mess == '取消'){
        this.addRoleOpen = false
        this.editRoleOpen = false
        this.addMember = false
        this.delMember = false
      } else {
        this.addRoleOpen = false
        this.editRoleOpen = false
        this.addMember = false
        this.delMember = false
        
      }
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
    dataScrollLoad(table_scroll, this.tableData1, 1, 30, (res) => {
        this.tableData = res
    })
  }
}
</script>

<style scoped lang='less'>
.role {
    width: 100%;
    height: 100%;

    .table {
      width: 100%;
      height: calc(100% - 97px);
    }
}

</style>