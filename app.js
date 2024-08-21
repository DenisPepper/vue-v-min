import { createApp } from 'vue'

const app = {
    data() {
        return {
            title: 'notes list',
            hint: 'add new note ...',
            value: '',
            notes: [],
        }
    },
    methods: {
        handleInputChange(evt) {
           this.value = evt.target.value;
        },
        handleButtonClick() {
            this.notes.push(this.value)
            this.value = ''
        }
    }
};

createApp(app).mount('#root')
