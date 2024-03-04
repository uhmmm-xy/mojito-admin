<template>
  <el-card style="margin: 10px">
    <h1>战绩查询</h1>
    <el-form :model="form">
      <el-row :gutter="10">
        <el-col :span="4" :xs="24">
          <el-form-item label="玩家输赢：">
            <el-select v-model="table.queryParams.winner">
              <el-option label="全部" value="-1" />
              <el-option label="失败" value="0" />
              <el-option label="胜利" value="1" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="3" :xs="24">
          <el-form-item label="玩家ID：">
            <el-input v-model="table.queryParams.pid" />
          </el-form-item>
        </el-col>
        <el-col :span="3" :xs="24">
          <el-form-item label="房间号：">
            <el-input v-model="table.queryParams.roomKey" />
          </el-form-item>
        </el-col>
        <el-col :span="3" :xs="24">
          <el-form-item label="俱乐部：">
            <el-select v-model="table.queryParams.clubID">
              <el-option label="全部" value="-1" />
              <template v-for="item in ClubList" :key="item.id">
                <el-option :label="item.name" :value="item.id" />
              </template>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="3" :xs="24">
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
    <el-row>
      <el-col :span="8" :xs="24">
        房卡消费总计：{{ sumCard }}
      </el-col>
    </el-row>
  </el-card>

  <el-table
    :data="table.data"
    v-loading="table.loading"
    border
    style="width: 100%"
    v-if="isMobile() !== true"
  >
    <el-table-column prop="id" label="ID"></el-table-column>
    <el-table-column prop="pid" label="玩家ID"></el-table-column>
    <el-table-column prop="roomKey" label="房间号"></el-table-column>
    <el-table-column prop="winner" label="状态">
      <template #default="scope">
        <el-tag
          :span="1"
          :type="
            scope.row.winner == 0
              ? 'danger'
              :'success'
          "
          round
        >
          {{
            scope.row.winner == 0
              ? "winner": "loser"
          }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="point" label="分数"></el-table-column>
    <el-table-column prop="value" label="消费房卡"></el-table-column>
    <el-table-column prop="clubID" label="俱乐部"> 
      <template #default="scope">
        {{ getClubName(scope.row.clubID) }}
      </template>
    </el-table-column>
    <el-table-column prop="gameType" label="游戏"> 
      <template #default="scope">
        {{ getGameName(scope.row.gameType) }}
      </template>
    </el-table-column>
    <el-table-column prop="sumCount" label="总局数"> </el-table-column>
    <el-table-column prop="setCount" label="玩局数"> </el-table-column>
    <el-table-column prop="createRoomTime" label="创建时间"> </el-table-column>
    <el-table-column prop="endTime" label="结束时间"> </el-table-column>
  </el-table>
  <el-card v-else>
    <el-row>
      <el-col :span="5">玩家ID</el-col>
      <el-col :span="5">房间号</el-col>
      <el-col :span="4">分数</el-col>
      <el-col :span="3">俱乐部<br/>游戏</el-col>
      <el-col :span="2">房卡</el-col>
      <el-col :span="5">时间</el-col>
    </el-row>
    <el-divider style="margin: 10px 0px" />
    <el-row class="mobile-row" v-for="(item, index) in table.data" :key="index">
      <el-col :span="5"> {{ item.pid }}</el-col>
      <el-col :span="5"> {{ item.roomKey }}</el-col>
      <el-col :span="4">
        <el-tag
          :span="1"
          :type="
            item.winner == 0
              ? 'danger'
              :'success'
          "
          round
        >
        {{ item.point }}
        </el-tag>
      </el-col>
      <el-col :span="3">{{ getClubName(item.clubID) }} <br/> {{ getGameName(item.gameType) }}</el-col>
      <el-col :span="2">{{ item.value }}</el-col>
      <el-col :span="5">{{ item.createRoomTime }}</el-col>
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
import { getGameLog , getGameSumCard } from '@/api/member'
import {getClubList} from '@/api/club'
import { tableDataFormat, tableDefaultData } from "@/utils/table";
import { isMobile } from "@/utils/helper";
import { ref } from "vue";

const ClubList = ref([]);
const sumCard = ref(0);

getClubList().then((response)=>{
  ClubList.value = response.data;
});

const table = tableDefaultData();

const requestData = () => {
  table.loading = true;
  getGameLog(table.getQueryParams()).then((response) => {
    tableDataFormat(response, table);
  });

  getGameSumCard(table.getQueryParams()).then((response)=>{
    sumCard.value = response.data;
  });
};

const getClubName = (id)=>{
  for(let item in ClubList.value){
    console.log(ClubList.value[item].id);
    console.log(id);
    if(ClubList.value[item].id == id){
      console.log("check true");
      return ClubList.value[item].name;
    }
    
  }
  return "暂无";
}

let Games = {
  1: "十三水",
  22: "金华麻将",
  60: "四副牌",
  196: "杭州麻将",
}

const getGameName = (type)=>{
  return Games[type];
}


requestData();
</script>
<style scoped>
.mobile-row .el-col {
  /* border-left: 1px #000 solid; */
  border-bottom: 1px #000 solid;
  padding-left: 3px;
  font-size: 1.05rem;
}
/* .mobile-row .el-col:last-child {
  border-right: 1px #000 solid;
} */
</style>