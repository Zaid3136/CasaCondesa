/* ===================================
   CASA MADRE CONDESA — Script
   =================================== */

// -------------------------------------------------------
// MENÚ DE COMIDAS (cambia cada día de la semana)
// Edita los platillos aquí para actualizar el menú
// -------------------------------------------------------
const menusPorDia = {
  // 0 = Domingo, 1 = Lunes, ... 6 = Sábado
  0: {
    nombre: "Domingo",
    categorias: [
      {
        titulo: "Platos Fuertes",
        platillos: [
          {
            nombre: "Carnitas Estilo Michoacán",
            descripcion: "Carnitas de cerdo confitadas en manteca, con tortillas artesanales, salsa borracha y frijoles de olla",
            precio: "$185",
            badge: "Especial Domingo"
          },
          {
            nombre: "Birria de Res",
            descripcion: "Birria tradicional con consomé, cebolla, cilantro y tortillas de maíz azul",
            precio: "$175"
          },
          {
            nombre: "Chiles en Nogada",
            descripcion: "Chile poblano relleno de picadillo, bañado en nogada de nuez, granada y perejil — receta de temporada",
            precio: "$195",
            badge: "Chef"
          }
        ]
      },
      {
        titulo: "Del Comal",
        platillos: [
          {
            nombre: "Tlayuda Moreliana",
            descripcion: "Tortilla grande tostada con frijoles negros, tasajo, quesillo y chapulines",
            precio: "$160"
          },
          {
            nombre: "Sopas de Fideo Seco",
            descripcion: "Fideo seco en salsa de jitomate asado, crema y queso Cotija",
            precio: "$95"
          }
        ]
      },
      {
        titulo: "Postres y Bebidas",
        platillos: [
          {
            nombre: "Buñuelos con Piloncillo",
            descripcion: "Buñuelos crujientes bañados en miel de piloncillo con canela",
            precio: "$75"
          },
          {
            nombre: "Michelada de Maracuyá",
            descripcion: "Michelada artesanal con maracuyá fresco y sal de chapulín",
            precio: "$85"
          }
        ]
      }
    ]
  },
  1: {
    nombre: "Lunes",
    categorias: [
      {
        titulo: "Sopas y Caldos",
        platillos: [
          {
            nombre: "Caldo Tlalpeño",
            descripcion: "Caldo de pollo con chile chipotle, garbanzos, epazote y queso panela",
            precio: "$145",
            badge: "Estrella"
          },
          {
            nombre: "Crema de Flor de Calabaza",
            descripcion: "Crema aterciopelada con flores de calabaza, crema ácida y chile de agua",
            precio: "$125"
          }
        ]
      },
      {
        titulo: "Platos Principales",
        platillos: [
          {
            nombre: "Pollo en Mole Negro",
            descripcion: "Pieza de pollo de rancho bañada en mole negro oaxaqueño, arroz rojo y frijoles",
            precio: "$175",
            badge: "Chef"
          },
          {
            nombre: "Enchiladas Potosinas",
            descripcion: "Enchiladas de chile ancho con queso fresco, lechuga y rábanos",
            precio: "$145"
          },
          {
            nombre: "Tinga de Pollo",
            descripcion: "Tinga moreliana con chipotle y jitomate, servida en tostadas con crema y aguacate",
            precio: "$155"
          }
        ]
      },
      {
        titulo: "Bebidas del Día",
        platillos: [
          {
            nombre: "Agua de Chía con Limón",
            descripcion: "Agua fresca con semillas de chía, limón real y miel de abeja",
            precio: "$50"
          },
          {
            nombre: "Tepache Artesanal",
            descripcion: "Fermentado de piña con piloncillo y canela",
            precio: "$65"
          }
        ]
      }
    ]
  },
  2: {
    nombre: "Martes",
    categorias: [
      {
        titulo: "Entradas",
        platillos: [
          {
            nombre: "Gorditas de Requesón",
            descripcion: "Gorditas de masa de maíz rellenas de requesón y hierba santa, con salsa verde",
            precio: "$95"
          },
          {
            nombre: "Sopa de Lima",
            descripcion: "Caldo de pollo con lima yucateca, tortilla frita y aguacate",
            precio: "$120"
          }
        ]
      },
      {
        titulo: "Platos Fuertes",
        platillos: [
          {
            nombre: "Pozole Rojo",
            descripcion: "Pozole estilo guerrerense con cueritos, lechuga, rábano y orégano",
            precio: "$165",
            badge: "Favorito"
          },
          {
            nombre: "Camarones al Mojo de Ajo",
            descripcion: "Camarones del Pacífico salteados con ajo negro, mantequilla y limón, con arroz blanco",
            precio: "$195",
            badge: "Chef"
          }
        ]
      },
      {
        titulo: "Postres",
        platillos: [
          {
            nombre: "Arroz con Leche",
            descripcion: "Arroz cremoso con canela, pasas y ralladura de naranja",
            precio: "$70"
          }
        ]
      }
    ]
  },
  3: {
    nombre: "Miércoles",
    categorias: [
      {
        titulo: "Del Mercado",
        platillos: [
          {
            nombre: "Menudo Blanco",
            descripcion: "Menudo tradicional con pata y librillo, orégano seco, cebolla y limón",
            precio: "$155",
            badge: "Tradicional"
          },
          {
            nombre: "Sopa de Verduras de Temporada",
            descripcion: "Caldo de verduras del huerto con hierbas frescas y queso asadero",
            precio: "$105"
          }
        ]
      },
      {
        titulo: "Platos Principales",
        platillos: [
          {
            nombre: "Mole Amarillo con Cerdo",
            descripcion: "Costilla de cerdo en mole amarillo oaxaqueño, servido con tamales de rajas",
            precio: "$185",
            badge: "Chef"
          },
          {
            nombre: "Flautas Morelanas",
            descripcion: "Flautas de pollo o papa crujientes, con guacamole, crema y queso",
            precio: "$140"
          },
          {
            nombre: "Nopales con Huevo",
            descripcion: "Nopales tiernos salteados con huevo, chile serrano y epazote",
            precio: "$120"
          }
        ]
      },
      {
        titulo: "Para Beber",
        platillos: [
          {
            nombre: "Horchata de Coco",
            descripcion: "Horchata artesanal con leche de coco, canela y vainilla",
            precio: "$55"
          }
        ]
      }
    ]
  },
  4: {
    nombre: "Jueves",
    categorias: [
      {
        titulo: "Sopas",
        platillos: [
          {
            nombre: "Caldo de Habas",
            descripcion: "Caldo espeso de habas con chile pasilla, epazote y totopos",
            precio: "$120"
          },
          {
            nombre: "Consomé de Borrego",
            descripcion: "Consomé tradicional con garbanzos, verduras y chile guajillo",
            precio: "$145"
          }
        ]
      },
      {
        titulo: "Platos Fuertes",
        platillos: [
          {
            nombre: "Barbacoa de Borrego",
            descripcion: "Barbacoa cocinada en hoyo con maguey, servida con consomé, tortillas y salsas",
            precio: "$195",
            badge: "Estrella"
          },
          {
            nombre: "Enchiladas Verdes de Pollo",
            descripcion: "Enchiladas de salsa verde con pollo deshebrado, crema, queso y cebolla",
            precio: "$145"
          },
          {
            nombre: "Tamales de Rajas",
            descripcion: "Tamales de maíz con rajas de chile poblano y queso, salsa roja",
            precio: "$130",
            badge: "Chef"
          }
        ]
      },
      {
        titulo: "Bebidas",
        platillos: [
          {
            nombre: "Aguas Frescas del Día",
            descripcion: "Tamarindo o guanábana con agua de manantial y piloncillo",
            precio: "$50"
          }
        ]
      }
    ]
  },
  5: {
    nombre: "Viernes",
    categorias: [
      {
        titulo: "Del Mar",
        platillos: [
          {
            nombre: "Ceviche de Pescado Blanco",
            descripcion: "Pescado blanco en limón con jitomate, pepino, cilantro y chile serrano",
            precio: "$175",
            badge: "Estrella"
          },
          {
            nombre: "Tacos de Camarón",
            descripcion: "Camarones a la plancha con chipotle, repollo morado y mayonesa de jalapeño",
            precio: "$165"
          }
        ]
      },
      {
        titulo: "Platos Principales",
        platillos: [
          {
            nombre: "Bacalao a la Vizcaína",
            descripcion: "Bacalao con jitomates, aceitunas, alcaparras y papas, receta familiar",
            precio: "$195",
            badge: "Chef"
          },
          {
            nombre: "Romeritos con Mole",
            descripcion: "Romeritos guisados en mole negro con camarones secos y tortitas",
            precio: "$175"
          }
        ]
      },
      {
        titulo: "Postres y Bebidas",
        platillos: [
          {
            nombre: "Flan Napolitano",
            descripcion: "Flan suave con queso crema, naranja y caramelo de piloncillo",
            precio: "$85"
          },
          {
            nombre: "Agua de Jamaica Caliente",
            descripcion: "Jamaica infusionada con jengibre y anís estrella",
            precio: "$55"
          }
        ]
      }
    ]
  },
  6: {
    nombre: "Sábado",
    categorias: [
      {
        titulo: "Especial de Sábado",
        platillos: [
          {
            nombre: "Carne en su Jugo",
            descripcion: "Carne de res en su jugo con tocino, frijoles y totopos, estilo Jalisco",
            precio: "$185",
            badge: "Estrella"
          },
          {
            nombre: "Pozole Verde",
            descripcion: "Pozole con tomatillo, pipián, pepitas y pollo deshebrado",
            precio: "$165",
            badge: "Favorito"
          }
        ]
      },
      {
        titulo: "Platos Fuertes",
        platillos: [
          {
            nombre: "Cochinita Pibil",
            descripcion: "Cochinita marinada en achiote y naranja agria, cocinada lentamente, con cebolla morada",
            precio: "$175",
            badge: "Chef"
          },
          {
            nombre: "Tostadas de Tinga y Frijoles",
            descripcion: "Tostadas crujientes con tinga casera, frijoles refritos, lechuga y salsa",
            precio: "$140"
          }
        ]
      },
      {
        titulo: "Dulce Final",
        platillos: [
          {
            nombre: "Churros con Chocolate",
            descripcion: "Churros recién hechos con azúcar y canela, chocolate caliente para dipping",
            precio: "$90"
          },
          {
            nombre: "Nieve de Tuna",
            descripcion: "Nieve artesanal de tuna roja y limón, estilo Pátzcuaro",
            precio: "$65"
          }
        ]
      }
    ]
  }
};

// -------------------------------------------------------
// LÓGICA DE CAMBIO AUTOMÁTICO
// -------------------------------------------------------

const HORA_CAMBIO = 12; // 12pm

// Hora en México Centro (UTC-6, sin horario de verano desde 2022)
function getHoraMexico() {
  const ahora = new Date();
  const utcMs = ahora.getTime() + (ahora.getTimezoneOffset() * 60000);
  return new Date(utcMs - (6 * 3600000));
}

function esHoraDeComida() {
  return getHoraMexico().getHours() >= HORA_CAMBIO;
}

function getDiaSemana() {
  return getHoraMexico().getDay();
}

function getNombreDia(num) {
  const dias = ["Domingo","Lunes","Martes","Jueves","Viernes","Sabado"];
  const diasAcento = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
  return diasAcento[num];
}

// -------------------------------------------------------
// RENDERIZAR MENÚ DE COMIDAS
// -------------------------------------------------------

function renderMenuComida() {
  const dia = getDiaSemana();
  const menu = menusPorDia[dia];
  const container = document.getElementById('comidaContent');
  const badge = document.getElementById('dailyBadge');

  badge.textContent = `Menú del ${menu.nombre}`;

  let html = '';
  menu.categorias.forEach(cat => {
    html += `
      <div class="menu-category">
        <h3 class="cat-title"><span>${cat.titulo}</span></h3>
        <ul class="dish-list">
    `;
    cat.platillos.forEach(p => {
      html += `
        <li class="dish">
          <div class="dish-name">
            ${p.nombre}
            ${p.badge ? `<span class="dish-badge">${p.badge}</span>` : ''}
          </div>
          <div class="dish-desc">${p.descripcion}</div>
          <div class="dish-price">${p.precio}</div>
        </li>
      `;
    });
    html += '</ul></div>';
  });

  container.innerHTML = html;
}

// -------------------------------------------------------
// MOSTRAR PANEL (toggle manual o automático)
// -------------------------------------------------------

function showMenu(tipo) {
  const panelDes = document.getElementById('panelDesayuno');
  const panelCom = document.getElementById('panelComida');
  const btnDes   = document.getElementById('btnDesayuno');
  const btnCom   = document.getElementById('btnComida');
  const indicator = document.getElementById('toggleIndicator');

  if (tipo === 'desayuno') {
    panelDes.classList.remove('hidden');
    panelCom.classList.add('hidden');
    btnDes.classList.add('active');
    btnCom.classList.remove('active');
    indicator.classList.remove('right');
  } else {
    panelDes.classList.add('hidden');
    panelCom.classList.remove('hidden');
    btnDes.classList.remove('active');
    btnCom.classList.add('active');
    indicator.classList.add('right');
    renderMenuComida();
  }
}

// -------------------------------------------------------
// INICIALIZAR según la hora actual
// -------------------------------------------------------

function initMenu() {
  const autoLabel = document.getElementById('autoLabel');
  const dia = getDiaSemana();
  const horaMx = getHoraMexico();
  console.log('[CasaMadre] Hora Mexico:', horaMx.toLocaleTimeString(), '| Horas:', horaMx.getHours(), '| Es comida:', esHoraDeComida());

  if (esHoraDeComida()) {
    showMenu('comida');
    autoLabel.textContent = '✦ Mostrando el menú de comidas — ' + getNombreDia(dia);
  } else {
    showMenu('desayuno');
    autoLabel.textContent = '✦ Mostrando el menú de desayunos · Comidas disponibles a las 12:00 pm';
  }
}

// -------------------------------------------------------
// SUCURSALES — Google Maps
// Reemplaza las URLs con las coordenadas reales
// -------------------------------------------------------
const sucursales = [
  {
    nombre: "Casa Central",
    // REEMPLAZA con la URL real de Google Maps o coordenadas
    // Formato: https://www.google.com/maps?q=LATITUD,LONGITUD
    // O bien:  https://maps.app.goo.gl/TU-ENLACE-CORTO
    mapsUrl: "https://www.google.com/maps/search/Casa+Madre+Condesa+Morelia"
  },
  {
    nombre: "Sucursal Norte",
    mapsUrl: "https://www.google.com/maps/search/Casa+Madre+Condesa+Morelia+Norte"
  }
];

// Asigna los href de Maps directamente a los enlaces al cargar la página
function iniciarLinksMaps() {
  sucursales.forEach((s, i) => {
    const el = document.getElementById(`link-sucursal-${i}`);
    if (el) el.href = s.mapsUrl;
  });
}

// -------------------------------------------------------
// ACTUALIZACIÓN AUTOMÁTICA AL LLEGAR LAS 12PM
// -------------------------------------------------------

function programarCambio() {
  const horaActual = getHoraMexico();
  const cambio = new Date(horaActual);
  cambio.setHours(HORA_CAMBIO, 0, 0, 0);

  if (horaActual < cambio) {
    const msHastaCambio = cambio - horaActual;
    setTimeout(function() {
      showMenu('comida');
      document.getElementById('autoLabel').textContent =
        '✦ Menú de comidas disponible — ' + getNombreDia(getDiaSemana());
    }, msHastaCambio);
  }
}

// -------------------------------------------------------
// ARRANQUE
// -------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  programarCambio();
  iniciarLinksMaps();
});