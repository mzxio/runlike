

function selfseed(list, limit) {
	let seeded = []
	while (limit > 0) {
		let roll = Math.floor(Math.random() * list.length);
		seeded.push(list[roll]);
		limit -= 1;
	}
	return seeded.join('');
}

//lets = ('111111122223334').split('')
//selfseed(lets,280)




// advanced weighted rolling
// takes array of numbers

function decider( values ) {
  let result = 0
  let max = 0
  let roll = 0
  let step = 0
  let slice = []

  for ( let i = 0; i < values.length; i++ ) {
    //add values together
    max += values[i]

    //build array of steps for rolls
    for ( let k = 0; k < values[i]; k++ ) {
      step += 1
      slice[step] = i
    }
  }

  //make a roll bounded by total of values
  roll = Math.ceil( Math.random() * max )

  //return value of slice index at roll
  result = slice[roll]

  //console.log( 'max ' + max )
  //console.log( 'roll ' + roll )
  //console.log( '#' + slice[roll] + ' = ' + values[slice[roll]] )

  return result
}

//console.log(decider([12,44,12]))
//console.log(decider([120,16,61,87,17,1,4]))


// assumes {keys: [], chance: []} format
// depends on decider

function decideseed( seed, limit ) {
  let seeded = []
  while ( limit > 0 ) {
    let index = seed.keys[decider( seed.chance )]
		seeded.push( index );
		limit -= 1;
	}
    //return seeded.join('')
	return seeded;
}

//decideseed({keys: ['o','x'], chance: [2,2]}, 140)
//decideseed({keys: ['o','x','y',' '], chance: [2,8,40,140]}, 200)
//decideseed({keys: ['o','x','y',' '], chance: [4,4,4,80]}, 200).join('')
//decideseed({keys: ['rainy','sunny', 'foggy', 'overcast', 'clear'], chance: [5,20,2,2,2]}, 2)


//decideseed({keys: ['_', '⁔', '‿', '﹏', '︿', '෴', 'ϡ', 'Ϫ', 'ᘏ'], 
//         chance: [37,   56,   53,  42,    8,    11,   2,   1,   1]}, 140).join('')

//decideseed({keys: [], chance: []}, 200).join('')

//decideseed(world.biome.scrub.seed, 128).join('')


function rollminmax(min, max) {
    let roll = 1
    roll = Math.round(Math.random() * (max - min))
    return roll
}


//🌲🌳🌱🍃🌷





var player = {}
var npc = {}

var settings = {}
settings.mapsize = 160

var game = {
  overworld: {},
  storyteller: {}
}






function runner(state) {

}

// takes world.biome master object
// returns name of random biome
function randbiome(index) {
  let biomes = []
  for(biome in index) {
    biomes.push(biome)
  }
  let roll = rollminmax(0, (biomes.length - 1))

  return biomes[roll]
}
//randbiome(world.biome)



// takes a world.biome of specified type
// returns new biome data for game.biome
function makebiome (biome, type) {
  let newbiome = {}
  newbiome.type = type

  let newlife = rollminmax(biome.life.min, biome.life.max)
  let newtype = decideseed(biome.next, 1)
  newbiome.life = newlife
  newbiome.next = newtype

  return newbiome
}
//makebiome(world.biome.scrub, 'scrub')



// depends on world and settings globals
function newarea(type) {
  let area = decideseed(world.biome[type].seed, settings.mapsize)

  return area
}
//newarea('scrub').join('')



let init = function() {
    // new game cold start
    let newgame = {}
    newgame.turn = 1

    let newbiome = randbiome(world.biome)
    newbiome = makebiome(world.biome[newbiome], newbiome)
    newgame.overworld = {}
    newgame.overworld.biome = newbiome

    newgame.overworld.area = newarea(newgame.overworld.biome.type)
    //newgame.storyteller = player.init()

    return newgame
    //game = newgame
}



let turn = function() {
  let newgame = game

  console.log(newgame.overworld.biome.life)
  console.log(newgame.overworld.area.join(''))

  if (newgame.overworld.biome.life <= 0) {
    let next = game.overworld.biome.next
    newgame.overworld.area = newarea(next)
    newgame.overworld.biome = makebiome(world.biome[next], next)
  } else {
    let current = newgame.overworld.biome.type
    newgame.overworld.area = newarea(current)
  }

    newgame.turn += 1
    newgame.overworld.biome.life -= 1
  
  return newgame
}


// game = init()
// game = turn() 


// what kind of area should i build?
// look at the gamestate
// game.overworld.biome
// has turns left?
// if turns left, go to build
// else no turns left, look at chance
//                        and then build

// build says take these keys and chance
// biome.seed
// decide on a list the size of areas
// decider(biome.seed, global length)
// make a new area
// decrement the turns left on biome

// chance says take these keys and chance
// biome.chances
// decide on a list of one
// build an area of that type
// library.biome.stuff
// choose a lifetime for biome.size

// biomes have a list of components
// biome.seed = {[],[]}
// chance for next biome, type to type
// biome.next = {[],[]}


