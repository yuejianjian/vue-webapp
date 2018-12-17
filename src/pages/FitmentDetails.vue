<template>
    <div class="fitmentdetail">
        <div class="xuedetailtitle">
        {{title}}
        </div>
        <div class="createtime">
            {{createtime}}
        </div>
        <div class="fuwenben" v-html="content">
        </div>
    </div>
</template>
<script>
import { xuedetail } from '../api/api';
import { sendReq } from '../utils/ajax';
export default {
    name:"FitmentDetails",
    data(){
        return{
           content:'',
           title:'',
           createtime:''
        }
    },
    mounted(){
        let parm = {
            id:this.$route.query.id,
        }
        sendReq(xuedetail,'POST',parm).then(rep=>{   
            console.log(rep.data);
            let shijian =rep.data.response.created_at;
            var date = new Date(shijian * 1000);//如果date为10位不需要乘1000
            let Y = date.getFullYear() + '-';
            let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
            let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
            let shi =Y + M + D + h + m + s;
            if(rep.data.response){
                    this.content=rep.data.response.content,
                    this.title=rep.data.response.title,
                    this.createtime=shi
            }
        })

    }
}
</script>
<style lang="scss">
.xuedetailtitle{
    margin-top:3rem;
    background-color:#fff;
}
.xuedetailtitle,.createtime{
  width:100%;
  height:3rem;
  line-height: 3rem;
  font-size: 1rem;
  color:#000;
  padding:0 1rem;
  box-sizing: border-box;
}
.createtime{
  height:2rem;
  line-height: 2rem;
  color:#999;
  font-size: 0.8rem;
  text-align: right;
}
.fuwenben{
  width:100%;
  padding:0 1rem;
  box-sizing: border-box;
  overflow: hidden;
}
.fuwenben p{
  text-align: justify;
  font-size: 0.8rem;
  color:#999;
  line-height:1.5rem;
}
.fuwenben img{
  width:100%;
}
</style>


