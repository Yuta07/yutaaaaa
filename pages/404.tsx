import Link from 'next/link'

import { Layout } from '@/components/common/Layout'

import type { ReactElement } from 'react'

export default function Custom404() {
	return (
		<div className="container">
			<h1 className="hero">404</h1>
			<p className="lost-txt">Let's go back. There's nothing here.</p>
			<Link href="/" className="return-link">
				Return to TOP
			</Link>
			<style>{`
				.container {
					min-height: inherit;
					display:flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}

				.hero {
					font-size: 100px;
					letter-spacing: 20px;
					color: transparent;
					background: linear-gradient(to right bottom, var(--color-rosered) 0%, var(--color-sunflower) 100%);
					background-clip: text;
					-webkit-background-clip: text;
				}

				.lost-txt {
					margin-top: 8px;
					color: var(--color-gray);
					font-size: var(--font-size-lg);
				}

				.return-link {
					margin-top: 20px;
					display: inline-block;
					color: var(--color-text);
					font-size: var(--font-size-xl);
					font-weight: var(--font-weight-medium);
					text-decoration: underline;
				}

				.return-link:hover {
					transition: var(--animation-transition);
					opacity: var(--hover-feedback-opacity);
				}
			`}</style>
		</div>
	)
}

Custom404.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}
