<script>
import API from '../api'
import mixins from '../mixins'

import select2 from './select2.vue'
import datepicker from './datepicker.vue'
export default {

  components: {
        'select2': select2,
        'datepicker': datepicker
    },
    data() {
        return {
              invoices: [],
              obj: {
                id: '',
                date: '',
                amount: '',
                invoice: ''
            }
        }
    },

    created() {
        let id = this.$route.params.id;
        if (id) {
            this.id = id;
            API.get('payments/' + id).then(r => {
                this.obj = r.data;
                this.obj.invoice = this.obj.invoice.id;
            }, err => {
                this.$router.push('/payments');
            })
        }

        mixins.getInvoices().then(r => {
          this.invoices = r.data.map(v => {
            v.text = `${v.title} (z dnia: ${v.created_at})`
            return v;
          });
        });
    },

    methods: {
        save() {
            let method = this.obj.id ? API.post : API.put;
            let url = this.obj.id ? 'payments/' + this.id : 'payments/';
            method(url, this.obj).then(r => {
                this.$router.push({path: '/payments', params: {id: r.data.id}});
            })
        }
    },

}
</script>

<template>
<div>
<h1 class="page-title"> Płatności </h1>
    <div class="note note-info">Możesz stąd przeglądać, dodawać oraz edytować płatności.</div>
    <div class="row">
        <div class="col-md-12 text-right">
            <a href="#invoices" class="btn btn-danger">Wróć</a>
            <hr>
        </div>
    </div>

<form class="form-group">
    <label>Kwota (PLN)</label>
    <div class="input-group">
        <input v-model="obj.amount" class="form-control" type="number" step="any"  required>
    </div>

    <label>Do faktury</label>
    <div class="input-group">
        <select2 v-model="obj.invoice" :options="invoices" required>
        </select2>
    </div>

    <label>Data wpłaty</label>
    <div class="input-group">
        <datepicker v-model="obj.date"></datepicker>
    </div>

    <hr>
    <button v-on:click="save" type="submit" class="btn btn-success">Zapisz</button>

</form>
</div>
</template>
