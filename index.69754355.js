(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const s=["TypeDrummer","VoiceDrummer","RetroDrummer"],f=new Map([["a",{file:"/a.mp3"}],["b",{file:"/b.mp3"}],["c",{file:"/c.mp3"}],["d",{file:"/d.mp3"}],["e",{file:"/e.mp3"}],["f",{file:"/f.mp3"}],["g",{file:"/g.mp3"}],["h",{file:"/h.mp3"}],["i",{file:"/i.mp3"}],["j",{file:"/j.mp3"}],["k",{file:"/k.mp3"}],["l",{file:"/l.mp3"}],["m",{file:"/m.mp3"}],["n",{file:"/n.mp3"}],["o",{file:"/o.mp3"}],["p",{file:"/p.mp3"}],["q",{file:"/q.mp3"}],["r",{file:"/r.mp3"}],["s",{file:"/s.mp3"}],["t",{file:"/t.mp3"}],["u",{file:"/u.mp3"}],["v",{file:"/v.mp3"}],["w",{file:"/w.mp3"}],["x",{file:"/x.mp3"}],["y",{file:"/y.mp3"}],["z",{file:"/z.mp3"}]]);s.forEach(o=>{const t=o.toLowerCase();[...f].map(n=>n[0]).forEach(n=>{new Audio(`/${t}/${n}.mp3`)})});const m=240;let a,l=0;const d=document.querySelector(".container"),u=document.querySelector(".soundbox"),y=document.querySelector(".logo"),h=document.querySelector(".text-logo"),L=()=>Array.from(u.value.toLowerCase()),x=()=>u.value.length,w=(o,t)=>{o.classList.add(t),setTimeout(()=>o.classList.remove(t),m*1.5)},E=o=>{const t=s[l].toLowerCase();f.has(o)&&(new Audio(t+f.get(o).file).play(),o==="o"&&w(y,"beat"))},g=()=>{clearTimeout(a);const o=L(),t=x();o.forEach((i,n)=>{setTimeout(()=>E(i),m*(n+1))}),a=setTimeout(()=>g(),m*t)};y.addEventListener("click",()=>{l=(l+1)%s.length;const o=s[l];s.forEach(t=>d.classList.remove(t.toLowerCase())),d.classList.add(o.toLowerCase()),h.textContent=o});g();const p=new URL(location).searchParams;p.has("text")&&(u.value=p.get("text"));