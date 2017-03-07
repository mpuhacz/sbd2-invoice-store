<script>
import API from '../api'
import mixins from '../mixins'

export default {

    data() {
        return {
              obj: {
                nip: '',
                name: '',
                address: '',
                email: '',
                phone: '',

            }
        }
    },

    created() {
        let id = this.$route.params.id;
        if (id) {
            this.id = id;
            API.get('contractors/' + id).then(r => {
                this.obj = r.data;
            }, err => {
                this.$router.push('/contractors');
            })
        }

    },

    methods: {
        save() {
            let method = this.id ? API.post : API.put;
            let url = this.id ? 'contractors/' + this.id : 'contractors/';
            method(url, this.obj).then(r => {
                this.$router.push({path: '/contractors', params: {id: r.data.id}});
            })
        }
    },

}
</script>

<template>
<div>
<h1 class="page-title"> Kontrahenci </h1>
    <div class="note note-info">Możesz stąd przeglądać, dodawać oraz edytować kontrahentów.</div>
    <div class="row">
        <div class="col-md-12 text-right">
            <a href="#invoices" class="btn btn-danger">Wróć</a>
            <hr>
        </div>
    </div>

<form class="form-group">
    <label>NIP</label>
    <div class="input-group">
        <input v-model="obj.nip" type="text" class="form-control" required>
    </div>

    <label>Nazwa</label>
    <div class="input-group">
        <input v-model="obj.name" type="text" class="form-control" required>
    </div>

    <label>Adres</label>
    <div class="input-group">
        <input v-model="obj.address" type="text" class="form-control" required>
    </div>

    <label>Telefon</label>
    <div class="input-group">
        <input v-model="obj.phone" type="text" class="form-control" required>
    </div>

    <label>Email</label>
    <div class="input-group">
        <input v-model="obj.email" type="text" class="form-control" required>
    </div>


    <hr>
    <button v-on:click="save" type="submit" class="btn btn-success">Zapisz</button>

</form>
</div>
</template>
