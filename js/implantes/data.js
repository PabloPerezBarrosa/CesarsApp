    //VARIABLES BBDD
    var extrasArray = [["Autoalimentado","autoalimentado","0.25,1,6","No requiere de células de fusión cada semana."],
                            ["Automantenido","automantenido","0.5,1,7","No requiere de tiradas de Ingenio + Manipular (Implantes) cada mes para su correcto funcionamiento."],
                            ["Extraíble","extraible","300,1,5","Puede retirarse con una acción simple"],
                            ["Omnienchufe","omnienchufe","500,1,6","Puede retirarse con una acción simple y reemplazarse por otro con omnienchufe"],
                            ["Orgánico","organico","-0.1,0,5","El implante está estrechamente ligado al cuerpo del ciborg, para repararlo es necesario Inteligencia+Manipular(Medicina). Si el implante está dañado se pierden PVs"],
                            ["Antiestético","antiestetico","-0.1,1,5","-2 Encanto"],
                            ["Consunción","consuncion","-0.2,1,5","“Quema” el tejido orgánico, pérdida de un punto de vitalidad cada vez que se utiliza. Esto no implica necesariamente una quemadura literal; puede ser una pérdida de fluidos corporales vitales o de tejido por culpa del sangrado o porque se sobrecalientan los engranajes del dispositivo, etc."],
                            ["Evidente","evidente","-0.1,0,5","Es evidente para cualquiera que pueda ver al usuario, al que se considera inmediatamente como un cíborg."],
                            ["Desastroso","desastroso","-0.2,1,5","-4 Encanto. Pierde fluidos, vapor, chispas o simplemente es ruidoso. Dejando contaminación tras de sí, lo que a menudo consigue que la gente se canse del propietario del dispositivo."],
                            ["Incógnito","incognito","0.05,1,6","Es visible cuando el observador lo busca activamente o una vez que se utilice el dispositivo.<br>-2 Per para detectarlo"],
                            ["Oculto","oculto","0.1,1,7","No es evidente para los demás. Estará cubierto o bien en una cavidad oculta o en una funda bajo una pequeña porción de carne.<br> -4 Per para detectarlo"],
                            ["Imitación","imitacion","0.2,1,8","Está oculto a la vista, ya que es una copia exacta de una función humana (o alienígena). Sólo un escáner de NT8 puede notar la diferencia. Esta es una tecnología altamente prohibida, ya que la Inquisición teme en gran medida a los androides que se encuentran entre nosotros."],
                            ["Buena calidad","buena_calidad","0.1,0,5","+2 a las tiradas para repararlo y mantenerlo"],
                            ["Muy buena calidad","muy_buena_calidad","0.2,0,6","+4 a las tiradas para repararlo y mantenerlo"],
                            ["Mala calidad","mala_calidad","-0.1,1,5","-2 a las tiradas para repararlo y mantenerlo"],
                            ["Muy mala calidad","muy_mala_calidad","-0.2,2,5","-4 a las tiradas para repararlo y mantenerlo"],
                            ["Delicado","delicado","-0.3,2,5","Cada vez que sufra el portador sufra daños en el área o que se pifie utilizándolo. El dispositivo tendrá que ser reparado con 1d10 éxitos"],
                            ["Tecnología punta","tecnologia_punta","-0.1,1,7","Sólo un Experto con 3 rangos en Ingeniería de implantes puede repararlo"],
                            ["Impredecible","impredecible","-0.1,0,5","En ciertas ocasiones actúa de una manera con la que el usuario no contaba. Esto podría deberse a varias razones: mano de obra de mala calidad, un prototipo inacabado, estructuras de memoria corruptas (en el caso de la nanotecnología), etc. Cada vez que el personaje saca un fallo crítico en la tirada al utilizar el dispositivo, este comienza a actuar de forma impredecible. Esto, por lo general, dura una cantidad de turnos (u horas) igual a la puntuación de Incompatibilidad del personaje, pero si el dispositivo no se ha utilizado de la manera apropiada o ha tenido un mantenimiento penoso, los efectos pueden durar más tiempo"],
                            ["Prohibido","prohibido","-0.1,0,5","Aunque todos los dispositivos cibernéticos sean considerados como pecaminosos a ojos de la mayoría de oficiales de la Iglesia, algunos dispositivos son especialmente malos y se consideran tecnología prohibida. Los Inquisidores, por lo general, tienden a quemarlos primero y luego a hacer preguntas."],
                            ["Ciberchalado","ciberchalado","-0.15,0,5","Independientemente de su puntuación de Ego, el personaje no está preparado para integrar sus dispositivos cibernéticos dentro de su cuerpo. En los momentos de gran tensión para el personaje, puede que el Director de Juego exija una tirada de Ingenio + Sangre Fría para evitar que este ”enloquezca”. Un fallo en la tirada implica que el personaje pierde totalmente el control de todos los elementos que forman su propio “yo”."]],
        materialArray = [["1500,0,3,5,Metal","Metal","1500 ph 3 incomp y NT5.  Riesgo de rotura cada vez que se sufre daño eléctrico. Siempre hay que adquirir el rasgo Evidente."],
                        ["2000,0.25,2,6,Plástico simpatico","Plástico simpático","2000 ph + 25% precio implante 2 incomp y NT6.  No permite el rasgo Imitación."],
                        ["3000,0.5,1,7,Sintecarne","Sintecarne","3000 ph + 50% precio implante 1 incomp y NT7.  Siempre hay que adquirir el rasgo Orgánico."],
                        ["4000,1,0,8,Nanos","Nanos","4000 ph + 100% precio implante 0 incomp y NT8."]],

        segundoCerebroArray=[["Inteligencia","int","Incremento de la característica Inteligencia."],
                            ["Interfaz datos","idd","Permite programas de habilidad académicos. Dependiendo del NT del implante y del chip utilizado esta habilidad tendrá un nivel máximo."],
                            ["Multitarea","mul","Permite tener varios programas de habilidad activos a la vez en la interfaz de datos."],
                            ["Interfaz neural","inn","Combinada con una fibra neural permite utilizar programas de habilidad físicos en la interfaz de datos."],
                            ["Máquina pensante","map","Modificador al utilizar máquinas pensantes."]],

        segundoCerebroArrayTri=[[["0,0,0","No"],["500,1,5,Inteligencia,+1","+1"],["1000,2,6,Inteligencia,+2","+2"],["1500,3,7,Inteligencia,+3","+3"],["2000,4,8,Inteligencia,+4","+4"]],
                                [["0,0,0","No"],["500,1,5,Interfaz de datos,Nivel 1","Nivel 1"],["1000,2,6,Interfaz de datos,Nivel 2","Nivel 2"],["1500,3,7,Interfaz de datos,Nivel 3","Nivel 3"]],
                                [["0,0,0","No"],["500,1,6,Multitarea,2 tareas","2 tareas"],["1000,2,7,Multitarea,3 tareas","3 tareas"],["1500,3,8,Multitarea,4 tareas","4 tareas"]],
                                [["0,0,0","No"],["500,1,6,Interfaz neural,Activada","Sí"]],
                                [["0,0,0","No"],["500,1,5,Máquina pensante,+2","+2"],["1000,2,6,Máquina pensante,+4","+4"],["1500,3,7,Máquina pensante,+6","+6"],["2000,4,8,Máquina pensante,+8","+8"]]
                                ],
        fibraNeuronalArray=[["Destreza","des","Incrementode la característica Destreza."],
                            ["Movimiento","mov","Aumento del movimiento base."],
                            ["Reflejos","ref","Aumento de la Iniciativa y tiradas que impliquen Reflejos."],
                            ["Interfaz neural","inn2","Combinada con una fibra neural con interfaz neural, permite utilizar programas de habilidad físicos en la interfaz de datos."],
                            ["Inhibidor dolor","inh","Aumento del umbral del dolor."]],
        fibraNeuronalArrayTri= [[["0,0,0","No"],["500,1,5,Destreza,+1","+1"],["1000,2,6,Destreza,+2","+2"],["1500,3,7,Destreza,+3","+3"],["2000,4,8,Destreza,+4","+4"]],
                                [["0,0,0","No"],["500,1,6,Movimiento,+2 m","+2 m"],["1000,2,7,Movimiento,+4 m","+4 m"],["1500,3,8,Movimiento,+6 m","+6 m"]],
                                [["0,0,0","No"],["500,1,5,Reflejos,+2","+2"],["1000,2,6,Reflejos,+4","+4"],["1500,3,7,Reflejos,+6","+6"],["2000,4,8,Reflejos,+8","+8"]],
                                [["0,0,0","No"],["500,1,6,Interfaz neural,Activada","Sí"]],
                                [["0,0,0","No"],["500,1,5,Inhibidor de dolor,+2","+2"],["1000,2,6,Inhibidor de dolor,+4","+4"],["1500,3,7,Inhibidor de dolor,+6","+6"],["2000,4,8,Inhibidor de dolor,+8","+8"]]],
        pielGoliathArray = [["Fuerza","fue","Incremento de la característica Fuerza."],
                            ["Resistencia","res","Incremento de la característica Resistencia. No sube con ello los puntos de vitalidad."],
                            ["Vigor","vig","Incremento del Vigor"],
                            ["Protección","prot","Armadura: Protección."],
                            ["Reducción","redu","Armadura: Reducción."]],
        pielGoliathArrayTri = [[["0,0,0","No"],["500,1,5,Fuerza,+1","+1"],["1000,2,6,Fuerza,+2","+2"],["1500,3,7,Fuerza,+3","+3"],["2000,4,8,Fuerza,+4","+4"]],
                                [["0,0,0","No"],["500,1,5,Resistencia,+1","+1"],["1000,2,6,Resistencia,+2","+2"],["1500,3,7,Resistencia,+3","+3"],["2000,4,8,Resistencia,+4","+4"]],
                                [["0,0,0","No"],["500,1,5,Vigor,+2","+2"],["1000,2,7,Vigor,+4","+4"]],
                                [["0,0,0","No"],["500,1,7,Protección,+1","+1"],["1000,2,8,Protección,+2","+2"]],
                                [["0,0,0","No"],["500,1,5,Reducción,+1","+1"],["1000,2,6,Reducción,+2","+2"],["1500,3,7,Reducción,+3","+3"],["2000,4,8,Reducción,+4","+4"]]],
        ojoIngEspArray=[["Percepción","percep","Incremento de la característica Percepción"],
                        ["Lupa/Telescopio","lup-tel","Funciona como ambas cosas, además de como mira telescópica del mismo NT que el implante."],
                        ["UV","uv","Ignora penalizadores por baja luminosidad, requiere algo de luz."],
                        ["IR","ir","Permite ver en el espectro infrarojo,detectando fuentes de calor."],
                        ["Rayos X","ryx","Permite ver a través de objetos de todo tipo, excepto de plomo."],
                        ["Foto","fot","Cámara de fotos incorporada."],
                        ["Video","vid","Videocámara incorporada."]],
        ojoIngEspArrayTri =[[["0,0,0","No"],["500,1,5,Percepción,+1","+1"],["1000,2,6,Percepción,+2","+2"],["1500,3,7,Percepción,+3","+3"],["2000,4,8,Percepción,+4","+4"]],
                            [["0,0,0","No"],["500,1,5,Lupa/Telescopio,Sí","Sí"]],
                            [["0,0,0","No"],["500,1,5,UV,Sí","Sí"]],
                            [["0,0,0","No"],["500,1,5,IR,Sí","Sí"]],
                            [["0,0,0","No"],["500,5,7,Rayos X,Sí,Cáncer","Sí, +4 inc/cáncer."],["1000,4,8,Rayos X,Sí","Sí, +2 inc."]],
                            [["0,0,0","No"],["500,1,5,Foto,Sí","Sí"]],
                            [["0,0,0","No"],["500,1,5,Video,Sí","Sí"]]],
        oidoInalambricoArray =[["Percepción","percep2","Incremento de la característica Percepción."],
                                ["Radio/Alcance","radalc","Integra un comunicador en el implante."],
                                ["Cifrad/Descifrad","cifdes","Las comunicaciones que pasen por este dispositivo pueden ser cifradas y descifradas de manera que sólo quien conozca el código las pueda entender. También pueden interceptar comunicaciones cifradas y descifrarlas si son de un NT igual o inferior con una tirada de INGENIO + LÓGICA(uso de implante)."],
                                ["Grabador","grab","Posibilidad de grabar el sonido que se escucha."],
                                ["Sónar","sonar","Permite detectar cualquier objeto en condiciones de absoluta oscuridad o niebla."],
                                ["Alta/baja frec","altbaj","El personaje es capaz de detectar sonidos de baja frecuencia(el temblor de un vehículo terrestre o un inminente terremoto) y de alta frecuencia(silbatos caninos,motores gravíticos, etc)."]],
        oidoInalambricoArrayTri = [[["0,0,0","No"],["500,1,5,Percepción,+1","+1"],["1000,2,6,Percepción,+2","+2"],["1500,3,7,Percepción,+3","+3"],["2000,4,8,Percepción,+4","+4"]],
                                    [["0,0,0","No"],["500,1,5,Radio,200 Km","200 Km"],["1000,2,6,Radio,alcance Planetario","Planetario"],["1500,3,7,Radio,1 UA","1 UA"],["2000,4,8,Radio,5 UAs","5 UAs"]],
                                    [["0,0,0","No"],["500,1,5,Cifrador/Descifrador,Sí","Sí"]],
                                    [["0,0,0","No"],["500,1,5,Grabador,Sí","Sí"]],
                                    [["0,0,0","No"],["500,1,5,Sónar,10 m","10 m"],["1000,2,6,Sónar,20 m","20 m"],["1500,3,7,Sónar,100 m","100 m"],["2000,4,8,Sónar,1 Km","1 Km"]],
                                    [["0,0,0","No"],["500,1,5,Alta o baja frecuencia,Sí","Sí"]]],
        sintePapilasArray=[["Percepción","percep3","Incremento de la característica Percepción."],
                            ["Rastreador","rast","El implante permite distinguir el olor característico de sustancias, cosas y personas, y rastrearlas con tiradas de PERCEPCIÓN + OBSERVAR(Uso de implante). El tiempo, la distancia y otros olores fuertes pueden suponer penalizadores."],
                            ["Hipergusto","hiperg","Un personaje puede determinar la composición química de los objetos cuando la prueba, quizás también puede llegar a identificar venenos."]],
        sintePapilasArrayTri =[[["0,0,0","No"],["500,1,5,Percepción,+1","+1"],["1000,2,6,Percepción,+2","+2"],["1500,3,7,Percepción,+3","+3"],["2000,4,8,Percepción,+4","+4"]],
                                [["0,0,0","No"],["500,1,6,Rastreador,Sí","Sí"],["1000,2,7,Rastreador,Sí + 2","Sí + 2"],["1500,3,8,Rastreador,Sí +4","Sí +4"]],
                                [["0,0,0","No"],["500,1,5,Hipergusto,Sí","Sí"],["1000,2,6,Hipergusto,Sí +2","Sí +2"],["1500,3,7,Hipergusto,Sí +4","Sí +4"],["2000,4,8,Hipergusto,Sí +6","Sí +6"]]],
        ciberOrganosArray =[["Ciberbranquias","cibbr","Permiten respirar bajo el agua."],
                            ["Oxi pulmón","oxip","Respiración interna durante un tiempo limitado."],
                            ["Ciberhígado","cibhi","Aumenta la resistencia a las toxinas del personaje."],
                            ["Cibercorazón","cibcoz","Aumenta la resistencia del personaje al esfuerzo."],
                            ["Ciberriñon","cibriñ","Genera adrenalina. Incremento de la característica Pasión."]],
        ciberOrganosArrayTri = [[["0,0,0","No"],["500,1,6,Ciberbranquias,Sí","Sí"]],
                                [["0,0,0","No"],["500,1,7,Oxi pulmón,Sí 12 h","Sí 12 h"],["1000,2,8,Oxi pulmón,Sí 24 h","Sí 24 h"]],
                                [["0,0,0","No"],["500,1,5,Ciberhígado,+2 res toxinas","+2 res toxinas"],["1000,2,6,Ciberhígado,+4 res toxinas","+4 res toxinas"],["1500,3,7,Ciberhígado,+6 res toxinas","+6 res toxinas"],["2000,4,8,Ciberhígado,+8 res toxinas","+8 res toxinas"]],
                                [["0,0,0","No"],["500,1,5,Cibercorazón,+2 res esfuerzo","+2 res esfuerzo"],["1000,2,6,Cibercorazón,+4 res esfuerzo","+4 res esfuerzo"],["1500,3,7,Cibercorazón,+6 res esfuerzo","+6 res esfuerzo"],["2000,4,8,Cibercorazón,+8 res esfuerzo","+8 res esfuerzo"]],
                                [["0,0,0","No"],["500,1,5,Ciberriñon,+2 pasión","+2 res pasión"],["1000,2,6,Ciberriñon,+4 pasión","+4 res pasión"],["1500,3,7,Ciberriñon,+6 pasión","+6 res pasión"],["2000,4,8,Ciberriñon,+8 pasión","+8 res pasión"]]];
        ciberExtremidadesArray=[["Fue ext extremidad","fueextr","Incremento de la característica Fuerza para el miembro en cuestión."],
                                //["Fuerza miembro adicional","fuemiemadi","La fuerza del miembro añadido, viene determinada por la mitad del valor de Fuerza del ciborg más los modificadores comprados con el implante. Ver Tabla."],
                                ["Mov ext adicional","movmiad","Movimiento adicional para extremidades inferiores."],
                                ["Articulac adicional","artadi","Modificador al realizar presas y saltos."],
                                ["Articulac laxa","artlax","Capacidad de contorsionismo de la articulación."],
                                ["Memb interdigital","membinter","Las membranas interdigitales ayudan al personaje a moverse en fluidos."]],
        ciberExtremidadesArrayTri=[[["0,0,0","No"],["500,1,5,Fuerza extra extremidad,+2","+2"],["1000,2,6,Fuerza extra extremidad,+4","+4"],["1500,3,7,Fuerza extra extremidad,+6","+6"],["2000,4,8,Fuerza extra extremidad,+8","+8"]],
                                [["0,0,0","No"],["500,1,5,Movimiento miembro adicional,+2","+2"],["1000,2,7,Movimiento miembro adicional,+4","+4"]],
                                [["0,0,0","No"],["500,1,5,Articulación adicional,+2 presas + 4 m salto","+2 presas + 4 m salto"],["1000,2,6,Articulación adicional,+4 presas + 8 m salto","+4 presas + 8 m salto"],["1500,3,7,Articulación adicional,+6 presas + 16 m salto","+6 presas + 16 m salto"],["2000,4,8,Articulación adicional,+8 presas + 32 m salto","+8 presas + 32 m salto"]],
                                [["0,0,0","No"],["500,1,5,Articulación laxa,+2 contorsionismo","+2 contorsionismo"],["1000,2,6,Articulación laxa,+4 contorsionismo","+4 contorsionismo"],["1500,3,7,Articulación laxa,+6 contorsionismo","+6 contorsionismo"],["2000,4,8,Articulación laxa,+8 contorsionismo","+8 contorsionismo"]],
                                [["0,0,0","No"],["500,1,5,Membranas interdigitales,+2 nadar","+2 nadar"]]],
        monturasArmamentoArray=[["Herramientas","herram","Herramientas de diferentes NT se incorporan al implante."],
                                ["Montura","montu","Monturas para la colocación de armas y herramientas."],
                                ["Cavidad","cavid","El arma queda oculta y camuflada. Para poder sacarla de la cavidad, es necesaria una acción."],
                                ["Ciberconexión","cibercon","Requiere un segundo cerebro con interfaz neural. Puede utilizarse tanto con armas implantadas como con armas de mano preparadas para la ciberconexión."]],
        monturasArmamentoArrayTri =[[["0,0,0","No"],["500,1,5,Herramientas,Hasta NT5","Hasta NT5"],["1000,2,6,Herramientas,Hasta NT6","Hasta NT6"],["1500,3,7,Herramientas,Hasta NT7","Hasta NT7"],["2000,4,8,Herramientas,Hasta NT8","Hasta NT8"]],
                                    [["0,0,0","No"],["500,1,5,Montura,Máx M","Máx M"],["1000,2,6,Montura,Máx G","Máx G"],["1500,3,7,Montura,Máx MG","Máx MG"]],
                                    [["0,0,0","No"],["500,1,5,Cavidad,Máx MP","Máx MP"],["1000,2,6,Cavidad,Máx P","Máx P"],["1500,3,7,Cavidad,Máx M","Máx M"],["2000,4,8,Cavidad,Máx G","Máx G"]],
                                    [["0,0,0","No"],["500,1,5,Ciberconexión,+2 dif ataques","+2 dif ataques"],["1000,2,6,Ciberconexión,+4 dif ataques","+4 dif ataques"],["1500,3,7,Ciberconexión,+6 dif ataques","+6 dif ataques"],["2000,4,8,Ciberconexión,+8 dif ataques","+8 dif ataques"]]],
        bombaQuimicaArray =[["Dosis","dosis","Número de dosis almacenables en el implante."],
                            ["Inyector auto","inyaut","Inyector automático, actúa con un comando de voz o movimiento sencillo, su uso cuenta como una acción gratuita."],
                            ["Inyector manual","inyman","Inyecto manual, actúa con un movimiento complejo, su uso cuenta como una acción."],
                            ["Multisustancia","multisus","Capacidad de almacenar sustancias de diferente tipo en el implante."]],
        bombaQuimicaArrayTri = [[["0,0,0","No"],["500,1,5,Dosis,10 dosis","10 dosis"],["1000,2,6,Dosis,20 dosis","20 dosis"],["1500,3,7,Dosis,30 dosis","30 dosis"],["2000,4,8,Dosis,40 dosis","40 dosis"]],
                                [["0,0,0","No"],["500,1,5,Inyector automático,Sí","Sí"]],
                                [["0,0,0","No"],["500,1,5,Inyector manual,Sí","Sí"]],
                                [["0,0,0","No"],["500,1,6,Multi sustancia,2 sustancias","2 sustancias"],["1000,2,7,Multi sustancia,3 sustancias","3 sustancias"],["1500,3,8,Multi sustancia,4 sustancias","4 sustancias"]]];
        escudoEnergéticoArray =[["Tipo escudo","escudo","Se puede elegir uno de los 4 tipos"]],
        escudoEnergéticoArrayTri = [[["0,0,0","No"],["700,1,5,Tipo escudo energético,Escudo NT 5 Temprano","Escudo NT 5 Temprano"],["1500,2,6,Tipo escudo energético,Escudo NT 6 Estándar","Escudo NT 6 Estándar"],["2000,3,7,Tipo escudo energético,Escudo NT 7 Duelo","Escudo NT 7 Duelo"],["6000,3,7,Tipo escudo energético,Escudo NT 7 Asalto","Escudo NT 7 Asalto"],["20500,4,8,Tipo escudo energético,Escudo NT 8 Batalla","Escudo NT 8 Batalla"]]],
        sistemaVueloArray =[["Tipo alas","alas","Selección del tipo de alas."],
                            ["Hélices","helices","Integradas en las alas, permiten una mayor velocidad: Multiplicando la velocidad de planeo."],
                            ["Chorro","chorro","Impulsos de retrocohetes con cargas limitadas (la recarga cuesta 50 fénix por impuso) que multiplican la velocidad de planeo."],
                            ["Impulsos","impulsos","Impulsos máximos acumulables en el chorro."]],
        sistemaVueloArrayTri = [[["0,0,0","No"],["500,1,5,Tipo de alas,Alas planeadoras","Alas planeadoras","Requieren tomar impulso desde una altura. La velocidad es de 5m por turno. Hasta un máximo de 100m."],["1000,1,6,Tipo de alas,Alas batidoras","Alas batidoras","Permiten levantar el vuelo sin carrerilla ni altura a razón de una elevación de 5 m por turno más exitos en FUERZA + VIGOR(volar)."],["1500,1,7,Tipo de alas,Sistema de levitación","Sistema de levitación","Levanta el vuelo con sistemas antigravitacionales a razón de 5 m por turno. Hasta un máximo de 100 m."]],
                                [["0,0,0","No"],["500,1,5,Hélices,x2","x2"],["1000,2,6,Hélices,x3","x3"],["1500,3,7,Hélices,x4","x4"],["2000,4,8,Hélices,x5","x5"]],
                                [["0,0,0","No"],["500,1,5,Chorro,x2","x2"],["1000,2,6,Chorro,x4","x4"],["1500,3,7,Chorro,x6","x6"],["2000,4,8,Chorro,x8","x8"]],
                                [["0,0,0","No"],["500,1,5,Impulsos,5","5"],["1000,2,6,Impulsos,10","10"],["1500,3,7,Impulsos,15","15"],["2000,4,8,Impulsos,20","20"]]],
        luzIntegradaArray =[["Linterna/Foco","foco","Una linterna, un foco o un sistema digital de iluminación."],
                            ["Flash","flash","La luz puede emitir un destello cegador o un patrón de flashes que desorienten y ciegen o confundan a cualquiera que lo vea. Cuando se emplea un flash con esta finalidad, la persona queda cegada o aturdida durante 6 turnos (el objetivo puede hacer una tirada de Percepción + Esquivar. Cada PV reduce la duración total del efecto en 1 turno hasta un mínimo de 1 turno). Mientras perdure el efecto sobre el objetivo, este sufrirá un penalizador de -4 a todas las tiradas que requieran de la vista. Las Gafas protectoras evitarán este efecto."]],
        luzIntegradaArrayTri = [[["0,0,0","No"],["100,1,5,Linterna/Foco,Alcance 25 m. Radio 5 m (flash)","Alcance 25 m. Radio 5 m (flash)"],["200,2,6,Linterna/Foco,Alcance 50 m. Radio 10 m (flash)","Alcance 50 m. Radio 10 m (flash)"],["300,3,7,Linterna/Foco,Alcance 100 m. Radio 20 m (flash)","Alcance 100 m. Radio 20 m (flash)"],["400,4,8,Linterna/Foco,Alcance 200 m. Radio 30 m (flash)","Alcance 200 m. Radio 30 m (flash)"]],
                                [["0,0,0","No"],["100,1,5,Flash,Sí","Sí"]]]; 