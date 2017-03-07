<script>

import API from '../api'
import urls from '../urls'

export default {
    data() {
        return {
          contractors: []
        }
    },

    created() {
        this.getContractors();
    },

    methods: {

        getContractors() {
            API.get('contractors').then(r => {
                this.contractors = r.data;
            })
        },

        remove (id) {
          if (confirm('Czy napewno chcesz usunąć danego kontrahenta? Usunie to również wszystkie' +
              'faktury przypisane do niego.')) {
            API.delete('contractors/' + id).then(r =>{
              this.contractors = this.contractors.filter(i => {
                if (i.nip != nip) return i
              })
            })
          }

        }
    },
}
</script>


<template>
<div>
    <h1 class="page-title"> Kontrahenci
    </h1>
    <div class="note note-info">Możesz stąd przeglądać, dodawać oraz edytować kontrahentów.</div>
    <div class="row">
        <div class="col-md-12 text-right">
            <a href="#contractors/add" class="btn btn-success">Dodaj nowego</a>
            <hr>
        </div>
    </div>
<div class="portlet">
    <div class="portlet-body">
        <div class="table-scrollable">
            <table class="table table-striped table-bordered table-advance table-hover">
                <thead>
                    <tr>
                        <th>NIP </th>
                        <th>Nazwa </th>
                        <th>Adres </th>
                        <th>Telefon </th>
                        <th>Email </th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in contractors">
                        <td>{{ item.nip }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.address }}</td>
                        <td>{{ item.phone }}</td>
                        <td>{{ item.email }}</td>
                        <td>
                            <button v-on:click="remove(item.nip)" class="btn btn-sm btn-danger">Usuń</button>
                            <a :href="'#contractors/' + item.nip" class="btn btn-sm btn-success">Edytuj</a>
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
