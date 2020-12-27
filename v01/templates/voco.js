function lis1() {
    alert("YOU CLICKED LISTEN1");
    document.getElementById("output-content").innerHTML = "listen1";


    
    if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
        'show tps report': function() {
        $('#tpsreport').animate({bottom: '-100px'});
        }
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
    }
    
  }
  
  function lis2() {
  //  alert("YOU CLICKED LISTEN2");
    document.getElementById("output-content").innerHTML = "listen2";
  }
  
  function dev1() {
  //  alert("YOU CLICKED DEV1");
    document.getElementById("output-content").innerHTML = "dev1";
  }
  
  function dev2() {
  //  alert("YOU CLICKED DEV2");
    document.getElementById("output-content").innerHTML = "dev2";
  }



