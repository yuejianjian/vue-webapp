<template>
    <div class="stylistappointment">
        <div class="stylisting">
            <img :src='yuyuetu' alt=""/>
        </div>
        <div class="yuyuetijiao">
            <input class="stylistname"  placeholder="请输入你的姓名" />
            <input class="stylistphone"  placeholder="请输入你的号码" />
            <van-button  type="primary" onClick={this.submit} class="tijiao">立即预约</van-button>
        </div>
    </div>
</template>
<script>
import { anliyuyue } from "../api/api";
import { sendReq } from "../utils/ajax";
export default {
    name:"YueTa",
    data(){
        return{
            yuyuetu:'',
        }
    },
    mounted(){
        this.id = this.$route.query.uid;
        sendReq(anliyuyue, "POST").then(rep => {
            console.log(rep.data);
            if (rep.data.response) {     
                this.yuyuetu=rep.data.response.img;
            }
        }); 
    }
}
</script>
<style lang="scss">
.stylistappointment{
  width:100%;
  height:auto;
  overflow: hidden;
  margin-top:3rem;
}
.stylistappointment .stylisting img{
  width:100%;
  margin-bottom: 2rem;
}
.stylistappointment .yuyuetijiao{
  width:100%;
  padding:0rem 1.5rem;
  box-sizing: border-box;
  height:auto;
  overflow: hidden;
}
.stylistappointment .yuyuetijiao input{
  width:100%;
  height:3rem;
  border-radius: 0.4rem;
  margin-bottom: 2rem;
  border:none;
  text-indent: 1em;
  border:1px solid #999;

}
.stylistappointment .yuyuetijiao .tijiao{
  width:100%;
  height:3rem;
  border-radius: 0.4rem;
  font-size: 1rem;
  color:#fff;
  text-align: center;
  line-height: 3rem;
  background-color:#b00;
  border:none;
}
</style>


