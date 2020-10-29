import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              Visita mi sitio web{' '} 
              <a
                href="/api/exit-preview"
                className="text-pink-500 underline"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              Visita mi sitio web{' '} 
              <a
                href={`https://github.com/zeit/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="text-pink-500 underline"
              >
                fashionreyna.com
              </a> 👑
              
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
