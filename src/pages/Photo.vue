<template>
    <div class="photo">
        <div class="phototab">
            <div class="down_head">
                <div v-for="(item,index) in tabTxt" :class="{'flex1':true, 'tabactive':!tab[index]}" :key="index" @click="downshow(index)">
                    <div class="tabname">{{item}}</div>
                    <img src="../assets/images/arrow.png" alt="">
                </div>
            </div>
            <div class="buttonlist" v-bind:style="{ 'display':tab[0]===true?'none':'block'}">
                <ul class="listul">
                    <li v-for="(styleitem,styleindex) in stylelist" :key="styleindex" @click="filter(styleitem)" :class="{'listactive':style_id===styleitem.id}">{{styleitem.name}}</li>
                </ul>
            </div>
            <div class="buttonlist" v-bind:style="{ 'display':tab[1]===true?'none':'block'}">
                <ul class="listul">
                    <li v-for="(roomitem,roomindex) in spacelist" :key="roomindex" @click="filter(roomitem)" :class="{'listactive':house_type_id===roomitem.id}">{{roomitem.name}}</li>
                </ul>
            </div>
        </div>
        <div class="getPicturelist">
            <div class="tulist" v-for="(tulist,tuindex) in msg" :key="tuindex">
                <img :src="tulist.head_picture" alt="">
                <div class="textname">
                    <span class="gg">{{tulist.style}}</span>
                    <span>{{tulist.room}}</span>
                </div>
            </div>
        </div>
        <div class="jiazai" @click="jiazai" v-show="msg.length > 0">
          加载更多
        </div>
        <div class="nodatalist" v-show="msg.length===0">
            <img src="../assets/images/nofind.png" alt="">
            <div class="nofind-1">当前筛选无结果</div>
            <div class="nofind-2">您可以尝试筛选其他分类看看</div>
        </div>
    </div>
</template>
<script>
import { tuchepic } from "../api/api";
import { sendReq } from "../utils/ajax";
export default {
    name:"Photo",
    data(){
        return{
            tabTxt:['风格','户型'],
            tab:[true,true],
            page:1,
            style_id:0,
            house_type_id:0,   
            msg:[],
            stylelist:[],
            spacelist:[],
        }
    },
    mounted(){
        this.getPicturelist(this.page,this.style_id,this.house_type_id);
    },
    methods:{
        downshow(e){
            let data=[true,true];
            let indexlist= e;
            data[indexlist]=!this.tab[indexlist];
            this.tab=data;
            this.indexlist=indexlist;
        },
        getPicturelist(a,b,c){
            let parm ={
                page:a,
                style_id:b,
                room_id:c,
            }
            console.log(parm);
            sendReq(tuchepic, "POST", parm).then(rep => {
                console.log(rep.data);
                if (rep.data.response){ 
                    this.msg=rep.data.response.picture,
                    this.stylelist=rep.data.response.style,
                    this.spacelist=rep.data.response.room
                }
            });
        },
        filter(e){
            let id = e.id;
            let txt = e.name;
            let tabTxt = this.tabTxt;
            if(this.indexlist===0){
                 tabTxt[0]=txt;
                 this.data=[];
                 this.tab=[true,true];
                 this.tabTxt =tabTxt;
                 this.style_id = id;
                 this.getPicturelist(this.page,id,this.house_type_id)
            }else{
                tabTxt[1]=txt;
                this.data=[];
                this.tab=[true,true];
                this.tabTxt =tabTxt;
                this.house_type_id = id;
                this.getPicturelist(this.page,this.style_id,id)
            }
        },
        jiazai(){
            let page = this.page + 1;
            this.page = page;
            this.getPicturelist(page,this.style_id,this.house_type_id);
        }
    }
}
</script>
<style lang="scss">
.phototab{
    width:100%;
    position: fixed;
    top:3rem;
    height:auto;
    z-index: 100;
    background-color:#fff;
}
.phototab .down_head{
    width:100%;
    height:3rem;
    border-bottom: 1px solid #dfdddd;
    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flexbox;
    display:flex;
}
.phototab .buttonlist{
    width:100%;
    min-height: 10rem;
    padding:0 1.5rem 1.5rem;
    box-sizing: border-box;
    overflow: hidden;
}
.phototab .listul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin:0rem;
    padding:0rem;
}
.phototab .listul li{
    width:4.8rem;
    height:2.5rem;
    border-radius: 0.4rem;
    background-color:#fff;
    margin-top:1rem;
    text-align: center;
    line-height: 2.5rem;
    color:#000;
    border:1px solid #999;
}
.phototab .listul .listactive{
    color:#fff;
    background-color:#f2de35;
    border:none;
}
.flex1 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    box-flex: 1;
    flex: 1;
    overflow: hidden;
    display: block;
    text-align: center;
    line-height: 3rem;
}
.flex1 .tabname{
    text-align: center;
    font-size: 1rem;
    color:#000;
    display: inline-block;
}
.flex1 img{
    width:0.8rem;
    height:0.8rem;
    margin-left:0.2rem;
}
.tabactive img{
    transform: rotate(180deg);background: none;
}
.getPicturelist{
    width:100%;
    padding-top:6rem;
}
.getPicturelist .tulist{
    width:100%;
    height:15.5rem;
    margin-bottom: 2rem;
    position: relative;
}
.getPicturelist .tulist img{
    width:100%;
    height:15.5rem;
}
.getPicturelist .tulist .textname{
    min-width:8rem;
    height:2rem;
    background-color:rgba(0, 0, 0,0.6);
    color:#fff;
    font-size: 0.8rem;
    line-height:2rem;
    position: absolute;
    top:80%;
    left:20%;
    transform: translate(-50% ,-50%);
    text-align: center;
}
.getPicturelist .tulist .textname .gg{
    margin-right: 1rem;
}
.jiazai{
    width:20rem;
    height:3rem;
    border:1px solid #b00;
    text-align: center;
    line-height: 3rem;
    font-size: 1.2rem;
    color:#b00;
    border-radius: 0.4rem;
    margin:2rem auto 1rem;
}
.nodatalist{
    text-align:center;
}
.nodatalist img{
    width:6rem;
    height:6rem;
    margin-top:4rem;
}
.nodatalist .nofind-1{
    font-size: 1.2rem;
}
.nodatalist .nofind-2{
    font-size: 0.9rem;
    color:#999;
}
</style>


