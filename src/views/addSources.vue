<template>
  <div class="hello">
    <a-tabs @change="callback" @tabClick="tabClick" type="card">
      <a-tab-pane v-for="(item,index) in typeKind" :tab="item" :key="index+1">
        <a-form v-if="typeChoose=='数据库'" :form="form" @submit="handleSubmit" layout="horizontal">
          <a-form-item v-bind="formItemLayout" label="类型" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-select
              size="default"
              @change="handleChange"
              v-decorator="['typeSql',formRules.mobile]"
            >
              <a-select-option v-for="i in typeList" :key="i">
                {{i}}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="名称" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['nameSourceSql',formRules.emails]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="描述" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="数据库地址" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['urlSql',formRules.emails]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="端口号" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['portSql',formRules.emails]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="数据库名" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['nameSql',formRules.emails]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="用户名" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['nameSqlUser',formRules.emails]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="密码" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['pwdSql',formRules.emails]"/>
          </a-form-item>
          <a-form-item
            :wrapper-col="{ span: 8, offset: 4 }">
            <a-button
              type="primary"
              html-type="button">
              测试连接
            </a-button>
            <a-button
              type="default"
              html-type="button">
              取消
            </a-button>
            <a-button
              type="primary"
              html-type="submit">
              添加
            </a-button>
          </a-form-item>
        </a-form>
        <a-form v-if="typeChoose=='API'" :form="form" @submit="handleSubmit" layout="horizontal">
          <a-form-item v-bind="formItemLayout" label="名称" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['nameAPI',formRules.mobile]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="描述" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="API域名" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['urlAPI',formRules.mobile]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="API KEY" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['keyAPI',formRules.mobile]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="参数" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input/>
          </a-form-item>
          <a-form-item
            :wrapper-col="{ span: 8, offset: 4 }">
            <a-button
              type="primary"
              html-type="button">
              测试连接
            </a-button>
            <a-button
              type="default"
              html-type="button">
              取消
            </a-button>
            <a-button
              type="primary"
              html-type="submit">
              添加
            </a-button>
          </a-form-item>
        </a-form>
        <a-form v-if="typeChoose=='FTP'" :form="form" @submit="handleSubmit" layout="horizontal">
          <a-form-item v-bind="formItemLayout" label="类型" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input defaultValue="FTP" disabled/>

          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="名称" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['nameFtp',formRules.mobile]" initialValue="weq"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="描述" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="FTP地址" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['urlFtp',formRules.mobile]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="端口号" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['portFtp',formRules.mobile]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="用户名" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['nameFtpUser',formRules.mobile]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="密码" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['pwdFtp',formRules.mobile]"/>
          </a-form-item>
          <a-form-item
            :wrapper-col="{ span: 8, offset: 4 }">
            <a-button
              type="primary"
              html-type="button">
              测试连接
            </a-button>
            <a-button
              type="default"
              html-type="button">
              取消
            </a-button>
            <a-button
              type="primary"
              html-type="submit">
              添加
            </a-button>
          </a-form-item>
        </a-form>
        <a-form v-if="typeChoose=='HBase'" :form="form" @submit="handleSubmit" layout="horizontal">
          <a-form-item v-bind="formItemLayout" label="类型" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input defaultValue="Hbase" disabled/>

          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="名称" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['nameHbase',formRules.mobile]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="描述" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="Hbase地址" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['urlHbase',formRules.mobile]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="端口号" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['portHbase',formRules.mobile]"/>
          </a-form-item>
          <a-form-item
            :wrapper-col="{ span: 8, offset: 4 }">
            <a-button
              type="primary"
              html-type="button">
              测试连接
            </a-button>
            <a-button
              type="default"
              html-type="button">
              取消
            </a-button>
            <a-button
              type="primary"
              html-type="submit">
              添加
            </a-button>
          </a-form-item>
        </a-form>
        <a-form v-if="typeChoose=='HDFS'" :form="form" @submit="handleSubmit" layout="horizontal">
          <a-form-item v-bind="formItemLayout" label="类型" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input defaultValue="HDFS" disabled/>

          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="名称" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['nameHDFS',formRules.mobile]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="描述" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="HDFS地址" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['urlHDFS',formRules.mobile]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="端口号" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['portHDFS',formRules.mobile]"/>
          </a-form-item>

          <a-form-item
            :wrapper-col="{ span: 8, offset: 4 }">
            <a-button
              type="primary"
              html-type="button">
              测试连接
            </a-button>
            <a-button
              type="default"
              html-type="button">
              取消
            </a-button>
            <a-button
              type="primary"
              html-type="submit">
              添加
            </a-button>
          </a-form-item>
        </a-form>
        <a-form v-if="typeChoose=='Kafka'" :form="form" @submit="handleSubmit" layout="horizontal">
          <a-form-item v-bind="formItemLayout" label="类型" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input defaultValue="Kafka" disabled/>

          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="名称" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['nameKafkaS',formRules.mobile]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="描述" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="Kafka地址" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['urlKafka',formRules.mobile]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="端口号" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['portKafka',formRules.mobile]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="topic列表" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['topicListKafka',formRules.mobile]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="Kafka消费组名称" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['groupNameKafka',formRules.mobile]"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="消息体格式" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input v-decorator="['formatKafka',formRules.mobile]" placeHolder="JSONEachRow"/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="消息体之间的分隔符" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input/>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="schema" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="单个表的消费者数量" :label-col="formItemLayout.labelCol"
                       :wrapper-col="formItemLayout.wrapperCol">
            <a-input defaultValue="1"/>
          </a-form-item>
          <a-form-item
            :wrapper-col="{ span: 8, offset: 4 }">
            <a-button
              type="primary"
              html-type="button">
              测试连接
            </a-button>
            <a-button
              type="default"
              html-type="button">
              取消
            </a-button>
            <a-button
              type="primary"
              html-type="submit">
              添加
            </a-button>
          </a-form-item>
        </a-form>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
  import {Input, Form, Button, Row, Col, Layout} from 'ant-design-vue';
  import formConstant from "./../util/validator-constant"
  import {messages} from "./../util/validate-message"

  export default {
    name: "FormDemo",
    data() {
      return {
        typeChoose: '数据库',
        typeKind: ['数据库', 'API', 'FTP', 'HBase', 'HDFS', 'Kafka', 'Hive', 'Kylin'],
        typeList: ['MySQL', 'PostgreSQL', 'Oracle', 'SQL Server','DB2','达梦','GreenPlum','MPP','TeraData','Generic JDBC','Redis', 'mongodb', 'FastDFS', 'GreenPlum', 'Hbase'],
        typeName: 'sql',
        formRules: {
          emails:
            {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true
                }
              ],
              validateTrigger: "blur"
            }
          ,
          mobile:
            {
              rules: [
                {
                  required: true,
                  message: "请填写mobile"
                }, {
                  validator: formConstant.isMobile
                }
              ],
              validateTrigger: "submit"
            }

        }
      }
    },
    components: {
      "a-input": Input,
      "a-form-item": Form.Item,
      "a-form": Form,
      "a-button": Button
    },
    beforeCreate() {
      this.form = this.$form.createForm(this, {validateMessages: messages})
    },
    beforeMount() {
      this.typeName = this.$route.query.type ? this.$route.query.type : ''
    },
    mounted() {
      //let self = this
      let reqConfig = {self: this, url: "/user", serve: "service2", infoType: "info", infoContent: "hhhhh"}
      // this.$request(reqConfig).then(r =>{
      // })
    },
    computed: {
      formItemLayout() {
        return {
          labelCol: {span: 4},
          wrapperCol: {span: 8},
        };
      }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      },
      handleChange() {

      },
      callback(key) {
        console.log(key)
        const current=this.typeKind[key-1]
        console.log(current);
        this.typeChoose=current
      },
      tabClick(e) {
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
