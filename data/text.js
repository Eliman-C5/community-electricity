import { NAVBAR_TYPES } from "./TYPES";

//Navbar
export const navLinks = [
  // {
  //   id: 1,
  //   title: 'About',
  //   src: '/about',
  // },
  {
    id: 0,
    title: 'Home',
    src: '/',
    type: NAVBAR_TYPES.HOME,
  },
  {
    id: 1,
    title: 'Team',
    src: '/team',
    type: NAVBAR_TYPES.TEAM,
  },
  {
    id: 2,
    title: 'Programs',
    src: '/programs',
    type: NAVBAR_TYPES.PROGRAMS,
  },
  {
    id: 3,
    title: 'Marketplace',
    src: '/marketplace',
    type: NAVBAR_TYPES.MARKETPLACE,
  },
  {
    id: 4,
    title: 'Innovation zones',
    src: '/zones',
    type: NAVBAR_TYPES.ZONES
  },
];

export const navDesktopLinks = [
  // {
  //   id: 1,
  //   title: 'About',
  //   src: '/about',
  // },
  {
    id: 1,
    title: 'Team',
    src: '/team',
    type: NAVBAR_TYPES.TEAM,
  },
  {
    id: 2,
    title: 'Programs',
    src: '/programs',
    type: NAVBAR_TYPES.PROGRAMS,
  },
  {
    id: 3,
    title: 'Marketplace',
    src: '/marketplace',
    type: NAVBAR_TYPES.MARKETPLACE,
  },
  {
    id: 4,
    title: 'Innovation zones',
    src: '/zones',
    type: NAVBAR_TYPES.ZONES
  },
];

//Home
export const headerTitle = {
  esp: 'Comunidades de prosumidores',
  eng: 'Prosumer communities',
};

export const headerSubtitle = {
  esp: 'Red de productores y consumidores de electricidad local y limpia descarbonizando a escala',
  eng: 'Network of producers and consumers of local and clean electricity decarbonizing at scale',
}

export const aboutSection = {
  esp: [
    {
      id: 1,
      text: 'Community Electricity es una start-up de tecnología climática que transforma los vecindarios de lo que nosotros llamamos  comunidades de prosumidores, también conocidas como “Centrales eléctricas virtuales”.'
    },
    {
      id: 2,
      text: 'Las Comunidades de Prosumidores son redes de recursos energéticos renovables y flexibles operados por prosumidores "consumidores y productores de electricidad local y limpia". Los prosumidores toman ventaja de las fluctuaciones diarias del precio de la electricidad, lo que resulta en ganancias económicas y ambientales.'
    },
    {
      id: 3,
      text: 'Nuestro sistema operativo utiliza IA, blockchain y aprendizaje automático para monitorear, pronosticar, optimizar y comercializar la electricidad almacenada en el mejor precio. Nuestro enfoque proporciona flexibilidad y liquidez a la mercados eléctricos y próximamente entre pares.'
    },
    {
      id: 4,
      text: 'Nos comprometemos a crear valor en el borde de la red, disminuyendo la contaminación y aumentar la equidad a nivel local. estamos enfocados primero en las comunidades desfavorecidas.'
    },
  ],
  eng: [
    {
      id: 1,
      text: 'Community Electricity is a Climate Tech start-up that transforms neighborhoods into what we call Prosumer Communities, also known as "virtual power plants".'
    },
    {
      id: 2,
      text: 'Prosumer Communities are networks of flexible renewable energy resources operated by prosumers, "consumers and producers of local and clean electricity." Prosumers take advantage of daily electricity price fluctuations, resulting in economic and environmental gains.'
    },
    {
      id: 3,
      text: 'Our CommunityOS uses AI, blockchain, and machine learning to monitor, forecast, optimize and trade electricity stored at the best price. Our approach provides flexibility and liquidity to the electricity markets and soon between peers.'
    },
    {
      id: 4,
      text: 'We commit to creating value at the edge of the grid, decreasing pollution, and increasing equity at the local level. We are focused on disadvantaged communities first.'
    },
  ]
}

export const dappSection = {
  subtitleEsp: 'Conecta sin problemas e incentiva a los miembros de la red a descarbonizar colectivamente y ser premiados',
  subtitleEng: 'Seamlessly connects and incentivizes network members to decarbonize collectively and get rewarded.',
  esp: [
    {
      id: 1,
      text: 'Atrae, conecta, y moviliza al consumidor de electricidad a convertirse en un prosumidor: productor, consumidor, y comerciantes diarios de electricidad limpia y local.',
    },
    {
      id: 2,
      text: 'Empodera a los miembros para convertirse en consumidores conscientes, participantes del mercado y premios por acciones de eficiencia energética',
    },
    {
      id: 3,
      text: 'Permite a los miembros optimizar la producción eléctrica en conjunción con baterias. Proporcionar flexibilidad de activos maximizando los ingresos mediante la venta de excendetes de electricidad a precios tácticos a la red y pronto entre vecinos.',
    },
    {
      id: 4,
      text: 'Un sistema operativo comunitario que usa IA y blockchain para conectar, administrar y optimizar todos los activos en el hogar, lo que incentiva los esfuerzos de micro descarbonización en el borde de la red.'
    }
  ],
  eng: [
    {
      id: 1,
      text: 'Seamlessly engages, connects, and mobilizes electricity consumers to become prosumers: producers, consumers, and day traders of local clean electricity.',
    },
    {
      id: 2,
      text: 'Empowers members to become conscious consumers of energy, market participants and rewards for energy- efficent actions.',
    },
    {
      id: 3,
      text: 'Allows members to optimize electricity production in conjunction with batteries. Providing asset flexibility maximizing revenues by selling surplus electricity at tactical prices back to the grid and soon between neighbors.',
    },
    {
      id: 4,
      text: 'A CommunityOS that uses AI and blockchain to connect, manage and optimize all assets in the home—incentivizing micro decarbonization efforts at the edge of the grid.'
    }
  ]
}

export const mediaImg = {
  first: [
    {id: 1, src: '/images/media/Smartenergy.png', alt: 'Smartenergy'},
    {id: 2, src: '/images/media/Microgrid.png', alt: 'Microgrid'},
    {id: 3, src: '/images/media/energy storage.png', alt: 'energy storage'},
  ],
  second: [
    {id: 1, src: '/images/media/Tahoo.png', alt: 'Yahoo'},
    {id: 2, src: '/images/media/Medium.png', alt: 'Medium'},
    {id: 3, src: '/images/media/The verge.png', alt: 'The verge'},
  ],
  third: [
    {id: 1, src: '/images/media/Cision.png', alt: 'Cision'},
    {id: 2, src: '/images/media/Vox.png', alt: 'Vox'},
    {id: 3, src: '/images/media/Coindesk.png', alt: 'Coindesk'},
  ],
}

export const purpleButtons = [
  {
    id: 1,
    esp: 'Multifamiliar',
    eng: 'Multi-family',
    type: 'FIRST',
  },
  {
    id: 2,
    esp: 'Unifamiliar',
    eng: 'Single family',
    type: 'SECOND',
  },
  {
    id: 3,
    esp: 'Comunidad solar',
    eng: 'Community solar',
    type: 'THIRD',
  },
  {
    id: 4,
    esp: 'Comunidad micro-hidroeléctrica',
    eng: 'Community micro-hydro',
    type: 'FOURTH',
  },
  {
    id: 5,
    esp: 'Movilidad EV',
    eng: 'EV Mobility',
    type: 'FIFTH',
  },
  {
    id: 6,
    esp: 'Microrred resiliente',
    eng: 'Resilient microgrid',
    type: 'SIXTH',
  },
]

export const aboutCarusel = {
  eng: [
    {
      id: 0, 
      src: '/images/slider/slider-1.png', 
      title: 'Multi-family Housing Program', 
      text: 'We partner with Multi-Family real estate owners and developers to finance and transform their portfolios into 100% electric Prosumer Communities.'
    },
    {
      id: 1, 
      src: '/images/slider/slider-2.png', 
      title: 'Single-family Housing Program', 
      text: 'We engage and aggregate single-family real estate and transform them into electric and prosumer homes. ', 
    },
    {
      id: 2, 
      src: '/images/slider/slider-3.png', 
      title: 'Community Solar Program', 
      text: `Our Community solar program provides clean energy benefits to community members who rent or can not install solar panels in their homes.`, 
      btn: 'Learn more'
    },
    {
      id: 3, 
      src: '/images/slider/slider-4.png', 
      title: 'Community Micro-Hydro Program', 
      text: `Our community micro-hydro program is a new approach for water agencies to use control valves to reduce pressure for potable or wastewater. Like a Community Solar, the electricity generated by the micro-hydro turbine can be assigned to program subscribers.`,
    },
    {
      id: 4, 
      src: '/images/slider/slider-5.png', 
      title: 'EV Mobility Program', 
      text: `We implement EV Mobility services within Multi-Family buildings or strategic locations across the community.`,
    },
    {
      id: 5, 
      src: '/images/slider/slider-6.png', 
      title: 'Resilient Microgrid Program', 
      text: `Our Microgrid program provides community members and critical facilities with resilience hubs that keeping electricity flowing throughout power outages.`,
    },
  ],
  esp: [
    {
      id: 0, 
      src: '/images/slider/slider-1.png', 
      title: 'Programa de vivienda multifamiliar', 
      text: 'Nos asociamos con propietarios y desarrolladores de bienes raíces multifamiliares y promotores para financiar y transformar sus carteras en comunidades de prosumidores 100 % eléctricas.',
    },
    {
      id: 1, 
      src: '/images/slider/slider-2.png', 
      title: 'Programa de Vivienda Unifamiliar', 
      text: 'Contratamos y agregamos inmuebles unifamiliares y los transformamos en hogares eléctricos y de prosumidor.',
    },
    {
      id: 2, 
      src: '/images/slider/slider-3.png', 
      title: 'Programa Solar Comunitario', 
      text: `Nuestro programa solar comunitario brinda beneficios de energía limpia a los miembros de la comunidad que alquilan o no pueden instalar paneles solares en sus hogares.`, 
    },
    {
      id: 3, 
      src: '/images/slider/slider-4.png', 
      title: 'Programa Micro-Hidro Comunitario', 
      text: `Nuestro programa comunitario de microhidroeléctricas es un nuevo enfoque para que las agencias de agua utilicen válvulas de control para reducir la presión para agua potable o aguas residuales. Como una comunidad solar, la electricidad generada por la turbina micro-hidráulica se puede asignar al programa de suscriptores.`,
    },
    {
      id: 4, 
      src: '/images/slider/slider-2.png', 
      title: 'Programa de movilidad EV', 
      text: `Implementamos servicios de movilidad EV dentro de edificios multifamiliares o lugares estratégicos en toda la comunidad`,
    },
    {
      id: 5, 
      src: '/images/slider/slider-2.png', 
      title: 'Programa de microrredes resilientes', 
      text: `Nuestro programa Microgrid proporciona miembros de la comunidad e instalaciones críticas con centros de resiliencia que mantienen el flujo de electricidad a través de cortes de energía.`,
    },
  ],
}

export const footer = {
  join_prosumer_network: {
    eng: 'Join the prosumer network and monetize as you decarbonize',
    esp: 'Únase a la red de prosumidores y monetice mientras descarboniza'
  },
  we_are_creating: {
    eng: 'We are creating the infrastructure and mechanisms to make impact sexy, personal, and material.',
    esp: 'Estamos creando la infraestructura y los mecanismos para lograr un impacto sexy, personal y material.'
  }
}

export const electricAccount = {
  title: {
    eng: 'Start using your electric bank account',
    esp: 'Empieza a usar tu cuenta bancaria eléctrica'
  },
  calculator: {
    eng: 'IRA incentives calculator',
    esp: 'Calculadora de incentivos IRA'
  }
}

export const partnerPictures = [
  {id: 1, src: '/images/partners/Energy coalition.svg', alt: 'Energy coalition'},
  {id: 2, src: '/images/partners/California energy.svg', alt: 'California energy'},
  {id: 3, src: '/images/partners/Ucla.svg', alt: 'Ucla'},
  {id: 4, src: '/images/partners/CPA.svg', alt: 'CPA'},
  {id: 5, src: '/images/partners/pivot energy.svg', alt: 'pivot energy'},
  {id: 6, src: '/images/partners/Aclima.svg', alt: 'Aclima'},
  {id: 7, src: '/images/partners/Greencommuter.svg', alt: 'Greencommuter'},
  {id: 8, src: '/images/partners/google.svg', alt: 'google'},
  {id: 9, src: '/images/partners/splight.svg', alt: 'splight'},
  {id: 10, src: '/images/partners/grid.svg', alt: 'grid'},
  {id: 11, src: '/images/partners/arup.svg', alt: 'arup'},
  {id: 12, src: '/images/partners/bluesky energy.svg', alt: 'bluesky energy'},
]

export const comingSoonItems = [
  {
    id: 1, 
    text: {
      esp: 'INTERNET',
      eng: 'INTERNET'
    },
    src: "/images/comingSoon/internet.svg"
  },
  {
    id: 2, 
    text: {
      esp: 'ELECTRICIDAD',
      eng: 'ELECTRICITY'
    },
    src: "/images/comingSoon/electricity.svg"
  },
  {
    id: 3, 
    text: {
      esp: 'RESILIENCIA',
      eng: 'RESILIENCY'
    },
    src: "/images/comingSoon/resiliency.svg"
  },
  {
    id: 4, 
    text: {
      esp: 'RECOMPENSADO',
      eng: 'GET REWARDED'
    },
    src: "/images/comingSoon/get-rewarded.svg"
  }
]

//Marketplace
export const marketplaceSubtitle = {
  esp: 'Comienza a electrificar tu hogar y ayuda a descarbonizar tu vecindario',
  eng: 'Start electrifying your home and help decarbonize your neighborhood'
}

export const marketplaceWelcome = {
  esp: 'Bienvenido a nuestra comunidad',
  eng: 'Welcome to our Community'
}

export const marketCards = [
  {
    id: 1, 
    name: 'Super Node', 
    text: {
      esp: 'El súper nodo glu puede integrar varios dispositivos a través de la API local',
      eng: 'The glu super node can integrate multiple devices via local API'
    }, 
    src: '/images/marketplace/card-1.png',
  },
  {
    id: 2, 
    name: 'LFP Battery', 
    text: {
      esp: '48V RHINO - LiFePO4 - 276Ah - 10kWh & 14kWh',
      eng: '48V RHINO - LiFePO4 - 276Ah - 10kWh & 14kWh'
    }, 
    src: '/images/marketplace/card-2.png',
  },
  {
    id: 3, 
    name: 'Thermostat', 
    text: {
      esp: 'Termostato Wi-Fi con pantalla táctil programable inteligente mejorado',
      eng: 'Enhanced Smart Programmable Touch-Screen Wi-Fi Thermostat'
    }, 
    src: '/images/marketplace/card-3.png',
  },
  {
    id: 4, 
    name: 'PV Solar', 
    text: {
      esp: 'Panel solar monocristalino 360W 24V',
      eng: '360W 24V MONOCRYSTALLINE SOLAR PANEL'
    }, 
    src: '/images/marketplace/card-4.png',
  },
]

export const firstMarketCard = [
  {
    id: 1, 
    text: {
      eng: 'Optimization',
      esp: 'Optimización'
    },
  },
  {
    id: 2, 
    text: {
      eng: 'Monetization',
      esp: 'Monetización'
    },
  },
  {
    id: 3, 
    text: {
      eng: 'Monitoring',
      esp: 'Monitoreo'
    },
  },
  {
    id: 4, 
    text: {
      eng: 'Reward',
      esp: 'Recompenza'
    },
  },
  {
    id: 5, 
    text: {
      eng: 'Cyber secure',
      esp: 'Ciberseguro'
    },
  },
  {
    id: 6, 
    text: {
      eng: 'Connect IOT',
      esp: 'Conectar al IoT'
    },
  }
];

export const secondMarketCard = [
  {
    id: 1, 
    text: {
      eng: 'Under Voltage',
      esp: 'Bajo Voltaje'
    },
  },
  {
    id: 2, 
    text: {
      eng: 'Over Voltage',
      esp: 'Sobre Voltaje'
    },
  },
  {
    id: 3, 
    text: {
      eng: 'Over-Current',
      esp: 'Sobrecorriente'
    },
  },
  {
    id: 4, 
    text: {
      eng: 'Safety Fuse (300A)',
      esp: 'Fusible de seguridad (300A)'
    },
  },
  {
    id: 5, 
    text: {
      eng: 'BMS (Battery Management System)',
      esp: 'BMS (Sistema de gestión de batería)'
    },
  },
];

//Programs
export const programsCards = [
  {
    id: 1, 
    title: {
      eng: 'Multi-family Housing Program',
      esp: 'Programa de Vivienda Multifamiliar'
    }, 
    src: '/images/programs/card-1.svg',
    dropdownTitle: {
      eng: 'THERMOSTAT + NODE + SOLAR + STORAGE + SOFTWARE + NETWORK',
      esp: 'TERMOSTATO + NODO + SOLAR + ALMACENAMIENTO + SOFTWARE + RED'
    },
    dropdownText: {
      eng: 'We partner with Multi-Family real estate owners and developers to finance and transform their portfolios into 100% electric Prosumer Communities. Using our AI-powered software, glu surplus electricity storage in the batteries is sold back to the grid creating new sources of revenues. We eliminate demand charges for building electricity loads by including batteries, resulting in lower to net electricity bills. Our multi-family building program focuses on electrifying both existing real estate and new construction. The program includes assessment, design, financing, and implementation.',
      esp: 'Nos asociamos con propietarios de bienes raíces multifamiliares y promotores para financiar y transformar sus carteras en comunidades de prosumidores 100 % eléctricas. Usando nuestra inteligencia artificial, el excedente de almacenamiento de electricidad glu en las baterías es vendido de regreso a la red creando nuevas fuentes de ingresos. Nosotros eliminamos los demandas por cargas de electricidad del edificio incluyendo baterías lo que resulta en facturas de electricidad más bajas que las netas. Nuestro programa de edificios multifamiliares se enfoca en electrificar tanto los inmuebles existentes como las construcciones nuevas. El programa incluye evaluación, diseño, financiamiento e implementación.'
    }
  },
  {
    id: 2, 
    title: {
      eng: 'Single-family Housing Program',
      esp: 'Programa de Vivienda Unifamiliar'
    }, 
    src: '/images/programs/card-2.svg',
    dropdownTitle: {
      eng: 'THERMOSTAT + NODE + SOLAR + STORAGE + SOFTWARE + NETWORK',
      esp: 'TERMOSTATO + NODO + SOLAR + ALMACENAMIENTO + SOFTWARE + RED'
    },
    dropdownText: {
      eng: 'We engage and aggregate single-family real estate and transform them into electric and prosumer homes. We connect neighborhoods into networks of producers and consumers of clean electricity organized to create value at the edge of the grid, decrease pollution and increase equity at the local level. Our single-family housing program focuses on electrifying both existing real estate and new construction. The program includes assessment, design, financing, and implementation.',
      esp: 'Contratamos y agregamos inmuebles unifamiliares y los transformamos en eléctricos y hogares de prosumidores. Conectamos barrios en redes de productores y consumidores de electricidad limpia organizados para crear valor en el borde de la red, disminuir la contaminación y aumentar la equidad a nivel local. Nuestro programa de edificios unifamiliares se enfoca en electrificar tanto los inmuebles existentes como las construcciones nuevas. El programa incluye evaluación, diseño, financiamiento e implementación.'
    }
  },
  {
    id: 3, 
    title: {
      eng: 'Community Solar Program',
      esp: 'Programa Solar Comunitario'
    }, 
    src: '/images/programs/card-3.svg',
    dropdownTitle: {
      eng: 'SOLAR + SOFTWARE + NETWORK',
      esp: 'SOLAR + SOFTWARE + RED'
    },
    dropdownText: {
      eng: 'Our Community solar program provides clean energy benefits to community members who rent or who can not install solar panels in their homes. We partner with commercial and corporate buildings, land, and parking lot owners engage, co-finance, develop and operate community solar projects across disadvantaged communities. Once the resident becomes a Community solar subscriber, they can begin electrifying their home using the Inflation Reduction Act home electrification incentives. The Federal incentives can cover up to 100% of the electrification costsLand, parking lots, or commercial/ industrial building owners can monetize their property by hosting a community solar farm. Owners will receive long-term lease payments while providing cleaner, cheaper electricity for their surrounding community. The program includes assessment, design, financing, and implementation.',
      esp: 'Nuestro programa solar comunitario brinda beneficios de energía limpia a los miembros de la comunidad que alquilan o que no pueden instalar paneles solares en sus casas. Nosotros nos asociamos con propietarios de edificios comerciales y corporativos, terrenos y estacionamientos. Nos involucramos, cofinanciamos, desarrollamos y operamos proyectos solares comunitarios a través de comunidades desfavorecidas. Una vez que el residente se convierte en suscriptor, pueden comenzar a electrificar su hogar utilizando los incentivos de electrificación del hogar de la Ley de Reducción de la Inflación. Los incentivos federales pueden cubrir hasta el 100% de los costos de electrificación. Los propietarios de terrenos, estacionamientos o edificios comerciales/industriales pueden monetizar su propiedad albergando una granja solar comunitaria. Los propietarios recibirán pagos de arrendamiento a largo plazo mientras proporcionan electricidad más limpia y más barata para la comunidad circundante. El programa incluye evaluación, diseño, financiamiento e implementación.'
    }
  },
  {
    id: 4, 
    title: {
      eng: 'Micro-hydro Program',
      esp: 'Programa Micro-Hidro Comunitario'
    }, 
    src: '/images/programs/card-4.svg',
    dropdownTitle: {
      eng: 'MICROHYDRO + SOFTWARE + NETWORK',
      esp: 'MICROHIDRO + SOFTWARE + RED'
    },
    dropdownText: {
      eng: 'Our community micro-hydro program is a new approach for municipal and private water agencies to use control valves to reduce pressure for potable or wastewater. These facilities can convert that pressure differential into electricity and revenue. Like a Community Solar, the electricity generated by the micro -hydro turbine is injected back into the grid and will be assigned to program subscribers. Our vision is to empower water facilities to become electricity micro -utilities.Entities that can control valves to reduce pressure for potable or wastewater can convert that pressure differential into electricity and revenue. Better pressure management reduces negative impacts on infrastructure, and generating your energy reduces operating costs. This program includes assessment, design, financing, and implementation.',
      esp: 'Nuestro programa micro-hidrocomunitario es un nuevo enfoque para los municipios y agencias privadas de agua para usar válvulas de control para reducir la presión para agua potable o residual. Estas instalaciones pueden convertir esa presión diferencial en electricidad e ingresos. Como comunidad solar, la electricidad generada por la micro-hidro turbina se inyecta de nuevo en la red y se asignará a los suscriptores del programa. Nuestra visión es empoderar a las instalaciones de agua para que se conviertan en utilidades microeléctricas. Las entidades que pueden controlar válvulas para reducir la presión de agua potable o residual pueden convertir ese diferencial de presión en electricidad e ingresos. Una mejor gestión de la presión reduce los impactos negativos en la infraestructura y generar su energía reduce los costos operativos. Este programa incluye evaluación, diseño, financiamiento e implementación.'
    }
  },
  {
    id: 5, 
    title: {
      eng: 'EV Mobility Program',
      esp: 'Programa de movilidad EV'
    }, 
    src: '/images/programs/card-5.svg',
    dropdownTitle: {
      eng: 'EV CHARGERS, VAN-POOLING AND MICRO-TRANSIT',
      esp: 'CARGADORES EV, VAN-POOLING Y MICRO-TRANSPORTE'
    },
    dropdownText: {
      eng: 'This program includes assessment, design, financing, and implementation.',
      esp: 'Este programa incluye evaluación, diseño, financiamiento e implementación.'
    }
  },
  {
    id: 6, 
    title: {
      eng: 'Microgrid Program',
      esp: 'Programa de microrred'
    }, 
    src: '/images/programs/card-6.svg',
    dropdownTitle: {
      eng: 'RESILIENCE & RELIABILITY',
      esp: 'RESILIENCIA Y FIABILIDAD'
    },
    dropdownText: {
      eng: 'A microgrid is a group of interconnected loads and distributed energy resources that acts as a single controllable entity with respect to the grid. It can operate in grid-connected or island mode. Microgrids can improve customer reliability and resilience. The program includes assessment, design, financing, and implementation.      ',
      esp: 'Una microrred es un grupo de cargas interconectadas y recursos de energía distribuidos que actúa como una sola entidad controlable con respecto a la red. Puede operar en modo isla o conectado a la red. Las microrredes pueden mejorar la confiabilidad y resiliencia del cliente. El programa incluye evaluación, diseño, financiamiento e implementación.'
    }
  },
  
]

export const programsText = {
  title: {
    eng: 'Prosumer as a Service (PaaS)',
    esp: 'Prosumidor como servicio',
  },
  text: {
    eng: 'Prosumer as a Service, also known as PaaS, provide people, real estate, corporations, and utilities the ability to seamlessly become prosumers (a producer, a consumer, and a trader of clean local electricity). Once a program is chosen, the services include the designing, financing, and implementing clean & flexible electricity assets, energy management, and impact reporting tailored to various decarbonization and renewable energy goals.',
    esp: 'Prosumidor como servicio, también conocido como PaaS por sus siglas en inglés, brinda a las personas, los bienes raíces, las corporaciones y los servicios públicos la capacidad de convertirse sin problemas en prosumidores (productor, consumidor y comerciante de electricidad local limpia). Una vez que se elige un programa, los servicios incluyen el diseño, el financiamiento y la implementación de activos de electricidad limpios y flexibles, la gestión de la energía y los informes de impacto adaptados a varios objetivos de descarbonización y energía renovable.'
  }
}

//Team
export const teamTexts = {
  src1: '/images/team/icon-1.svg',
  title1: {
    esp: 'Quienes somos',
    eng: 'Who we are'
  },
  text1: {
    esp: 'Somos un equipo de antecedentes multidisciplinarios desarrollando un protocolo de electrificación y descarbonización de código abierto para acelerar la implementación de soluciones en las comunidades para reducir las emisiones de carbono.',
    eng: 'We are a team of multi-disciplinary backgrounds developing an open source electrification and decarbonization protocol in order to accelerate the implementation of solutions across communities to curb carbon emissions.'
  },
  text1Part2: {
    esp: 'Estamos orgullosos de estar en una posición de liderazgo en los esfuerzos de descarbonización en las comunidades de justicia ambiental en California. Community Electricity está en camino de demostrar el valor de más de 30 casos comerciales que integran más de 300 activos conectados a nivel local, regional e internacional. Community Electricity, su gente, sus socios, están todos comprometidos a impulsar la descarbonización y la electricidad.',
    eng: 'We are proud to be in a leadership position in the decarbonization efforts across environmental justice communities in California. Community Electricity is on route to prove the value of 30+ business cases integrating over 300 assets connected locally, regionally, and internationally. Community Electricity, its people, its partners, are all committed to driving decarbonization and electrication forward.'
  },
  src2: '/images/team/icon-2.svg',
  title2: {
    esp: 'Nuestra visión',
    eng: 'Our vision'
  },
  text2: {
    esp: 'Un mundo impulsado por comunidades de prosumidores descentralizadas, descarbonizadas, democratizadas y digitalizadas (4D) en las que todas las partes interesadas (individuos, organizaciones, administraciones) estén incentivadas y empoderadas para la acción climática.',
    eng: 'A world powered by decentralized, decarbonized, democratized, and digitized (4Ds) prosumer communities in which all stakeholders (individuals, organizations, administrations) are incentivized and empowered towards climate action.'
  }
}

export const teamMembers = [
  {
    id: 1,
    src: '/images/team/members/helena_donoso.png',
    name: 'Helena Donoso',
    charge: {
      eng: 'CO-CEO',
      esp: 'CO-CEO'
    },
    linkedin: 'https://www.linkedin.com/in/helena-donoso-a46674b0/'
  },
  {
    id: 2,
    src: '/images/team/members/FELIPE_CANO.png',
    name: 'Felipe Cano',
    charge: {
      eng: 'CO-CEO',
      esp: 'CO-CEO'
    },
    linkedin: 'https://www.linkedin.com/in/felipe-cano-12459224/'
  },
  {
    id: 3,
    src: '/images/team/members/juan_pablo.png',
    name: 'Juan Pablo',
    charge: {
      eng: 'Chief Technology Officer',
      esp: 'Director de tecnología'
    },
    linkedin: null
  },
  {
    id: 4,
    src: '/images/team/members/austin_davis.png',
    name: 'Austin Davis',
    charge: {
      eng: 'Chief Blockchain Strategist',
      esp: 'Estratega Jefe de Blockchain'
    },
    linkedin: 'https://www.linkedin.com/in/austindavis/'
  },
  {
    id: 5,
    src: '/images/team/members/Eduardo_Munoz.png',
    name: 'José Marken',
    charge: {
      eng: 'Business Development Dominican Republic',
      esp: 'Desarrollo de Negocios República Dominicana'
    },
    linkedin: null
  },
  {
    id: 6,
    src: '/images/team/members/CONSTANZA_BLONDET.png',
    name: 'Constanza Blondet',
    charge: {
      eng: 'Chief Engagement Officer',
      esp: 'Directora de compromiso'
    },
    linkedin: null
  },
  {
    id: 7,
    src: '/images/team/members/JENNY_ARAGON.png',
    name: 'Jenny Aragon',
    charge: {
      eng: 'Finance & Accounting',
      esp: 'Finanzas & Contabilidad'
    },
    linkedin: null
  },
]

export const teamExperts = [
  {
    id: 1,
    src: '/images/team/experts/craig_perkins.png',
    name: 'Craig Perkins',
    charge: {
      eng: 'Executive Director ',
      esp: 'Director Ejecutivo'
    },
    linkedin: 'https://www.linkedin.com/in/craig-perkins-30584512/'
  },
  {
    id: 2,
    src: '/images/team/experts/sandra.png',
    name: 'Sandra Velez',
    charge: {
      eng: 'Advisor to the presidency of the ethuss group',
      esp: 'CO-CEO'
    },
    linkedin: null
  },
  {
    id: 3,
    src: '/images/team/experts/JULIE.png',
    name: 'Dr. Julie Albright',
    charge: {
      eng: 'Data center expert',
      esp: 'Experta en centros de datos'
    },
    linkedin: null
  },
  {
    id: 4,
    src: '/images/team/experts/Brad_Albright.png',
    name: 'Brad Albright',
    charge: {
      eng: 'Community solar and energy expert',
      esp: 'Experto comunitario en energía y energía solar'
    },
    linkedin: null
  },
  {
    id: 5,
    src: '/images/team/experts/ANTHEM.png',
    name: 'Anthem Hayek Blanchard',
    charge: {
      eng: 'Founder of herasoft blockchain and cybersecurity expert',
      esp: 'Fundador de herasoft. Experto en ciberseguridad y blockchain'
    },
    linkedin: null
  },
  {
    id: 6,
    src: '/images/team/experts/DIEGO_MARTINEZ.png',
    name: 'Diego Martinez',
    charge: {
      eng: 'Energy expert',
      esp: 'Experto en energía'
    },
    linkedin: null
  },
]

//zones
export const zonesTexts = [
  {
    id: 1,
    text: {
      eng: 'Commercial pilots and living laboratories',
      esp: 'Pilotos comerciales y laboratorios vivientes'
    },
  },
  {
    id: 2,
    text: {
      eng: 'Proving the value of our concepts and methods.',
      esp: 'Demostrar el valor de nuestros conceptos y métodos.'
    },
  },
  {
    id: 3,
    text: {
      eng: 'Bringing communities up to speed with decentralized energy generation and guiding them towards their energy transition.',
      esp: 'Poner a las comunidades al día con la generación de energía descentralizada y guiarlas hacia su transición energética.'
    },
  },
  {
    id: 4,
    text: {
      eng: 'Modernizing workforce development.',
      esp: 'Modernización del desarrollo de la fuerza laboral.'
    },
  }
]

export const zonesCardsTexts = [
  {
    id: 1,
    mainImg: '/images/zones/cards/card-1.png',
    title: {
      eng: 'Bassett Avocado Heights, California',
      esp: 'Bassett Avocado Heights, California'
    },
    firstText: {
      eng: 'MASTER COMMUNITY: PRODUCT DEVELOPMENT',
      esp: 'COMUNIDAD MAESTRA: DESARROLLO DE PRODUCTO',
    },
    secondText: {
      eng: 'Virtual Power Plants, Master Plan Program for Disadvantaged Communities.',
      esp: 'Centrales Virtuales, Programa Plan Maestro para Comunidades Desfavorecidas.'
    },
    specialText: null,
    arrowPath: '/images/zones/purpleArrow.svg',
  },
  {
    id: 2,
    mainImg: '/images/zones/cards/card-2.png',
    title: {
      eng: 'SANTA ANA, CALIFORNIA',
      esp: 'SANTA ANA, CALIFORNIA'
    },
    firstText: {
      eng: 'MASTER COMMUNITY: PRODUCT IMPLEMENTATIONT',
      esp: 'COMUNIDAD MASTER: IMPLEMENTACIÓN DEL PRODUCTO',
    },
    secondText: {
      eng: 'Virtual Power Plants, New 100% Electric Affordable Housing Program.',
      esp: 'Centrales Eléctricas Virtuales, Nuevo Programa de Vivienda Asequible 100% Eléctrica.'
    },
    specialText: null,
    arrowPath: '/images/zones/purpleArrow.svg',
  },
  {
    id: 3,
    mainImg: '/images/zones/cards/card-3.png',
    title: {
      eng: 'FREEPORT, TX',
      esp: 'FREEPORT, TX'
    },
    firstText: {
      eng: 'UNDER EVALUATION',
      esp: 'Bajo evaluación',
    },
    secondText: {
      eng: 'Solar + Storage',
      esp: 'Solar + Almacenamiento'
    },
    specialText: '10 MW Community Solar.',
    arrowPath: '/images/zones/purpleArrow.svg',
  },
  {
    id: 4,
    mainImg: '/images/zones/cards/card-4.png',
    title: {
      eng: 'LA LATAM',
      esp: 'LA LATAM'
    },
    firstText: {
      eng: 'IN NEGOTIATIONS',
      esp: 'En negociaciones',
    },
    secondText: {
      eng: 'Virtual power plants, Knowledge Transfer, Policy Consulting, Education/ Workforce Development.',
      esp: 'Centrales eléctricas virtuales, Transferencia de conocimientos, Consultoría de políticas, Educación/Desarrollo de la fuerza laboral.'
    },
    specialText: null,
    arrowPath: '/images/zones/purpleArrow.svg',
  },
]

export const benefitsCards = [
    {
      id: 1,
      title: {
        esp: 'Impulsar la innovación tecnológica:',
        eng: 'Drive Technology Innovation:'
      },
      texts: [
        {
          id: 1,
          esp: 'Empoderar y dirigir a las agencias para que exploren y aceleren la adopción de nuevas tecnologías energéticas.',
          eng: 'Empower and direct agencies to explore and accelerate the adoption of new energy technologies.'
        },
        {
          id: 2,
          esp: 'Alentar a las empresas de servicios públicos reguladas a buscar tecnologías energéticas innovadoras y ofrecer opciones a los clientes.',
          eng: 'Encourage regulated utilities to pursue innovative energy technologies and offer customer choices.'
        },
        {
          id: 3,
          esp: 'Poner a prueba tecnologías emergentes en asociación con agencias y servicios públicos locales.',
          eng: 'Pilot emerging technologies in partnership with local agencies and utilities.'
        },
        {
          id: 4,
          esp: 'Apoyar directamente la I+D a través de innovadores programas de prosumidores y desarrollar tecnologías y conocimientos locales.',
          eng: 'Directly support R&D through innovative Prosumer programs and develop local technologies and expertise.'
        },
      ]
    },
    {
      id: 2,
      title: {
        esp: 'Modernizar la legislación, las políticas y los incentivos:',
        eng: 'Modernize legislation, policy, and incentives:'
      },
      texts: [
        {
          id: 1,
          esp: 'Impulsar iniciativas de modernización de la red.',
          eng: 'Promote grid modernization initiatives.'
        },
        {
          id: 2,
          esp: 'Implementar incentivos de desempeño que recompensen a las empresas de servicios públicos por cumplir con los objetivos de las políticas.',
          eng: 'Implement performance incentives that reward utilities for meeting policy goals.'
        },
        {
          id: 3,
          esp: 'Fomentar la competencia entre las eléctricas tradicionales y terceros.',
          eng: 'Foster competition between traditional utilities and third parties.'
        },
        {
          id: 4,
          esp: 'Incluir programas piloto en las estructuras de recuperación de costos y fijación de tarifas.',
          eng: 'Include pilot programs in cost recovery and rate-making structures.'
        },
      ]
    },
    {
      id: 3,
      title: {
        esp: 'Proporcionar financiación y mecanismos de financiación para la innovación en tecnologías limpias:',
        eng: 'Provide funding and financing mechanisms for cleantech innovation:'
      },
      texts: [
        {
          id: 1,
          esp: 'Alentar la adopción de incentivos financieros para impulsar el despliegue de tecnologías energéticas innovadoras.',
          eng: 'Encourage the adoption of financial incentives to drive the deployment of innovative energy technologies.'
        },
        {
          id: 2,
          esp: 'Dirigir a los organismos públicos en el desarrollo de Bonos Verdes para financiar proyectos sostenibles.',
          eng: 'Direct public agencies in the development of Green Bonds to finance sustainable projects.'
        },
        {
          id: 3,
          esp: 'Alentar las subvenciones estatales y federales o programas para avanzar en el despliegue de nuevas tecnologías.',
          eng: 'Encourage State and Federal grants or programs to advance the deployment of new technologies.'
        },
        {
          id: 4,
          esp: 'Impulsar un Marketplace Digital para inversores privados cualificados (crowdfunding). Eso puede incluir miembros de la comunidad.',
          eng: 'Promote a Digital Marketplace for qualified private investors (crowdfunding). That may include community members.'
        },
        {
          id: 5,
          esp: 'Monetizar el capital natural para financiar la modernización local y la nueva construcción totalmente eléctrica.',
          eng: 'Monetizing natural capital to fund local retrofitting and all-electric new construction.'
        },
      ]
    },
    {
      id: 4,
      title: {
        esp: 'Preparar la fuerza de trabajo:',
        eng: 'Prepare the workforce:'
      },
      texts: [
        {
          id: 1,
          esp: 'Proporcionar programas de desarrollo de la fuerza laboral para estudiantes de colegios comunitarios y miembros de la comunidad que promuevan la eficiencia energética, la respuesta a la demanda, la conservación del agua, los recursos renovables, etc.',
          eng: 'Provide workforce development programs for Community College students and community members promoting energy efficiency, demand response, water conservation, renewable resources, etc.'
        },
        {
          id: 2,
          esp: 'Asóciese con la industria para identificar brechas de habilidades y disponibilidad de mano de obra.',
          eng: 'Partner with the industry to identify skill gaps and workforce availability.'
        },
      ]
    },
    {
      id: 5,
      title: {
        esp: 'Actualizar redes de comunicaciones y sistemas de datos:',
        eng: 'Update communications networks and data systems:'
      },
      texts: [
        {
          id: 1,
          esp: 'Alentar a las agencias públicas a acceder a las eficiencias de infraestructura.',
          eng: 'Encourage public agencies to access infrastructure efficiencies.'
        },
        {
          id: 2,
          esp: 'Asóciese con la industria para identificar brechas de habilidades y disponibilidad de mano de obra.',
          eng: `Develop policies and programs to facilitate the state's transition to a "smart state."`
        },
        {
          id: 3,
          esp: 'Satisfaga las necesidades de banda ancha de las comunidades desatendidas.',
          eng: `Meet the broadband needs of underserved communities.`
        },
        {
          id: 4,
          esp: 'Incorporar la ciberseguridad en las actualizaciones de infraestructura.',
          eng: `Incorporate cybersecurity into infrastructure upgrades.`
        },
        {
          id: 5,
          esp: 'Coordinar los roles y el intercambio de información entre las partes interesadas.',
          eng: `Coordinate roles and information sharing across stakeholders.`
        },
      ]
    },
    {
      id: 6,
      title: {
        esp: 'Involucrar y educar a los miembros de la comunidad:',
        eng: 'Engage and Educate Community Members:'
      },
      texts: [
        {
          id: 1,
          esp: 'Dirigir a las agencias y organizaciones locales para que desarrollen las actividades de extensión comunitaria necesarias para apoyar el despliegue de tecnologías energéticas innovadoras.',
          eng: 'Direct agencies and local organizations to develop community outreach activities needed to support the deployment of innovative energy technologies.'
        },
      ]
    },
]