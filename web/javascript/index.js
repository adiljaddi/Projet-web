
function todoApp() {
    return {
        darkMode: localStorage.getItem('theme') === 'dark',
        dyslexie: localStorage.getItem('dyslexie') === 'true',

        newTask: '',
        taches: JSON.parse(localStorage.getItem('taches')) || [],

        toggleTheme() {
            this.darkMode = !this.darkMode;

            localStorage.setItem(
                'theme',
                this.darkMode ? 'dark' : 'light'
            );
        },

        toggleDyslexie() {
            this.dyslexie = !this.dyslexie;

            localStorage.setItem(
                'dyslexie',
                this.dyslexie
            );
        },

        addTask() {
            if (this.newTask.trim() !== '') {
                this.taches.push({
                    text: this.newTask.trim(),
                    completed: false
                });

                this.newTask = '';
                this.saveTasks();
            }
        },

        toggleTask(index) {
            this.taches[index].completed =
                !this.taches[index].completed;

            this.saveTasks();
        },

        deleteTask(index) {
            this.taches.splice(index, 1);
            this.saveTasks();
        },

        saveTasks() {
            localStorage.setItem(
                'taches',
                JSON.stringify(this.taches)
            );
        }
    };
}
