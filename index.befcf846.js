(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function l(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=l(o);fetch(o.href,i)}})();const c=["TypeDrummer","RetroDrummer","VoiceDrummer","PhilDrummer"],u=new Map([["a",{file:"/a.mp3"}],["b",{file:"/b.mp3"}],["c",{file:"/c.mp3"}],["d",{file:"/d.mp3"}],["e",{file:"/e.mp3"}],["f",{file:"/f.mp3"}],["g",{file:"/g.mp3"}],["h",{file:"/h.mp3"}],["i",{file:"/i.mp3"}],["j",{file:"/j.mp3"}],["k",{file:"/k.mp3"}],["l",{file:"/l.mp3"}],["m",{file:"/m.mp3"}],["n",{file:"/n.mp3"}],["o",{file:"/o.mp3"}],["p",{file:"/p.mp3"}],["q",{file:"/q.mp3"}],["r",{file:"/r.mp3"}],["s",{file:"/s.mp3"}],["t",{file:"/t.mp3"}],["u",{file:"/u.mp3"}],["v",{file:"/v.mp3"}],["w",{file:"/w.mp3"}],["x",{file:"/x.mp3"}],["y",{file:"/y.mp3"}],["z",{file:"/z.mp3"}]]);c.forEach(e=>{const t=e.toLowerCase();[...u].map(r=>r[0]).forEach(r=>{new Audio(`/${t}/${r}.mp3`)})});const a=240,p=document.querySelector(".container"),d=document.querySelector(".soundbox"),n=document.querySelector(".logo"),L=document.querySelector(".text-logo");let f=0,y;const w=()=>Array.from(d.value.toLowerCase()),x=()=>d.value.length,s=(e,t)=>{e.classList.add(t),setTimeout(()=>e.classList.remove(t),a*1.5)},E=e=>{const t=c[f].toLowerCase();u.has(e)&&(new Audio(t+u.get(e).file).play(),e==="o"&&s(n,"beat"),e==="f"&&s(n,"jump"),e==="k"&&s(n,"right"),e==="i"&&s(n,"left"),e==="w"&&s(n,"rave"),e==="n"&&s(n,"spin"),e==="l"&&s(n,"antispin"),e==="r"&&s(n,"random"))},h=()=>{clearTimeout(y);const e=w(),t=x();e.forEach((l,r)=>{setTimeout(()=>E(l),a*(r+1))}),y=setTimeout(()=>h(),a*t)};n.addEventListener("click",()=>{f=(f+1)%c.length;const e=c[f];c.forEach(t=>p.classList.remove(t.toLowerCase())),p.classList.add(e.toLowerCase()),L.textContent=e});h();const g=new URL(location).searchParams;g.has("text")&&(d.value=g.get("text"));
