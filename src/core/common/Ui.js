import React from 'react'
import tw, { styled } from 'twin.macro'

const Bar = styled.section(tw`flex p-2 bg-neutral`)
const Container = styled.section(tw`flex flex-auto flex-col w-full max-w-screen-lg mx-auto py-4`)
const Main = styled.main(tw`flex flex-col h-screen`)
const Text = styled.p(({ $brand, $centered }) => [
  tw`text-primary`,
  $brand && tw`text-2xl m-0 no-underline flex-auto`,
  $centered && tw`text-center`
])
const Wrapper = styled.div(({ $centered }) => [
  tw`flex flex-row justify-between items-center w-full max-w-screen-lg mx-auto py-4`,
  $centered && tw`justify-center`
])

const Ui = ({ children, ...rest }) => <Main {...rest}>{children}</Main>

Ui.Bar = ({ children, ...rest }) => {
  Ui.Bar.displayName = 'UiBar'

  return <Bar {...rest}>{children}</Bar>
}

Ui.Container = ({ children, ...rest }) => {
  Ui.Container.displayName = 'UiContainer'

  return <Container {...rest}>{children}</Container>
}

Ui.Text = ({ children, ...rest }) => {
  Ui.Text.displayName = 'UiText'

  return <Text {...rest}>{children}</Text>
}

Ui.Wrapper = ({ children, ...rest }) => {
  Ui.Wrapper.displayName = 'UiWrapper'

  return <Wrapper {...rest}>{children}</Wrapper>
}

export default Ui
