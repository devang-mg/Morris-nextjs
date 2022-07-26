import type { AppProps } from 'next/app'

import MainLayout from '@/layouts/MainLayout'
import AOS from 'aos'
import 'aos/dist/aos.css'


import '@/styles/global.scss'
import { useEffect } from 'react'

const App = ({ Component, pageProps }: AppProps) => {

	useEffect(() => {
		AOS.init({
			once: true
		})
	})
	return (
		<MainLayout>
			<Component {...pageProps} />
		</MainLayout>
	)
}

export default App
