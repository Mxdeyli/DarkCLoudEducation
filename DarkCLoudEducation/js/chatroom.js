window.onload = function() {
    var card = document.getElementById("chat-window");
    function Messagebox(AllMessages, UserName) {
        console.log(allMessagesFromServer);
        console.log(userNameFromServer);
        if (!AllMessages || AllMessages.length === 0) return;

        for (let i = 0; i < AllMessages.length; i++) {
            if (!AllMessages[i]) continue;

            const parts = AllMessages[i].split("|");
            if (parts.length < 2) continue;

            if (!AllMessages[i] || AllMessages[i].trim() === "") continue;

            const messageUser = parts[0];
            const messageText = parts[1];
            const messageTime = parts[2] || "";

            const messageDiv = document.createElement("div");
            messageDiv.className = "message "+ (messageUser === UserName ? "sent" : "received");


            const userDiv=document.createElement("div");
            let textDiv;
            let timeDiv;
            if(messageUser === UserName)
            {
                textDiv = document.createElement("div");
                textDiv.className = "message-text-right";
                textDiv.innerText = messageText;
                userDiv.className = "user-name-right";
                userDiv.innerText = messageUser;
                timeDiv = document.createElement("div");
                timeDiv.className = "message-time-right";
                timeDiv.innerText = " " + messageTime;
            }
            else
            {
                userDiv.className = "user-name-left";
                userDiv.innerText = messageUser;
                textDiv = document.createElement("div");
                textDiv.className = "message-text-left";
                textDiv.innerText = messageText;
                timeDiv = document.createElement("div");
                timeDiv.className = "message-time-left";
                timeDiv.innerText = " " + messageTime;
            }
            messageDiv.appendChild(textDiv);
            messageDiv.appendChild(timeDiv);
            card.appendChild(userDiv);
            card.appendChild(messageDiv);
        }
    }

    Messagebox(window.allMessagesFromServer || [], window.userNameFromServer || "");
}