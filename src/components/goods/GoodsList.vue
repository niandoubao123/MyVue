<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="https://qnm.hunliji.com/o_1dluf15lp8emfq118lg9gf1ciq9.png" width="100px" alt="">
            <h1 class="title">浪漫婚礼</h1>
            <div class="info">
                <p class="price">
                    <span class="now">1199</span>
                    <span class="old">1799</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩0件</span>
                </p>
            </div>
        </div>
         <div class="goods-item">
            <img src="https://qnm.hunliji.com/o_1dluf15lp8emfq118lg9gf1ciq9.png" width="100px" alt="">
            <h1 class="title">浪漫婚礼</h1>
            <div class="info">
                <p class="price">
                    <span class="now">1199</span>
                    <span class="old">1799</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩0件</span>
                </p>
            </div>
        </div>
         <div class="goods-item">
            <img src="https://qnm.hunliji.com/o_1dluf15lp8emfq118lg9gf1ciq9.png" alt="">
            <h1 class="title">浪漫婚礼</h1>
            <div class="info">
                <p class="price">
                    <span class="now">1199</span>
                    <span class="old">1799</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩0件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding:7px;
    justify-content: space-between;
    .goods-item{
        border:1px solid #ccc;
        box-shadow: 0 0 5px #ccc;
        width: 49%;
        margin:3px 0;
        padding:2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 243px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color: #eee;
            p{
                margin:0;
                padding:3px;
            }
            .price{
                .now{
                    color:#ff6767;
                    font-weight: bolder;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }
}
</style>