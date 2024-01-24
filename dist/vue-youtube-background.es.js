import { openBlock as r, createElementBlock as c, createElementVNode as i, normalizeStyle as d, renderSlot as l } from "vue";
const u = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [s, e] of n)
    o[s] = e;
  return o;
}, a = {
  name: "YoutubeBackground",
  props: {
    videoId: { type: String, required: !0 }
  },
  data() {
    return {
      youtubeUrl: "",
      sizeStyle: ""
    };
  },
  mounted() {
    this.youtubeUrl = `https://www.youtube.com/embed/${this.videoId}?showinfo=0&controls=0&autoplay=1&mute=1&playsinline=1&loop=1&rel=0&playlist=${this.videoId}`;
    const t = () => {
      let n = document.getElementById("youtube-background-banner");
      const o = n.clientHeight, s = n.clientWidth;
      if (s / o < 16 / 9) {
        let e = o * 16 / 9;
        this.sizeStyle = `width:${e}px;height:100%;`;
      } else {
        let e = s * 9 / 16;
        this.sizeStyle = `width:100%; height:${e}px;`;
      }
    };
    t(), window.addEventListener("resize", t);
  }
}, h = { id: "youtube-background-banner" }, p = { class: "youtube-container" }, y = ["src"], _ = { class: "slot-container" };
function b(t, n, o, s, e, m) {
  return r(), c("div", h, [
    i("div", p, [
      i("iframe", {
        style: d(e.sizeStyle),
        src: e.youtubeUrl
      }, null, 12, y)
    ]),
    i("div", _, [
      l(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const g = /* @__PURE__ */ u(a, [["render", b], ["__scopeId", "data-v-6b139446"]]);
export {
  g as YoutubeBackground
};
