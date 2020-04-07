<template>
  <div>
    <a-row>
      <a-col>
        <!--        <router-link to='/nav/integration/addSource'>-->
        <a-button type="primary" @click="showModal">新增数据源</a-button>
        <!--        </router-link>-->
      </a-col>
    </a-row>
    <a-table :columns="columns" :dataSource="data" class="main-data-table">
      <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
      <span slot="customTitle"><a-icon type="smile-o"/> Name</span>
      <span slot="type" slot-scope="type">
        <a-tag v-for="tag in type" color="green" :key="tag">{{tag}}</a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <router-link to="/nav/integration/editSource"><a-button>编辑</a-button></router-link>
        <a-divider type="vertical"/>
        <a-button type="danger" @click="showDeleteConfirm">删除</a-button>
      </span>
    </a-table>
    <a-modal
      title="数据源类型"
      v-model="visible"
      footer=""
    >
      <router-link to='/nav/integration/addSource?type=sql' class="source-type"> <div>数据库</div></router-link>
      <router-link to='/nav/integration/addSource' class="source-type"> <div>文件服务器</div></router-link>
      <router-link to='/nav/integration/addSource' class="source-type"> <div>本地文件</div></router-link>
      <router-link to='/nav/integration/addSource?type=api' class="source-type"> <div>Api接口</div></router-link>
    </a-modal>
  </div>
</template>
<script>
  import ARow from 'ant-design-vue/es/grid/Row';
  import ACol from 'ant-design-vue/es/grid/Col';

  const columns = [{
    title: '数据源标识',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '数据源类型',
    dataIndex: 'type',
    key: 'type',
    scopedSlots: {customRender: 'type'},
  }, {
    title: '数据源地址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '创建者',
    key: 'creator',
    dataIndex: 'creator',
    scopedSlots: {customRender: 'creator'},
  }, {
    title: '创建时间',
    key: 'time',
    dataIndex: 'time'
  }, {
    title: '操作',
    key: 'action',
    scopedSlots: {customRender: 'action'},
  }];

  const data = [{
    key: '1',
    name: 'John Brown',
    type: ['MySql'],
    address: '120.27.28.166',
    creator: 'nice',
    time: '2019-06-06'

  }, {
    key: '2',
    name: 'Jim Green',
    type: ['MySql'],
    address: '120.27.28.166',
    creator: 'loser',
    time: '2019-06-06'
  }
  ];

  export default {
    components: {ACol, ARow},
    data() {
      return {
        data,
        columns,
        visible: false
      };
    },
    methods: {
      showModal() {
        this.visible = true
      },
      handleOk(e) {
        console.log(e);
        this.visible = false
      },
      showDeleteConfirm() {
        this.$confirm({
          title: 'Are you sure delete this task?',
          content: 'Some descriptions',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
    }
  };
</script>
<style>
  .source-type {
    display: inline-block;
    border: 1px dashed #ccc;
    margin:0 10px 10px 0;
    width: 30%;
    line-height: 60px;
    text-align: center;
    color: #999;
  }
  a:hover{
    border-color: blue;
    color: blue;
  }
</style>
