import { Page } from '../components/layout'
import { Title } from '../components/styled'

const About = () => (
  <Page title='About'>
    <Title>About</Title>
    <p>
      This is a project that I have decided to create for training me to use many of Javascript
      libraries that I like a lot, in first place <strong>React</strong> for the front-end and{' '}
      <strong>Node.js</strong> for the back-end.
    </p>
    <p>
      I really like the lastest improvments from React, like <strong>Hooks</strong> and{' '}
      <strong>Context</strong>, for that I've coding all the front-end components with arrow
      functions.
    </p>
    <p>
      For several weeks, I have been trying to combine <strong>React</strong> and{' '}
      <strong>Node.js</strong> to create a fullstack application. That's when I discovered{' '}
      <strong>Next.js</strong>, which also allows server-side rendering, which is very useful for
      SEO.
    </p>
    <p>
      <strong>Express</strong> for Web Infrastructure, <strong>Mongoose</strong> for Application
      Data Model and <strong>Joi</strong> as object schema validator, for the back-end side, the{' '}
      <strong>Styled Components</strong> library for all the Css style, all this give me a lot of
      fun to coding this appplication.
    </p>
    <p>
      To make sure the API is fully tested, I used <strong>Jest</strong> and{' '}
      <strong>Supertest</strong>.
    </p>
    <p>
      For code versioning, I use the popular <strong>Git</strong>, as well as{' '}
      <strong>GitHub</strong>. I also really like to have fun with <strong>Docker</strong> and{' '}
      <strong>Ansible</strong> to deploy the project on my server.
    </p>
    <p>
      Finally, I wrote all the code for this project with my favorite code editor,{' '}
      <strong>Visual Studio Code</strong>, on my favorite Linux distribution,{' '}
      <strong>Debian Stretch</strong>.
    </p>
  </Page>
)

export default About
