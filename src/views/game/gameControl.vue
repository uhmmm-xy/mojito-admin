<template>
  <el-card style="margin: 10px">
    <h1>游戏控制</h1>
    <el-form :model="form">
      <el-row :gutter="10">
        <el-col :span="4" :xs="24">
          <el-form-item label="游戏类型：">
            <el-select v-model="table.queryParams.game_type">
              <el-option label="全部游戏" value="-1" />
              <el-option label="十三水" value="1" />
              <el-option label="四副牌" value="60" />
              <el-option label="杭州麻将" value="196" />
              <el-option label="金华麻将" value="22" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4" :xs="24">
          <el-form-item label="玩家ID：">
            <el-input v-model="table.queryParams.pid" />
          </el-form-item>
        </el-col>
        <el-col :span="4" :xs="24">
          <el-form-item label="玩家状态：">
            <el-select v-model="table.queryParams.status">
              <el-option label="全部玩家" value="-1" />
              <el-option label="关闭" value="0" />
              <el-option label="开启" value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4" :xs="24">
          <el-form-item>
            <el-button type="success" @click="requestData">搜索</el-button>
            <el-button type="primary" v-if="hasCreate" @click="onCreated"
              >新增</el-button
            >
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>

  <el-table
    :data="table.data"
    v-loading="table.loading"
    border
    style="width: 100%"
    v-if="isMobile() !== true"
  >
    <el-table-column prop="pid" label="玩家ID"></el-table-column>
    <el-table-column prop="user_name" label="玩家昵称"> </el-table-column>
    <el-table-column prop="status" label="状态"> </el-table-column>
    <el-table-column prop="value" label="控制值"> </el-table-column>
    <el-table-column prop="created_at" label="创建时间"> </el-table-column>
    <el-table-column prop="updated_at" label="修改时间"> </el-table-column>
    <el-table-column prop="update_admin" label="操作人"> </el-table-column>
    <el-table-column fixed="right" width="200px" label="操作">
      <template #default="scope">
        <el-button
          v-if="hasUpdate"
          :link="true"
          type="primary"
          @click="handleEdit(scope.row)"
        >
          修改
        </el-button>
        <el-popconfirm
          v-if="hasDelete"
          title="删除"
          @confirm="handleDelete(scope.$index, scope.row)"
        >
          <template #reference>
            <el-button type="danger" :link="true">删除</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
  <el-card v-else>
    <el-row>
      <el-col :span="18">
        <label>用户信息</label>
      </el-col>
      <el-col :span="6">
        <label>操作</label>
      </el-col>
    </el-row>
    <el-divider />
    <el-row
      v-for="(item, index) in table.data"
      :key="index"
      :class="getColor(item)"
    >
      <el-col :span="8">|{{ item.user_name }}</el-col>
      <el-col :span="5">|{{ item.pid }}</el-col>
      <el-col :span="5">|{{ item.value }}</el-col>

      <el-col :span="6">|
        <el-button
          v-if="hasUpdate"
          :link="true"
          type="primary"
          @click="handleEdit(item)"
        >
          修改
        </el-button>
        <el-popconfirm
          v-if="hasDelete"
          title="删除"
          @confirm="handleDelete(index, item)"
        >
          <template #reference>
            <el-button type="danger" :link="true">删除</el-button>
          </template>
        </el-popconfirm>
      </el-col>
    </el-row>
  </el-card>
  <el-pagination
    class="pagination-right"
    @current-change="requestData"
    v-model:currentPage="table.pagination.currentPage"
    :page-size="table.pagination.pageSize"
    layout="total, prev, pager, next, jumper"
    :total="table.pagination.total"
  >
  </el-pagination>

  <game-control-form-drawer
    :row="updateRow"
    :action="formAction"
    :back="requestData"
    v-model="drawer"
  ></game-control-form-drawer>
</template>
  
<script setup>
import { ref, computed } from "vue";
import { getGameControl } from "@/api/game";
import gameControlFormDrawer from "./gameControlFormDrawer.vue";
import { usePermissionStore } from "@/store/permission";
import { tableDataFormat, tableDefaultData } from "@/utils/table";
import { isMobile } from "@/utils/helper";

const permissionStore = usePermissionStore();

const drawer = ref(false);
const table = tableDefaultData();
const updateRow = ref({});

const requestData = () => {
  table.loading = true;
  getGameControl(table.getQueryParams()).then((response) => {
    tableDataFormat(response, table);
  });
};

console.log(isMobile());

requestData();

const onSubmit = () => {
  return;
};

const formAction = ref("add");
const onCreated = () => {
  formAction.value = "add";
  drawer.value = true;
  drawer.callback = requestData();
};

const handleEdit = (row) => {
  row.status = row.status + "";
  row.game_type = row.game_type + "";
  updateRow.value = row;
  formAction.value = "edit";
  drawer.value = true;
  drawer.callback = requestData();
};

const hasCreate = computed(() =>
  permissionStore.hasPermission("game.control.add")
);
const hasDelete = computed(() =>
  permissionStore.hasPermission("game.control.del")
);
const hasUpdate = computed(() =>
  permissionStore.hasPermission("game.control.update")
);

const getColor = (item, index = 0) => {
  if ((item.status = 0)) {
    return "backgroundWhite";
  } else {
    return item.value > 0 ? "backgroundGreen" : "backgroundRed";
  }
};

console.log(hasUpdate);
</script>
<style scoped>
.backgroundRed {
  background-color: rgb(248, 62, 62);
  color: white;
}

.backgroundGreen {
  background-color: #3ee74d;
  color: white;
}

.backgroundWhite {
  background-color: white;
  color: black;
}
</style>