<template>
    <div>
        <div class="container">
            <div class="clearfix">
                <h2 class="float-left">Olá, {{ account.client }}</h2>
                <h3 class="float-right"> Saldo em conta: R$ {{ account.saldo  }} </h3>
            </div>
            <hr>
        </div>
        <div class="container">
            <h2>Saque</h2>
            <form class="form-inline" method="post" @submit.prevent="saque">
                <label for="saque" class="mr-sm-2">Valor do Saque:</label>
                <input type="number" class="form-control mb-2 mr-sm-2" id="saque">
                <button type="submit" class="btn btn-primary mb-2">Sacar</button>
            </form>
            <hr>
            <hr>
        </div>
        <div class="container">
            <h2>Deposito</h2>
            <form class="form-inline"  method="post" @submit.prevent="deposito">
                <label for="deposito" class="mr-sm-2">Valor do Deposito:</label>
                <input type="number" class="form-control mb-2 mr-sm-2" id="deposito">
                <button type="submit" class="btn btn-primary mb-2">Despositar</button>
            </form>
            <hr>
        </div>
        <div class="container">
            <h2>Movimentações na conta:</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="movimento in movimentacoes" :key="movimento">
                        <td> {{ movimento.id }} </td>
                        <td> R$ {{ movimento.value }} </td>
                        <td> {{ movimento.type == 1 ? 'Depsito' : 'Saque' }} </td>
                        <td> {{ movimento.data }} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'account',

    layout: 'bank',

    data() {
        return {
            account: false,
            movimentacoes: null,
            deposito: null,
            saque: null
        }
    },

    async asyncData({ redirect, route, store }) {
        try {
            const datas = await store.dispatch('account/account', route.params.account);
            console.log(datas)
            return {
                account: datas.account,
                movimentacoes: datas.movimentacoes
            }

        } catch (error) {
            return redirect("/")
        }
    },

    methods: {
        async saque() {
            console.log("saque")
            return
        },

        async deposito() {
            const form = {
                type: 1,
                value: this.deposito,
                account: this.account.account
            }
            console.log(form)
            return
        }
    },
}
</script>