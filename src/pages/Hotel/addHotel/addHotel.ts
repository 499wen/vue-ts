let token = localStorage.getItem('token')

function G(id) {
  return document.getElementById(id);
}

export default {
  data() {
    return {
      ruleForm: {
        hotelName: "酒店名称2", //酒店名称
        address: "地址", //详细地址
        capacity: 30, //容纳人数
        gpsLat: "", //纬度
        gpsLng: "", //经度
        imageUrl: "ahahhxnuw.png", //酒店图片
        remark: "描述" //描述
      },
      cover: '',
      rules: {
        hotelName: [
          { required: true, message: '请输入酒店名称', trigger: 'blur' },
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' }
        ],
        capacity: [
          { required: true, message: '请输入容纳人数', trigger: 'blur' }
        ],
        restaurantType: [
          { required: true, message: '请输入酒店类型', trigger: 'blur' }
        ],
        restaurantPhoto: [
          { required: true, message: '请添加酒店封面', trigger: 'blur' }
        ]
      },
      headers: {}
    }
  },
  methods: {
    // 上传封面 
    uploadSuccess(res){

    },
    // 上传状态
    beforeAvatarUpload(){

    },
    map() {
      var map = new BMap.Map("baidu-map");
      map.centerAndZoom("北京",18);                   // 初始化地图,设置城市和地图级别。
    
      var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {"input" : "suggestId"
        ,"location" : map
      });
    
      var myValue;
      ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
      var _value = e.item.value;
        myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        
        setPlace();
      });
    
      function setPlace(){
        map.clearOverlays();    //清除地图上所有覆盖物
        function myFun(){
          var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
          map.centerAndZoom(pp, 18);
          map.addOverlay(new BMap.Marker(pp));    //添加标注
        }
        var local = new BMap.LocalSearch(map, { //智能搜索
          onSearchComplete: myFun
        });
        local.search(myValue);
      }
    }
  },
  mounted() {
    this.map()
    // console.log(this.$http)
    // this.$http.post(this.API.addHotelByCustomer, this.ruleForm)
    //     .then((res: any) => {
    //       console.log(res)
    //     })
  }
}