(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();function s({localStorageTheme:t,systemSettingDark:r}){return t!==null?t:r.matches?"dark":"light"}function l(){const t=localStorage.getItem("theme"),r=window.matchMedia("(prefers-color-scheme: dark)");let o=s({localStorageTheme:t,systemSettingDark:r});d(o)}function d(t){document.querySelector("html").setAttribute("data-theme",t),document.getElementById("switch").checked=t==="dark",localStorage.setItem("theme",t)}window.addEventListener("load",()=>{const t=document.getElementById("switch");l(),t.addEventListener("click",()=>{const o=document.querySelector("html").getAttribute("data-theme")==="dark"?"light":"dark";d(o)})});window.addEventListener("load",()=>{document.getElementById("open-nav-btn").addEventListener("click",()=>{document.getElementById("my-side-nav").style.width="min(15rem, 100vw)",document.getElementById("my-side-nav").style.borderLeft="4px solid var(--color-primary)"}),document.getElementById("close-nav-btn").addEventListener("click",()=>{document.getElementById("my-side-nav").style.width="0",document.getElementById("my-side-nav").style.borderLeft="none"})});
