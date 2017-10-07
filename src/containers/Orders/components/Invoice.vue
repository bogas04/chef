<template>
  <div class="invoice">
    <header class="invoice__header">
      <span class="invoice__header--title">invoice</span>
    </header>
    <section class="invoice__restaurant-info">
      <span class="restaurant__title">Smoke House Deli</span>
      <span class="restaurant__address">1209, 100 Feet Road, Indiranagar </span>
    </section>
    <section class="invoice__order-meta">
      <div class="order__nugget">
        <span class="info--title">Order</span><br />
        <span>#12</span>
      </div>
      <div class="order__nugget">
        <span class="info--title">Time</span><br />
        <span>12:10pm 04/10/2017</span>
      </div>
      <div class="order__nugget">
        <span class="info--title">Invoice</span><br />
        <span>#AJK43</span>
      </div>
      <div class="order__nugget">
        <span class="info--title">Attendant</span><br />
        <span>Rajiv</span>
      </div>
    </section>
    <section class="invoice__order-info">
      <table class="order__details">
        <thead>
          <tr>
            <th class="order-info--heading">Item</th>
            <th class="order-info--heading">Qty</th>
            <th class="order-info--heading">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in order.items" :key="item.id">
            <td class="order-info--data">{{ item.title }}</td>
            <td class="order-info--data">{{ item.quantity }}</td>
            <td class="order-info--data">{{ item.price }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="order-info--data">Subtotal</td>
            <td class="order-info--data"></td>
            <td class="order-info--data">{{ total }}</td>
          </tr>
          <tr>
            <td class="order-info--data">Discount</td>
            <td class="order-info--data"></td>
            <td class="order-info--data">-</td>
          </tr>
          <tr>
            <td class="order-info--data">Tax</td>
            <td class="order-info--data"></td>
            <td class="order-info--data">-</td>
          </tr>
          <tr>
            <td class="order-info--data">Total</td>
            <td class="order-info--data"></td>
            <td class="order-info--data">{{ total }}</td>
          </tr>
        </tfoot>
      </table>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import find from 'lodash/find';

export default {
  props: ['selectedOrder'],
  computed: {
    ...mapState({
      order(state) {
        const order = find(state.orders, o => o.id === this.selectedOrder);
        return {
          ...order,
          items: order.items.map(item => ({
            ...state.menu.items[item.itemId],
            quantity: item.quantity,
          })),
        };
      },
    }),
    total() {
      return this.order.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
  },
};
</script>

<style>
.invoice {
  width: 400px;
  min-height: 400px;
  background: #fff;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  display: none;
}

@media print {
  body * {
    visibility: hidden;
  }

  .invoice {
    display: flex;
  }

  .invoice,
  .invoice * {
    visibility: visible;
  }
  .invoice {
    position: absolute;
    left: 0;
    top: 0;
  }
}

.invoice__header {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #BDBDBD;
}

.invoice__header--title {
  text-transform: uppercase;
  color: #757575;
  font-weight: bold;
}

.invoice__restaurant-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
}

.restaurant__title {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: light;
}

.restaurant__address {
  font-size: 12px;
  color: #2e2e2e;
}

.invoice__order-meta {
  padding: 18px 0;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #BDBDBD;
}

.order__nugget {
  height: 48px;
  padding: 4px;
  width: 50%;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
}

.info--title {
  color: #757575;
}

.order__details {
  width: 100%;
  text-align: center;
  padding: 12px 8px;
}

.order-info--heading {
  font-weight: normal;
  text-transform: uppercase;
  font-size: 14px;
  color: #757575;
}

.order-info--heading:first-child,
.order-info--data:first-child {
  text-align: left;
}

.order-info--heading:last-child,
.order-info--data:last-child {
  text-align: right;
}
</style>
