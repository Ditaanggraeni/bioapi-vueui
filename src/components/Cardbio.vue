<template>
<div class="row">
<div class="col-lg-4 mt-3" v-for="(bios, index) in bio" :key="index">
<div class="card">
<div class="card-header">{{bios.nama}}</div>
<div class="card-body">
<h5 class="card-title">{{bios.no_tlp}}</h5>
<h5 class="card-title">{{bios.tgl_lahir}}</h5>
<h5 class="card-title">{{bios.alamat}}</h5>
</div>
<div class="card-footer text-muted">
<router-link class="btn btn-primary" :to="{name:'Detailbio', params:{id:bios.id}}">Detail</router-link>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
props: ["bio"],
};
</script>
