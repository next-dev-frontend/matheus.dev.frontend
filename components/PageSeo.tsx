import { ArticleJsonLd, NextSeo } from 'next-seo'

function PageSeo({ title, titleTemplate, description, path, children }) {
  const url = `https://aboutinsurances.vercel.app${path}`
  const imageUrl = 'https:/aboutinsurances.vercel.app/backgrounds/bg-insurances.jpeg';

  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        titleTemplate={titleTemplate}
        canonical={url}

        additionalMetaTags={[
          {
            property: 'dc:creator',
            content: 'Lopes Matheus S.'
          },
          {
            name: 'application-name',
            content: 'About Insurances Web Site'
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge; chrome=1'
          }
        ]}

        openGraph={{
          type: 'article',
          article: {
            publishedTime: '2022-06-21T23:04:13Z',
            modifiedTime: '2022-01-21T18:04:43Z',
            tags: ['insurance', 'tips', 'coverage'],
          },
          url: url,
          site_name: 'Website About Insurances',
          title: title,
          description: description,
          images: [
            {
              url: imageUrl,
              alt: 'template about insurances',
              width: 380,
              height: 380,
              type: 'image/jpeg',
            },
          ],
        }}
      />

      <ArticleJsonLd
        url={url}
        title={title}
        images={[
          'https:/aboutinsurances.vercel.app/backgrounds/bg-insurances.jpeg',
          'https:/aboutinsurances.vercel.app/cards/post-card1.webp',
          'https:/aboutinsurances.vercel.app/cards/post-card2.webp',
          'https:/aboutinsurances.vercel.app/cards/post-card3.webp',
          'https:/aboutinsurances.vercel.app/cards/post-card4.webp',
        ]}
        datePublished="2023-06-22T00:00:00Z"
        dateModified="2023-06-22T00:00:00Z"
        authorName="Lopes Matheus S."
        publisherName="Website About Insurances"
        publisherLogo="https://aboutinsurances.vercel.app/logos/logo-72x72.png"
        description={description}
      />

      {children}
    </div>
  )
}
export default PageSeo
