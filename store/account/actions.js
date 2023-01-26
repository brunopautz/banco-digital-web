export default {

    async login(state, account) {
        return await this.$axios.$post('account', {account})
    },

    async account(state, account ) {
        return await this.$axios.$get(`account/${account}`)
    },

    async saque(state, datas) {
        return await this.$axios.$post('account/saque', {datas})
    },

    async deposito(state, datas) {
        return await this.$axios.$post('account/deposito', {datas})
    },
}