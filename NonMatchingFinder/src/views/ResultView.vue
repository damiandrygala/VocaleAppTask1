<template>
    <div>
        {{ response }}
    </div>
</template>

<script>
import { useNumberStore } from "@/stores/NumbersStore";
export default {
    setup() {
        const store = useNumberStore();
        const response = store.getNonMatchingValue();
        return {
            response
        }
    }
};

</script>