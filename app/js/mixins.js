import API from './api'

export default {
  logout() {
    console.log('bye');
    localStorage.auth = null;
    API.defaults.headers.Authorization = null;
    window.location.href = '#/login';
  },

  getContractors() {
    return API.get('contractors/');
  },

  getInvoices() {
    return API.get('invoices/');
  },

  getContractor(id) {
    return API.get('contractors/' + id);
  }

}