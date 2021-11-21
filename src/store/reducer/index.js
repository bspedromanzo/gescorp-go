import listBeers from '../../services/api/beers.json'
import get from '../../actions'

export default function (state = listBeers, action) {
  switch (action.type) {
    case 'ADD_BEER':
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload[0],
          description: action.payload[1],
          status: true
        }
      ]
    case 'DELETE_BEER': {
      return state.filter(({ id }) => id !== action.payload)
    }
    default:
      return state
  }
}
