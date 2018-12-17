<template>
    <div class="tabar" v-show="isShowTabbar">
        <van-tabbar v-model="active">
                <van-tabbar-item to="/">
                    <span>首页</span>
                    <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? shou.active : shou.normal"
                    >
                </van-tabbar-item>
                <van-tabbar-item to="/Cases">
                    <span>案例</span>
                    <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? anli.active : anli.normal"
                    >
                </van-tabbar-item>
                <van-tabbar-item to="/Combo">
                    <span>套餐</span>
                    <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? tao.active : tao.normal"
                    >
                </van-tabbar-item>
                <van-tabbar-item to="/Appointment">
                    <span>预约</span>
                    <img
                    slot="icon"
                    slot-scope="props"
                    :src="props.active ? yue.active : yue.normal"
                    >
                </van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import shou from '../assets/images/shou-11.png'
import shou1 from '../assets/images/shou-1.png'
import anli from '../assets/images/an-11.png'
import anli1 from '../assets/images/an-1.png'
import tao from '../assets/images/tao-11.png'
import tao1 from '../assets/images/tao-1.png'
import yue from '../assets/images/xiao-11.png'
import yue1 from '../assets/images/xiao-1.png'
export default {
    data(){
        return{
            active: 0,
            shou: {
                normal:shou,
                active:shou1,
            },
            anli: {
                normal:anli,
                active:anli1,
            },
            tao: {
                normal:tao,
                active:tao1,
            },
            yue: {
                normal:yue,
                active:yue1,
            }
        }
    },
    mounted(){
        console.log(this.props);
    },
    computed: {
    isShowTabbar() {
      let routeLength = this.$route.path.split("/").length;
      return routeLength > 2 ? false : true;
    }
  }
}
</script>
<style lang="scss" scoped>

</style>


