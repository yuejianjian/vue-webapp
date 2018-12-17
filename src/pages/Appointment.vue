<template>
    <div class="appointment">
        <div class="yuyuetu">
          <img :src="showimg" alt=""/>
        </div>
        <div class="formbiao">
            <input class="mianji"  placeholder="请输入你的姓名" />
            <div class="selectstyle">
                <select name="" id="" class="fixture">
                    <option  v-for="(fixtureitem,fixtureindex) in fixture_type" :key="fixtureindex" value="fixtureitem.id">{{fixtureitem.name}}</option>
                </select>
                <select name="" id="" class="housetype">
                    <option  v-for="(houseitem,houseindex) in house_type" :key="houseindex" value="houseitem.id">{{houseitem.name}}</option>
                </select>
            </div>
            <van-button  type="primary" onClick={this.submit} class="tijiao">立即预约</van-button>
        </div>
    </div>
</template>
<script>
import { pricelist } from '../api/api';
import { sendReq } from '../utils/ajax';
export default {
    name:"Appointment",
    data(){
        return{
            showimg:"",
            fixture_type:[],
            house_type:[],
        }
    },
    mounted(){
        sendReq(pricelist,'POST').then(rep=>{   
            console.log(rep.data.response);
            if(rep.data.response){
                let yuyuedata =rep.data.response;    
                this.showimg=yuyuedata.show_img;
                this.fixture_type=yuyuedata.fixture_type;
                this.house_type=yuyuedata.house_type;
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.yuyuetu{
  width:100%;
  height:15.5rem;
  overflow: hidden;
  margin-bottom: 2rem;
}
.yuyuetu img{
  width:100%;
}
.formbiao{
  width:100%;
  height:auto;
  overflow: hidden;
  padding:0 1rem;
  box-sizing: border-box;
}
.formbiao .mianji{
  width:100%;
  height:3rem;
  border:1px solid #e0dddd;
  text-indent: 1em;
}
.formbiao .fixture,.formbiao .housetype{
  width:45%;
  height:3rem;
  border:1px solid #e0dddd;
  float: left;
}
.formbiao .housetype{
  float: right;
}
.formbiao .tijiao{
  width:100%;
  height:3rem;
  background-color:#b00;
  border:none;
  color:#fff;
  font-size: 1rem;
  margin-top:2rem;
}
.formbiao .selectstyle{
  width:100%;
  height:3rem;
  margin-top:2rem;
}
</style>