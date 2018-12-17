<template>
    <div class="combo">
        <div class="incocombo">
            <div class="incolist">
                <ul>
                    <li @click='IncoSelect(6)'>
                        <img src='../assets/images/inco-11.png' alt="" class="noselect" v-bind:style="{'display':selectid===6?'none':'block'}"/>
                        <img src='../assets/images/inco-1.png' alt="" class="yesselect" v-bind:style="{'display':selectid===6?'block':'none'}"/>
                    </li>
                    <li @click='IncoSelect(8)'>
                        <img src='../assets/images/inco-22.png' alt="" class="noselect" v-bind:style="{'display':selectid===8?'none':'block'}"/>
                        <img src='../assets/images/inco-2.png' alt="" class="yesselect" v-bind:style="{'display':selectid===8?'block':'none'}"/>
                    </li>
                    <li @click='IncoSelect(7)'>
                        <img src='../assets/images/inco-33.png' alt="" class="noselect" v-bind:style="{'display':selectid===7?'none':'block'}"/>
                        <img src='../assets/images/inco-3.png' alt="" class="yesselect" v-bind:style="{'display':selectid===7?'block':'none'}"/>
                    </li>
                    <li @click='IncoSelect(9)'>
                        <img src='../assets/images/inco-44.png' alt="" class="noselect" v-bind:style="{'display':selectid===9?'none':'block'}"/>
                        <img src='../assets/images/inco-4.png' alt="" class="yesselect" v-bind:style="{'display':selectid===9?'block':'none'}"/>
                    </li>
                    <li @click='IncoSelect(10)'>
                        <img src='../assets/images/inco-55.png' alt="" class="noselect" v-bind:style="{'display':selectid===10?'none':'block'}"/>
                        <img src='../assets/images/inco-5.png' alt="" class="yesselect" v-bind:style="{'display':selectid===10?'block':'none'}"/>
                    </li>
                    <li @click='IncoSelect(11)'>
                        <img src='../assets/images/inco-66.png' alt="" class="noselect" v-bind:style="{'display':selectid===11?'none':'block'}"/>
                        <img src='../assets/images/inco-6.png' alt="" class="yesselect" v-bind:style="{'display':selectid===11?'block':'none'}"/>
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
        </div>
        <div class="tao-tu">
            <div class="tao-list">
                <ul>
                    <li v-for="(taoitem,taoindex) in combolist" :key="taoindex" @click="ComboDetails(taoitem.id)">
                        <img :src='taoitem.main_picture' alt=""/>
                        <div class="tcombolisttext">{{taoitem.title}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { taocan } from "../api/api";
import { sendReq } from "../utils/ajax";
export default {
    name:"Combo",
    data(){
        return{
            selectid:6,
            combolist:[],     
        }
    },
    mounted(){
        let id =this.$route.query.id;
        this.selectid = id;
        this.IncoSelect(this.selectid);
    },
    methods:{
        IncoSelect(e){
            let parm ={
                suit_id:e,
            }
            console.log(parm);
            sendReq(taocan, "POST",parm).then(rep => {
                console.log(rep.data);
                if (rep.data.response) {
                    this.selectid=e,
                    this.combolist=rep.data.response.list
                }
            });
        },
        ComboDetails(e){
           this.$router.push({path: `/user/ComboDetails`, query:{id:e}}) 
        }
    }
}
</script>
<style lang="scss">
.combo{
  width:100%;
  height:auto;
  overflow: hidden;
  background-color:#fff;
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
.incotext ul{
  font-size: 0.8rem;
  color:#000;
}
.tao-tu{
  margin-top:1rem;
  margin-bottom: 4rem;
}
.tao-list{
  width:100%;
  padding:0 1rem;
  box-sizing: border-box;
}
.tao-list img{
  width:100%;
  height:14.266667rem;
  border-radius: 0.4rem;
}
.tao-list .tcombolisttext{
  height:2rem;
  line-height: 2rem;
  color:#000;
  font-size: 1rem;
}
</style>