var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire709e;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequire709e=o);var i=o("4ukh0");o("edlQ8");const a=document.getElementById("queue-movies--btn"),r=document.getElementById("movies-container");document.querySelector(".pagination__page");a.addEventListener("click",(function(){const e=JSON.parse(localStorage.getItem("queueList"));let n="";const t=e.map((e=>fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=${i.API_KEY}&language=en`).then((e=>e.json()))));Promise.all(t).then((e=>{e.forEach((e=>{""===e.release_date&&(e.release_date="Sin año registrado");const t=`https://image.tmdb.org/t/p/w500${e.poster_path}`,o=e.genres.map((e=>e.name)).join(" | "),i=`\n        \n        <div class="photo-card">\n        <div class="info">\n        <a onclick="openModal('${e.id}')" class="info__poster">\n            <img class="info__poster--img" src="${t}" alt="${e.title}" loading="lazy" width="100px" height="100px" id="info__poster--img" />\n          </a>\n          <h3 class="info__title">\n            <strong class="title">${e.title}</strong>\n          </h3>\n          <p class="info__genre">\n            ${o} | ${e.release_date}\n          </p>\n          <p class="info-item"></p>\n        </div>\n      </div>\n        `;n+=i})),r.innerHTML=n})).catch((e=>console.error(e)))}));
//# sourceMappingURL=myLibrary.04583ab2.js.map
