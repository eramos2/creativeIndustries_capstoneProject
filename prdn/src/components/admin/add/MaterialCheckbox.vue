<template>
    <ul class="list-group navList" id="editServMatCons">
        <li class="input-group" name="process" value="1"><strong>Concrete</strong></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids" value="5">Digital Concrete</label></div></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="3">Foam Aggregate</label></div></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="6">Geometrical Concrete</label></div></li>
                <li class="catMargins"><div class="checkbox">
                <label><input type="checkbox" name="subMaterial" v-model="smids"  value="4">Insulate Concrete</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="1">Lightweight Concrete</label></div></li>
                <li class="catMargins"><div class="checkbox"><label><input type="checkbox" name="subMaterial" v-model="smids"  value="2">Translucent Concrete</label></div></li>
    </ul>
</template>

<script>
export default {};
</script>

<style>
</style>
