export function addBeer (name, description) {
  return {
    type: 'ADD_BEER',
    payload: [name, description]
  }
}

export function deleteBeer (id) {
  return { type: 'DELETE_BEER', payload: id }
}
