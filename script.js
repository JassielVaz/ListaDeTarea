const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: '',
            tasks: []
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim()) {
                this.tasks.push({ text: this.newTask, completed: false });
                this.newTask = '';
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    },
    computed: {
        progress() {
            const completedTasks = this.tasks.filter(task => task.completed).length;
            return this.tasks.length ? (completedTasks / this.tasks.length) * 100 : 0;
        },
        progressClass() {
            const progress = this.progress;
            if (progress >= 71) return 'progress-bar progress-red';
            if (progress >= 41) return 'progress-bar progress-yellow';
            return 'progress-bar progress-green';
        },
        completedTasks() {
            return this.tasks.filter(task => task.completed).length;
        },
        totalTasks() {
            return this.tasks.length;
        }
    }
}).mount('#app');
