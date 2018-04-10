
// world library

world = {
    biome: {}
}

world.biome.oxy = {
    seed: {
        keys: ['_', 'o', 'x', 'y'],
        chance: [53, 7, 7, 12]
    },
    next: {
        keys: ['sand','plain','scrub'],
        chance: [1,1,1]
    },
    life: {
        min: 1,
        max: 9
    }
}

world.biome.sand = {
    seed: {
        keys: ['﹏', 'ᛮ', '🌴',],
        chance: [43,  2]
    },
    next: {
        keys: ['scrub'],
        chance: [1]
    },
    life: {
        min: 1,
        max: 9
    }
}

world.biome.plain = {
    seed: {
        keys: ['_', '⊥','⋔','∦','⫮','⩵','⩴','⌢', '⌣', '⁔', '‿'],
        chance: [87,  2,  1,  1,  2,  7,   8,  23,   13,  11,   9]
    },
    next: {
        keys: ['scrub', 'plain'],
        chance: [2,      1]
    },
    life: {
        min: 1,
        max: 9
    }
}

world.biome.scrub = {
  seed: {
      keys: ['_', '⁔', '‿', '﹏', '︿', '෴', 'ϡ', 'Ϫ', 'ᘏ'],
      chance: [37, 56,  53,  42,    8,    11,   2,   1,   1],
  },
  next: {
      keys: ['plain', 'sand'],
      chance: [6,     5]
  },
  encounter: {
    keys: [null, '🐀'],
    chance: [19, 1]
  },
  life: {
      min: 1,
      max: 9
  }
}


// ღ ხ ფ ฬ ป ৶
// _⁔‿ҨѦᛮϪץ﹏︿෴
// ϡ ψ ᾂ Ҕ Ѯ Ӝ ᴕ ᠠ ᘚ ጰ ᘏ

// 'ღ', 'ხ', 'ფ', 'ฬ', 'ป', '৶'
// '_', '⁔', '‿',
// '﹏', '︿', '෴'
//'Ҩ', 'Ѧ', 'ᛮ', 'Ϫ',

// ϡ ψ ᾂ Ҕ Ѯ Ӝ ᴕ ᠠ ᘚ ጰ ᘏ
