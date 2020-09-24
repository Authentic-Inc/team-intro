import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Members from "../components/members"
import Contact from "../components/contact"

const Index = () => (
  <Layout>
    <Parallax pages={4}>
      <Hero offset={0} factor={1} />
      <Members offset={1} factor={2} />
      <Contact offset={3} factor={1} />
    </Parallax>
  </Layout>
)

export default Index
