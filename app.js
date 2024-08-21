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
        removeNote(value, evt) {
            this.notes = this.notes.filter((note) => note !== value)
        },
        formatNote(note) {
            return note.toUpperCase();
        },
        formatIndex(index){
            return index + 1;
        }

    },
    computed: {
        /*
         сюда добавляются методы, которые используют в качестве переменных
         ключи из метода data()

         это методы будут вызываться только тогда, когда значение ключа будет изменено
        */
    }
};

createApp(app).mount('#root')
