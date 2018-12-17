<template>
    <div class="fuwu">
        <img :src="msg" alt="服务流程图片">
    </div>
</template>
<script>
import { Server } from '../api/api';
import { sendReq } from '../utils/ajax';
export default {
    name:"Service",
    data(){
        return{
           msg:'', 
        }
    },
    mounted(){
        sendReq(Server,'POST').then(rep=>{   
            console.log(rep.data);
            this.msg=rep.data.response;
        })
    }
}
</script>
<style scoped lang="scss">
.futu{
    margin-top:3rem;
    width:100%;
}
.fuwu img{
  width:100%;
}

</style>