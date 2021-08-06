<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit Bios</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama Legkap</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="bios.nama" />
      <div class="alert alert-danger" v-if="validation.nama">
        {{ validation.nama[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">No Telepon</label>
    <input type="number" class="form-control" id="inputPassword4"
    v-model="bios.no_tlp"/>
    <div class="alert alert-danger" v-if="validation.no_tlp">
        {{ validation.no_tlp[0] }}
      </div>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Tanggal Lahir</label>
    <input type="date" class="form-control" id="inputAddress" placeholder="Masukkan Tanggal Lahir"
    v-model="bios.tgl_lahir" />
    <div class="alert alert-danger" v-if="validation.tgl_lahir">
        {{ validation.tgl_lahir[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Alamat</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="bios.alamat"/>
    <div class="alert alert-danger" v-if="validation.alamat">
        {{ validation.alamat[0] }}
      </div>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Edit</button>
  </div>
</form>
  </div>
</div>
 
</template>
<script>
import { onMounted, ref } from 'vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {

    const bios = reactive({
      nama: '',
      no_tlp:'',
      tgl_lahir: '',
       alamat: ''
      
    })

   
    const validation = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/bio/${route.params.id}/edit`)
      .then(response => {
        console.log(response.data.data.nama)

        bios.nama = response.data.data.nama
        bios. no_tlp = response.data.data.no_tlp
        bios.tgl_lahir = response.data.data.tgl_lahir
        bios.alamat = response.data.data.alamat
      }).catch(error =>{
        console.log(error.response.data)
      })

    })

    function update(){
      let nama = bios.nama
      let no_tlp = bios.no_tlp
      let tgl_lahir = bios.tgl_lahir
      let alamat = bios.alamat

      axios.put(`http://127.0.0.1:8000/api/bio/${route.params.id}`, {
        nama: nama,
        no_tlp: no_tlp,
        tgl_lahir: tgl_lahir,
        alamat: alamat
      })
      .then(() => {
        router.push({
          name:'Index'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      bios,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>
