<template>
<div class="container">
    <div class="row">
        <div class="col-sm-2">
            <button @click="setname">Click</button>
        </div>
    </div>
     <div class="row">
        <div class="col-sm-2">
        {{ myname }}
        </div>
    </div>
</div>

</template>

<script>
import MyMixin from '@/utils/mixins/MyMixin'

export default {
  mixins: [MyMixin]
}

</script>
