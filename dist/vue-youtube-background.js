import { openBlock as r, createElementBlock as c, createElementVNode as s, normalizeStyle as d, renderSlot as l } from "vue";
const u = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [i, e] of o)
    n[i] = e;
  return n;
}, a = {
  name: "YoutubeBackground",
  props: {
    videoId: { type: String, required: !0 }
  },
  data() {
    return { youtubeUrl: "", sizeStyle: "" };
  },
  mounted() {
    this.youtubeUrl = `https://www.youtube.com/embed/${this.videoId}?showinfo=0&controls=0&autoplay=1&mute=1&playsinline=1&loop=1&rel=0&playlist=${this.videoId}`;
    const t = () => {
      let o = document.getElementById("youtube-background");
      if (!o)
        return;
      const n = o.clientHeight, i = o.clientWidth;
      if (i / n < 16 / 9) {
        let e = n * 16 / 9;
        this.sizeStyle = `width:${e}px;height:100%;`;
      } else {
        let e = i * 9 / 16;
        this.sizeStyle = `width:100%; height:${e}px;`;
      }
    };
    t(), window.addEventListener("resize", t);
  }
}, h = { id: "youtube-background" }, p = { class: "youtube-container" }, y = ["src"], _ = { class: "slot-container" };
function m(t, o, n, i, e, f) {
  return r(), c("div", h, [
    s("div", p, [
      s("iframe", {
        style: d(e.sizeStyle),
        src: e.youtubeUrl
      }, null, 12, y)
    ]),
    s("div", _, [
      l(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const g = /* @__PURE__ */ u(a, [["render", m], ["__scopeId", "data-v-f38a43c0"]]);
export {
  g as YoutubeBackground
};
