<template>
    <div class="my-5">
        <button class="btn btn-success" @click="sendData">Send Data</button>
    </div>
</template>

<script>
    export default{
        emits:{
          'sending-data': null,
          'data-sent': (payload)=>{
              if(payload.duration && payload.Response){
                  return true;
              }else return false;
          }  
        },
        name: 'CustomEvent1',
        methods: {
            sendData(){
                this.$emit('sending-data');
                // send data using api
                this.$emit('data-sent',{
                    duration: 2,
                    Response: "200OK"
                })
            }
        }
    }
</script>