<template>
    <div class="taodetails">
        <div class="combodetails" v-html="taocontent">
        </div>
        <div class='comboprice'>
            <div class='left'>
                <div class='tel' @click="showphone">咨询客服</div>
            </div>
            <div class='right'>
                <div class='canguan' @click="yuyuetaocan" >预约参观</div>
            </div>
        </div>
        <div class="modal-box" v-bind:style="{'display':flag===true?'none':'block'}">
            <div class="modal-body">
                <div class='tishi'>提示</div>
                <div class='tell'>是否拨打客服电话：4008128090</div>
                <div class='anniu'>
                <div class='left' @click="hiddenphone">
                    <div class='quxiao'>取消</div>
                </div>
                <div class='right'>
                    <div class='queding' @click="makePhoneCall">确定</div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { taodetail } from "../api/api";
import { sendReq } from "../utils/ajax";
export default {
    name:"ComboDetails",
    data(){
        return{
            taocontent:'',
            flag:true,
        }
    },
    mounted(){
        let parm = {
            id:this.$route.query.id,
        }
        sendReq(taodetail, "POST",parm).then(rep => {
            console.log(rep.data);
            if (rep.data.response) {    
                this.taocontent=rep.data.response.content
            }
        });
    },
    methods:{
        showphone(){
            this.flag=false;
        },
        hiddenphone(){
            this.flag=true;
        },
        makePhoneCall(){
            window.location.href = "tel:4008128090";
            this.flag=true;
        },
        yuyuetaocan(){
            this.$router.push({path: `/user/YueTa`}) 
        }
    }
}
</script>
<style lang="scss">
.combodetails{
  width:100%;
  margin-top:3rem;
  overflow: hidden;
  margin-bottom: 3rem;
}
.combodetails p{
  margin:0;
}
.combodetails img{
  width:100%;
}
.comboprice{
  width:100%;
  height:3.333333rem;
  border-top:1px solid #f5f5f5;
  position:fixed;
  bottom: 0;
  background-color:#fff;
}
.comboprice .left ,.comboprice .right{
  width:12.5rem;
  height:3.333333rem;
  text-align:center;
  float: left;
  
}
.comboprice .tel,.comboprice .canguan{
  width:9.166666rem;
  height:2.666666rem;
  text-align: center;
  line-height: 2.666667rem;
  background-color:#c8c297;
  color:#fff;
  border-radius: 1.333333rem;
  margin-top:0.333333rem;
  margin-left:1.666666rem;
}
.comboprice .tel{
  background-color:#fff;
  border:1px solid #c8c297;
  color:#c8c297;
}
.modal-box{
  position:fixed;
  width:100%;
  height:100%;
  top:0px;
  background:rgba(0,0,0,0.4);
  overflow: hidden;
  }

.modal-body{
    width:15rem;
    height:8.333333rem;
    background-color:#fff;
    border-radius:0.333333rem;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50% ,-50%);
  }
.tishi,.tell{
  height:2.333333rem;
  text-align: center;
  line-height: 2.333333rem;
  color:#000;
  border:1rpx solid #f5f5f5;
  box-sizing: border-box;
}
.tell{
  border:none;
}
.anniu{
  width: 100%;
  height:3.666666rem;
}
.anniu .left,.anniu .right{
  width:50%;
  height:3.666666rem;
  float: left;
}
.anniu .left .quxiao,.anniu .right .queding{
  width:5.833333rem;
  height:2.333333rem;
  margin-top:0.666666rem;
  margin-left:0.666666rem;
  border-radius: 1.1666665rem;
  border:1px solid #eea56a;
  color:#eea56a;
  text-align: center;
  line-height: 2.333333rem;
}
.anniu .right .queding{
  background-color:#eea56a;
  border:none;
  color:#fff;
}
</style>


