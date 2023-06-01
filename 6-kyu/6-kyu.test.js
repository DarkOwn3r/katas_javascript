const {
  getNoldorByMurdered,
  getPokemonsByType,
  getPokemonSpeciesNameByGeneration,
  getHeightByPokemonId,
  getHeightsByType,
} = require('./6-kyu');

/**
 * Funcion que obtiene la altura de un pokemon obtenido según su id
 *
 * url: https://pokeapi.co/api/v2/pokemon/<id>
 */
it('getHeightByPokemonId', async () => {
  const heightByPokemonId = await getHeightByPokemonId(25);
  expect(heightByPokemonId).toBe(4);
});

/**
 * Funcion que obtiene el listado de pokemons según su tipo
 *
 * url: https://pokeapi.co/api/v2/type/<id_type>
 */
it('getPokemonsByType', async () => {
  const pokemonsType = await getPokemonsByType('electric');
  expect(pokemonsType).not.toBeNull();
});

/**
 * Funcion que obtiene el listado de especies de pokemon según la generación
 *
 * url: https://pokeapi.co/api/v2/generation/<id_generation>;
 */
it('getPokemonSpeciesNameByGeneration', async () => {
  const names = [
    'treecko',
    'torchic',
    'mudkip',
    'poochyena',
    'zigzagoon',
    'wurmple',
    'lotad',
    'seedot',
    'taillow',
    'wingull',
    'ralts',
    'surskit',
    'shroomish',
    'slakoth',
    'nincada',
    'whismur',
    'makuhita',
    'azurill',
    'nosepass',
    'skitty',
    'sableye',
    'mawile',
    'aron',
    'meditite',
    'electrike',
    'plusle',
    'minun',
    'volbeat',
    'illumise',
    'gulpin',
    'carvanha',
    'wailmer',
    'numel',
    'torkoal',
    'spoink',
    'spinda',
    'trapinch',
    'cacnea',
    'swablu',
    'zangoose',
    'seviper',
    'lunatone',
    'solrock',
    'barboach',
    'corphish',
    'baltoy',
    'lileep',
    'anorith',
    'feebas',
    'castform',
    'kecleon',
    'shuppet',
    'duskull',
    'tropius',
    'absol',
    'wynaut',
    'snorunt',
    'spheal',
    'clamperl',
    'relicanth',
    'luvdisc',
    'bagon',
    'beldum',
    'regirock',
    'regice',
    'registeel',
    'latias',
    'latios',
    'kyogre',
    'groudon',
    'rayquaza',
    'jirachi',
    'deoxys',
    'grovyle',
    'sceptile',
    'combusken',
    'blaziken',
    'marshtomp',
    'swampert',
    'mightyena',
    'linoone',
    'silcoon',
    'beautifly',
    'cascoon',
    'dustox',
    'lombre',
    'ludicolo',
    'nuzleaf',
    'shiftry',
    'swellow',
    'pelipper',
    'kirlia',
    'gardevoir',
    'masquerain',
    'breloom',
    'vigoroth',
    'slaking',
    'ninjask',
    'shedinja',
    'loudred',
    'exploud',
    'hariyama',
    'delcatty',
    'lairon',
    'aggron',
    'medicham',
    'manectric',
    'roselia',
    'swalot',
    'sharpedo',
    'wailord',
    'camerupt',
    'grumpig',
    'vibrava',
    'flygon',
    'cacturne',
    'altaria',
    'whiscash',
    'crawdaunt',
    'claydol',
    'cradily',
    'armaldo',
    'milotic',
    'banette',
    'dusclops',
    'chimecho',
    'glalie',
    'sealeo',
    'walrein',
    'huntail',
    'gorebyss',
    'shelgon',
    'salamence',
    'metang',
    'metagross',
  ];
  const pokemonNames = await getPokemonSpeciesNameByGeneration(3);
  expect(pokemonNames).toEqual(names);
});

/**
 * Funcion que obtiene el listado de altura de los
 * pokemons según su tipo
 *
 * url: https://pokeapi.co/api/v2/type/<id_type>
 */
it('getHeightsByType', async () => {
  const heights = [
    4, 8, 3, 10, 5, 12, 11, 8, 16, 5, 12, 3, 6, 8, 14, 6, 19, 6, 15, 4, 4, 5, 9, 14, 4, 12, 18, 3, 8, 16, 4,
    1, 8, 2, 12, 21, 7, 15, 29, 5, 10, 2, 5, 15, 3, 18, 38, 15, 3, 10, 4, 16, 3, 3, 18, 23, 12, 3, 4, 9, 3,
    12, 4, 14, 23, 18, 16, 35, 3, 3, 3, 3, 3, 30, 14, 18, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7, 4, 10, 17,
    26, 6, 4, 6, 4, 4, 16, 3, 210, 240, 240, 5, 12, 28, 28, 28, 28,
  ];
  const pokemonsHeights = await getHeightsByType('electric');
  expect(pokemonsHeights).toEqual(heights);
});

const noldorRoyalHouse = [
  {
    name: 'Finwë',
    lifespan: 445,
    children: [
      {
        name: 'Fëanor',
        lifespan: 328,
        children: [
          {
            name: 'Maedhros',
            lifespan: 400,
            murdered: true,
            cause_of_death: 'Murdered by dark forces during the Battle of Doriath',
          },
          {
            name: 'Maglor',
            lifespan: 350,
            murdered: true,
            cause_of_death: 'Murdered by dark forces during the War of Wrath',
          },
          {
            name: 'Celegorm',
            lifespan: 300,
            murdered: true,
            cause_of_death: 'Murdered by dark forces during the Battle of Sudden Flame',
          },
          {
            name: 'Caranthir',
            lifespan: 375,
            murdered: true,
            cause_of_death: 'Murdered by dark forces during the Battle of Sudden Flame',
          },
          {
            name: 'Curufin',
            lifespan: 350,
            murdered: true,
            cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
          },
          {
            name: 'Amrod',
            lifespan: 450,
            murdered: true,
            cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
          },
          {
            name: 'Amras',
            lifespan: 400,
            murdered: true,
            cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
          },
        ],
        murdered: true,
        cause_of_death: 'Murdered by Balrogs at the fortress of Himring',
      },
      {
        name: 'Fingolfin',
        lifespan: 456,
        children: [
          {
            name: 'Fingon',
            lifespan: 400,
            murdered: true,
            cause_of_death: 'Murdered by Gothmog, Lord of Balrogs, during the Dagor Bragollach',
          },
          {
            name: 'Turgon',
            lifespan: 500,
            murdered: false,
            cause_of_death: null,
          },
          {
            name: 'Argon',
            lifespan: 350,
            murdered: false,
            cause_of_death: null,
          },
        ],
        murdered: true,
        cause_of_death: 'Killed in single combat with Morgoth at the gates of Angband',
      },
      {
        name: 'Finarfin',
        lifespan: null,
        children: [
          {
            name: 'Finrod Felagund',
            lifespan: 410,
            murdered: true,
            cause_of_death: 'Murdered by Sauron in Tol-in-Gaurhoth',
          },
          {
            name: 'Angrod',
            lifespan: 380,
            murdered: true,
            cause_of_death: 'Murdered by Morgoth during the Dagor Bragollach',
          },
          {
            name: 'Aegnor',
            lifespan: 390,
            murdered: true,
            cause_of_death: 'Murdered by Morgoth during the Dagor Bragollach',
          },
          {
            name: 'Galadriel',
            lifespan: null,
            murdered: false,
            cause_of_death: null,
          },
        ],
        murdered: false,
        cause_of_death: null,
      },
    ],
    murdered: true,
    cause_of_death: 'Murdered by Morgoth during the Battle of Formenos',
  },
];

/**
 *
 * PRUEBA TECNICA:
 *
 * Descripción:
 *
 * Crear una función que devuelve un array de miembros de la casa real Noldor
 * en base al valor del atributo murdered
 *
 * Ejemplo de un miembro de la casa real Noldor tiene esta estructura:
 * {
 *   name: 'Finwë',
 *   lifespan: 445,
 *   children: ['Fëanor', 'Fingolfin', 'Finarfin'],
 *   murdered: true,
 *   cause_of_death: 'Murdered by Morgoth during the Battle of Formenos',
 * }
 *
 *
 */
it('getNoldorByMurdered', () => {
  expect(getNoldorByMurdered(true)).toEqual([
    {
      name: 'Finwë',
      lifespan: 445,
      murdered: true,
      cause_of_death: 'Murdered by Morgoth during the Battle of Formenos',
      children: ['Fëanor', 'Fingolfin', 'Finarfin'],
    },
    {
      name: 'Fëanor',
      lifespan: 328,
      murdered: true,
      cause_of_death: 'Murdered by Balrogs at the fortress of Himring',
      children: ['Maedhros', 'Maglor', 'Celegorm', 'Caranthir', 'Curufin', 'Amrod', 'Amras'],
    },
    {
      name: 'Maedhros',
      lifespan: 400,
      murdered: true,
      cause_of_death: 'Murdered by dark forces during the Battle of Doriath',
      children: [],
    },
    {
      name: 'Maglor',
      lifespan: 350,
      murdered: true,
      cause_of_death: 'Murdered by dark forces during the War of Wrath',
      children: [],
    },
    {
      name: 'Celegorm',
      lifespan: 300,
      murdered: true,
      cause_of_death: 'Murdered by dark forces during the Battle of Sudden Flame',
      children: [],
    },
    {
      name: 'Caranthir',
      lifespan: 375,
      murdered: true,
      cause_of_death: 'Murdered by dark forces during the Battle of Sudden Flame',
      children: [],
    },
    {
      name: 'Curufin',
      lifespan: 350,
      murdered: true,
      cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
      children: [],
    },
    {
      name: 'Amrod',
      lifespan: 450,
      murdered: true,
      cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
      children: [],
    },
    {
      name: 'Amras',
      lifespan: 400,
      murdered: true,
      cause_of_death: 'Murdered by dark forces during the Kinslaying at Alqualondë',
      children: [],
    },
    {
      name: 'Fingolfin',
      lifespan: 456,
      murdered: true,
      cause_of_death: 'Killed in single combat with Morgoth at the gates of Angband',
      children: ['Fingon', 'Turgon', 'Argon'],
    },
    {
      name: 'Fingon',
      lifespan: 400,
      murdered: true,
      cause_of_death: 'Murdered by Gothmog, Lord of Balrogs, during the Dagor Bragollach',
      children: [],
    },
    {
      name: 'Finrod Felagund',
      lifespan: 410,
      murdered: true,
      cause_of_death: 'Murdered by Sauron in Tol-in-Gaurhoth',
      children: [],
    },
    {
      name: 'Angrod',
      lifespan: 380,
      murdered: true,
      cause_of_death: 'Murdered by Morgoth during the Dagor Bragollach',
      children: [],
    },
    {
      name: 'Aegnor',
      lifespan: 390,
      murdered: true,
      cause_of_death: 'Murdered by Morgoth during the Dagor Bragollach',
      children: [],
    },
  ]);
  expect(getNoldorByMurdered(false)).toEqual([
    {
      cause_of_death: null,
      children: [],
      lifespan: 500,
      murdered: false,
      name: 'Turgon',
    },
    {
      cause_of_death: null,
      children: [],
      lifespan: 350,
      murdered: false,
      name: 'Argon',
    },
    {
      cause_of_death: null,
      children: ['Finrod Felagund', 'Angrod', 'Aegnor', 'Galadriel'],
      lifespan: null,
      murdered: false,
      name: 'Finarfin',
    },
    {
      cause_of_death: null,
      children: [],
      lifespan: null,
      murdered: false,
      name: 'Galadriel',
    },
  ]);
  expect(getNoldorByMurdered({}, '23sd')).toEqual([]);
  expect(getNoldorByMurdered()).toEqual([]);
  expect(getNoldorByMurdered(null)).toEqual([]);
});
