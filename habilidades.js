const habilidadesDB = {
    "Defecto de chakra": { tipo: "pasiva", multiplicador: { nin: 0, gen: 0 }, descripcion: "Incapacidad natural. Anula tu Ninjutsu y Genjutsu.", eliminable: false, transferible: false },
    
    "Prodigio": { tipo: "pasiva", multiplicador: { maxJutsus: 2 }, descripcion: "Genialidad innata. Duplica tu límite de Jutsus equipables.", eliminable: false, transferible: false },
    "Uzumaki": { tipo: "pasiva", bono: { vida: 4, chakra: 4 }, descripcion: "Otorga enormes reservas base de vida y chakra.", eliminable: false, transferible: false },
    "Rama principal Hyuga": { tipo: "pasiva", descripcion: "Innata. Con 1 acción debilita automáticamente a alguien con 'Rama secundaria' activando su sello.", eliminable: false, transferible: false },
    "Rama secundaria Hyuga": { tipo: "pasiva", descripcion: "Sello del pájaro. Tu vida baja a 1 si un usuario de la 'Rama principal' lo activa.", eliminable: false, transferible: false },

    // ---- ACTIVAS TÁCTICAS ----
  "Tobilleras":  { tipo: "pasiva", bono: { tai: -3, des: -3 }, descripcion: "pesas en los tobillos para entrenar a toda hora! solo quitatelas cuando la situacion sea critica.", eliminable: true, transferible: true },
    "Fastidio": { tipo: "activa", bono: { nin: -1, tai: -1, gen: -1, fue: -1, des: -1, int: -1 }, descripcion: "Actívala obligatoriamente en misiones D o C. Sufres penalización general por aburrimiento.", eliminable: false, transferible: false },
    "Estratega Motivado": { tipo: "activa", bono: { nin: 1, tai: 1, gen: 1, fue: 1, des: 1, int: 2 }, descripcion: "Actívala obligatoriamente en misions A y S, ganas una bonificacion por motivacion.", eliminable: false, transferible: false },   
  
    // ---- LÍNEA EVOLUTIVA: BYAKUGAN ----
    "Byakugan Latente": { tipo: "pasiva", descripcion: "Genética. Ojos sin pupila, poder dormido.", evolucion: "Byakugan Activado", eliminable: true, transferible: true },
   
  "Byakugan Activado": { tipo: "activa", bono: { int: 1, des: 1, tai: 2 }, descripcion: "Activarlo cuesta 1 Chakra por pelea. Otorga visión 360°, esquivas o bloqueas con ventaja cualquier ataque cuerpo a cuerpo.", evolucion: "Maestría del Byakugan", eliminable: true, transferible: true },
    
  "Maestría del Byakugan": { tipo: "activa", bono: { int: 2, des: 2, tai: 3 }, otorgaJutsu: [], descripcion: "Activarlo cuesta 2 Chakra por pelea. Tus ataques de Taijutsu hacen doble daño.", evolucion: "Byakugan de Grado Superior", eliminable: true, transferible: true },
    
  "Byakugan de Grado Superior": { tipo: "activa", bono: { int: 4, des: 3, gen: 4 }, descripcion: "Activarlo cuesta 3 Chakra por pelea. tiras ataques cuerpo a cuerpo con ventaja, puedes elegir si dañar la vida, resistencia o el chakra de tu objetivo", evolucion: "", eliminable: true, transferible: true },
    

   "Hachimon: Puertas 1-2": { tipo: "activa", bono: { fue: 2, des: 2, tai: 4, energia: -2, vida: -1 }, descripcion: "Abre limitadores cerebrales.", evolucion: "Hachimon: Puertas 3-5", eliminable: false, transferible: true },
    
    "Hachimon: Puertas 3-5": { tipo: "activa", bono: { fue: 4, des: 4, tai: 6, energia: -4, vida: -3 }, descripcion: "La piel enrojece. Velocidad extrema: los ataques enemigos hacia ti se tiran con Desventaja. Tus ataques de Taijutsu infligen +4 de Daño fijo adicional.", evolucion: "Hachimon: Puertas 6-7", eliminable: false, transferible: true },
    
    "Hachimon: Puertas 6-7": { tipo: "activa", bono: { fue: 6, des: 6, tai: 10, energia: -6, vida: -5 }, otorgaJutsu: [], descripcion: "Sudor hirviente. Tus ataques de Taijutsu infligen +8 de Daño fijo adicional. Al desactivarse, tu Energía se reduce a 0 y no puedes recuperar Resistencia por 2 turnos.", evolucion: "Hachimon: Puerta 8", eliminable: false, transferible: true },
    
    "Hachimon: Puerta 8": { tipo: "activa", bono: { fue: 10, des: 10, tai: 20, energia: 0 }, otorgaJutsu: [], descripcion: "La Puerta de la Muerte. Inmune a alteraciones de estado (CC). Tus ataques ignoran las Defensas Pasivas. Al finalizar el combate, tu Vida cae a 0 y mueres irreversiblemente.", eliminable: false, transferible: true },

     "Iryō Ninjutsu": { tipo: "pasiva", bono: { int: 1, nin: 1 }, descripcion: "Habilita la capacidad de aprender jutsus médicos avanzados y cirugías.", eliminable: true, transferible: true },
  
    "Especialista en Genjutsu": { tipo: "pasiva", bono: { gen: 3 }, descripcion: "Quienes intenten liberar tus ilusiones tiran siempre con Desventaja.", eliminable: true, transferible: true },
  
    "Entrenamiento Tóxico": { tipo: "pasiva", bono: { int: 1, vida: 3 }, descripcion: "Inmunidad automática a venenos comunes y gases de Rango B o menor.", eliminable: true, transferible: true },
   
  "Instinto Protector": { tipo: "pasiva", bono: { fue: 1, des: 1 }, descripcion: "Tus tiradas para defender a civiles o compañeros de rango menor suman un +3 pasivo.", eliminable: true, transferible: true },
  
    "Oportunista": { tipo: "pasiva", bono: { des: 2 }, descripcion: "Atacar a un objetivo inmovilizado, distraído o con Desventaja otorga Crítico con 18-20 en el d20.", eliminable: true, transferible: true },
 
    "Salud Frágil": { tipo: "pasiva", bono: { vida: -4, energia: -3 }, descripcion: "Defectuosa. Toda acción de Defensa Activa cuesta el doble de Energía.", eliminable: false, transferible: false },
   
    "Estudiante Aplicado": { tipo: "pasiva", bono: { int: 2 }, descripcion: "Tus análisis tácticos conceden Ventaja a todo tu escuadrón durante 1 turno.", eliminable: true, transferible: true },
   
  "Asistencia Médica": { tipo: "activa", bono: { int: 1 }, descripcion: "Gasta 1 Ficha Mando como acción rápida para estabilizar a un compañero caído o curar 1d6 Vida.", eliminable: true, transferible: true },
   
  "Absorción de Chakra": { tipo: "pasiva", bono: { tai: 2 }, descripcion: "Tus golpes cuerpo a cuerpo roban 1 de Chakra al enemigo y te lo suman a ti.", eliminable: false, transferible: false },
    
  "Modificación Corporal": { tipo: "pasiva", bono: { des: 3, tai: 1 }, descripcion: "Escapas automáticamente de agarres, cuerdas o hilos físicos sin tirar dados.", eliminable: false, transferible: false },
    
  "Educador de Élite": { tipo: "pasiva", bono: { int: 2 }, descripcion: "Añade tu bono de Inteligencia a las tiradas de los Genin que lideres en combate.", eliminable: true, transferible: true },
    "Básicos Perfectos": { tipo: "pasiva", bono: { nin: 2, tai: 2 }, descripcion: "Tus técnicas Rango E y D tienen Daño x1.5 y nunca fallan críticamente.", eliminable: true, transferible: true },
    
   
  
    "Especialista en Armas": { tipo: "pasiva", bono: { tai: 2, des: 2 }, descripcion: "Te permite equipar y usar pasivas de dos armas de forma simultánea.", eliminable: true, transferible: true },
    
  "Precisión Absoluta": { tipo: "pasiva", bono: { des: 3 }, descripcion: "Tus ataques de proyectil no pueden ser bloqueados ni desviados; el objetivo solo puede intentar esquivarlos.", eliminable: true, transferible: true },
    
  "Inmunidad a Genjutsu Básico": { tipo: "pasiva", bono: { gen: 3 }, descripcion: "Anulas técnicas ilusorias de Rango C o inferior sin tener que tirar dados de salvación.", eliminable: true, transferible: true },
    
  "Timidez": { tipo: "pasiva", bono: { int: -1, des: -1 }, descripcion: "Problema social. Si actúas primero en combate, tiras con Desventaja por los nervios.", eliminable: true, transferible: false },
   
  "Huésped de Insectos": { tipo: "pasiva", bono: { nin: 2, int: 2 }, descripcion: "Kikaichu. Atacarte cuerpo a cuerpo garantiza que el rival sufra 1d4 de daño y pérdida de chakra.", eliminable: false, transferible: false },
   
  "Analítico": { tipo: "activa", bono: { int: 2 }, descripcion: "Gasta 1 Ficha Fate para que el Máster te revele 1 estadística exacta del enemigo o su Vida actual.", eliminable: true, transferible: true },
   
    "Olfato Salvaje": { tipo: "pasiva", bono: { int: 2, des: 2 }, descripcion: "Es imposible esconderse de ti usando humo, camuflaje o Genjutsu visual.", eliminable: true, transferible: true },
    
  "Cuerpo en Expansión": { tipo: "activa", bono: { fue: 4, tai: 2, des: -2 }, descripcion: "Masa gigante. Multiplicas tu Fuerza x2 para empujar, arrollar o inmovilizar.", eliminable: false, transferible: false },
    
  "Reserva Calórica": { tipo: "pasiva", bono: { energia: 5 }, descripcion: "Empiezas con sobrepeso. Esta energía extra se gasta antes de consumir tu barra principal.", eliminable: true, transferible: true },
   
  "Prodigio Genuino": { tipo: "pasiva", bono: { tai: 2, des: 2, int: 2 }, descripcion: "Gasta 1 Ficha Fate para elegir que tu tirada de ataque sea un 20 natural.", eliminable: false, transferible: false }
};
