// 获取所需元素
const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-button')

const creatureName = document.getElementById('creature-name')
const creatureId = document.getElementById('creature-id')
const weight = document.getElementById('weight')
const height = document.getElementById('height')
const types = document.getElementById('types')

const hp = document.getElementById('hp')
const attack = document.getElementById('attack')
const defense = document.getElementById('defense')
const specialAttack = document.getElementById('special-attack')
const specialDefense = document.getElementById('special-defense')
const speed = document.getElementById('speed')

// 提供RPG生物的数据
const creatures = [
  {
    name:'PYROLYNX',
    id:'1',
    weight:42,
    height:32,
    hp:65,
    attack:80,
    defense:50,
    specialAttack:90,
    specialDefense:55,
    speed:100,
    types:['FIRE']
  },
  {
    name:'AQUOROC',
    id:'2',
    weight:220,
    height:53,
    hp:85,
    attack:90,
    defense:120,
    specialAttack:60,
    specialDefense:70,
    speed:40,
    types:['WATER','ROCK']
  },
]

// 定义函数
const main = (creature) => {
  // 重置creature-msg内容
  creatureName.innerHTML = ''
  creatureId.innerHTML = ''
  weight.innerHTML = ''
  height.innerHTML = ''
  types.innerHTML = ''

  creatureName.innerHTML = creature.name
  creatureId.innerHTML = `#${creature.id}`
  weight.innerHTML = `Weight: ${creature.weight}`
  height.innerHTML = `Height: ${creature.height}`
  Array.from({ length: creature.types.length }).forEach((_, i) => {
  types.insertAdjacentHTML(
    'beforeend',
    `<div class="type">${creature.types[i]}</div>` 
  )
  })
}
// main(creatures[0])

const table = (creature) => {
  // 重置表格数据
  hp.innerHTML = ''
  attack.innerHTML = ''
  defense.innerHTML = ''
  specialAttack.innerHTML = ''
  specialDefense.innerHTML = ''
  speed.innerHTML = ''
  
  hp.innerHTML = creature.hp
  attack.innerHTML = creature.attack
  defense.innerHTML = creature.defense
  specialAttack.innerHTML = creature.specialAttack
  specialDefense.innerHTML = creature.specialDefense
  speed.innerHTML = creature.speed
}

// table(creatures[0])

// 给searchBtn添加事件监听
searchBtn.addEventListener('click',()=>{
  const nameOrId = searchInput.value.trim()
  if (!nameOrId) {
    alert('Please enter a creature name or ID')
    return
  }

  const creature = creatures.find(item => 
    item.name.toLowerCase() === nameOrId.toLowerCase() || 
    item.id === nameOrId || 
    item.id === nameOrId.replace('#', '') 
  );

  if(creature){
    main(creature)
    table(creature)
  } else {
    alert('Creature not found')
  }
})