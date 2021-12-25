import { ReactNode, VFC } from 'react'

export const InlineCode: VFC<{ children: ReactNode }> = ({ children }) => {
	return (
		<code className="container">
			{children}
			<style jsx>{`
				.container {
					color: var(--color-primary);
					background: var(--color-inlineCode);
					padding: 2px 8px;
					border-radius: var(--line-radius-light);
				}
			`}</style>
		</code>
	)
}
