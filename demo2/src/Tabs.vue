<template>
  <div class="tabs">
      <ul>
          <router-link :to="{name:'Home'}" tag="li" exact>
            <div>
              <i class="icon iconfont icon-warning"></i>
            </div>
            <div>精选</div>
          </router-link>
          <router-link :to="{name:'Brand'}" tag="li">
            <div>
              <i class="icon iconfont icon-viewlist"></i>
            </div>
            <div>品牌</div>
          </router-link>
          <router-link :to="{name:'Member'}" tag="li">
            <div>
              <i class="icon iconfont icon-viewgallery"></i>
            </div>
            <div>会员</div>
          </router-link>
          <router-link :to="{name:'Cart'}" tag="li">
            <div>
              <i class="icon iconfont icon-training"></i>
            </div>
            <div>购物车</div>
          </router-link>
          <router-link :to="{name:'Me',params:{user:'xu'}}" tag="li">
            <div>
              <i class="icon iconfont icon-category"></i>
            </div>
            <div>我</div>
          </router-link>
      </ul>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" type="text/less">
.tabs {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 8px #000;
  & > ul,
  & > ul > li {
    margin: 0;
    padding: 0;
  }
  ul {
    display: table;
    width: 100%;
    & > li {
      text-align: center;
      font-size: 16px;
      display: table-cell;
      padding: 8px 12px;
      cursor: pointer;
      &.router-link-active {
        color: #17c8ce;
      }
      & > div {
        font-size: 14px;
        & > i {
          font-size: 30px;
        }
      }
    }
  }
}
</style>
