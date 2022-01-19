<template>
  <n-notification-provider>
    <n-message-provider>
      <n-config-provider :date-locale="dateZhCN" :locale="zhCN">
        <router-view />
      </n-config-provider>
    </n-message-provider>
  </n-notification-provider>
</template>

<script lang="ts" setup>
import { dateZhCN, zhCN } from 'naive-ui'
</script>

<style></style>
