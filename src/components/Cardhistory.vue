<template>
<div class="row">
<div class="col-lg-4 mt-3" v-for="(historys, index) in history" :key="index">
<div class="card">
<div class="card-header">{{historys.nama}}</div>
<div class="card-body">
<h5 class="card-title">{{historys.jenjangpendidikan}}</h5>
<h5 class="card-title">{{historys.tgl_masuk}}</h5>
<h5 class="card-title">{{historys.tgl_lulus}}</h5>
</div>
<div class="card-footer text-muted">
<router-link class="btn btn-primary" :to="{name:'Detailhistory', params:{id:historys.id}}">Detail</router-link>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
props: ["history"],
};
</script>
