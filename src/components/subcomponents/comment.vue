<template>
    <div class="cmt-container">
        <h4>发表评论</h4>
        <hr>
        <textarea placeholder="碰我一下（最多120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
                <div class="cmt-title">
                    {{i+1}}楼：&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dateFormat('YYY-MM-DD')}}
                </div>
                <div class="cmt-body">
                    {{item.content === "undefined"?"此用户很懒，没有发表评论":item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            pageIndex:1,//默认第一页
            comments:[],
            msg:""//评论输入的内容
        };
    },
    created(){
        this.getComments()
    },
    methods:{
        getComments(){
            this.$http.get('api/getComments/'+this.id+'?pageindex='+this.pageIndex).then(result=>{
               if (result.body.status === 0) {
                // 成功了
                // this.comments = result.body.message;
                this.comments = this.comments.concat(result.body.message)//拼接首页和其他页评论
                } else {
                // 失败的
                Toast("加载评论失败。。。");
                }
            })
        },
        getMore(){//加载更多
            this.pageIndex++;
            this.getComments();
        },
        //发表评论
        //1,url地址
        //2,数据
        //3，表单格式
        postComment(){
            if(this.msg.trim().length === 0){
                return Toast("评论内容不能为空！")
            }
            this.$http
            .post('api/postcomment/'+this.$route.params.id,{
                content:this.msg.trim()
            })
            .then(function(result){
                if (result.body.status === 0) {
                // 成功了拼接处一个评论对象
                var cmt ={
                    user_name:"粘豆包",
                    add_time:Date.now(),
                    content:this.msg.trim()
                }
                this.comments.unshift(cmt);
                this.msg=""
                } else {
                // 失败的
                Toast("失败。。。");
                }
            })
        }
    },
    props:["id"]
}
</script>

<style lang="scss" scoped>
.cmt-container{
    h4{
        height: 30px;
        line-height: 30px;
        padding:0 20px;
        border-left: 3px solid #ff6767;
        font-size: 15px;
    }
    textarea{
        font-size: 12px;
        height: 80px;
        margin:0;
    }
    .cmt-list{
        margin: 5px 0;
        .cmt-item{
            font-size: 12px;
            .cmt-title{
                padding:0 20px;
                line-height: 30px;
                border-left:3px solid #ff6767;
                box-shadow: 5px 5px 20px 4px rgba(0, 0, 0, 0.06);
            }
            .cmt-body{
                line-height: 35px;
                text-indent:2em; 
            }
        }
    }
}
</style>