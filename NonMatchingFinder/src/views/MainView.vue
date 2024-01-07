<template>
    <div>
        <input v-model="inputArray" placeholder="comma-separated numbers" width="auto" />
        <button @click="findNonMatchingNumber">Find</button>
        <div style="color:red">
            Conditions:
            <br /> 1. Input values must be comma-separated. Numbers and commas are allowed only.
            <br /> 2. Array must contain at least 3 characters.
            <br /> 3. Only one value can be opposite type to others.
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useNumberStore } from "../stores/NumbersStore.js"

export default {
    setup() {
        const router = useRouter();
        const inputArray = ref("");
        const store = useNumberStore();

        const findNonMatchingNumber = () => {
            if (!!inputArray.value) {
                const validArray = inputArray.value.split(",").map(val => Number(val.trim()));
                if (validArray.length >= 3) {
                    store.numbers = validArray;
                    router.push({ name: 'result' });
                }
                else alert('Array must contain at least 3 characters.')
            }
            else alert('Input values must be provided.')
        }

        return {
            inputArray, findNonMatchingNumber,
        }
    }
};
</script>