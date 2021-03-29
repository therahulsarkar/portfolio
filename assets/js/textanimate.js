var txtanimate = document.getElementById('textanimate');
var typewriter = new Typewriter(txtanimate, {
    loop: true
});

typewriter.pauseFor(2000)
    .typeString("Hello<span id='animatetextcolour'>.</span>")
    .pauseFor(1200)
    .deleteAll()
    .typeString("I'am  <span id='animatetextcolour'>Rahul</span>")
    .pauseFor(1000)
    .deleteAll()
    .typeString('Web Developer<span id="animatetextcolour">.</span>')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Graphic Designer<span id="animatetextcolour">.</span>')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Founder of <span id="animatetextcolour">zovo</span>')
    .deleteAll()
    .typeString('<span id="animatetextcolour">Welcome</span> to my site<span id="animatetextcolour">!</span>')
    .pauseFor(1000)
    .start();
