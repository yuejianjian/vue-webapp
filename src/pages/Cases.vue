<template>
    <div class="cases">
        <div class="casezu">
            <div class="downxiala">
                <div class="down_head">
                    <div v-for="(item,index) in tabTxt" :class="{'flex1':true, 'tabactive':!tab[index]}" :key="index" @click="downshow(index)">
                        <div class="tabname">{{item}}</div>
                        <img src="../assets/images/arrow.png" alt=""/>
                    </div>
                </div>
                <div class="buttonlist" v-bind:style="{ 'display':tab[0]===true?'none':'block'}">
                    <ul class="listul">
                        <li v-for="(styleitem,styleindex) in stylelist" :key="styleindex" @click="filter(styleitem)" :class="{'listactive':style_id===styleitem.id}">{{styleitem.name}}</li>
                    </ul>
                </div>
                <div class="buttonlist" v-bind:style="{ 'display':tab[1]===true?'none':'block'}">
                    <ul class="listul">
                        <li v-for="(housetypeitem,housetypeindex) in housetypelist" :key="housetypeindex" @click="filter(housetypeitem)" :class="{'listactive':house_type_id===housetypeitem.id}">{{housetypeitem.name}}</li>
                    </ul>
                </div>
                <div class="buttonlist" v-bind:style="{ 'display':tab[2]===true?'none':'block'}">
                    <ul class="listul">
                        <li v-for="(acreageitem,acreageindex) in acreagelist" :key="acreageindex" @click="filter(acreageitem)" :class="{'listactive':acreage_id===acreageitem.id}">{{acreageitem.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="tulist">
            <ul class="tulistul">
                <li v-for="(datalistitem,datalistindex) in datalist" :key="datalistindex">
                    <img :src="datalistitem.head_picture" alt=""/>
                    <div class="title">{{datalistitem.title}}</div>
                    <div class="brief">{{datalistitem.brief}}</div>
                </li>
            
            </ul>
        </div>
        <div class="nodatalist" v-show="datalist.length===0">
            <img src="../assets/images/nofind.png" alt="">
            <div class="nofind-1">当前筛选无结果</div>
            <div class="nofind-2">您可以尝试筛选其他分类看看</div>
        </div>
    </div>
</template>
<script>
import { anlipic } from "../api/api";
import { sendReq } from "../utils/ajax";
export default {
    name:"Cases",
    data(){
        return{
            tabTxt:['风格','户型','面积'],
            tab:[true,true,true],
            style_id:0,
            house_type_id:0,
            acreage_id:0,
            stylelist:[],
            housetypelist:[],
            acreagelist:[],
            datalist:[],
        }
    },
    mounted(){
        this.getPicturelist(this.style_id,this.house_type_id,this.acreage_id);
    },
    methods:{
        downshow(e){
            let data=[true,true,true];
            let indexlist= e;
            data[indexlist]=!this.tab[indexlist];
            this.tab=data;
            this.indexlist=indexlist;
        },
        getPicturelist(a,b,c){
            let parm ={
                style_id:a,
                house_type_id:b,
                acreage_id:c,
            }
            console.log(parm);
            sendReq(anlipic, "POST",parm).then(rep => {
                console.log(rep.data);
                if (rep.data.response) {
                    this.stylelist= rep.data.response.style,
                    this.housetypelist= rep.data.response.house_type,
                    this.acreagelist=rep.data.response.acreage,
                    this.datalist=rep.data.response.cases;
                }
            });
        },
        filter(e){
            console.log(e);
            let id = e.id;
            let txt = e.name;
            let tabTxt = this.tabTxt;
            if(this.indexlist===0){
                console.log("0000");
                console.log(this);
                 tabTxt[0]=txt;
                 this.data=[];
                 this.tab=[true,true,true];
                 this.tabTxt =tabTxt;
                 this.style_id = id;
                 this.getPicturelist(id,this.house_type_id,this.acreage_id)
            }else if(this.indexlist===1){
                console.log("1111");
                console.log(this);
                tabTxt[1]=txt;
                this.data=[];
                this.tab=[true,true,true];
                this.tabTxt =tabTxt;
                this.house_type_id = id;
                this.getPicturelist(this.style_id,id,this.acreage_id);
            }else{
                console.log("22222");
                console.log(this);
                tabTxt[2]=txt;
                this.data=[];
                this.tab=[true,true,true];
                this.tabTxt =tabTxt;
                this.acreage_id = id;
                this.getPicturelist(this.style_id,this.house_type_id,id);
            }
        },
    }
}
</script>
<style lang="scss">
.cases{
    width:100%;
    height:auto;
    overflow: hidden;
}
.cases .casezu{
    position: fixed;
    width:100%;
    height:auto;
    overflow: hidden;
    background-color:#fff;
}
.cases .down_head{
    width:100%;
    height:3rem;
    border-bottom: 1px solid #dfdddd;
    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flexbox;
    display:flex;
    background-color:#fff;
}
.cases .buttonlist{
    width:100%;
    min-height: 10rem;
    padding:0 1.5rem 1.5rem;
    box-sizing: border-box;
    overflow: hidden;
}
.cases .listul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin:0rem;
    padding:0rem;
}
.cases .listul li{
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
.cases .listul .listactive{
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
.tulist{
  margin-bottom: 4rem;
  height:auto;
  width:100%;
}
.tulist .tulistul{
  margin:3rem auto 0;
  padding:0;
}
.tulist .tulistul li{
  width:100%;
  height:auto;
  overflow: hidden;
}
.tulist .tulistul li img{
  width:100%;
  height:15.5rem;
}
.tulist .tulistul li .title{
  font-size: 1rem;
  font-weight: bold;
  height:2rem;
  line-height: 2rem;
}
.tulist .tulistul li .brief{
  font-size: 0.8rem;
  font-weight: bold;
  height:1.5rem;
  line-height: 1.5rem;
  color:#999;
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

