import { createApp } from 'vue'

const app = {
    data: () => ({
        title: 'notes list',
        hint: 'add new note ...',
        value: '',
        notes: [],
        vtext: 'this is v-text directive',
    }),
    methods: {
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
    },
    watch: {
        value(value) {
            /*
            метод value следит за изменением ключа value из метода data()
            имя метода должно совпадать с именем ключа
            он сработает каждый раз, как только значение ключа изменится
            используется при fetch, валидации полей ввода и т.п.
             */
        }
    }
};

createApp(app).mount('#root')
