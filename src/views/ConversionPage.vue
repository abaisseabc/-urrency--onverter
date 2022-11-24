<template>
    <div class="conversions-page">
        <div class="conversions-page-translate">
            <div class="conversions-page__have">
                <p class="conversions-page__have-header">У меня есть</p>
                <input class="conversions-page__need-input" v-model="haveAmount"/>
                <vCurrencySelectionVue 
                    :data_rates="this.RATES"
                    @sendCurrency="sendCurrencyHave"
                />
                <vDescriptionVue />
            </div>
            <div class="conversions-page__need">
                <p class="conversions-page__need-header">Я получу</p>
                <div class="conversions-page__need-block">
                    {{convertibleCurrencyCalculation}}
                </div>
                <vCurrencySelectionVue 
                    :data_rates="this.RATES"
                    @sendCurrency="sendCurrencyNeed"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vDescriptionVue from '@/components/v-description.vue';
import vCurrencySelectionVue from '@/components/v-currency-selection.vue';

    export default {
        components: {
            vDescriptionVue,
            vCurrencySelectionVue
        },
        data() {
            return {
                haveAmount: '1',
                selectedCurrency: '',
                needSelectedCurrency: ''
            }
        },
        computed: {
            ...mapGetters([
                'RATES'
            ]),
            convertibleCurrencyCalculation() {
                if ( isNaN(this.haveAmount * (1 / this.selectedCurrency * this.needSelectedCurrency)) ) {
                    return this.haveAmount;
                } else {
                    return (this.haveAmount * (1 / this.selectedCurrency * this.needSelectedCurrency)).toFixed(2);
                }
            },
        },
        methods: {
            ...mapActions([
                'GET_RATES_FROM_API',
            ]),
            sendCurrencyHave(currency) {
                this.selectedCurrency = currency;
            },
            sendCurrencyNeed(currency) {
                this.needSelectedCurrency = currency;
            },
        },
        mounted() {
            this.GET_RATES_FROM_API();
        },
    }
</script>