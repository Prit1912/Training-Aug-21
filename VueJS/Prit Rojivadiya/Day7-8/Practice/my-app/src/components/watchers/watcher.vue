<template>
    <h2 class="text-primary">Volume Tracker</h2>
    <h3>Current Volume - {{volume}}</h3>
    <div class="buttons">
        <button @click="volume += 2" class="btn btn-warning">Increase</button>&nbsp;
        <button @click="volume -= 2" class="btn btn-warning">Decrease</button>
    </div>
</template>

<script>
    export default {
        name: 'Watcher',
        data(){
            return{
                volume: 0
            }
        },
        methods:{

        },
        computed:{

        },
        watch:{
            volume(newValue, oldValue){
                if(newValue > oldValue && newValue == 16){
                    alert('listenig to very high value');
                }
            }
        }
    }
</script>