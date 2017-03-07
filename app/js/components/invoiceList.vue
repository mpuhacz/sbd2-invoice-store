<script>

import API from '../api'
import urls from '../urls'

export default {
    data() {
        return {
          invoices: []
        }
    },

    created() {
        this.getInvoices();
    },

    methods: {

        getStatus(status) {
          switch (status) {
            case 0: return 'Nieopłacona'
            case 1: return 'Anulowana'
            case 2: return 'Opłacona'
          }
        },
        getInvoices() {
            API.get('invoices').then(r => {
                this.invoices = r.data;
            })
        },

        remove (id) {
          if (confirm('Czy napewno chcesz usunąć fakturę nr: ' + id + '?')) {
            API.delete('invoices/' + id).then(r =>{
              this.invoices = this.invoices.filter(i => {
                if (i.id != id) return i
              })
            })
          }

        }
    },
}
</script>


<template>
<div>
<h1 class="page-title"> Faktury
</h1>
<div class="note note-info">Możesz stąd przeglądać, dodawać oraz edytować faktury.</div>
    <div class="row">
        <div class="col-md-12 text-right">
            <a href="#invoices/add" class="btn btn-success">Dodaj nową</a>
            <hr>
        </div>
    </div>
<div class="portlet">
    <div class="portlet-body">
        <div class="table-scrollable">
            <table class="table table-striped table-bordered table-advance table-hover">
                <thead>
                    <tr>
                        <th>Tytuł </th>
                        <th>Kontrahent </th>
                        <th>Kwota </th>
                        <th>Status </th>
                        <th>Data utworzenia </th>
                        <th>Termin płatności </th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in invoices">
                        <td class="highlight">
                            {{ item.id }} - {{ item.title }}
                            <!--<router-link :to="'/invoices/' + item.id">User</router-link>-->
                        </td>
                        <td><a :href="'#contractors/' + item.contractor.nip">{{ item.contractor.name }}</a></td>
                        <td>{{ item.amount }} PLN</td>
                        <td>{{ getStatus(item.status) }}</td>
                        <td>{{ item.created_at }}</td>
                        <td>{{ item.payment_date }}</td>
                        <td>
                            <button v-on:click="remove(item.id)" class="btn btn-sm btn-danger">Usuń</button>
                            <a :href="'#invoices/' + item.id" class="btn btn-sm btn-success">Edytuj</a>
                            <a class="btn btn-sm btn-primary">Drukuj</a>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
    </div>
</template>
