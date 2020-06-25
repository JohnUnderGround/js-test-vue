var vue = new Vue({
    el: "#app",
    data: {
        name: "John",
        grade1: 7.5,
        grade2: 9.5,
        status: true
    },
    computed: {
        average() {
            return (this.grade1 + this.grade2) /2;
        }
    },
    methods: {
    
    }


});