const armasDB = {
    // ---- RANGO D (Básicas y de Entrenamiento) ----
    "Kunai": { bono: { tai: 1 }, descripcion: "Arma básica. Puedes usarlo cuerpo a cuerpo o arrojarlo. Daño 1d4.", transferible: true },
    "Shuriken": { bono: { des: 1 }, descripcion: "Arma arrojadiza. Puedes lanzar hasta 3 por turno. Daño 1d4 cada uno.", transferible: true },
    "Bombas de humo": { bono: { int: 1 }, descripcion: "Gasta 1 acción. Otorga Ventaja inmediata a ti y a tus aliados para tiradas de Sigilo o Escape.", transferible: true },
    "Sake": { bono: { vida: 0 }, descripcion: "Botella de licor fuerte. Requisito indispensable para activar la habilidad 'Maestro del puño borracho'.", transferible: true },
    "Nunchaku": { bono: { tai: 1, des: 1 }, descripcion: "Arma veloz. Si impactas, tienes Ventaja para realizar un segundo ataque consecutivo (Daño 1d4).", transferible: true },
    "Tanto de luz blanca": { bono: { tai: 1, des: 1 }, descripcion: "Espada corta. Sus ataques emiten luz, ignorando 1 punto de la armadura rival. Daño 1d6.", transferible: true },
    "Cuchillas de Chakra": { bono: { tai: 1, nin: 1 }, descripcion: "Canalizan tu naturaleza de chakra. Suma 1d4 de daño elemental extra al golpear.", transferible: true },
    "Senbon": { bono: { des: 2 }, descripcion: "Agujas de alta precisión. Si sacas un 19 o 20 natural, el daño se duplica (Impacto crítico). Daño 1d4.", transferible: true },
    "Makibishi": { bono: { int: 1 }, descripcion: "Púas de suelo. Quien pase por la zona tira Destreza con Desventaja o pierde su movimiento y sufre 1d4 de daño.", transferible: true },
    "Sellos Explosivos": { bono: { nin: 1 }, descripcion: "Detonan por contacto o temporizador. Daño 2d6 en área pequeña. Enemigos tiran esquiva con Desventaja.", transferible: true },
    "Hilos de Alambre": { bono: { des: 1, int: 1 }, descripcion: "Tiras con Ventaja para intentar inmovilizar a un rival. Si aciertas, su Destreza baja a 0 temporalmente.", transferible: true },
    "Katana básica": { bono: { tai: 2 }, descripcion: "Espada estándar a dos manos. Daño 1d8 cortante.", transferible: true },
    "Bō (Bastón de Madera)": { bono: { tai: 1, des: 1 }, descripcion: "Arma de asta. Te otorga un +2 a tus tiradas de Defensa Pasiva contra ataques cuerpo a cuerpo. Daño 1d6.", transferible: true },
    "Tonfas": { bono: { tai: 1, fue: 1 }, descripcion: "Bastones de antebrazo. Tiras con Ventaja tus acciones de bloqueo. Daño 1d6.", transferible: true },

    // ---- RANGO C (Especializadas y Chunin) ----
    "Fūma Shuriken": { bono: { tai: 2, fue: 1 }, descripcion: "Shuriken gigante. Daño 2d6. Si el enemigo lo bloquea, aun así recibe la mitad del daño por el peso.", transferible: true },
    "Píldora del Soldado": { bono: { energia: 3, chakra: 2 }, descripcion: "Consumible. Recuperas 2d4 de Chakra y Energía al instante. Al terminar el combate sufres 1 nivel de Fatiga.", transferible: true },
    "Kusarigama": { bono: { tai: 1, des: 2 }, descripcion: "Hoz con cadena. Alcance medio. Tiras con Ventaja para desarmar o derribar al enemigo. Daño 1d8.", transferible: true },
    "Guanteletes con garras": { bono: { tai: 2, fue: 1 }, descripcion: "Potencian el combate desarmado. Tus ataques críticos causan sangrado (1d4 daño por turno). Daño 1d6.", transferible: true },
    "Senbon envenenado": { bono: { des: 2 }, descripcion: "Si impactas, el objetivo debe superar una salvación de Constitución o sufre la condición 'Envenenado' (Daño 1d4 por turno y Desventaja).", transferible: true },
    "Paraguas Ninja": { bono: { des: 2, nin: 1 }, descripcion: "Ataque de área. Dispara ráfagas de senbons. Todos en el cono frontal tiran esquiva con Desventaja. Daño 2d4.", transferible: true },
    "Bombas de Luz": { bono: { int: 2 }, descripcion: "Gasta 1 acción. Todos los enemigos mirando quedan Cegados 1 turno (Desventaja total en ataques y defensas).", transferible: true },
    "Cuchillos Trinchera": { bono: { tai: 2, fue: 1 }, descripcion: "Armas duales de corto alcance. Tiras 2 dados de ataque por turno (Daño 1d6 cada uno).", transferible: true },
    "Arco y Flecha Ninja": { bono: { des: 2, fue: 1 }, descripcion: "Arma de largo alcance. Si atacas desde el sigilo, el daño se multiplica x2. Daño 1d8.", transferible: true },
    "Pergamino explosivo falso": { bono: { int: 2 }, descripcion: "Trampa psicológica. Tiras Engaño con Ventaja. Si el enemigo cae, pierde su turno asustado.", transferible: true },

    // ---- RANGO B (Avanzadas y Jonin) ----
    "Sellos Supresores de Chakra": { bono: { int: 3 }, descripcion: "Requiere impacto cuerpo a cuerpo. Si aciertas, el rival no puede usar Jutsus de Rango B o superior.", transferible: true },
    "Marioneta Karasu": { bono: { nin: 2, des: 2 }, descripcion: "Títere ofensivo (Kugutsu). Cuenta como una entidad separada que ataca con tus stats. Sus armas ocultas tienen Ventaja.", transferible: true },
    "Marioneta Kuroari": { bono: { nin: 2, fue: 2 }, descripcion: "Títere trampa. Tiras Fuerza con Ventaja para atrapar al enemigo dentro. Si logras cerrarlo, queda inmovilizado y ciego.", transferible: true },
    "Marioneta Sanshōuo": { bono: { nin: 2, vida: 4 }, descripcion: "Títere escudo. Te otorga cobertura total. Absorbe hasta 30 puntos de daño antes de romperse.", transferible: true },
    "Kokutō (Espada Negra)": { bono: { tai: 3, des: 2 }, descripcion: "Hoja sigilosa. Tus ataques nocturnos o en sombras tienen Ventaja pasiva y Daño +2. Daño 1d8.", transferible: true },
    "Espada Larga (Tachi)": { bono: { tai: 2, fue: 3 }, descripcion: "Espada pesada a dos manos. Sus ataques ignoran 2 puntos de la armadura física del objetivo. Daño 1d10.", transferible: true },
    "Píldora de Sangre": { bono: { vida: 5, chakra: -2 }, descripcion: "Consumible de emergencia. Curas tu Vida al máximo, pero tu Chakra baja drásticamente (Mínimo 1).", transferible: true },
    "Pergamino de Invocación Ofensivo": { bono: { des: 3, int: 1 }, descripcion: "Gasta 2 Chakra. Lluvia de armas en un área de 5x5 metros. Enemigos tiran esquiva con Desventaja. Daño 3d6.", transferible: true },
    "Guadaña de tres hojas": { bono: { tai: 3, fue: 2, des: 1 }, descripcion: "Arma brutal atada a un cable. Alcance masivo. El daño se tira con 2d8.", transferible: true },

    // ---- RANGO A (Nivel Kage y Reliquias Mayores) ----
    "Kubikiribōchō": { bono: { tai: 4, fue: 3 }, descripcion: "Espada Ejecutora. Daño 2d8. Es irrompible (se regenera con sangre). Si derrotas a alguien, te curas 1d8 Vida.", transferible: true },
    "Nuibari": { bono: { tai: 3, des: 4 }, descripcion: "Aguja de Coser. Daño 1d10 perforante. Atraviesa en línea recta, pudiendo dañar a 2 enemigos a la vez e inmovilizarlos con hilo.", transferible: true },
    "Kabutowari": { bono: { tai: 3, fue: 4 }, descripcion: "Casco Rompedor. Daño 2d8. Ignora completamente cualquier armadura o Jutsu defensivo (como Muro de Tierra).", transferible: true },
    "Shibuki": { bono: { tai: 3, fue: 4, nin: 2 }, descripcion: "Espada Explosiva. Daño 1d10 cortante + 2d6 explosivo (Fuego/Ninjutsu).", transferible: true },
    "Hiramekarei": { bono: { tai: 3, fue: 3, nin: 3 }, descripcion: "Espada Gemela. Gasta Chakra para darle forma. Tiras con Ventaja pasiva cuerpo a cuerpo. Daño adaptable 2d8.", transferible: true },
    "Kiba": { bono: { tai: 3, des: 4, nin: 3 }, descripcion: "Espadas Relámpago. Duales. Otorga Ventaja y Daño +1d6 Eléctrico. Si hay lluvia, el daño crítico es automático con 18-20.", transferible: true },
    "Gunbai": { bono: { tai: 2, int: 4, nin: 3 }, descripcion: "Abanico Uchiha. Absorbe 1 Jutsu ofensivo al turno si tiras Defensa exitosa, y lo devuelve infligiendo el mismo daño + 1d8 de Viento.", transferible: true },
    "Espada Vibradora de Rayo": { bono: { tai: 4, nin: 2, des: 2 }, descripcion: "Cortámpago físico. Ignora por completo las defensas y bloqueos de armas. Daño 2d8 penetrante.", transferible: true },

    // ---- RANGO S (Armas Divinas y Tesoros Legendarios) ----
    "Samehada": { bono: { tai: 5, fue: 3 }, descripcion: "Piel de Tiburón. Consciente. Daño 2d8. Cada golpe roba 1d6 Chakra al enemigo y te cura 1d6 de Vida. Solo obedece si le agradas.", transferible: true },
    "Bashōsen": { bono: { nin: 6, int: 4 }, descripcion: "Abanico del Banano. Gasta 5 Chakra por uso. Lanza ataques del elemento que desees con Daño 4d8. Daño mortal por agotamiento si abusas.", transferible: true },
    "Kohaku no Jōhei": { bono: { int: 5, nin: 4 }, descripcion: "Vasija Ámbar. Sella instantáneamente a cualquier ser (incluyendo Bijuus) que responda a su nombre. Ineludible si se cumple la condición.", transferible: true },
    "Benihisago": { bono: { int: 5, des: 3 }, descripcion: "Calabaza Carmesí. Requiere combo con Kōkinjō y Shichiseiken. Sella si la víctima pronuncia su palabra más usada o se queda callada.", transferible: true },
    "Shichiseiken": { bono: { tai: 4, int: 5 }, descripcion: "Espada de 7 Estrellas. Daño 2d10. Corta el Koto-dama (el alma verbal) del enemigo, marcando su palabra más usada en la hoja.", transferible: true },
    "Kōkinjō": { bono: { des: 6, int: 4 }, descripcion: "Cuerda del Dosel Dorado. Tiras Fuerza o Destreza con Ventaja absoluta para golpear. Extrae el alma verbal (Koto-dama) del cuerpo rival.", transferible: true },
    "Espada de Totsuka": { bono: { tai: 6, nin: 6 }, descripcion: "Arma etérea (Requiere Susanoo). Daño 3d10. Si reduce al enemigo a 0 Vida, sella su alma eternamente en un Genjutsu.", transferible: true },
    "Espejo de Yata": { bono: { int: 6, nin: 6, vida: 5 }, descripcion: "Escudo etéreo (Requiere Susanoo). Anula matemáticamente (daño = 0) cualquier ataque frontal que reciba, de cualquier naturaleza.", transferible: true },
    "Espada de Nunoboko": { bono: { tai: 8, fue: 8, nin: 8 }, descripcion: "Reliquia de los Seis Caminos. Moldeada de esferas de la verdad. Anula Ninjutsu al contacto. Daño devastador 5d10.", transferible: true }
};
