<template>
  <el-header>
    <el-row>
      <el-col :span="2" class="open-menu">
        <el-icon @click="menuOpenOrClose">
          <expand v-if="isCollapse" />
          <fold v-if="!isCollapse" />
        </el-icon>
      </el-col>
      <el-col :span="14">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="bc in breadcrumb" :to="{ path: bc.path }" :key="bc.path"> {{ getTagTitleName(bc.meta.title) }}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="8" style="text-align:right;">
        <el-dropdown style="line-height:40px;">
          <span class="el-dropdown-link">
            <el-icon>
              <avatar />
            </el-icon>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="openChangePassword">{{ $t('changePassword') }}</el-dropdown-item>
              <el-dropdown-item @click="logout">{{ $t('logout') }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
    </el-row>
  </el-header>
</template>

<script setup>
import { computed } from 'vue'
import config from '@/config'
import { useRouter } from 'vue-router'
import { useAuthStore } from "@/store/auth"
import { getTagTitleName } from '@/utils/helper'
import { Fold, Expand, Avatar, ArrowDown } from "@element-plus/icons-vue"
import { useAppStore } from "@/store/app"
import { useBreadcrumbStore } from "@/store/breadcrumb"

const props = defineProps({
  isCollapse: Boolean
})

const emit = defineEmits(['menu'])
const router = useRouter()
const authStore = useAuthStore()
const breadcrumbStore = useBreadcrumbStore()

const openChangePassword = () => {
  router.push({name: 'changePasswordPage'})
}

const logout = () => {
  authStore.logoutHandle().then(router.push({
    name: config.loginRouteName
  }))
}

const breadcrumb = computed(() => breadcrumbStore.breadcrumb)
const menuOpenOrClose = () => emit('menu', !props.isCollapse)
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-header {
    border-bottom: 1px solid #e6e6e6;
    height: 40px;
    line-height:40px;
  }
  .el-button {
    border:none;
  }

  .open-menu {
    cursor:pointer;
  }
  .el-breadcrumb {
    line-height:40px;
  }
  a {
    text-decoration:none;
  }
</style>