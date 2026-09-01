document.addEventListener("DOMContentLoaded", () => {
    const videos = [
    {
    title: "Talking Tech and AI with Google CEO Sundar Pichai!",
    author: "Marques Brownlee",
    views: "3.4M views • 6 months ago",
    duration: "14:20",
    category: "Tech",
    thumbnail: "thumbnails/thumbnail-1.webp",
    channelImage: "channel-pictures/channel-1.jpeg",
    link: "https://www.youtube.com/watch?v=n2RNcPRtAiY"
    },
    {
    title: "Try Not To Laugh Challenge #9",
    author: "Markiplier",
    views: "19M views • 4 years ago",
    duration: "8:22",
    category: "Entertainment",
    thumbnail: "thumbnails/thumbnail-2.webp",
    channelImage: "channel-pictures/channel-2.jpeg",
    link: "https://www.youtube.com/watch?v=mP0RAo9SKZk"
    },
    {
    title: "Crazy Tik Toks Taken Moments Before DISASTER",
    author: "SSSniperWolf",
    views: "12M views • 1 year ago",
    duration: "9:13",
    category: "Entertainment",
    thumbnail: "thumbnails/thumbnail-3.webp",
    channelImage: "channel-pictures/channel-3.jpeg",
    link: "https://www.youtube.com/"
    },
    {
    title: "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
    author: "Veritasium",
    views: "18M views • 4 months ago",
    duration: "22:09",
    category: "Science",
    thumbnail: "thumbnails/thumbnail-4.webp",
    channelImage: "channel-pictures/channel-4.jpeg",
    link: "https://www.youtube.com/"
    },
    {
    title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
    author: "CS Dojo",
    views: "519K views • 5 years ago",
    duration: "11:17",
    category: "Programming",
    thumbnail: "thumbnails/thumbnail-5.webp",
    channelImage: "channel-pictures/channel-5.jpeg",
    link: "https://www.youtube.com/"
    },
    {
    title: "Anything You Can Fit In The Circle I'll Pay For",
    author: "MrBeast",
    views: "141M views • 1 year ago",
    duration: "19:59",
    category: "Entertainment",
    thumbnail: "thumbnails/thumbnail-6.webp",
    channelImage: "channel-pictures/channel-6.jpeg",
    link: "https://www.youtube.com/"
    },
    {
    title: "Why Planes Don't Fly Over Tibet",
    author: "RealLifeLore",
    views: "6.6M views • 1 year ago",
    duration: "10:13",
    category: "Science",
    thumbnail: "thumbnails/thumbnail-7.webp",
    channelImage: "channel-pictures/channel-7.jpeg",
    link: "https://www.youtube.com/"
    },
    {
    title: "Inside The World's Biggest Passenger Plane",
    author: "Tech Vision",
    views: "3.7M views • 10 months ago",
    duration: "7:12",
    category: "Technology",
    thumbnail: "thumbnails/thumbnail-8 (1).webp",
    channelImage: "channel-pictures/channel-8.jpeg",
    link: "https://www.youtube.com/"
    },
    {
    title: "The SECRET to Super Human STRENGTH",
    author: "ThenX",
    views: "20M views • 3 years ago",
    duration: "13:17",
    category: "Fitness",
    thumbnail: "thumbnails/thumbnail-9.webp",
    channelImage: "channel-pictures/channel-9.jpeg",
    link: "https://www.youtube.com/"
    },
    {
    title: "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
    author: "Business Insider",
    views: "14M views • 1 year ago",
    duration: "7:53",
    category: "Business",
    thumbnail: "thumbnails/thumbnail-10.webp",
    channelImage: "channel-pictures/channel-10.jpeg",
    link: "https://www.youtube.com/"
    },
    {
    title: "Dubai's Crazy Underwater Train and Other Things #OnlyInDubai",
    author: "Destination Tips",
    views: "3M views • 1 year ago",
    duration: "4:10",
    category: "Travel",
    thumbnail: "thumbnails/thumbnail-11.webp",
    channelImage: "channel-pictures/channel-11.jpeg",
    link: "https://www.youtube.com/"
    },
    {
    title: "What Would Happen If You Didn't Drink Water?",
    author: "TED-Ed",
    views: "12M views • 5 years ago",
    duration: "4:51",
    category: "Education",
    thumbnail: "thumbnails/thumbnail-12.webp",
    channelImage: "channel-pictures/channel-12.jpeg",
    link: "https://www.youtube.com/"
    }
    ];


    const videoGrid = document.getElementById("videoGrid");
    const searchBar = document.querySelector(".search-bar");
    const searchBtn = document.querySelector(".search-button");
    const voiceBtn = document.querySelector(".voice-search-button");
    const chips = document.querySelectorAll(".chip");


    function displayVideos(videoArray) {
    if (!videoGrid) return; 

    videoGrid.innerHTML = "";

    if (videoArray.length === 0) {
    videoGrid.innerHTML = `
        <h2 style="padding:40px;">
        No videos found.
        </h2>
    `;
    return;
    }

    videoArray.forEach(video => {
    videoGrid.innerHTML += `
        <div class="video-preview">
        <div class="thumbnail-row">
            <a href="${video.link}" target="_blank">
            <img
                class="thumbnail"
                src="${video.thumbnail}">
            </a>
            <div class="video-time">
            ${video.duration}
            </div>
        </div>

        <div class="video-info-grid">
            <div class="channel-picture">
            <img
                class="profile-picture"
                src="${video.channelImage}">
            </div>

            <div class="video-info">
            <p class="video-title">
                ${video.title}
            </p>

            <p class="video-author">
                ${video.author}
            </p>

            <p class="video-stats">
                ${video.views}
            </p>
            </div>
        </div>
        </div>
    `;
    });
}


function runSearch() {
    if (!searchBar || !videoGrid) return;

    const currentValue = searchBar.value.toLowerCase();
    const cards = videoGrid.querySelectorAll(".video-preview");

    cards.forEach(card => {
    const titleEl = card.querySelector(".video-title");
    if (!titleEl) return;

    const titleText = titleEl.textContent.toLowerCase();

    if (titleText.includes(currentValue)) {
        card.style.display = "";
    } else {
        card.style.display = "none";
    }
    });
}


    if (searchBtn) {
    searchBtn.addEventListener("click", runSearch);
}

    if (searchBar) {
    searchBar.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        runSearch();
    }
    });
}


    const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition && voiceBtn) {
    const recognition = new SpeechRecognition();

    recognition.lang = "en-NG";
    recognition.continuous = false;
    recognition.interimResults = false;

    voiceBtn.addEventListener("click", () => {
    recognition.start();
    voiceBtn.style.background = "#d9d9d9";
    voiceBtn.title = "Listening...";
    });

    recognition.onresult = event => {
    if (searchBar) {
        searchBar.value = event.results[0][0].transcript;
    }
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
} else if (voiceBtn) {
    voiceBtn.style.display = "none";
}


    chips.forEach(chip => {
    chip.addEventListener("click", function () {
    chips.forEach(button => {
        button.classList.remove("active");
    });

    this.classList.add("active");

    const category = this.dataset.category;

    if (category === "All") {
        displayVideos(videos);
        return;
    }

    const filteredVideos = videos.filter(video => {
        return video.category.toLowerCase() === category.toLowerCase();
    });

        displayVideos(filteredVideos);
    });
});

    displayVideos(videos);
});