<template>
    <div class="header" v-show="isShowTabbar">
        <van-nav-bar
            title="标题"
            left-text="返回"
            right-text="按钮"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            fixed
        />
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    methods: {
        onClickLeft() {
            this.$router.go(-1)
        },
        onClickRight() {
        Toast('按钮');
        }
    },
    computed: {
        isShowTabbar() {
            let routeLength = this.$route.path.split("/").length;
            return routeLength > 2 ? true : false;
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

