import { ref, computed } from 'vue';


export const useCounter = (initialValue: number= 5) => {

    const counter = ref(5)
    const squareCounter = computed(()=> counter.value *counter.value)

    return {
        counter,
        squareCounter
    }
}