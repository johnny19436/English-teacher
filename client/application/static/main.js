// document.getElementById('chat-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     var userInput = document.getElementById('user-input').value;
//     if (!userInput.trim()) return; // Check if input is empty or only whitespace

//     var messageArea = document.getElementById('message-area');
//     var userMessage = document.createElement('div');
//     userMessage.classList.add('user-message');
//     userMessage.textContent = userInput;
//     messageArea.appendChild(userMessage);

//     document.getElementById('user-input').value = ''; // Clear input field after sending message
// });


document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let Input = document.getElementById('user-input').value;
    if (!Input.trim()) return; // Check if input is empty or only whitespace

    var messageArea = document.getElementById('message-area');
    var userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = Input;
    messageArea.appendChild(userMessage);

    document.getElementById('user-input').value = ''; // Clear input field after sending message


    postReq(Input).then( ()=>{
        setTimeout(function() {
            console.log("posted")
        }, 2000);
        getReq()
    } );
});


function getReq(){
    $.getJSON("http://localhost:4000/chat", function(data) {

        document.getElementById("chat-box").innerHTML = data.text;

        // while (true){
        //     if (obj.innerHTML == data.text){
        //         setTimeout(function() {
        //             console.log("After waiting");
        //         }, 200);
        //     }
        //     else if(obj.innerHTML != data.text){
        //         obj.innerHTML = data.text;
        //         return;
        //     }
        // }
    });
}
/*
return form: 
{"text": ...}
*/

function postReq(Input){
    return $.ajax({
        method: "POST",
        url: "http://localhost:4000/chat",
        dataType: 'json', 
        contentType: 'application/json',
        data: JSON.stringify({"text": Input}),
        success: function(data) {
            console.log("Successful add!");
            return data
        }
    });
}

/*
post form:
{"text": ...}

respond form:
{"result": "success"}
*/