import gameRecord from './gameRecord.vue'
import search from './search.vue'

export default [
  {
    name: 'memberSearch',
    path: 'member/search',
    meta: {
      title: 'memberSearch',
      cache: true,
      // permission: 'member.search'
    },
    component: search
  },
  {
    name: 'gameRecord',
    path: 'member/gameRecord',
    meta: {
      title: 'gameRecord',
      cache: true,
      // permission: 'member.gameRecord'
    },
    component: gameRecord
  },
]
