import api from "../services/api"
import { useEffect, useState } from 'react'

export default function () {
  const [list, setList] = useState([])
  const [getList, setGetList] = useState([])

  useEffect(() => {
    api.get().then(response => setList(response.data))
  }, [])

  list.map(item => {
    setGetList({id: item.id, name: item.name, description: item.description, image_url: item.image_url })
  })

  return getList
}
