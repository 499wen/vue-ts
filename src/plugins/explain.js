/** 此文件用于记录 element-ui 细节上的修改处理 */

/**
 * el-button 按钮颜色
 * 添加 #66b1ff, 查看 #67c23a, 编辑 #e6a23c, 删除 #f56c6c
 *     primary, success, warning, danger
 * 圆角 round size='small'
 */


/**
 * el-table 铺满父盒子
 * 
 */ 
var dom = document.querySelector('.table')
this.height = dom.offsetHeight


/**
 * el-dialog 加上以下3个属性 使其最大高度不会溢出
 * 
 * :close-on-click-modal='false' 
 * :close-on-press-escape='false'
 * custom-class='dialog' top='80px'
 */


/**
 * el-pagination 分页
 * 
 * html  所占高度42px (1920 * 1080)
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

  js
    total: 0,
    pageNum: 1,
    pageSize: 10

    // 分页方法
    sizeChange(val){
      this.pageSize = val
    },
    curChange(val){
      this.pageNum = val
    }
 */

