// seed_products.js
// Ejecuta una sola vez (si no existe 'mullu_products') para poblar productos de ejemplo.
// Guarda también en 'productos' para compatibilidad con index.html antiguo.

(function seedProducts(){
  try {
    if(localStorage.getItem('mullu_products')) {
      // Ya poblado, no sobrescribir
      console.info('mullu_products ya existe — seed skip.');
      return;
    }

    const now = Date.now();
    const sample = [
      { id: String(now + 1),  name: "Jarra Cerámica Decorada", desc: "Jarra hecha a mano con pinturas tradicionales de Mollepampa. Capacidad aprox. 1.2L.", category: "Ceramica-Alfareria", stock: 12, price: 85.00, image: "../assets/img/jarra_ceramica.jpg", artisan: "Taller Ruiz", sold: 8 },
      { id: String(now + 2),  name: "Espejo Decorativo de Madera", desc: "Marco tallado en madera local, ideal para decoración de sala o pasillo.", category: "Decoración", stock: 6, price: 140.00, image: "../assets/img/espejo_madera.jpg", artisan: "Marino Madera", sold: 5 },
      { id: String(now + 3),  name: "Bolsa de Fibras Naturales", desc: "Bolsa tejida con fibras naturales, resistente y ecológica.", category: "Fibras-Naturales", stock: 25, price: 60.00, image: "../assets/img/bolsa_fibras.jpg", artisan: "Ariana Tejidos", sold: 15 },
      { id: String(now + 4),  name: "Quena Tradicional", desc: "Instrumento de viento tradicional, afinada y decorada a mano.", category: "Instrumentos", stock: 4, price: 120.00, image: "../assets/img/quena.jpg", artisan: "Don Daniel Instrumentos", sold: 2 },
      { id: String(now + 5),  name: "Collar de Joyería Andina", desc: "Collar único con cuentas y elementos de la región. Ideal como regalo.", category: "Joyería", stock: 18, price: 75.00, image: "../assets/img/collar_joya.jpg", artisan: "Anth0ny Joyería", sold: 10 },
      { id: String(now + 6),  name: "Tabla de Cocina en Madera", desc: "Tabla para cortar y presentación, madera tratada y acabada a mano.", category: "Madera", stock: 9, price: 55.00, image: "../assets/img/tabla_madera.jpg", artisan: "Jorge Carpintería", sold: 6 },
      { id: String(now + 7),  name: "Manta Tejida a Mano", desc: "Manta cálida con diseños tradicionales, ideal para decoración y confort.", category: "Textiles", stock: 7, price: 150.00, image: "../assets/img/manta_tejida.jpg", artisan: "Maria Textiles", sold: 4 },
      { id: String(now + 8),  name: "Porta Velas Cerámica", desc: "Juego de porta velas en cerámica esmaltada, paquete de 2 unidades.", category: "Ceramica-Alfareria", stock: 20, price: 45.00, image: "../assets/img/porta_velas.jpg", artisan: "Taller Ruiz", sold: 12 },
      { id: String(now + 9),  name: "Tapiz Decorativo", desc: "Tapiz de pared tejido con motivos tradicionales, excelente para paredes vacías.", category: "Decoración", stock: 3, price: 210.00, image: "../assets/img/tapiz.jpg", artisan: "Fibras Andinas", sold: 1 },
      { id: String(now + 10), name: "Set de Cucharas de Madera", desc: "Set de 4 cucharas talladas a mano, acabado natural.", category: "Madera", stock: 30, price: 35.00, image: "../assets/img/cucharas_madera.jpg", artisan: "Jorge Carpintería", sold: 20 },
      { id: String(now + 11), name: "Brazalete Textil", desc: "Brazalete hecho de hilos y cuentas, estilo tradicional.", category: "Joyería", stock: 40, price: 25.00, image: "../assets/img/brazalete.jpg", artisan: "Ariana Tejidos", sold: 18 },
      { id: String(now + 12), name: "Instrumento de Percusión - Cajita", desc: "Pequeño instrumento de percusión hecho con fibras y madera. Perfecto para niños.", category: "Instrumentos", stock: 14, price: 48.00, image: "../assets/img/cajita.jpg", artisan: "Don Daniel Instrumentos", sold: 7 }
    ];

    localStorage.setItem('mullu_products', JSON.stringify(sample));
    localStorage.setItem('productos', JSON.stringify(sample));
    if(!localStorage.getItem('mullu_cart')) localStorage.setItem('mullu_cart', JSON.stringify([]));
    console.info('Seed de productos creado: %d productos', sample.length);

  } catch(err){
    console.error('Error creando seed de productos', err);
  }
})();
