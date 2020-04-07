<template>
  <div class="hello">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item v-bind="formItemLayout" label="E-mail">
        <a-input v-decorator="formRules.emails" />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="Mobile">
        <a-input v-decorator="formRules.mobile" />
      </a-form-item>
      <a-form-item
      :wrapper-col="{ span: 12, offset: 6 }">
      <a-button
        type="primary"
        html-type="submit">
        Submit
      </a-button>
    </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { Input,Form,Button,Row,Col,Layout } from 'ant-design-vue';
import formConstant from "./../util/validator-constant"
import {messages} from "./../util/validate-message"
export default {
  name: "FormDemo",
  data(){
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 12 },
          sm: { span: 8 }
        }
      },
      formRules: {
        emails: [
          "email",
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
            validateTrigger:"blur"
          }
        ],
        mobile:[
          "mobile",
          {
            rules:[
              {
                required:true,
                message:"请填写mobile"
              },{
                validator:formConstant.isMobile
              }
            ],
            validateTrigger:"submit"
          }
        ]
      }
    }
  },
  components:{
    "a-input":Input,
    "a-form-item":Form.Item,
    "a-form":Form,
    "a-button":Button
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, {validateMessages:messages})
  },
  mounted() {
    //let self = this
    let reqConfig = {self:this,url:"/user",serve:"service2",infoType:"info",infoContent:"hhhhh"}
    // this.$request(reqConfig).then(r =>{
    // })
  },
  methods:{
    handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
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
