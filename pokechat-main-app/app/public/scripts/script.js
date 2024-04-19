const form = document.querySelector("form");

var textarea = document.querySelector("textarea");
textarea.scrollTop = textarea.scrollHeight;

form.addEventListener("submit", e => { 
    const msg = `${form.elements["newMessage"].value}`;
    form.elements["newMessage"].readOnly = true;
    form.elements["newMessage"].style.color = "transparent";

    textarea.value += `me: ${msg}\n`;
    textarea.value += "...";
    textarea.scrollTop = textarea.scrollHeight;
    addDot();
})

function addDot() { 
    setTimeout(() => {
        textarea.value += ".";
        removeDot();
    }, 500);
}

function removeDot() { 
    setTimeout(() => {
        textarea.value = textarea.value.slice(0, -1);
        addDot();
    }, 500);
}