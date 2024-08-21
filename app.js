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
        handleButtonClick(evt) {
            evt.preventDefault()
            if (!this.value) return;
            this.notes.push(this.value)
            this.value = ''
        },
        removeNote(value) {
          this.notes = this.notes.filter((note) => note !== value)
        }
    }
};

createApp(app).mount('#root')
