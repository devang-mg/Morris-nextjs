import type { ReactNode } from 'react'

import { Footer } from '@/components/layout'
import Head from 'next/head'

type MainLayoutProps = { children: ReactNode }
const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<>
			<Head>
				<meta
					name="keywords"
					content="tree care, hardscapes, landscape installations, lighting, water features, patios, stone work, design, erosion control"
				/>

				<meta property="og:title" content="Morris Landscapes" />
				<meta
					property="og:description"
					content="Morris Landscapes is a premium landscape redesign company. We help build your yard to perfection."
				/>

				<meta name="description" content="Morris Landscapes" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<meta property="og:image" content="%sveltekit.assets%/og.jpg" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="image" content="%sveltekit.assets%/og.png" />

			</Head>
			<main>{children}</main>
			<Footer />
		</>
	)
}

export default MainLayout
