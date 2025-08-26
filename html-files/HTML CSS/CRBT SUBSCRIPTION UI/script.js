document.addEventListener("DOMContentLoaded", () => {
    const currentTuneDisplay = document.getElementById("currentTune");
    let currentTune = "None";

    // Subscribe Button Logic
    document.querySelectorAll(".sub-btn").forEach(button => {
        button.addEventListener("click", () => {
            const songName = button.closest(".song-card").querySelector(".song-title").innerText;
            currentTune = songName;
            currentTuneDisplay.innerText = currentTune;
            alert(`Subscribed to: ${songName}`);
        });
    });

    // Unsubscribe Button Logic
    document.querySelectorAll(".unsub-btn").forEach(button => {
        button.addEventListener("click", () => {
            const songName = button.closest(".song-card").querySelector(".song-title").innerText;
            if (currentTune === songName) {
                currentTune = "None";
                currentTuneDisplay.innerText = currentTune;
            }
            alert(`Unsubscribed from: ${songName}`);
        });
    });
});
