import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import useGotCharacters from "../hooks/use-got-characters"

const IndexPage = () => {
  const characters = useGotCharacters()
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div>
        {characters.map(character => {
          return (
            <div key={character.id}>
              <img src={character.avater} alt={character.name} />
              <h2>{character.name}</h2>
              <p>{character.desctiption}</p>
            </div>
          )
        })}
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
