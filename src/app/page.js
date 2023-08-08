import { API_ENDPOINT } from '@/api'

async function getData() {
  try {
    const response = await fetch(`${API_ENDPOINT}/body-data`, { cache: 'no-cache' })
    if (response.ok) {
      const responseJson = await response.json()
      return responseJson.data
    } else {
      throw new Error('get data failed')
    }
  } catch (error) {}
}

export default async function Home() {
  const data = await getData()

  return data ? (
    <>
      <header></header>
      <main></main>
      <footer></footer>
    </>
  ) : (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Oppp!!!something error</div>
  )
}
