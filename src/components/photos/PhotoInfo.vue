<template>
<div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
        <span>发表时间{{photoinfo.add_time|dateFormat("YY-MM-DD")}}</span>
        <span>点击：{{photoinfo.click}}次</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
     <div class="thumbs">
      <!-- <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src"> -->
     <vue-preview :slides="list" @close="handleClose"></vue-preview>
    </div>
    <!-- 图片内容区 -->
    <div class="content" v-html="photoinfo.content"></div>
    <!-- 评论子组件 -->
    <comment-box :id="this.id"></comment-box>
</div>
</template>

<script>
//导入评论组件
import comment from '../subcomponents/comment.vue'
export default {
   data(){
       return{
           id:this.$route.params.id,
           photoinfo:{},//图片详情标题时间点击次数
           list:[]//图片缩略图,一堆图片
       }
   } ,
   created(){
       this.getPhotoInfo()
       this.getThumbs()
   },
   methods:{
       getPhotoInfo(){
           this.$http.get('api/getimageInfo/'+this.id).then(result=>{
               if (result.body.status === 0) {
                // 
                this.photoinfo = result.body.message[0];
                } 
           })
       },
       getThumbs(){
           this.$http.get('api/getthumimages/'+this.id).then(result=>{
                // 循环每个图片的数据，并不全宽高
                 result.body.message.forEach(item=>{
                    item.w=600;
                    item.h=400;
                    item.msrc = item.src;
                });
                this.list=result.body.message;
           })
       },
       handleClose(){
           console.log('close event')
       }
   },
    components:{//用来注册子组件
        "comment-box":comment
    }
}
</script>

<style lang="scss" scoped>
.photoinfo-container{
    padding:3px;
    h3{
        color:#8e8e8e;
        font-size: 14px;
        text-align: center;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
    .content{
        font-size: 13px;
        line-height:30px ;
    }
    .thumbs{
         /deep/ .my-gallery{   //deep深层作用选择器
              display: flex;
              flex-wrap:wrap;//默认换行
              figure{
                  width: 30%;  
                  margin: 5px; 
                  img{
                      width: 100%;
                      box-shadow: 0 0 8px #999;  
                      border-radius: 5px;
                  }
              }
          }
        }
}
</style>