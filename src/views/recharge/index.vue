<template>
  <el-card style="margin: 10px">
    <h1>充值查询</h1>
    <el-form :model="form">
      <el-row :gutter="10">
        <el-col :span="4" :xs="24">
          <el-form-item label="充值状态">
            <el-select v-model="table.queryParams.status">
              <el-option label="全部游戏" value="-1" />
              <el-option label="充值失败" value="0" />
              <el-option label="充值成功" value="2" />
              <el-option label="充值中" value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4" :xs="24">
          <el-form-item label="玩家ID：">
            <el-input v-model="table.queryParams.pid" />
          </el-form-item>
        </el-col>
        <el-col :span="4" :xs="24">
          <el-form-item label="时间：">
            <el-date-picker
              v-model="table.queryParams.datetime"
              type="datetimerange"
              lang="zhCn"
              start-placeholder="Start date"
              end-placeholder="End date"
              value-format="YYYY-MM-DD HH:mm:ss"
              format="YYYY-MM-DD HH:mm:ss"
              date-format="YYYY-MM-DD"
              time-format="HH:mm:ss"
            />
          </el-form-item>
        </el-col>
        <el-col :span="4" :xs="24">
          <el-form-item>
            <el-button type="success" @click="requestData">搜索</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-row :gutter="10">
      <el-col :span="4" :xs="24"
        >总计金额：{{ (sumMoney / 100).toFixed(2) }}</el-col
      >
      <el-col :span="4" :xs="24">总计房卡：{{ sumCard }}</el-col>
    </el-row>
  </el-card>

  <el-table
    :data="table.data"
    v-loading="table.loading"
    border
    style="width: 100%"
    v-if="isMobile() !== true"
  >
    <el-table-column prop="user_id" label="玩家ID"></el-table-column>
    <el-table-column prop="status" label="状态">
      <template #default="scope">
        <el-tag
          :span="1"
          :type="
            scope.row.status == 0
              ? 'danger'
              : scope.row.status == 1
              ? 'info'
              : 'success'
          "
          round
        >
          {{
            scope.row.status == 0
              ? "失败"
              : scope.row.status == 1
              ? "充值中"
              : "充值成功"
          }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="add" label="房卡数"></el-table-column>
    <el-table-column prop="amount" label="金额">
      <template #default="scope">
        {{ (100 / scope.row.amount).toFixed(2) }}
      </template>
    </el-table-column>
    <el-table-column prop="created_at" label="创建时间"> </el-table-column>
    <el-table-column prop="updated_at" label="通知时间"> </el-table-column>
  </el-table>
  <el-card v-else>
    <el-row>
      <el-col :span="5">用户ID</el-col>
      <el-col :span="4">金额</el-col>
      <el-col :span="3">房卡</el-col>
      <el-col :span="4">状态</el-col>
      <el-col :span="8">到账时间</el-col>
    </el-row>
    <el-divider style="margin: 10px 0px" />
    <el-row class="mobile-row" v-for="(item, index) in table.data" :key="index">
      <el-col :span="5"> {{ item.user_id }}</el-col>
      <el-col :span="4">{{ (item.amount / 100).toFixed(2) }}</el-col>
      <el-col :span="3">{{ item.add }}</el-col>
      <el-col :span="4">{{
        item.status == 0 ? "失败" : item.status == 1 ? "充值中" : "成功"
      }}</el-col>
      <el-col :span="8">{{ item.updated_at }}</el-col>
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
import { getRecharge, getSumMoney, getSumCard } from "@/api/recharge";
import { tableDataFormat, tableDefaultData } from "@/utils/table";
import { isMobile } from "@/utils/helper";
import { ref } from "vue";

const sumCard = ref(0);
const sumMoney = ref(0);

const table = tableDefaultData();

const requestData = () => {
  table.loading = true;
  getRecharge(table.getQueryParams()).then((response) => {
    tableDataFormat(response, table);
  });

  getSumCard(table.getQueryParams()).then((response) => {
    sumCard.value = response.data;
  });

  getSumMoney(table.getQueryParams()).then((response) => {
    sumMoney.value = response.data;
    console.log(sumMoney);
  });
};

requestData();
</script>
<style scoped>
.mobile-row .el-col {
  border-left: 1px #000 solid;
  border-bottom: 1px #000 solid;
  padding-left: 3px;
  font-size: 1.05rem;
}
.mobile-row .el-col:last-child {
  border-right: 1px #000 solid;
}
</style>