<template>
    <div class="mytext">
        <van-tabs v-model="active" swipeable @change="tabchange">
            <van-tab v-for="(item,index) in tabs" :title="item.title" :key ="index">
                    <div class="xueshow" v-show="item.tabid===0">
                        <div class="xuelist" v-for="(xuelist,xueindex) in msg" :key="xueindex" track-by="$index" @click="ToFitmentDetails(xuelist.id)">
                            <div class="xuelist-title">{{xuelist.title}}</div>
                            <img :src="xuelist.head_img" alt="">
                        </div>
                    </div>
                    <div class="tangshow" v-show="item.tabid !=0">
                        <div class="tanglist" v-for="(list,listindex) in msg" :key="listindex" track-by="$index"  @click="ToFitmentDetails(list.id)">
                            <div class="tangleft">
                                <img :src="list.head_img" alt="">
                            </div>
                            <div class="tangright">
                                <div class="topname">{{list.title}}</div>
                                <div class="biaoqiuan">
                                    <span v-for="(spanlist ,spanindex) in list.keyword" :key="spanindex">{{spanlist}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import { xuetanglist } from '../api/api';
import { sendReq } from '../utils/ajax';
export default {
    name:"Fitment",
    data(){
        return{
            active:0,
            tabs: [
                { title: "推荐", tabid: 0 },
                { title: "装修流程", tabid: 3 },
                { title: "选材手册", tabid: 4 },
                { title: "装修风水", tabid: 5 }
            ],
            msg:[]
        }
    },
    mounted(){
        this.getxuetang(0);  
    },
    methods:{
        getxuetang(e){
            console.log(e);
            let parm={
                type_id:e,
            }
            sendReq(xuetanglist,'POST',parm).then(rep=>{
                console.log(rep.data.response);
                if(rep.data.response){
                this.msg =rep.data.response.list;
                }
            })
        },
        tabchange(e){
            this.getxuetang(e===0?0:parseInt(e)+parseInt(2));
        },
        ToFitmentDetails(e){
            this.$router.push({path: `/user/FitmentDetails`, query:{id:e}})
        }
    }
}
</script>
<style lang="scss">
.xuelist{
  width:100%;
  padding:0 1.5rem;
  box-sizing: border-box;
  
}
.xuelist-title{
  height:3rem;
  line-height: 3rem;
  font-size: 0.8rem;
}
.xuelist img{
  width:100%;
  border-radius: 0.4rem;
}
.tanglist{
  width:100%;
  height:5rem;
  padding:0 1.5rem;
  box-sizing: border-box;
  margin-bottom: 1.5rem;
}
.tanglist .tangleft{
  width:8.08rem;
  height:5rem;
  float: left;
}
.tanglist .tangleft img{
  width:8.08rem;
  height:5rem;
  border-radius: 0.4rem;
}
.tanglist .tangright{
  width:13rem;
  height:5rem;
  float: right;
}
.tanglist .tangright .topname{
  width:100%;
  height:2rem;
  line-height: 2rem;
  font-size: 0.8rem;
  color:#000;
  margin-bottom: 1rem;
}
.tanglist .tangright .biaoqiuan{
  width:100%;
  height:2rem;
  line-height: 2rem;
  font-size: 0.8rem;
  color:#999;
}
.tanglist .tangright .biaoqiuan span{
  margin-right: 1rem;
}
.van-tabs--line .van-tabs__wrap{
    margin-top:3rem;
    z-index: -1;
}
.van-tabs__content{
    margin-top:3rem;
    z-index: -2;
}
</style>


