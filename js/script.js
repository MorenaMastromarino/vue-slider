const app = new Vue({
  el: '#app',

  // bonus
  mounted() {
    setInterval(this.nextSlide, 3000);
  }, 

  data: {

    items:[
      {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
      },
      {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum',        
      },
      {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',        
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
      {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',        
      },
      {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
      },
    ],

    counter: 0,

  },

  methods: {
    nextSlide(){
      this.counter++;
      if(this.counter === this.items.length){
        this.counter = 0;
      };      
    },

    prevSlide(){
      this.counter--;
      if(this.counter < 0){
        this.counter = this.items.length - 1;
      };
    },
  },

});