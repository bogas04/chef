<template>
  <div class="bill-container">
    <button @click="print">Print</button>
    <div class="bill" id="bill">
      Items- Total-
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    print() {
      const printWindow = window.open('', 'PRINT', 'height=400,width=600');

      printWindow.document.write('<html><head><title>Bill</title>');
      printWindow.document.write('</head><body >');
      printWindow.document.write('<h1>Bill summary</h1>');
      printWindow.document.write('</body></html>');

      printWindow.document.close(); // necessary for IE >= 10
      printWindow.focus(); // necessary for IE >= 10*/

      printWindow.print();
      printWindow.close();
    },
  },
};
</script>

<style scoped>

</style>
