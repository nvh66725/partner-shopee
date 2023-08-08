import { API_ENDPOINT } from '@/api'
import './globals.css'

export async function generateMetadata() {
  try {
    const response = await fetch(`${API_ENDPOINT}/metadata`)
    const responseJson = await response.json()
    return {
      title: responseJson.title,
      description: responseJson.description,
    }
  } catch (error) {
    return {
      title: 'Vouchers',
      description: 'Get vouchers',
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
