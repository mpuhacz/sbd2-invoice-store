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
              contractors: [],
              obj: {
                id: '',
                title: '',
                amount: '',
                created_at: '',
                payment_date: '',
                comment: '',
                status: '',
                contractor: '',
            }
        }
    },

    created() {
        let id = this.$route.params.id;
        if (id) {
            this.id = id;
            API.get('invoices/' + id).then(r => {
                this.obj = r.data;
                this.obj.contractor = this.obj.contractor.nip;
            }, err => {
                this.$router.push('/invoices');
            })
        }
        mixins.getContractors().then(r => {
          this.contractors = r.data.map(v => {
            v.id = v.nip;
            v.text = `${v.name} (NIP: ${v.nip})`
            return v;
          });
        });
    },

    methods: {
        save() {
            let method = this.obj.id ? API.post : API.put;
            let url = this.obj.id ? 'invoices/' + this.id : 'invoices/';
            method(url, this.obj).then(r => {
                this.$router.push({path: '/invoices', params: {id: r.data.id}});
            })
        }
    },

}
</script>

<template>
<div>
<h1 class="page-title"> Faktury </h1>
    <div class="note note-info">Możesz stąd przeglądać, dodawać oraz edytować faktury.</div>
    <div class="row">
        <div class="col-md-12 text-right">
            <a href="#invoices" class="btn btn-danger">Wróć</a>
            <hr>
        </div>
    </div>

<form class="form-group">
    <label>Tytuł</label>
    <div class="input-group">
        <input v-model="obj.title" type="text" class="form-control" required>
    </div>

    <label>Kwota (PLN)</label>
    <div class="input-group">
        <input v-model="obj.amount" class="form-control" type="number" step="any"  required>
    </div>

    <label>Kontrahent</label>
    <div class="input-group">
        <select2 v-model="obj.contractor" :options="contractors" required>
        </select2>
    </div>

    <label>Faktura z dnia</label>
    <div class="input-group">
        <datepicker v-model="obj.created_at"></datepicker>
    </div>

    <label>Termin płatności</label>
    <div class="input-group">
        <datepicker v-model="obj.payment_date"></datepicker>
    </div>

    <label>Komentarz</label>
    <div class="input-group">
        <textarea v-model="obj.comment" type="text" class="form-control"></textarea>
    </div>

    <label>Status</label>
    <div class="input-group">
        <select v-model="obj.status" class="form-control">
            <option value="0">Nieopłacona</option>
            <option value="1">Anulowana</option>
            <option value="2">Opłacona</option>
        </select>
    </div>
    <hr>
    <button v-on:click="save" type="submit" class="btn btn-success">Zapisz</button>

</form>
</div>
</template>
