
    
    
        if(annyang){
            console.log("Annyang works!");            

            var commands ={
                'hi' : greetings,
                'if' : ifState,
                'x' : x,
                'y' : y,
                'less than' : lessThan,
                'while' : whileState,
                'finish' : colon,
                'indent' : indent,
                'right' : right,
                'left' : left,
                'down' : down
            }
            function x(){
                var code = document.getElementById("code").textContent;
                document.getElementById("comment").innerHTML = " ";
                document.getElementById("code").innerHTML = code+"x";
            }
            function y(){
                var code = document.getElementById("code").textContent;
                document.getElementById("comment").innerHTML = " ";
                document.getElementById("code").innerHTML = code+"y";
            }
            function lessThan(){
                var code = document.getElementById("code").textContent;
                document.getElementById("comment").innerHTML = " ";
                document.getElementById("code").innerHTML = code+"<";
            }

            function greetings(){
                var code = document.getElementById("code").textContent;
                document.getElementById("comment").innerHTML = "Welcome ! I am listening...";
                document.getElementById("code").innerHTML = code+"";
            }
            function ifState(){
                var code = document.getElementById("code").textContent;
                document.getElementById("comment").innerHTML = "waiting condition ...";
                document.getElementById("code").innerHTML = code+"if ";
            }
            function whileState(){
                var code = document.getElementById("code").textContent;
                document.getElementById("comment").innerHTML = "waiting condition...";
                document.getElementById("code").innerHTML = code+"while ";
            }
            function colon(){
                var code = document.getElementById("code").textContent;
                document.getElementById("comment").innerHTML = " ";
                document.getElementById("code").innerHTML = code+":";
            }
            function down(){
                var code = document.getElementById("code").textContent;
                document.getElementById("comment").innerHTML = "new line added";
                document.getElementById("code").innerHTML = code+"\n";
            }
            function indent(){
                var code = document.getElementById("code").textContent;
                document.getElementById("comment").innerHTML = "new indent added";
                document.getElementById("code").innerHTML = code+"    ";
            }
            function right(){
                var code = document.getElementById("code").textContent;
                document.getElementById("comment").innerHTML = "navigation";
                document.getElementById("code").innerHTML = code+"⟼";
            }
            function left(){
                var code = document.getElementById("code").textContent;
                
                document.getElementById("comment").innerHTML = "navigation";
                document.getElementById("code").innerHTML = code+"⟻";
            }

            // Add Commands
            annyang.addCommands(commands);
            // Start Listening
            
        }
        annyang.start({ autoRestart: true, continuous: false });

