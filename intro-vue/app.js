const { createApp, ref } = Vue;

const listPerson = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 35 }

];

const app = createApp({

    template : `
        <div>
            <h1>{{ message }}</h1>
            <button @click="updateMessage">Click Me</button>
        </div>
        <ul></ul>
            <li v-for="person in listPerson" :key="person.name">
                {{ person.name }} - {{ person.age }} years old
            </li>
        </ul>
        <div v-show="showAuto"></div>
            <p>This paragraph is conditionally rendered.</p>
        </div>
        <p>Computed Message: {{ computedMessage }}</p>
    `,

    setup() {


        const message = ref('Hello Vue 3!');
        const showAuto = ref(true);
        const computedMessage = computed(() => {
            return message.value.toUpperCase();
        });

        function updateMessage() {
            message.value = 'You clicked the button!';
        }

        return {
            message,
            updateMessage,
            listPerson,
            showAuto,
            computedMessage
        };
    }
});

app.mount('#app');