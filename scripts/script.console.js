(() => {
    const datos = Array.from(document.querySelectorAll("ytd-video-renderer")).map(el => {
        return {
            title: el.querySelector("#video-title").getAttribute("title"),
            link: el.querySelector(".yt-simple-endpoint").href,
            time: el.querySelector("ytd-thumbnail-overlay-time-status-renderer").textContent.trim(),
            channel: el.querySelector(".ytd-channel-name a").textContent,
            channel_link: el.querySelector(".ytd-channel-name a").href,
        };
    });
    console.log(JSON.stringify(datos));
})