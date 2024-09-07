if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log("Sw Registered");
      console.log(registration);
    })
    .catch((error) => {
      console.log("Sw registration failed");
      console.log(error);
    });
} else {
}

let defferedPrompt;
const addbtn = document.querySelector(".btn");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  defferedPrompt = event;
  addbtn.style.display = "block";
});

addbtn.addEventListener("click", (event) => {
  defferedPrompt.prompt();

  defferedPrompt.userChoice.then((choice) => {
    if (choice.outcome === "accepted") {
      console.log("user accepted the prompt");
    }
    defferedPrompt = null;
  });
});
