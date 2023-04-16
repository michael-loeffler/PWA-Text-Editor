const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    console.log("beforeinstallprompt event triggered!");
    window.deferredPrompt = event;
    butInstall.style.display = "inline-block";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log("Install button clicked!")
    window.deferredPrompt.prompt();
    const { outcome } = await window.deferredPrompt.userChoice;
    if (outcome === 'accepted') {
        window.deferredPrompt = null;
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log("Just Another Text Editor has been successfully installed!")
    butInstall.style.display = "none";
    window.deferredPrompt = null;
});
// when is this fired? app automatically opens in a new window and closes browser tab-- is that an issue?
