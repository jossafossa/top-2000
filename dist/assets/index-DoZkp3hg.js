(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();class d{constructor(t={}){this.events={}}on(t,e){this.events[t],this.events[t]=[],this.events[t].push(e)}emit(t,e){if(t in this.events)for(let r of this.events[t])r(e)}}class f extends d{getElement(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.children.length>1?e.children:e.firstChild}getItem(t){let{position:e,title:r,artist:s,change:i,changeLabel:n,image:o,new:l}=t,c=i<0?"is-negative":"is-positive";c=i===0?"is-neutral":c;let g=`
		<li data-id="${e}">
			
			<article class='list-entry'>
			
				<span>
					<strong>
						${e}
					</strong>
				</span>
				
				<header>
					
					<picture data-play>
						<img src='${o}' loading="lazy">
					</picture>
					
				</header>
				
				<section>
				
					<h2>
						${r}
					</h2>
					
					<h3>
						${s}
					</h3>
					
				</section>
				
				<footer>
					${l?'<span class="label">Nieuw</span>':""}
				
					<span class="label ${c}" data-change="${i}" >
						${n}
					</span>
				</footer>
				
			</article>
		</li>
		`;return this.getElement(g)}getItems(t){let e=t.map(r=>this.getItem(r));return console.log(e),e}getList(t){return this.getItems(t)}getSorter(t){let{name:e,label:r}=t;return`
			<button class='sorter' data-sort='${e}'>
				${r}
				<i class='asc fa fa-caret-up'></i>
				<i class='desc fa fa-caret-down'></i>
				<i class='icon fa fa-sort'></i>
			</button>
		`}getSorters(t){return t.map(e=>this.getSorter(e))}getFilters(t){return this.getElement(`
			<div class='sorters'>
				<span>Sorteer: </span>
				${this.getSorters(t.sort).join("")}
			</div>
		`)}getYearSelector(t,e){let r=this.getSelect("data-year",t,e),s=this.getSelect("data-previous",{...t,previous:null},"previous");return[r,s]}getSelect(t,e,r=!1){let s=Object.keys(e);return s=s.map(i=>{let n=r==i?"selected":"";return`<option value='${i}' ${n}>${i}</option> `}),this.getElement(`
			<select ${t}>
				${s.join("")}
			</select>
		`)}}class L{find(t,e){let r=t;for(const s of e)if(r&&r[s])r=r[s];else return!1;return r}sortBy(t,e,r=!0){return r=r?1:-1,t=[...t],t.sort((s,i)=>this.find(s,e)>this.find(i,e)?-1*r:1*r),t}}class v{downSizeImage(t){let e="w_100,h_100",r=t.split("/");return r=r.map(i=>i.startsWith("w_")?e:i),r.join("/")}sanitizeItem(t,e){let{position:r,track:s}=e,i=r.previous>0?r.previous:2e3,n=i-r.current,o=n>0?`+${n}`:n;o=n===0?"—":o;let l=r.previous===0;return{id:e.id,time:e.broadcastUnixTime,position:r.current,previousPosition:i,new:l,year:t,change:n,changeLabel:o,artist:s.artist,title:s.title,image:this.downSizeImage(s.coverUrl??"https://www.nporadio2.nl/images/unknown_track_m.webp")}}sanitizeList(t,e){return e.map(r=>this.sanitizeItem(t,r))}sanitize(t){return Object.fromEntries(Object.entries(t).map(([e,r])=>(e=parseInt(e),[e,this.sanitizeList(e,r)])))}compare(t=[],e=[]){return t.map(s=>{let i=e.find(n=>n.id===s.id);return i&&(s.previousPosition=i.position,s.change=i.position-s.position,s.changeLabel=s.change>0?`+${s.change}`:s.change,s.changeLabel=s.change===0?"—":s.changeLabel,s.new=i.position===0),s})}}class m{sortBy(t,e,r=!0){return t.sort((s,i)=>{for(const n of e){const o=Array.isArray(s[n])?s[n].length:s[n],l=Array.isArray(i[n])?i[n].length:i[n];if(o<l)return-1;if(o>l)return 1}return 0})}groupBy(t,e,r=s=>s){e=e!=null&&e.length?e:[e];let s=[];for(let i of t){let n=[];for(let l of e)n.push(i[l]||"other");let o=r(n.join(" - "));s[o]=(s==null?void 0:s[o])||[],s[o].push(i)}return s=Object.entries(s).map(([i,n])=>({key:i,entries:n,count:n.length})),s}getAveragePosition(t){return t.reduce((r,s)=>r+=s.position,0)/t.length}sanitizeSongKey(t){return t=t.replace(/\(.*\)/g,""),t=t.replace(/&/g,"en"),t=t.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\?]/g,""),t=t.toLowerCase().trim(),t}getList(t){let e=this.groupBy(t,"artist");for(let s of e)s.averagePosition=this.getAveragePosition(s.entries);return this.sortBy(e,["entries","key"]),{groupedByArtist:e}}getSong(t){return{averagePosition:t.reduce((r,s)=>r+=s.position,0)/t.length}}getSongs(t){let e=this.groupBy(t,["artist","title"],r=>this.sanitizeSongKey(r));for(let r of e){let s=this.getSong(r.entries);for(let[i,n]of Object.entries(s))r[i]=n}return e=this.sortBy(e,["averagePosition","count"]),e}getAll(t){console.log(t);let e=[...Object.values(t).flat()],r={};for(let[n,o]of Object.entries(t))r[n]=this.getList(o);let s=this.getSongs(e),i=s.map((n,o)=>{let l=n.entries[0],c=o+1;return{...l,averagePosition:n.averagePosition,position:c,change:0,previousPosition:c,changeLabel:Math.floor(n.averagePosition),new:!1,entries:n.entries}});return{years:r,songs:s,all:i}}}class w extends d{constructor(t){super(),this.sorters=t.querySelectorAll("[data-sort]");for(let e of this.sorters)e.addEventListener("click",r=>this.sort(e))}resetSort(){for(let t of this.sorters)t.sorted=!1,t.classList.remove("is-sorted"),t.classList.remove("is-asc")}sort(t){let{sort:e}=t.dataset;this.lastSort!==e&&this.resetSort(),t.classList.add("is-sorted");let r=t.sorted??!1;t.sorted=!r,t.classList[r?"add":"remove"]("is-asc"),this.emit("sort",{sort:e,asc:r}),this.lastSort=e}}class y extends d{constructor(t){super(),this.year=t.querySelector("[data-year]"),this.previous=t.querySelector("[data-previous]"),[this.year,this.previous].forEach(e=>this.addListeners(e))}addListeners(t){t.addEventListener("change",e=>this.switch(e))}switch(){let t=this.year.value,e=this.previous.value;this.emit("switch",[t,e])}}class S{constructor(t,e){this.root=t,this.renderer=new f,this.sorter=new L,this.sanitizer=new v,this.statistics=new m,this.filters={sort:[{name:"title",label:"title"},{name:"position",label:"position"},{name:"artist",label:"artist"},{name:"change",label:"change"}]},this.lists=this.sanitizer.sanitize(e),this.sortType=!1,this.sortOrder=!1,this.activeList=Object.keys(this.lists).sort().at(-1);let r=this.statistics.getAll(this.lists);this.lists.all=r.all,console.log(r),this.renderBase(t),this.renderList(this.activeList,this.getList());let s=this.renderYearSelection(this.lists,this.activeList),i=this.renderFilters(this.filters);this.sortListener=new w(i),this.sortListener.on("sort",({sort:n,asc:o})=>{this.sortType=n,this.sortOrder=o,this.renderList(this.activeList)}),this.listSwitcher=new y(s),this.listSwitcher.on("switch",([n,o])=>{this.activeList=n,this.renderList(this.activeList,this.getList(),o,this.getList(o))}),this.renderer.on("song-click",n=>{})}getList(t=!1){return t=t||this.activeList,this.lists[t]??!1}renderBase(t){this.filterRoot=document.createElement("header"),this.listWrapper=document.createElement("section"),this.listRoot=document.createElement("ul"),this.listRoot.classList.add("list"),this.listWrapper.append(this.listRoot),t.append(this.filterRoot,this.listWrapper)}renderList(t,e=!1,r=!1,s=!1){if(console.log({year:t,list:e,compareYear:r,compare:s}),e===!1&&(e=this.getList()),this.sortType&&(e=this.sorter.sortBy(e,[this.sortType],this.sortOrder)),t===this.renderedList&&s===this.comparedList){let n=e.map(o=>o.position);return this.reorderListCSS(this.listRoot,n),this.listRoot}s!==!1&&(e=this.sanitizer.compare(e,s));let i=this.renderer.getList(e,s);return this.setupEvents(i,e),this.listRoot.innerHTML="",this.listRoot.append(...i),this.renderedList=t,this.comparedList=r,this.listRoot}async play(t){console.log(song)}setupEvents(t,e){for(let r in t){let s=e[r];t[r].querySelector("[data-play]").addEventListener("click",o=>this.play(s))}}reorderListCSS(t,e){let r=[...t.children];for(let s of r){let i=parseInt(s.dataset.id),n=e.indexOf(i);s.style.order=n}}reorderListHTML(t,e){let r=[...t.children];r.sort((s,i)=>{const n=parseInt(s.dataset.id),o=parseInt(i.dataset.id);return e.indexOf(n)-e.indexOf(o)}),r.forEach(s=>{t.appendChild(s)})}renderFilters(t){let e=this.renderer.getFilters(t);return this.filterRoot.append(e),this.filterRoot}renderYearSelection(t,e){let r=this.renderer.getYearSelector(t,e);return this.filterRoot.append(...r),this.filterRoot}}const b=a=>a<2024?`https://www.nporadio2.nl/api/charts/top-2000-van-${a}-12-25`:`https://www.nporadio2.nl/api/charts/npo-radio-2-top-2000-van-${a}-12-25`,O=(a,t)=>{const e={};for(let r=a;r<=t;r++)e[r]=b(r);return e},h=new Date,u=h.getFullYear(),$=h.getMonth()===11&&h.getDate()>=12;let p=O(2e3,$?u:u-1);console.log({years:p});const E=async a=>{let t=await fetch(a),e;try{e=t.json()}catch{e=!1}return e},R=async a=>{let t=await Promise.all(Object.entries(a).map(async([e,r])=>{let s=await E(r);return(s==null?void 0:s.positions)===void 0?!1:[e,s.positions]}));return t=t.filter(e=>e!==!1),t=Object.fromEntries(t),t};(async()=>{let a=await R(p),t=document.querySelector("#app");new S(t,a),document.body.classList.add("loaded")})();
