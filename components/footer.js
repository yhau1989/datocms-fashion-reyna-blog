import Container from './container'
import { EXAMPLE_PATH, TWITTER_URL, INSTAGRAM_URL,FACEBOOK_URL } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Encuentranos en
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            {/* <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a> */}
            <a
              href={`${TWITTER_URL}`}
              className="mx-3 font-bold hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                <path fill="#FFF" d="M17.316 6.246c.008.162.011.326.011.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 005.588-1.562 3.779 3.779 0 01-3.526-2.621 3.858 3.858 0 001.705-.065 3.779 3.779 0 01-3.028-3.703v-.047a3.766 3.766 0 001.71.473 3.775 3.775 0 01-1.168-5.041 10.716 10.716 0 007.781 3.945 3.813 3.813 0 01-.097-.861 3.773 3.773 0 013.774-3.773 3.77 3.77 0 012.756 1.191 7.602 7.602 0 002.397-.916 3.789 3.789 0 01-1.66 2.088 7.55 7.55 0 002.168-.594 7.623 7.623 0 01-1.884 1.953z"/>
                </svg>
            </a>
            <a
              href={`${INSTAGRAM_URL}`}
              className="mx-3 font-bold hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              <svg className="h-6 w-6 text-gray-900"  fill="none" >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7a5 5 0 100 10 5 5 0 000-10zm-3 5a3 3 0 106 0 3 3 0 00-6 0z" fill="currentColor"/><path d="M18 5a1 1 0 100 2 1 1 0 000-2z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5 1a4 4 0 00-4 4v14a4 4 0 004 4h14a4 4 0 004-4V5a4 4 0 00-4-4H5zm14 2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" fill="currentColor"/>
                </svg>
            </a>

            <a
              href={`${FACEBOOK_URL}`}
              className="mx-3 font-bold hover:underline"
              target="_blank" rel="noopener noreferrer"
            >
              <svg className="h-6 w-6 text-black" fill="none" >
                <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" stroke="currentColor"/>
                </svg>
            </a>


          </div>
        </div>
      </Container>
    </footer>
  )
}
