<template>
    <p>Выберите валюту:
        <select name="" id="" v-model="selectedCurrency">
            <option
                v-for="(item, key) in this.data_rates"
                :key="item.key"
                :value="key"
                @click="sendCurrency(selectedCurrency)"
            >
            {{item.key}}
            </option>
        </select>
    </p>
</template>

<script>

    export default {
        props: {
            data_rates: {
                type: Array
            }
        },
        data() {
            return {
                selectedCurrency: '0'
            }
        },
        methods: {
            sendCurrency(selectedCurrency) {
                let valueSelectedCurrency = 0;

                this.data_rates.forEach((el,key) => {
                    if (selectedCurrency == key) {
                        valueSelectedCurrency = el.value;
                    }
                });

                this.$emit('sendCurrency', valueSelectedCurrency);
            }
        },
        beforeUpdate() {
            this.sendCurrency(this.selectedCurrency);
        }
    }
</script>