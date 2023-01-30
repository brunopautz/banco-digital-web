<template>
    <div>
        <div class="container">
            <div class="clearfix">
                <h2 class="float-left">Olá, {{ account.client }}</h2>
                <h3 class="float-right"> Saldo em conta: R$ {{ account.balance  }} </h3>
            </div>
            <hr>
        </div>
        <div v-if="validationErrors">
            <ul class="alert alert-danger">
                <li v-for="(value) in validationErrors" :key="value">{{ value[0] }}</li>
            </ul>
        </div>
        <div class="container">
            <h2>Saque</h2>
            <form class="form-inline" >
                <label for="saque" class="mr-sm-2">Valor do Saque:</label>
                <input type="number" class="form-control mb-2 mr-sm-2" id="saque" v-model="saque_value">
                <button type="button" @click="saque" class="btn btn-primary mb-2">Sacar</button>
            </form>
          
            <hr>
        </div>
        <div class="container">
            <h2>Deposito</h2>
            <form class="form-inline"  method="post" @submit.prevent="deposit">
                <label for="deposito" class="mr-sm-2">Valor do Deposito:</label>
                <input type="number" class="form-control mb-2 mr-sm-2" id="deposito" step="any" v-model="deposito_value">
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
                        <th>Movimentação</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(movimento) in movements" :key="movimento.id">
                        <td> {{ movimento.id }} </td>
                        <td> R$ {{ movimento.value }} </td>
                        <td> {{ movimento.type == 1 ? 'Deposito' : 'Saque' }} </td>
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
            movements: null,
            deposito_value: 0,
            saque_value: 0,
            validationErrors: false
        }
    },

    async asyncData({ redirect, route, store }) {
        try {
            const datas = await store.dispatch('account/account', route.params.account);
            return {
                account: datas.account,
                movements: datas.movements
            }

        } catch (error) {
            return redirect("/")
        }
    },

    methods: {
        async saque() {
            this.validationErrors = false
            const form = {
                value: this.saque_value,
                account: this.account.account
            }
            try {
                const datas = await this.$store.dispatch('account/saque', form)
                this.account = datas.account
                this.movements.push(datas.saque);
                this.saque_value = 0
            } catch (error) {
                this.validationErrors = error.response.data.errors;
            }
        },

        async deposit() {
            this.validationErrors = false

            const form = {
                value: this.deposito_value,
                account: this.account.account
            }
            try {
                const datas = await this.$store.dispatch('account/deposit', form)
                this.movements = datas.movements
                this.account = datas.account
                this.deposito_value = 0
            } catch (error) {
                console.log(error)
                this.validationErrors = error.response.data.errors;
            }

        }
    },
}
</script>