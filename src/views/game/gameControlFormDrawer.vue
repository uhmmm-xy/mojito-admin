<template>
  <custom-scroll-drawer
    :title="action === 'add' ? '新增' : '编辑'"
    v-model="drawer"
    size="100%"
  >
    <el-form :model="form" :rules="rules" ref="formRef" label-width="100px">
      <el-form-item label="玩家ID" prop="pid">
        <el-input
          v-model="form.pid"
          @change="getMember"
          :readonly="action === 'edit'"
          placeholder="玩家ID"
        ></el-input>
      </el-form-item>
      <el-form-item label="玩家昵称" prop="user_name">
        <el-input
          v-model="form.user_name"
          readonly="true"
          placeholder="玩家昵称"
        ></el-input>
      </el-form-item>
      <el-form-item label="游戏类型" prop="game_type">
        <el-select
          v-model="form.game_type"
          placeholder="选择游戏"
          :disabled="action === 'edit'"
        >
          <el-option label="十三水" value="1" />
          <el-option label="四副牌" value="60" />
          <el-option label="杭州麻将" value="196" />
          <el-option label="金华麻将" value="22" />
        </el-select>
      </el-form-item>
      <el-form-item label="控制值" prop="value">
        <el-input-number v-model="form.value" :step="1" max="10" min="-10" />
      </el-form-item>
      <el-form-item label="开关" prop="status">
        <el-switch
          v-model="form.status"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          active-value="1"
          inactive-value="0"
        />
      </el-form-item>
      <el-form-item
        v-if="form.game_type == 22 || form.game_type == 196"
        label="顺子"
        prop="shunZi"
      >
        <el-input-number v-model="form.ext.shunZi" :step="1" max="4" min="0" />
      </el-form-item>
      <el-form-item
        v-if="form.game_type == 22 || (form.game_type == 196) == true"
        label="对子"
        prop="duiZi"
      >
        <el-input-number v-model="form.ext.duiZi" :step="1" max="6" min="0" />
      </el-form-item>
      <el-form-item
        v-if="form.game_type == 22 || (form.game_type == 196) == true"
        label="刻子"
        prop="ke"
      >
        <el-input-number v-model="form.ext.ke" :step="1" max="4" min="0" />
      </el-form-item>
      <el-form-item
        v-if="form.game_type == 22 || (form.game_type == 196) == true"
        label="癞子"
        prop="jin"
      >
        <el-input-number v-model="form.ext.jin" :step="1" max="4" min="0" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="drawer = false">{{ $t("cancel") }}</el-button>
      <el-button
        type="primary"
        @click="handleAddControl"
        v-if="action === 'add'"
        >{{ $t("confirm") }}</el-button
      >
      <el-button
        type="primary"
        @click="handleEditControl"
        v-if="action === 'edit'"
        >{{ $t("confirm") }}</el-button
      >
    </template>
  </custom-scroll-drawer>
</template>
  <script setup>
import CustomScrollDrawer from "@/components/Drawer/CustomScrollDrawer.vue";
import { defineComponent, ref, watch } from "vue";
import { addControl, editControl } from "@/api/game";
import { getMemberById } from "@/api/member";
import notice from "@/utils/notice";
import { ElNotification } from "element-plus";

const props = defineProps({
  modelValue: false,
  action: {
    type: String,
    default: "add",
  },
  back: Function,
  row: {
    type: Object,
  },
});

const emit = defineEmits(["update:modelValue"]);

const drawer = ref(false);

let defaultForm = {
  pid: null,
  user_name: null,
  game_type: null,
  value: 0,
  status: 0,
  ext: {
    jin: 0,
    shunZi: 0,
    duiZi: 0,
    ke: 0,
  },
};
const form = ref(defaultForm);

const formRef = ref(null);

watch(
  () => props.modelValue,
  (v) => {
    drawer.value = v;
  }
);

watch(drawer, (d) => {
  emit("update:modelValue", d);
});

watch(
  () => props.row,
  (v) => {
    form.value.pid = v.pid;
    form.value.user_name = v.user_name;
    form.value.game_type = v.game_type;
    form.value.value = v.value;
    form.value.ext = v.ext;
    form.value.status = v.status;
  }
);

let rules = {
  pid: [{ required: true }],
  game_type: [{ required: true }],
  value: [{ required: true }],
};

const getMember = (id) => {
  getMemberById(id).then((data) => {
    console.log(data);
    if (data.data) {
      form.value.user_name = data.data.name;
    } else {
      ElNotification({
        title: "Error",
        message: "用户不存在",
        type: "error",
      });
    }
  });
};

const handleAddControl = () => {
  formRef.value.validate((valid) => {
    if (!valid) {
      return false;
    }

    addControl(form.value).then(() => {
      formRef.value.resetFields();
      notice.addSuccess();
      drawer.value = false;
      props.back && props.back();
    });
  });
};

const handleEditControl = () => {
  formRef.value.validate((valid) => {
    if (!valid) {
      return false;
    }

    editControl(form.value).then(() => {

      formRef.value.resetFields();
      notice.editSuccess();
      drawer.value = false;
      props.back && props.back();
    });
  });
};
</script>
<style lang="scss" scoped>
</style>