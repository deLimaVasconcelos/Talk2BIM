import { Viewer, XKTLoaderPlugin } from
  "https://cdn.jsdelivr.net/npm/@xeokit/xeokit-sdk/dist/xeokit-sdk.es.min.js";

// Viewer
const viewer = new Viewer({
  canvasId: "viewer",
  transparent: true
});

// Loader
const xktLoader = new XKTLoaderPlugin(viewer);

// TODO: später dein Modell hier laden
// xktLoader.load({
//   id: "demo",
//   src: "models/demo/model.xkt",
//   metaModelSrc: "models/demo/meta.json"
// });

// Chat (Dummy)
const log = document.getElementById("chat-log");
const input = document.getElementById("chat-input");

function add(text, from="bot") {
  const div = document.createElement("div");
  div.textContent = (from === "user" ? "🧑 " : "🤖 ") + text;
  log.appendChild(div);
}

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const msg = input.value;
    input.value = "";
    add(msg, "user");

    if (msg.toLowerCase().includes("hallo")) {
      add("Hallo! Ich bin Talk2BIM 👋");
    } else {
      add("Ich höre zu 👂");
    }
  }
});

add("Hallo! Frag mich etwas zum Modell.");
