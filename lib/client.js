import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'vky7z8hk',
    dataset: 'production',
    apiVersion: '2023-02-03', // yyyy-mm-dd
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)