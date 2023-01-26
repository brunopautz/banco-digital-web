<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          Olá, bem vindo ao BruBank
        </h2>
        <div class="mt-3 text-gray-600">
          <div class="form-group">
            <label for="">Número da conta:</label>
            <input type="text" name="" id="" v-model="account" class="form-control" placeholder=""
              aria-describedby="helpId">
            <small id="helpId" class="text-muted">Padrão: 00000-1</small>
          </div>
          <button type="button" name="" id="" class="btn btn-success btn-lg btn-block" @click="login">Acessar
            Conta</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginBank',


  data() {
    return {
      account: "00000-1"
    }
  },

  methods: {
    async login() {
      try {
        const datas = await this.$store.dispatch('account/login', this.account);
        this.$router.push(`/${datas.account}`)
      } catch (error) {
        console.log(error.response.data)        
      }

    }
  }
}
</script>
