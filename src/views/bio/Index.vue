<template>
<div class="index">
<!--<img alt="Vue logo" src="../assets/logo.png"> 
<Slider />-->
<hr class="my-3">
<router-link class="btn btn-primary" to="/createbio">Add Biodata</router-link>

<Cardbio :bio="bio" />

</div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
// import Slider from "@/components/Slider.vue";
import Cardbio from "@/components/Cardbio.vue";
import { ref, onMounted } from 'vue';

export default {
name: "Index",
components: {
Cardbio,
},
setup(){
let bio = ref([])

onMounted(() => {
axios.get('http://127.0.0.1:8000/api/bio')
.then(response => {
bio.value = response.data.data
})
.catch(error => {
console.log(error)
})
})

function bioDelete(id){
axios.delete(`http://127.0.0.1:8000/api/bio/${id}`)
.then(()=>{
let z = this.bio.map(bio => bio.id).indexOf(id);
this.bio.splice(z, 1)
}).catch(error => {
console.log(error)
})
}

return {
bio,
bioDelete
}
}
};
</script>