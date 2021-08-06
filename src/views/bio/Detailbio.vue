<template>
    <div class="card text-center mt-4" v-for="b in bios" :key="b.id">
  <div class="card-header">
    Detail Biodata
  </div>
  <div class="card-body">
    <h5 class="card-title">{{b.nama}}</h5>
    <p class="card-text">{{b.no_tlp}}</p>
    <p class="card-text">{{b.tgl_lahir}}</p>
    <p class="card-text">{{b.alamat}}</p>
  </div>
  <div class="card-footer">
    <router-link class="btn btn-success" :to="{name:'Editbio', params:{id:b.id}}">Edit</router-link>
        <button @click.prevent="bioDelete(b.id)" class="btn btn-danger">Delete</button>
  </div>
</div>

</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
      let bios = ref([]);

    const router = useRouter();

    const route = useRoute()

    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/bio/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama);

        bios.value = response.data.data;
        
      }).catch(error =>{
        console.log(error.response.data);
      });
    });

    function bioDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/bio/${id}`)
      .then(()=>{
        router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }

    
    return {
      bios,
      router, 
      bioDelete,
      route
    }
  },
}
</script>