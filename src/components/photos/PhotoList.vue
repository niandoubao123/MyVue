<template>
    <div>
        <!-- 顶部滑动条 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id==0?'mui-active':item.id]" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
                       {{item.title}}
                    </a>         
                </div>
            </div>
        </div>

        <!-- 图片类表 -->
        <ul class="photo-list">
        <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
            <img v-lazy="item.img_url">
            <div class="info">
                <h1 class=" info-title">{{item.title}}</h1>
                <div class="info-body">{{item.zhaiyao}}</div>
            </div>
        </router-link>
        </ul>
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
    data(){
        return{
            cates:[],//所欲分类数组
            list:[]//图片数组
        }
    },
    created(){
        this.getAllCategory();
        //默认进入全部页面
        this.getPhotoListByCateId(0);
    },
    mounted(){//当组件中的结构被渲染好并放在页面中后执行这个钩子函数
        mui('.mui-scroll-wrapper').scroll({
            deceleration:0.0005
        });
    },
    methods:{
        getAllCategory(){
            this.$http.get('api/getimgcategory').then(result=>{
                if (result.body.status === 0) {
                // 
                result.body.message.unshift({title:'全部',id:0});
                this.cates = result.body.message;
                } else {
                // 失败的
                Toast("失败。。。");
                }
            })
        },
        getPhotoListByCateId(cateId){
            //根据分类获取图片类表
            this.$http.get('api/getimages/'+cateId).then(result=>{
                if (result.body.status === 0) {
                //
                this.list = result.body.message;
                } else {
                // 失败的
                Toast("失败。。。");
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    touch-action: pan-y;
}
.photo-list{
    margin:0;
    padding:10px;
    padding-bottom:0;
    li{
        list-style: none;
        background-color: #ccc;
        text-align: center;
        margin-bottom:10px;
        box-shadow: 0 0 8px #999;
        position: relative;
        img{
            width: 100%;
            vertical-align: middle;
        }
       img[lazy="loading"] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        .info{
            max-height: 84px;
            position: absolute;
            bottom:0;
            color:#fff;
            background-color: rgba(0,0,0,.6);
            text-align: left;
            .info-title{
                font-size: 14px;
            }
            .info-body{
                font-size: 13px;
            }
        }
        
    }
}

</style>