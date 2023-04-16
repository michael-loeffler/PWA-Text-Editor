const butInstall = document.getElementById('buttonInstall');

// Event listener to look for the browser generated "beforeinstallprompt" event which is triggered when an application meets required installation criteria, and unhides the Install button when this event fires.
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    console.log("beforeinstallprompt event triggered!");
    window.deferredPrompt = event;
    butInstall.style.display = "inline-block";
});

// Event listener for when the Install button is clicked. The prompt generated from the "beforeinstallprompt" event is released so that the user can choose whether or not to install the application. If they choose to install the app, it will automatically install to their device. The prompt is then deleted.
butInstall.addEventListener('click', async () => {
    console.log("Install button clicked!")
    window.deferredPrompt.prompt();
    const { outcome } = await window.deferredPrompt.userChoice;
    console.log("User's choice to install application?", outcome);
    if (outcome === 'accepted') {
        window.deferredPrompt = null;
    }
});

// Event listener for the browser generated "appinstalled" event, which is triggered when the app has finished installing. To complete the process, the Install button is hidden from view.
window.addEventListener('appinstalled', (event) => {
    console.log("Just Another Text Editor has been successfully installed!")
    butInstall.style.display = "none";
    window.deferredPrompt = null;
});




// **when is this fired? app automatically opens in a new window and closes browser tab-- is that an issue?**
