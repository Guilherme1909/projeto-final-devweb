<template>
    <div class="container">
        <q-card>
            <q-card-section>
                <div class="q-pt-lg">
                    <div class="col text-h6 ellipsis flex justify-center">
                        <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">Validador CPF</h2>
                    </div>
                </div>
            </q-card-section>
            <q-card-section>
                <q-form class="q-gutter-md" @submit.prevent="submitForm">
                    <q-input label="CPF" v-model="cpf" mask="###.###.###-##" @input="pendente=true"></q-input>
                    <div class="q-pa-md flex flex-center">
                        <q-btn class="full-width" color="primary" label="Validar" type="submit" rounded @click="verificarCpf"></q-btn>
                    </div>
                </q-form>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
    import { TheMask } from 'vue-the-mask'
    import { useQuasar } from 'quasar'
    let $q

    export default {
        name: 'ValidadorCpf',
        data() {
            return {
                cpf: '',
                pendente: true,
                valido: false
            }
        },
        methods: {
            submitForm() {
                if (!this.cpf) {
                    $q.notify({
                        type: 'negative',
                        message: 'Insira um CPF para ser validado.'
                    })
                }
                else if (this.valido){
                    $q.notify({
                        type: 'positive',
                        message: 'CPF Válido.'
                    })
                }
                else {
                    $q.notify({
                        type: 'negative',
                        message: 'CPF Inválido.'
                    })
                }
            },
            verificarCpf() {      
                this.valido = validar(this.cpf)
                this.pendente = false
            }
        },
        mounted () {
            $q = useQuasar()
        }
    }

    const validar = cpf => checkAll(prepare(cpf))

    const notDig = i => !['.', '-', ' '].includes(i)
    const prepare = cpf => cpf.trim().split('').filter(notDig).map(Number)
    const is11Len = cpf => cpf.length === 11
    const notAllEquals = cpf => !cpf.every(i => cpf[0] === i)
    const onlyNum = cpf => cpf.every(i => !isNaN(i))

    const calcDig = limit => (a, i, idx) => a + i * ((limit + 1) - idx)
    const somaDig = (cpf, limit) => cpf.slice(0, limit).reduce(calcDig(limit), 0)
    const resto11 = somaDig => 11 - (somaDig % 11)
    const zero1011 = resto11 => [10, 11].includes(resto11) ? 0 : resto11

    const getDV = (cpf, limit) => zero1011(resto11(somaDig(cpf, limit)))
    const verDig = pos => cpf => getDV(cpf, pos) === cpf[pos]

    const checks = [is11Len, notAllEquals, onlyNum, verDig(9), verDig(10)]
    const checkAll = cpf => checks.map(f => f(cpf)).every(r => !!r)
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

q-card {
    width: 400px;
}
</style>
