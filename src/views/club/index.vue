<template>
  <el-card style="margin: 10px">
    <h1>俱乐部管理</h1>
    <el-form :model="form">
      <el-row :gutter="10">
        <el-col :span="4" :xs="18">
          <el-form-item label="俱乐部名：">
            <el-input v-model="table.queryParams.name" />
          </el-form-item>
        </el-col>
        <el-col :span="4" :xs="6">
          <el-form-item>
            <el-button type="success" @click="requestData">搜索</el-button>
            <el-button type="success" @click="requestData">新增</el-button>
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
    <el-table-column prop="id" label="ID"></el-table-column>
    <el-table-column prop="clubsign" label="俱乐部ID"></el-table-column>
    <el-table-column prop="name" label="俱乐部名称"></el-table-column>
    <el-table-column prop="memberCount" label="玩家人数/上限人数">
      <template #default="scope">
        {{ scope.playeruse }}/{{ scope.maxplayeruse }}
      </template>
    </el-table-column>
    <el-table-column prop="createtime" label="创建时间"></el-table-column>
    <el-table-column prop="sumclubcard" label="消费房卡"></el-table-column>
    <el-table-column prop="ownerID" label="管理员ID"></el-table-column>
    <el-table-column prop="owner" label="管理员"></el-table-column>
    <el-table-column prop="id" label="操作">
      <template>
        <el-button type="primary" @click="gameStat">对局统计</el-button>
        <el-button type="primary" @click="edit">编辑</el-button>
        <el-button type="danger" @click="disband">解散</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-card v-else>
    <el-row>
      <el-col :span="5">俱乐部ID</el-col>
      <el-col :span="5">俱乐部名</el-col>
      <el-col :span="4">消费房卡</el-col>
      <el-col :span="5">管理员</el-col>
      <el-col :span="5">操作</el-col>
    </el-row>
    <el-divider style="margin: 10px 0px" />
    <el-row class="mobile-row" v-for="(item, index) in table.data" :key="index">
      <el-col :span="5"> {{ item.clubsign }}</el-col>
      <el-col :span="5"> {{ item.name }}</el-col>
      <el-col :span="4">{{ item.sumclubcard }}</el-col>
      <el-col :span="5">{{ item.owner }}</el-col>
      <el-col :span="5">
        <el-button type="primary" @click="gameStat">对局统计</el-button>
        <el-button type="primary" @click="edit">编辑</el-button>
        <el-button type="danger" @click="disband">解散</el-button>
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
</template>

<script setup>
import { getClubList } from "@/api/club";
import { tableDataFormat, tableDefaultData } from "@/utils/table";
import { isMobile } from "@/utils/helper";
import { ref } from "vue";

const table = tableDefaultData();

const requestData = () => {
  table.loading = true;
  getClubList(table.getQueryParams()).then((response) => {
    tableDataFormat(response, table);
  });
};

requestData();
</script>
<style scoped>
.mobile-row .el-col {
  border-bottom: 1px #000 solid;
  padding-left: 3px;
  font-size: 1.05rem;
}
</style>