<template>
  <div class="standard-edit">
    <div class="">
      <a-row class="mt10" type="flex" justify="space-around" align="middle">
        <a-col :span="12">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="6">
              <label>标准名字</label>
            </a-col>
            <a-col :span="12">
              <a-input placeholder="default size"/>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="12">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="6">
              <label>标准名字</label>
            </a-col>
            <a-col :span="12">
              <a-input placeholder="default size"/>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
      <a-row class="mt10" type="flex" justify="space-around" align="middle">
        <a-col :span="12">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="6">
              <label>标准名字</label>
            </a-col>
            <a-col :span="12">
              <a-input placeholder="default size"/>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="12">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="6">
              <label>标准名字</label>
            </a-col>
            <a-col :span="12">
              <a-input placeholder="default size"/>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
      <a-row class="mt10" type="flex" justify="space-around" align="middle">
        <a-col :span="12">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="6">
              <label>备注</label>
            </a-col>
            <a-col :span="12">
              <a-input placeholder="default size"/>
            </a-col>
          </a-row>
        </a-col>
        <a-col :span="12">
          <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="6">
              <label>标准名字</label>
            </a-col>
            <a-col :span="12">
              <a-input placeholder="default size"/>
            </a-col>
          </a-row>
        </a-col>
      </a-row>

    </div>
    <div>
      <a-tabs @change="callback" type="card" class="mt10">
        <a-tab-pane tab="Tab 1" key="1">
          <div class="gutter-example">
            <a-row class="mt10" :gutter="16" v-for="(item,index) in filedList" :key="item.name+index">
              <a-col class="gutter-row" :span="2">字段名</a-col>
              <a-col class="gutter-row" :span="2">
                <a-input v-model="item.name" placeholder="name"/>
              </a-col>
              <a-col class="gutter-row" :span="2">
                <a-input v-model="item.type" placeholder="类型"/>
              </a-col>
              <a-col class="gutter-row" :span="2">
                <a-input v-model="item.length" placeholder="长度"/>
              </a-col>
              <a-col class="gutter-row" :span="2">
                <a-input v-model="item.range" placeholder=" 范围"/>
              </a-col>
              <a-col class="gutter-row" :span="2">
                <a-input placeholder=" 敏感"/>
              </a-col>
              <a-col class="gutter-row" :span="2">
                <a-input placeholder=" 共享"/>
              </a-col>
              <a-col class="gutter-row" :span="2">
                <a-input v-model="item.remark" placeholder="备注"/>
              </a-col>
              <a-col class="gutter-row" :span="2">
                <a-button type="primary" @click="delFiled(index)">-</a-button>
              </a-col>
            </a-row>
            <a-row class="mt10">
              <a-col class="gutter-row" :span="2"></a-col>
              <a-col class="gutter-row" :span="2">
                  <a-button type="primary" @click="addFiled">+</a-button>
              </a-col>

            </a-row>
          </div>
        </a-tab-pane>
        <a-tab-pane tab="Tab 2" key="2">Content of Tab Pane 2</a-tab-pane>
        <a-tab-pane tab="Tab 3" key="3">Content of Tab Pane 3</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>

  import {mapGetters, mapState} from 'vuex';

  export default {
    name: 'HelloWorld',
    props: ['msg'],
    data () {
      return {
        age: '',
        filedList:[{
          'name':'1',
          'type':'',
          'length':'',
          'range':'',
          'remark':''
        }]
      };
    },
    beforeMount () {

    },
    computed: mapGetters({
      status: 'getNavStatus'
    }),
    methods: {
      callback (key) {
        console.log(key);
      },
      addFiled(){
        let filed={
          'name':'',
          'type':'',
          'length':'',
          'range':'',
          'remark':''
        }
        this.filedList.push(filed)
      },
      delFiled(i){
        console.log(i);
        console.log(this.filedList);
        this.filedList.splice(i,1)
        console.log(this.filedList)
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .standard-edit {
    text-align: left;
  }
</style>
