<template>
  <el-container style="height:100%">
    <nav-bar :is-collapse="isCollapse" @closeMenu="changeMenuStatus"></nav-bar>
    <el-container direction="vertical">
      <mojito-header v-show="!isMobile() || (isCollapse && isMobile())" :is-collapse="isCollapse" @menu="changeMenuStatus"></mojito-header>
      <el-main>
        <router-view v-slot="{ Component }">
          <el-scrollbar height="100%">
            <keep-alive :include="cacheTags">
              <component :is="Component" />
            </keep-alive>
          </el-scrollbar>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import MojitoHeader from "@/components/Layout/Header.vue"
import NavBar from "@/components/Layout/NavBar.vue"
import { usePermissionStore } from '@/store/permission'
import { useTagStore } from '@/store/tag'
import { isMobile } from "@/utils/helper"
import { ref, computed } from 'vue'

const permissionStore = usePermissionStore()
const tagStore = useTagStore()

permissionStore.loadPermissions()

let isCollapse = ref(true)

const cacheTags = computed(() => {
  return tagStore.cacheTags
})

const changeMenuStatus = (status) => {
    isCollapse.value = status
}
</script>
<style lang="scss" scoped>
  .el-main {
    padding:0;
    //background-color: #f0f2f5;
  }
</style>