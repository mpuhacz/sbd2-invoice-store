<script>

import API from '../api'
import urls from '../urls'

export default {
    data() {
        return {
          payments: []
        }
    },

    created() {
        this.getPayments();
    },

    methods: {

        getPayments() {
            API.get('payments').then(r => {
                this.payments = r.data;
            })
        },

        remove (id) {
          if (confirm('Czy napewno chcesz usunąć daną płatność?')) {
            API.delete('payments/' + id).then(r =>{
              this.payments = this.payments.filter(i => {
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
    <h1 class="page-title"> Płatności
    </h1>
    <div class="note note-info">Możesz stąd przeglądać, dodawać oraz edytować płatności.</div>
    <div class="row">
        <div class="col-md-12 text-right">
            <a href="#payments/add" class="btn btn-success">Dodaj nową</a>
            <hr>
        </div>
    </div>
<div class="portlet">
    <div class="portlet-body">
        <div class="table-scrollable">
            <table class="table table-striped table-bordered table-advance table-hover">
                <thead>
                    <tr>
                        <th>Do faktury </th>
                        <th>Kwota </th>
                        <th>Data wpłaty </th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in payments">
                        <td><a :href="'#invoices/' + item.invoice.id">{{ item.invoice.title }}</a></td>
                        <td>{{ item.amount }} PLN</td>
                        <td>{{ item.date }}</td>
                        <td>
                            <button v-on:click="remove(item.id)" class="btn btn-sm btn-danger">Usuń</button>
                            <a :href="'#payments/' + item.id" class="btn btn-sm btn-success">Edytuj</a>
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
