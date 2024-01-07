import { defineStore } from "pinia";

export const useNumberStore = defineStore("NumberStore", {
  state: () => ({
    numbers: [1, 2],
  }),
  actions: {
    getNonMatchingValue() {
      const array = this.numbers;
      if (array.length < 3)
        return "Error: Array must contain at least 3 characters.";
      const evenNumbers = array.filter((number) => number % 2 == 0);
      const oddNumbers = array.filter((number) => number % 2 != 0);
      if (evenNumbers.length == 0 || oddNumbers.length == 0)
        return "Error: Array must contain at least 1 non-matching value";
      return evenNumbers.length > oddNumbers.length
        ? this.handleOddNumbers(oddNumbers)
        : this.handleEvenNumbers(evenNumbers);
    },
    handleOddNumbers(oddNumbers) {
      return oddNumbers.length == 1
        ? oddNumbers.at(0)
        : `Error: there is more than one non matching number value. You sent: ${oddNumbers}`;
    },
    handleEvenNumbers(evenNumbers) {
      return evenNumbers.length == 1
        ? evenNumbers.at(0)
        : `Error: there is more than one non matching number value. You sent: ${evenNumbers}`;
    },
  },
});
