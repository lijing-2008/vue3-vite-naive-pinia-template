<template>
  <div class="exception-container">
    <div class="img-wrapper">
      <img :src="statusImage" />
    </div>
    <div class="title">
      <div>{{ statusTip }}</div>
      <div class="margin-top-lg">
        <n-button size="small" type="primary" @click="backHome">
          返回首页
        </n-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  status: {
    type: [Number, String],
    default: () => '404'
  }
})
const statusImage = computed(() => {
  if (props.status.toString() === '404') {
    return '/src/assets/img/img_404.png'
  } else if (props.status.toString() === '403') {
    return '/src/assets/img/img_403.png'
  } else {
    return '/src/assets/img/img_500.png'
  }
})
const statusTip = computed(() => {
  if (props.status.toString() === '404') {
    return '您访问的页面不存在'
  } else if (props.status.toString() === '403') {
    return '您没有权限访问该页面'
  } else {
    return '您访问的页面出错啦'
  }
})
const router = useRouter()
const backHome = () => {
  router.replace({ path: '/' })
}
</script>

<style lang="less" scoped>
.exception-container {
  text-align: center;
  height: 100%;

  .img-wrapper {
    width: 80%;
    margin: 0 auto;

    & > img {
      width: 100%;
    }
  }

  .title {
    margin-top: -50px;
  }
}
</style>
