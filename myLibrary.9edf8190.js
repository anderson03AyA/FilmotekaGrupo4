!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire709e;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequire709e=o);var i=o("8lXr3"),a=document.getElementById("queue-movies--btn"),r=document.getElementById("movies-container");a.addEventListener("click",(function(){var e=JSON.parse(localStorage.getItem("queueList")),n="",t=e.map((function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i.API_KEY,"&language=en")).then((function(e){return e.json()}))}));Promise.all(t).then((function(e){e.forEach((function(e){console.log(e),""===e.release_date&&(e.release_date="Sin año registrado");var t="".concat("https://image.tmdb.org/t/p/","w500").concat(e.poster_path),o=e.genres.map((function(e){return e.name})).join(" | "),i='\n        \n        <div class="photo-card">\n        <div class="info">\n        <a onclick="openModal(\''.concat(e.id,'\')" class="info__poster">\n            <img class="info__poster--img" src="').concat(t,'" alt="').concat(e.title,'" loading="lazy" width="100px" height="100px" id="info__poster--img" />\n          </a>\n          <h3 class="info__title">\n            <strong class="title">').concat(e.title,'</strong>\n          </h3>\n          <p class="info__genre">\n            ').concat(o," | ").concat(e.release_date,'\n          </p>\n          <p class="info-item"></p>\n        </div>\n      </div>\n        ');n+=i})),r.innerHTML=n})).catch((function(e){return console.error(e)}))}))}();
//# sourceMappingURL=myLibrary.9edf8190.js.map
