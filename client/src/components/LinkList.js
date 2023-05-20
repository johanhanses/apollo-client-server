import { gql, useQuery } from '@apollo/client'
import { Link } from './Link'

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`

export const LinkList = () => {
  const { data } = useQuery(FEED_QUERY)

  return <div>{data && data.feed.links.map((link) => <Link key={link.id} link={link} />)}</div>
}
