import { NextSeo } from 'next-seo'

function PageSeo({ title, titleTemplate, description, path, children }) {
  const url = `https://matheus-dev-react.netlify.app${path}`

  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        titleTemplate={titleTemplate}
        canonical={url}
      />
      {children}
    </div>
  )
}
export default PageSeo
