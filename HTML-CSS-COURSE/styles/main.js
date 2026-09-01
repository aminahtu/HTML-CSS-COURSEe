document.addEventListener("DOMContentLoaded", () => {
const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-button");
const voiceBtn = document.querySelector(".voice-search-button");
const chips = document.querySelectorAll(".chip");
const videoGrid = document.querySelector(".video-grid");


function runSearch() {
    const currentValue = searchBar.value.toLowerCase();
    const titles = document.querySelectorAll("p.video-title");

    titles.forEach((title) => {
    const card = title.closest(".video-preview");
    const titleText = title.textContent.toLowerCase();

    if (titleText.includes(currentValue)) {
        card.style.display = "";
    } else {
        card.style.display = "none";
    }
    });
    }

    searchBar.addEventListener("click", runSearch);

    searchBar.addEventListener("keydown", (e)=> {
        if (e.key === "Enter"){
            runSearch();
        }
    });

    const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
    const recognition = new SpeechRecognition();

    recognition.lang = "en-NG";
    recognition.continuous = false;
    recognition.interimResults = false;

    voiceBtn.addEventListener("click", () => {
    recognition.start();
    voiceBtn.style.background = "#d9d9d9";
    voiceBtn.title = "Listening...";
    });

    recognition.onresult = (event) => {
    searchBar.value = event.results[0][0].transcript;
    };

    recognition.onend = () => {
    voiceBtn.style.background = "#f2f2f2";
    voiceBtn.title = "Search with your voice";
    };

    recognition.onerror = () => {
    voiceBtn.style.background = "#f2f2f2";
    voiceBtn.title = "Search with your voice";
    alert("Couldn't hear you. Please try again.");
    };
    } else {
    voiceBtn.style.display = "none";
    }
});

