import { createApp } from 'vue'

const app = {
    data() {
        return {
            title: 'notes list',
            hint: 'add new note ...',
        }
    }
};

createApp(app).mount('#root')
