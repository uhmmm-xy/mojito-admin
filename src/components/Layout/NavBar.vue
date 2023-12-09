<template>
  <el-aside
    :width="
      isCollapse
        ? !isMobile()
          ? '70px'
          : '0px'
        : !isMobile()
        ? '350px'
        : '100%'
    "
  >
    <div
      style="
        display: flex;
        flex-direction: column;
        height: 100%;
        background: #263238;
        border-right: 1px solid #e6e6e6;
      "
    >
      <el-row style="height: 50px; width: 100%">
        <div v-show="!isCollapse && isMobile()" class="openMenu">
          <el-icon @click="menuOpenOrClose" style="width: 100%; height: 100%">
            <expand v-if="isCollapse" />
            <fold v-if="!isCollapse" />
          </el-icon>
        </div>
      </el-row>
      <div style="flex: auto; overflow-y: auto">
        <el-scrollbar height="100%">
          <el-menu
            class="el-menu-vertical"
            :collapse="isCollapse"
            :router="true"
            background-color="#263238"
            text-color="#afb5bd"
            :collapse-transition="false"
            active-text-color="#ffffff"
          >
            <nav-item
              v-for="item in menuItems"
              :item="item"
              :key="item.id"
              @closeMenu="menuOpenOrClose(item,item.id)"
            ></nav-item>
          </el-menu>
        </el-scrollbar>
      </div>
    </div>
  </el-aside>
</template>

<script setup>
import NavItem from "./NavItem.vue";
import { myMenu } from "@/api/menu";
import { ref } from "vue";
import { isMobile } from "@/utils/helper";

const emit = defineEmits(["closeMenu"]);

const props = defineProps({
  isCollapse: ref(true),
});

let menuItems = ref([]);

myMenu().then((response) => {
  menuItems.value = response.data.data;
});

const menuOpenOrClose = () => emit("closeMenu", !props.isCollapse);
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu-vertical {
  height: 100%;
  border-right: 0;
}
.open-menu {
  cursor: pointer;
}
.openMenu {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
}
.logo {
  display: flex;
  line-height: 60px;
  color: #42b983;
  .normal {
    padding-left: 20px;
  }
  .mini {
    width: 100%;
    text-align: center;
  }
}
</style>
