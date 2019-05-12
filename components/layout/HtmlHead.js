import Head from 'next/head'

const HtmlHead = props => {
  const { title } = props

  return (
    <>
      <Head>
        <title>Fullstack Task Manager{title && ` | ${title}`}</title>

        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
        />

        <link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png' />
        <link rel='stylesheet' href='/static/fonts/roboto.css' />
      </Head>
    </>
  )
}

export default HtmlHead
