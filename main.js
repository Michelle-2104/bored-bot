

document.getElementById("get-activity").addEventListener("click", function (){


fetch("https://apis.scrimba.com/bored/api/activity")
.then(res => res.json())
.then(data =>{ document.getElementById("activity").textContent = data.activity
    document.getElementById("app-title").textContent = "😻 HAPPY BOT 😻"
})
})