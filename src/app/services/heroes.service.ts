import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes: Heroe[] = [
    {
      id: 0,
      nombre: 'Aquaman',
      imgperfil2: 'assets/img/aquaman/aquaman.jpg',
      bio: 'Miembro fundador de la Liga de la Justicia de América, Aquaman ha luchado junto a Superman, Batman y Wonder Woman, y se defendió contra las mayores amenazas que el universo haya visto. A pesar de que muchos lo malinterpretan como alguien que simplemente "habla con los peces", la súper fuerza de Aquaman y su habilidad para luchar solo lo convierten en una fuerza a tener en cuenta. Sus habilidades telepáticas lo convierten en una de las mentes más poderosas del planeta. Si uno elige subestimar al rey del mar, lo hace bajo su propio riesgo.',
      imgPerfil1: 'assets/img/aquaman/perfil.jpg',
      img2: 'assets/img/marcas/DC.jpg',
      imgComic: 'assets/img/aquaman/comic.jpg',
      imgLogo: 'assets/img/aquaman/logo.jpg',
      imgEscudo: 'assets/img/aquaman/escudo.jpg',
      imgMarca: 'assets/img/aquaman/marca.jpg',
      imgPortada1: 'assets/img/aquaman/portada1.jpg',
      imgPortada2: 'assets/img/aquaman/portada2.jpg',
      imgPortada3: 'assets/img/aquaman/portada3.jpg',
      aparicion: 'Nov-1941',
      casa: 'DC'
    },
    {
      id: 1,
      nombre: 'Batman',
      imgperfil2: 'assets/img/batman/batman.jpg',
      bio: 'Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje. A diferencia de los superhéroes, no tiene superpoderes: recurre a su intelecto, así como a aplicaciones científicas y tecnológicas para crear armas y herramientas con las cuales lleva a cabo sus actividades. Vive en la mansión Wayne, en cuyos subterráneos se encuentra la Batcave, el centro de operaciones de Batman',
      imgPerfil1: 'assets/img/batman/perfil.jpg',
      img2: 'assets/img/marcas/DC.jpg',
      imgComic: 'assets/img/batman/comic.jpg',
      imgLogo: 'assets/img/batman/logo.jpg',
      imgEscudo: 'assets/img/batman/escudo.jpg',
      imgMarca: 'assets/img/batman/marca.jpg',
      imgPortada1: 'assets/img/batman/portada1.jpg',
      imgPortada2: 'assets/img/batman/portada2.jpg',
      imgPortada3: 'assets/img/batman/portada3.jpg',
      aparicion: 'May-1939',
      casa: 'DC'
    },
    {
      id: 2,
      nombre: 'Daredevil',
      imgperfil2: 'assets/img/daredevil/daredevil.jpg',
      bio: 'Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.',
      imgPerfil1: 'assets/img/daredevil/perfil.jpg',
      img2: 'assets/img/marcas/marvel.png',
      imgComic: 'assets/img/daredevil/comic.jpg',
      imgLogo: 'assets/img/daredevil/logo.jpg',
      imgEscudo: 'assets/img/daredevil/escudo.jpg',
      imgMarca: 'assets/img/daredevil/marca.jpg',
      imgPortada1: 'assets/img/daredevil/portada1.jpg',
      imgPortada2: 'assets/img/daredevil/portada2.jpg',
      imgPortada3: 'assets/img/daredevil/portada3.jpg',
      aparicion: 'Ene-1964',
      casa: 'Marvel'
    },
    {
      id: 3,
      nombre: 'Hulk',
      imgperfil2: 'assets/img/hulk/hulk.jpg',
      bio: 'Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).',
      imgPerfil1: 'assets/img/hulk/perfil.jpg',
      img2: 'assets/img/marcas/marvel.png',
      imgComic: 'assets/img/hulk/comic.jpg',
      imgLogo: 'assets/img/hulk/logo.jpg',
      imgEscudo: 'assets/img/hulk/escudo.jpg',
      imgMarca: 'assets/img/hulk/marca.jpg',
      imgPortada1: 'assets/img/hulk/portada1.jpg',
      imgPortada2: 'assets/img/hulk/portada2.jpg',
      imgPortada3: 'assets/img/hulk/portada3.jpg',
      aparicion: 'May-1962',
      casa: 'Marvel'
    },
    {
      id: 4,
      nombre: 'Wonder Woman',
      imgperfil2: 'assets/img/wonder-woman/wonder-woman.jpg',
      bio: 'Bella como Afrodita, sabia como Atenea, más veloz que Hermes y más fuerte que Hércules, la princesa Diana de Themyscira lucha por la paz en el mundo del hombre, Vuelo, súper fuerza, inmortalidad, factor de curación, super velocidad, reflejos, resistencia, brazaletes que repelen cualquier tipo de arma, habilidad de luchado altamente desarrollada y posee un lazo mágico, y una gran galería de armas como espadas de combate, el escudo y la tiara.',
      imgPerfil1: 'assets/img/wonder-woman/perfil.jpg',
      img2: 'assets/img/marcas/DC.jpg',
      imgComic: 'assets/img/wonder-woman/comic.jpg',
      imgLogo: 'assets/img/wonder-woman/logo.jpg',
      imgEscudo: 'assets/img/wonder-woman/escudo.jpg',
      imgMarca: 'assets/img/wonder-woman/marca.jpg',
      imgPortada1: 'assets/img/wonder-woman/portada1.jpg',
      imgPortada2: 'assets/img/wonder-woman/portada2.jpg',
      imgPortada3: 'assets/img/wonder-woman/portada3.jpg',
      aparicion: 'Dic-1941',
      casa: 'DC'
    },
    {
      id: 5,
      nombre: 'Linterna Verde',
      imgperfil2: 'assets/img/linterna-verde/linterna-verde.jpg',
      bio: 'Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)',
      imgPerfil1: 'assets/img/linterna-verde/perfil.jpg',
      img2: 'assets/img/marcas/DC.jpg',
      imgComic: 'assets/img/linterna-verde/comic.jpg',
      imgLogo: 'assets/img/linterna-verde/logo.jpg',
      imgEscudo: 'assets/img/linterna-verde/escudo.jpg',
      imgMarca: 'assets/img/linterna-verde/marca.jpg',
      imgPortada1: 'assets/img/linterna-verde/portada1.jpg',
      imgPortada2: 'assets/img/linterna-verde/portada2.jpg',
      imgPortada3: 'assets/img/linterna-verde/portada3.jpg',
      aparicion: 'Jun-1940',
      casa: 'DC'
    },
    {
      id: 6,
      nombre: 'Spider-Man',
      imgperfil2: 'assets/img/spiderman/spiderman.jpg',
      bio: 'Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.',
      imgPerfil1: 'assets/img/spiderman/perfil.jpg',
      img2: 'assets/img/marcas/marvel.png',
      imgComic: 'assets/img/spiderman/comic.jpg',
      imgLogo: 'assets/img/spiderman/logo.jpg',
      imgEscudo: 'assets/img/spiderman/escudo.jpg',
      imgMarca: 'assets/img/spiderman/marca.jpg',
      imgPortada1: 'assets/img/spiderman/portada1.jpg',
      imgPortada2: 'assets/img/spiderman/portada2.jpg',
      imgPortada3: 'assets/img/spiderman/portada3.jpg',
      aparicion: 'Ago-1962',
      casa: 'Marvel'
    },
    {
      id: 7,
      nombre: 'Wolverine',
      imgperfil2: 'assets/img/wolverine/lobezno.jpg',
      bio: 'En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.',
      imgPerfil1: 'assets/img/wolverine/perfil.jpg',
      img2: 'assets/img/marcas/marvel.png',
      imgComic: 'assets/img/wolverine/comic.jpg',
      imgLogo: 'assets/img/wolverine/logo.jpg',
      imgEscudo: 'assets/img/wolverine/escudo.jpg',
      imgMarca: 'assets/img/wolverine/marca.jpg',
      imgPortada1: 'assets/img/wolverine/portada1.jpg',
      imgPortada2: 'assets/img/wolverine/portada2.jpg',
      imgPortada3: 'assets/img/wolverine/portada3.jpg',
      aparicion: 'Nov-1974',
      casa: 'Marvel'
    },
    {
      id: 8,
      nombre: 'Superman',
      imgperfil2: 'assets/img/superman/superman.jpg',
      bio: 'nació con el nombre de Kal-El en el planeta Krypton; su padre, el científico Jor-El, y su madre Lara Lor-Van, lo enviaron en una nave espacial con destino a la Tierra cuando era un niño, momentos antes de la destrucción de su planeta. Fue descubierto y adoptado por Jonathan Kent y Martha Kent, una pareja de granjeros de Smallville, Kansas, que lo criaron con el nombre de Clark Kent y le inculcaron un estricto código moral. El joven Kent comenzó a mostrar habilidades superhumanas, las mismas que al llegar a su madurez decidiría usar para el beneficio de la humanidad.',
      imgPerfil1: 'assets/img/superman/perfil.jpg',
      img2: 'assets/img/marcas/DC.jpg',
      imgComic: 'assets/img/superman/comic.jpg',
      imgLogo: 'assets/img/superman/logo.jpg',
      imgEscudo: 'assets/img/superman/escudo.jpg',
      imgMarca: 'assets/img/superman/marca.jpg',
      imgPortada1: 'assets/img/superman/portada1.jpg',
      imgPortada2: 'assets/img/superman/portada2.jpg',
      imgPortada3: 'assets/img/superman/portada3.jpg',
      aparicion: 'Jun-1938',
      casa: 'DC'
    }
  ];

  constructor( private http: HttpClient) {
    console.log('servicio listo para usar');

  }

  getHeroes() {
    return this.heroes;
  }

  getHeroe( idx: string) {
    return this.heroes[idx];
  }

  buscarHeroe( termino: string) {
    let heroeArr: Heroe[] = [];

    termino = termino.toLowerCase();
    for ( let heroe of this.heroes){

      let nombre = heroe.nombre.toLowerCase();


      if(nombre.indexOf(termino) >= 0) {
        heroeArr.push(heroe)
       }

    }
    return heroeArr;

  }

}

export interface Heroe {
  id: number;
  nombre: string;
  imgperfil2: string;
  bio: string;
  imgPerfil1: string;
  img2: string;
  imgComic: string;
  imgLogo: string;
  imgEscudo: string;
  imgMarca: string;
  imgPortada1: string;
  imgPortada2: string;
  imgPortada3: string;
  aparicion: string;
  casa: string;
}



