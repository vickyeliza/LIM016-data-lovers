import data from './data/ghibli/ghibli.js';
import * as all from "./data.js";


//para hacer la parte de seccion de pelis con la imagen y su info
const root = document.getElementById("root");

const seccionPelis = (arrayData) => {
    root.innerHTML = '';
    arrayData.forEach((info) => {
        const InfoPelis = document.createElement('div');
        InfoPelis.className = 'info-pelis'
        InfoPelis.innerHTML = `
        <div>
        <!--contenedor del poster y su año-->
          <div class="div_poster-container">
            <figure class="poster">
              <input type="text" hidden value="${info.id}" id="${info.id}"/>
              <span class="year">${info.release_date}</span>
              <i class="score">${info.rt_score}%</i>
              <img src="${info.poster}"></img>
            </figure>
          </div>
  
          <!--contenedor de datos de la película-->
          <div id="div_info-container_${info.id}" class="div_info-container" style="display:none">
             <span class="movie-cross">
                <h2>${info.title}</h2>
                <img id="cross" src="https://i.postimg.cc/x8dGZhqx/remove.png">
                <input type="text" hidden value="${info.id}"/>
                </img>
             </span>
             <span class="score-year">
               <p class="score">Score: ${info.rt_score}</p>
               <p>${info.release_date}</p>
             </span>
             <p class="description">${info.description}</p>
             <p class="director">Director: ${info.director}</p>
             <p class="producer">Producer: ${info.producer}</p>
             <p class="moreinfo" id="${info.title}">Ver más</p>
          </div>
         </div>
        `
          root.appendChild(InfoPelis);
      });
  }
  seccionPelis(data.films);
  
  
  