(()=>{"use strict";const e=document.querySelector(".finished"),t=document.querySelector(".check-button");e.addEventListener("click",(function(){t.classList.toggle("checked")})),document.querySelector(".addButton").addEventListener("click",(function(){c("todo")})),document.querySelector(".trash").addEventListener("click",(function(){this.parentNode.parentNode.remove()}));const n=e=>{let t=document.createElement("input");return t.classList=e,t.innerText=e,t.type="button",t},d=e=>{let t=document.createElement("p");return t.innerText=e,t},c=e=>{let t=document.createElement("button");t.classList.add("check-button");let c=document.createElement("div");c.classList.add("leftHalf");let a=document.createElement("img");a.src="../images/Coffee-Cup-Silhouette.svg",c.appendChild(a);let i=document.createElement("p");i.classList.add("name"),i.innerHTML=e,c.appendChild(i);let l=document.createElement("div");l.classList.add("rightHalf");let o=document.createElement("p");o.classList.add("date"),o.innerHTML="Date goes here",l.appendChild(o);let r=document.createElement("p");r.classList.add("edit"),r.innerHTML="Edit goes here",r.addEventListener("click",(function(){(e=>{const t=document.querySelector(".edit-popup");t.className="edit-popup-visible";const c=document.createElement("div");c.className="editField";let a=document.createElement("textarea");a.innerHTML=e,c.appendChild(a);const i=document.createElement("div");i.classList="dateContainer";let l=document.createElement("p");l.textContent="Select Date: ",i.appendChild(l);let o=document.createElement("input");o.type="date",i.appendChild(o),c.appendChild(i);const r=document.createElement("div");r.classList="priorityContainer",r.appendChild(d("Low")),r.appendChild(d("Medium")),r.appendChild(d("High")),c.appendChild(n("X"));const s=document.createElement("div");s.classList="bottomDiv",s.appendChild(r),s.appendChild(n("Confirm")),c.appendChild(s),t.appendChild(c)})(document.querySelector(".name").textContent)})),l.appendChild(r);let s=document.createElement("p");s.classList.add("trash"),s.innerHTML="Trash goes here",s.addEventListener("click",(function(){s.parentNode.parentNode.remove()})),l.appendChild(s),t.appendChild(c),t.appendChild(l);const p=document.querySelector(".todo");p.appendChild(t),p.appendChild(t)}})();