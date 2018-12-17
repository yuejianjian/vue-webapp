<template>
    <div class="homepage">
         <van-swipe :autoplay="3000" :show-indicators="false" class="swipe">
            <van-swipe-item v-for="(image, index) in imagearray" :key="index" class="lunbo">
                <img v-lazy="image.img" />
            </van-swipe-item>
        </van-swipe>
        <div class="topbar">
            <ul>
                <li>
                    <router-link to="/user/Fitment">
                        <img src="../assets/images/xue.png" alt="">
                        <span>装修学堂</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/user/Photo">
                        <img src="../assets/images/tu.png" alt="">
                        <span>精美图册</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/user/StaffStyle">
                        <img src="../assets/images/yuan.png" alt="">
                        <span>员工风采</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/user/Service">
                        <img src="../assets/images/fu.png" alt="">
                        <span>服务流程</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class='act_pic'>
            <div class="line"></div>
            <img src="../assets/images/know.png" />
            <div class="linee"></div>
        </div>
        <div class="title-text">
            <div class='text-zheng'>整装套餐</div>
        </div>
        <div class='zheng-img' @click='gotaocan(zhengzhuang.id)'>
            <img :src='zhengzhuang.main_picture' />
        </div>
        <div class="incolist">
            <ul>
                <li @click="IncoSelect(6)">
                    <img src="../assets/images/inco-1.png" alt="" class="yesselect"/>
                </li>
                <li @click="IncoSelect(8)">
                    <img src="../assets/images/inco-2.png" alt="" class="yesselect"/>
                </li>
                <li @click="IncoSelect(7)">
                    <img src="../assets/images/inco-3.png" alt="" class="yesselect"/>
                </li>
                <li @click="IncoSelect(9)">
                    <img src="../assets/images/inco-4.png" alt="" class="yesselect"/>
                </li>
                <li @click="IncoSelect(10)">
                    <img src="../assets/images/inco-5.png" alt="" class="yesselect" />
                </li>
                <li @click="IncoSelect(11)">
                    <img src="../assets/images/inco-6.png" alt="" class="yesselect" />
                </li>
            </ul>
        </div>
        <div class="incotext">
            <ul>
                <li>全屋整装</li>
                <li>=</li>
                <li>主材包</li>
                <li>+</li>
                <li>施工包</li>
                <li>+</li>
                <li>家具包</li>
                <li>+</li>
                <li>配饰包</li>
                <li>+</li>
                <li>个性定制</li>
            </ul>
        </div>
        <div class="yingyin"></div>
        <div class="title-text">
            <span class='text-zheng'>{{anli.title}}</span>
            <span class='gengduo' @click="anlicall">更多></span>
        </div>
        <div class='zheng-img'>
            <img :src="anlilist.head_picture" />
            <div class='anli-text'>
                <div class='anli-title'>{{anlilist.brief}}</div> 
                <div class='anli-wen'>
                <span class="wen-1">{{anlilist.acreage}}</span>
                <span class="wen-1">{{anlilist.total_price}}</span>
                <span class="wen-1">{{anlilist.style}}</span>
                <span class="wen-1">{{anlilist.house}}</span>
                </div> 
            </div> 
        </div>
        <div class="yingyin"></div>
        <div class="title-text">
            <span class='text-zheng'>{{mingxing.title}}</span>
            <span class='gengduo' @click="mingxingcall">更多></span>
        </div> 
        <div class='mingxing'>
            <div class='ming-list' v-for="(mingitem,mingindex) in mingxing.list" :key="mingindex">
                <img class='ming-inco' :src="mingitem.avator" />
                <div class='ming-name'>{{mingitem.name}}</div>
                <div class='ming-zhi'>{{mingitem.job}}</div>
            </div>
        </div>
        <div class="yingyin"></div>
        <div class="title-text">
            <div class='text-zheng'>服务流程</div>
        </div>
        <div class='fuwudi'>
            <img src="../assets/images/fuwu.png" />
        </div>   
    </div>
</template>
<script>
import { loginApi } from '../api/api';
import { sendReq } from '../utils/ajax';
export default {
    name:'Home',
    data(){
        return{
            msg:"我是描述信息",
            imagearray:[],
            zhengzhuang:[],
            anli:[],
            anlilist:[],
            mingxing:[],
        }
    },
    mounted(){
        console.log(111111);
        sendReq(loginApi,'POST').then(rep=>{
            console.log(rep.data.response);
            if(rep.data.response){
                this.imagearray=rep.data.response.poster,
                this.zhengzhuang=rep.data.response.suit.list,
                this.anli=rep.data.response.cases,
                this.anlilist=rep.data.response.cases.list,
                this.mingxing=rep.data.response.staff
            }
        })
    },
    methods:{
        gotaocan(e){
            this.$router.push({path: `/user/ComboDetails`, query:{id:e}})
        },
        IncoSelect(e){
            this.$router.push({path: `/Combo`, query:{id:e}})
        },
        anlicall(){
            this.$router.push({path: `/Cases`})
        },
        mingxingcall(){
            this.$router.push({path: `/user/StaffStyle`})
        }
    }
}
</script>
<style lang="scss">
@import "../assets/css/function";
$background:#fff;
body{
    background-color:$background;
}
.homepage{
    width:100%;
    height:auto;
    background-color:#fff;
}
.swipe{
    width:100%;
    height:px2rem(465px);
    overflow: hidden;
}
.lunbo img{
    width:100%;
    height:100%;
}
.topbar{
    width:100%;
    height:px2rem(200px);
    padding-top:px2rem(15px);
    padding-bottom: px2rem(15px);
    padding-left:px2rem(30px);
    padding-right:px2rem(30px);
    box-sizing: border-box;
}
.topbar ul{
    display: flex;
    justify-content: space-between;
}
.topbar ul li{
    width:px2rem(120px);
    height:px2rem(170px);
}
.topbar ul li img{
    max-width:px2rem(80px);
    max-height:px2rem(80px);
}
.topbar ul li span{
    height:px2rem(50px);
    line-height:px2rem(50px);
    text-align: center;
    color:#000;
    font-size: px2rem(30px);
    width:100%;
    display: inline-block;
}
.act_pic{
  width:100%;
  height:6.333333rem;
  overflow: hidden;
}
.act_pic .line{
  width:100%;
  height:0.666666rem;
  background-color:#f0f0f0;
}
.act_pic .linee{
  width:100%;
  height:0.666666rem;
  background-color:#f5f5f5;
}
.act_pic img{
  width:100%;
  height:5rem;
  margin:0;
  padding:0;
}
 .incolist{
  width:100%;
  height:4rem;
  padding:0.2rem;
  box-sizing: border-box;
}
.incolist ul{
  display: flex;
  justify-content:space-between;
}
.incolist ul li,.incolist ul li img{
  width:3.5rem;
  height:3.5rem;
}
.incotext{
  width:100%;
  height:2rem;
  line-height: 2rem;
  padding:0 0.2rem;
  box-sizing: border-box;
}
.incotext ul{
  display: flex;
  justify-content: space-between;
}
.incotext li{
  font-size: 0.8rem;
  color:#000;
}
.title-text{
  width: 100%;
  height:2.666667rem;
  line-height: 2.666667rem;
  background-color:#fff;

}
.title-text .text-zheng{
  font-size: 1rem;
  color:rgb(62,62,62);
  font-weight: bold;
  margin-left:1rem;
}
.zheng-img{
  width:100%;
  text-align: center;
  padding:0 1rem;
  box-sizing: border-box;
}
.zheng-img img{
  width:100%;
  height:15.6rem;
  border-radius: 0.4rem;
}
.yingyin{
  width: 100%;
  height:0.666666rem;
  background-color:#f0f0f0;
}
.title-text .gengduo{
  float: right;
  margin-right:1rem;
}
.anli-text{
  width: 100%;
  height:3.333333rem;
  text-align: left;
  padding:0 1rem;
  box-sizing: border-box;
}
.anli-text .anli-title,.anli-text .anli-wen{
  height:1.666666rem;
  line-height: 1.666666rem;
  font-size:1.066667rem;
  color:#000;
}
.anli-text .anli-wen{
  font-size: 0.8rem;
  color:#999999;
}
.anli-text .anli-wen span{
  margin-right:0.333333rem;
}
.mingxing{
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  margin-bottom: 1.333333rem;
}
.ming-list{
  width:7.333333rem;
  height:9rem;
  text-align: center;
  border:2px solid #999999;
  border-radius: 0.4rem ;
}
.ming-inco{
  width:4rem;
  height:4rem;
  border-radius: 50%;
  margin-top:0.666666rem;
}
.ming-name{
  font-size:1rem;
  color:#000;
  font-weight: bold;
  margin-bottom: 0.333333rem;
}
.ming-zhi{
  color:#999999;
}
.fuwudi{
  width:100%;
  text-align: center;
  margin-bottom: 4rem;
}
.fuwudi img{
  width:100%;
  height:12.066666rem;
}
</style>


