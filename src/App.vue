<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    // 基准大小
    const baseSize = 16
    // 设置 rem 函数
    function setRem() {
      // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
      const width = document.documentElement.clientWidth
      const height = window.screen.height 
      const scale = height == 1080 ? 1 : width / 1920
      // 设置页面根节点字体大小 Math.min(scale, 2)
      document.documentElement.style.fontSize = baseSize * scale.toFixed(2) + 'px'
    }
    // 初始化
    setRem()
    // 改变窗口大小时重新设置 rem
    window.onresize = function() {
      setRem()
    }
  }
}
</script>

<style lang="less">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-table--border:after,
.el-table--group:after,
.el-table:before {
  background-color: #999 !important;
}

.el-table--border,
.el-table--group {
  border-color: #999 !important;
}

.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #999 !important;
}

.el-table--border th,
.el-table--border th.gutter:last-of-type {
  border-bottom: 1px solid #999 !important;
}

.el-table--border td,
.el-table--border th {
  border-right: 1px solid #999 !important;
}

.dialog {
  max-height: calc(100vh - 160px);
  box-sizing: border-box;
  min-width: 650px;
}

.el-dialog--center {
  margin-top: 80px !important;
}

.header-opera {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 0 15px;
  background-color: #ededed;

  .tap {
    width: 100%;
    height: 45px;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 45px;

    & > span {
      margin-right: 20px;
      position: relative;
      font-weight: 700;
      display: inline-block;
    }

    & > span:nth-last-child(1) {
      font-weight: 400;
      color: #606266;
    }

    & > span:before {
      content: '/';
      position: absolute;
      right: -10px;
      height: 100%;
      color: #a4a7ae;
    }

    & > span:nth-last-child(1):before {
      content: '';
    }
  }
}

.pagin {
  width: 100%;
  padding-top: 10px;
  display: flex;
  justify-content: center;
}

::-webkit-scrollbar {
	width: 8px;
	height: 4px;
	background-color: #f3f3f3;
}

::-webkit-scrollbar-thumb {
	/*滚动条里面小方块*/
	border-radius: 0.625rem;
	box-shadow: inset 0 0 0.3125rem #e3e3e3;
	background: #cecece;
}

::-webkit-scrollbar-track {
	/*滚动条里面轨道*/
	box-shadow: inset 0 0 0.3125rem #e3e3e3;
	border-radius: 0.625rem;
	background: #ededed;
}
</style>
