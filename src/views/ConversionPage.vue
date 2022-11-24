<template>
    <div class="conversions-page">
        <div class="conversions-page-translate">
            <div class="conversions-page__have">
                <p class="conversions-page__have-header">У меня есть</p>
                <input class="conversions-page__need-input" v-model="haveAmount"/>
                <p>Выберите валюту:
                    <select name="" id="" v-model="selectedCurrency" >
                        <option
                            v-for="(item, key) in this.RATES"
                            :key="item.key"
                            :value="key"
                        >
                        {{item.key}}
                        </option>
                    </select>
                </p>
                <vDescriptionVue />
            </div>
            <div class="conversions-page__need">
                <p class="conversions-page__need-header">Хочу приобрести</p>
                <div class="conversions-page__need-block">
                    {{convertibleCurrencyCalculation}}
                </div>
                <p>Выберите валюту: 
                    <select name="" id="" v-model="needSelectedCurrency">
                        <option 
                            v-for="(item, key) in this.RATES" 
                            :key="item.key"
                            :value="key"
                        >
                        {{item.key}}
                        </option>
                    </select>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import vDescriptionVue from '@/components/v-description.vue';

    export default {
        components: {
            vDescriptionVue
        },
        data() {
            return {
                haveAmount: '1',
                selectedCurrency: '0',
                needSelectedCurrency: '0',
            }
        },
        computed: {
            ...mapGetters([
                'RATES'
            ]),
            convertibleCurrencyCalculation() {
                let valueSelectedCurrency = 0;
                let valueNeedSelectedCurrency = 0;

                this.RATES.forEach((el,key) => {
                    if (this.selectedCurrency == key) {
                        valueSelectedCurrency = el.value
                    }
                });
                this.RATES.forEach((el,key) => {
                    if (this.needSelectedCurrency == key) {
                        valueNeedSelectedCurrency = el.value
                    }
                });

                if ( isNaN(this.haveAmount * (1 / valueSelectedCurrency * valueNeedSelectedCurrency)) ) {
                    return ""
                } else {
                    return (this.haveAmount * (1 / valueSelectedCurrency * valueNeedSelectedCurrency)).toFixed(2)
                }
            }
        },
        methods: {
            ...mapActions([
                'GET_RATES_FROM_API'
            ]),
        },

        mounted() {
            this.GET_RATES_FROM_API();
        },
    }
</script>