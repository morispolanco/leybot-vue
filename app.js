<template>

<div>

<button @click="makeAPICall">Hacer pregunta</button> 

<div v-if="loading">Cargando...</div>

<div v-if="response">{{ response }}</div>

</div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: false,
      response: null
    }
  },

  methods: {
    async makeAPICall() {
      this.loading = true;
      
      const apiKey = 'fcbfdfe8-e9ed-41f3-a7d8-b6587538e84e';
      const sessionID = '65489d7c9ad727940f2ab26f';
      const history = [{
        role: 'user',
        content: '¿Cuáles son las leyes de protección al consumidor en Guatemala?'  
      }];
      
      const params = {
        apiKey,
        sessionID,
        history,
        powerful: false,
        google: true    
      };
      
      const response = await axios.post('https://api.afforai.com/api/api_completion', params);
      this.response = response.data;
      
      this.loading = false; 
    }
  } 
}
</script>
