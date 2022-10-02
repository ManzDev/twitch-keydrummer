export const MODES = ["TypeDrummer", "VoiceDrummer", "RetroDrummer"];

export const soundBank = new Map([
  ["a", { file: "/a.mp3" }],
  ["b", { file: "/b.mp3" }],
  ["c", { file: "/c.mp3" }],
  ["d", { file: "/d.mp3" }],
  ["e", { file: "/e.mp3" }],
  ["f", { file: "/f.mp3" }],
  ["g", { file: "/g.mp3" }],
  ["h", { file: "/h.mp3" }],
  ["i", { file: "/i.mp3" }],
  ["j", { file: "/j.mp3" }],
  ["k", { file: "/k.mp3" }],
  ["l", { file: "/l.mp3" }],
  ["m", { file: "/m.mp3" }],
  ["n", { file: "/n.mp3" }],
  ["o", { file: "/o.mp3" }],
  ["p", { file: "/p.mp3" }],
  ["q", { file: "/q.mp3" }],
  ["r", { file: "/r.mp3" }],
  ["s", { file: "/s.mp3" }],
  ["t", { file: "/t.mp3" }],
  ["u", { file: "/u.mp3" }],
  ["v", { file: "/v.mp3" }],
  ["w", { file: "/w.mp3" }],
  ["x", { file: "/x.mp3" }],
  ["y", { file: "/y.mp3" }],
  ["z", { file: "/z.mp3" }]
]);

MODES.forEach(mode => {
  const folder = mode.toLowerCase();
  const keys = [...soundBank].map(item => item[0]);

  keys.forEach(key => {
    new Audio(`/${folder}/${key}.mp3`);
    // Preload assets (Google-unsupported)
    /*
    const linkTag = `<link rel="preload" href="/${folder}/${key}.mp3" as="audio">`;
    document.head.insertAdjacentHTML("beforeend", linkTag);
    */
  });
});
