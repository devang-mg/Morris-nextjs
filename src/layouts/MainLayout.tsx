import type { ReactNode } from 'react'

import { Nav, Footer } from '@/components/layout'

type MainLayoutProps = { children: ReactNode }
const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<>
			<Nav />

			<main>{children}</main>

			<Footer />
		</>
	)
}

export default MainLayout
