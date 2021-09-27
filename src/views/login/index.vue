<template>
  <div>
    <!-- 导航栏区域 -->
    <van-nav-bar
      class="page-nav-bar"
      title="登录"
    />
    <!-- 表单区域 -->
    <van-form @submit="onSubmit">
      <!-- 用户名输入框 -->
      <van-field
        name="用户名"
        placeholder="请输入手机号"
        v-model="user.mobile"
        required
        clearable
      >
        <i slot="left-icon" class="font_family icon-shouji"></i>
      </van-field>
      <!-- 验证码输入框 -->
      <van-field
        type="number"
        name="验证码"
        placeholder="请输入验证码"
        v-model="user.code"
        required
        clearable
      >
        <i slot="left-icon" class="font_family icon-yanzhengma"></i>
        <template #button>
          <van-button class="send-sms-btn" size="small" round type="default">发送验证码</van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button block type="info" native-type="submit" @click="onLogin">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import login from '../../api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      // 登录用户的信息
      user: {
        // 手机号码
        mobile: '',
        // 验证码
        code: ''
      }
    }
  },
  methods: {
    onSubmit (values) {
      console.log('submit', values)
    },
    // 登录用户
    async onLogin () {
      try {
        const res = await login(this.user)
        console.log('登录成功' + res)
      } catch (error) {
        if (error.response.status === 400) {
          console.log('登录失败' + error)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.font_family {
  font-size: 37px
}

.send-sms-btn {
  width: 158px;
  height: 46px;
  line-height: 46px;
  font-size: 22px;
  background-color: #ededed;
  color: #c9c9c9;
}

.login-btn-wrap {
  padding: 55px 33px;
  .van-button--info {
  background-color: #6db4fb;
  border: 0
  }
}

</style>
