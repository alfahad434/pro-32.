class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
this.title = createElement('h1')
this.input2 = createInput("Enter Correct Option NO....")

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)


    this.message = createElement("h2")
    this.message2 = createElement('h4')
    this.message3 = createElement('h4')
    this.message4 = createElement('h4')
    this.message5 = createElement('h4')
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(400, 40);
this.message.html("Question:- What starts and ends with the letter(E),but has only one letter?");

this.message2.html("1: Everyone")
this.message3.html("2: Envelop")
this.message4.html("3: Estimate")
this.message5.html("4: Example")



this.message.position(100,100)



this.message2.position(300,170)
this.message3.position(300,200)
this.message4.position(500,170)
this.message5.position(500,200)



    //Create html() and position() for each question, input and answers.




    this.input1.position(250, 260);
    this.button.position(430, 330);
this.input2.position(500,260)


    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      
  

    })


  }
}
