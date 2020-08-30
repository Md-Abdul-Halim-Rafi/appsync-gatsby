import { graphql, useStaticQuery } from "gatsby"

const useGotCharacter = () => {
  const data = useStaticQuery(graphql`
    {
      got {
        listCharacters {
          items {
            id
            name
            description
            avater
          }
        }
      }
    }
  `)

  return data.got.listCharacters.items
}

export default useGotCharacter
