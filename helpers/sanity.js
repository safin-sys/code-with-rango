import sanityClient from "@sanity/client"
import { ImageUrlBuilder } from "@sanity/image-url";

const client = sanityClient({
  projectId: 'axywnz7b',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: false
})

export default client;