// ==UserScript==
// @name     Búsquedas de Youtube
// @version  1
// @grant    none
// ==/UserScript==

if (!window.location.href.startsWith("https://www.youtube.com/results?")) {
    return;
}

window.addEventListener("load", function () {
    const boton = document.createElement("button");
    Object.assign(boton.style, {
        position: "fixed",
        top: "30px",
        left: "auto",
        right: "5px",
        bottom: "auto",
        zIndex: 9999,
        padding: "2px",
        border: "1px solid #333",
        borderRadius: "3pt",
    });
    boton.textContent = "Obtener lista";
    boton.addEventListener("click", function () {
        const datos = Array.from(document.querySelectorAll("ytd-video-renderer")).map(function (el) {
            return {
                title: el.querySelector("#video-title").getAttribute("title"),
                link: el.querySelector(".yt-simple-endpoint").href,
                time: el.querySelector("ytd-thumbnail-overlay-time-status-renderer").textContent.trim(),
                channel: el.querySelector(".ytd-channel-name a").textContent,
                channel_link: el.querySelector(".ytd-channel-name a").href,
            };
        });
        const elemento_textarea = document.createElement("textarea");
        Object.assign(elemento_textarea.style, {
            position: "fixed",
            top: "auto",
            left: "5px",
            right: "5px",
            bottom: "5px",
            height: "40px",
            width: "100%",
            zIndex: 9999,
            padding: "2px",
            border: "1px solid #333",
            borderRadius: "3pt",
            fontSize: "10px",
            boxSizing: "border-box",
        });
        elemento_textarea.value = JSON.stringify(datos);
        document.body.appendChild(elemento_textarea);
    });
    document.body.appendChild(boton);
});