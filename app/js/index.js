import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/login.vue'
import InvoiceEdit from './components/invoiceEdit.vue'
import InvoiceList from './components/invoiceList.vue'
import ContractorsEdit from './components/contractorsEdit.vue'
import ContractorsList from './components/contractorsList.vue'

import PaymentsEdit from './components/paymentsEdit.vue'
import PaymentsList from './components/paymentsList.vue'


import mixins from './mixins'

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/logout', component: Login },
    { path: '/invoices/add', component: InvoiceEdit },
    { path: '/invoices/:id', component: InvoiceEdit },
    { path: '/invoices', component: InvoiceList },

    { path: '/contractors/add', component: ContractorsEdit },
    { path: '/contractors/:id', component: ContractorsEdit },
    { path: '/contractors', component: ContractorsList },

    { path: '/payments/add', component: PaymentsEdit },
    { path: '/payments/:id', component: PaymentsEdit },
    { path: '/payments', component: PaymentsList },

    // { path: '/products', component: ProductList }
  ],

});


new Vue({
  el: '#app',
  router: router,
  render: h => h('router-view'),
  created() {
    window.$ = window.jQuery = $;
    window.logout = mixins.logout;

  }
});