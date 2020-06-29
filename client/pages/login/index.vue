<template>
  <div class="relative text-white">
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input v-model="login.username" class="bg-black" type="text" />
      </div>
      <div>
        <label>Password</label>
        <input v-model="login.password" class="bg-black" type="text" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',
  data () {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    console.log(this.$auth.user)
  },
  methods: {
    async userLogin () {
      try {
        await this.$auth.loginWith('local', { data: this.login })
      } catch (err) {
        console.log(err)
      }
    }
  },
  head () {
    return {
      title: 'Login'
    }
  }
}
</script>
