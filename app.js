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
            if (!this.value) return;
            this.notes.push(this.value)
            this.value = ''
        },
        handleKeyPress(evt) {
            if(evt.key === "Enter") {
                evt.preventDefault();
                this.handleButtonClick();
            }

        }
    }
};

createApp(app).mount('#root')
