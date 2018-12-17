<template>
    <div class="teamstyle">
        <ul>
            <li v-for="(staffitem ,staffindex) in teamlist" :key="staffindex">
                <div class="headertou">
                    <div class="headphoto">
                        <img :src='staffitem.avator' alt=""/>
                    </div>
                    <div class="jobappointment">
                        <div class="job">
                            <span class="name">{{staffitem.name}}</span>
                            <span class="zhiwei">{{staffitem.job}}</span>
                        </div>
                        <div class="appointment">
                            <span class="num">{{staffitem.follower}}</span>
                            <span class="miao">个预约</span>
                        </div>
                    </div>
                    <div class="makeorder" @click="appointment(staffitem.id)" >
                    约TA
                    </div>
                </div>
                <div class="tucaselist">
                    <div class="caseslist" v-for="(caseitem,caseindex) in staffitem.cases" :key="caseindex">
                        <img :src='caseitem.head_picture' alt=""/>
                        <div class="tutitle">{{caseitem.title}}</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { yuangong } from "../api/api";
import { sendReq } from "../utils/ajax";
export default {
    name:"StaffStyle",
    data(){
        return{
            teamlist:[],
        }
    },
    mounted(){
        sendReq(yuangong, "POST").then(rep => {
            console.log(rep.data);
            if (rep.data.response) {    
                this.teamlist=rep.data.response.staff;
            }
        });
    },
    methods:{
        appointment(e){
            this.$router.push({path: `/user/YueTa`, query:{id:e}})
        }
    }
}
</script>
<style lang="scss">
.teamstyle{
  width:100%;
  height: auto;
  overflow: hidden;
  background-color:#fff;
  margin-top:3rem;
}
.teamstyle ul li{
  width:100%;
  height:auto;
  padding:0 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
}
.teamstyle ul li .headertou{
  width:100%;
  height:5rem;
}
.teamstyle ul li .headertou .headphoto{
  width:4rem;
  height:4rem;
  float: left;
  margin-right: 1rem;
  margin-top:0.5rem
}
.teamstyle ul li .headertou .headphoto img{
  width:4rem;
  height:4rem;
  border-radius: 50%;
}
.teamstyle ul li .headertou .jobappointment{
  min-width: 5rem;
  height:4rem;
  float: left;
  margin-top:0.5rem;
}
.teamstyle ul li .headertou .jobappointment .job,.teamstyle ul li .headertou .jobappointment .appointment{
  width:100%;
  height:2rem;
  line-height: 2rem;
}
.teamstyle ul li .headertou .jobappointment .job .name,.teamstyle ul li .headertou .jobappointment .appointment .num{
  font-size: 1rem;
  color:#000;
  margin-right: 1rem;
}
.teamstyle ul li .headertou .jobappointment .appointment .num{
  color:#c8c297;
}
.teamstyle ul li .headertou .jobappointment .job .zhiwei,.teamstyle ul li .headertou .jobappointment .appointment .miao{
  font-size: 1rem;
  color:#999;
}
.teamstyle ul li .headertou .makeorder{
  width:5rem;
  height:2rem;
  font-size: 1rem;
  color:#c8c297;
  border:1px solid #c8c297;
  border-radius: 1rem;
  text-align: center;
  line-height: 2rem;
  float: right;
  margin-top:1.5rem;
}
.teamstyle ul li .tucaselist{
  width:100%;
  height:7rem;
  display: flex;
  justify-content: space-between;
}
.teamstyle ul li .tucaselist .caseslist{
  width:6.666666rem;
  height:7rem;
}
.teamstyle ul li .tucaselist .caseslist img{
  width:100%;
  height:4rem;
  border-radius: 0.4rem;
}
.teamstyle ul li .tucaselist .caseslist .tutitle{
  width:100%;
  height:3rem;
  line-height: 1.4rem;
  text-align: center;
  font-size: 0.8rem;
  color:#999;
}
</style>
