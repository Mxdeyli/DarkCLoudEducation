window.addEventListener("load", () => {
    const chat = document.getElementById("chat-window");
    const data = window.chatData;
    if (!data || data.messages.length === 0) {
        return;
    }

    const messages = document.createDocumentFragment();
    for (const entry of data.messages) {
        const sent = entry.User === data.userName;
        const side = sent ? "right" : "left";
        const name = document.createElement("div");
        name.className = "user-name-" + side;
        name.textContent = entry.User;

        const message = document.createElement("div");
        message.className = sent ? "message sent" : "message received";

        const text = document.createElement("div");
        text.className = "message-text-" + side;
        text.textContent = entry.Text;

        const time = document.createElement("div");
        time.className = "message-time-" + side;
        time.textContent = entry.Time;

        message.append(text, time);
        messages.append(name, message);
    }
    chat.replaceChildren(messages);
    chat.scrollTop = chat.scrollHeight;
});
