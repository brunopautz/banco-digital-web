export default {

    async login(state, account) {
        return await this.$axios.$post('account', {account})
    },

    async account(state, account ) {
       return await this.$axios.$get(`account/${account}`)
    },

    async saque(state, datas) {
        return await this.$axios.$post(`account/${datas.account}/saque`, datas)
    },

    async deposit(state, datas) {
        return await this.$axios.$post(`account/${datas.account}/deposit`, datas)
    },
}