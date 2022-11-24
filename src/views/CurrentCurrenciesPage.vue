<template>
    <div class="current-currencies-page">
        <h1 class="current-currencies-page__header">Базовая валюта: 
            <select name="" id="">
                <option
                    v-for="item in this.SELECTED_CURRENCY" 
                    :key="item.key"
                    :value="item.key"
                    @click="getSelectedCurrency(item.key)"
                >
                {{item.key}}
                </option>
            </select>
        </h1>
        <div class="current-currencies-page__result" >
            <div
                v-for="item in this.SELECTED_CURRENCY" 
                :key="item.key"
                class="current-currencies-page__result-block"
            >
                <p>1 {{selectedCurrency}} = {{item.value}} {{item.key}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';


    export default {
        data() {
            return {
                selectedCurrency: 'USD'
            }
        },
        computed: {
            ...mapGetters([
                'SELECTED_CURRENCY'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_RATES_FROM_API', 
                'GET_SELECTED_RATES_FROM_API'
            ]),
            getSelectedCurrency(currency) {
                this.selectedCurrency = currency;
                this.GET_SELECTED_RATES_FROM_API(currency);
            }
        },
        mounted() {
           this.GET_RATES_FROM_API();
        }

    }
</script>