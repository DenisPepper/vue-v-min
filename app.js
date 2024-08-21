import { createApp } from 'vue'

const app = {
    data() {
        return {
            title: 'notes list',
            hint: 'add new note ...',
            value: '',
        }
    },
    methods: {
        handleInputChange(evt) {
           this.value = evt.target.value;
        }
    }
};

createApp(app).mount('#root')
