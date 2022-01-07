import React, { forwardRef } from 'react'
import tw, { styled } from 'twin.macro'

import Button from './Button'

const Container = tw.form`w-full flex flex-wrap justify-between py-2`
const Input = styled.input(({ $error }) => [
  tw`p-1 w-11/12 border-b-2 border-primary bg-transparent`,
  tw`focus:(outline-none border-secondary) placeholder:text-gray-100`,
  $error &&
    tw`bg-opacity-75 bg-red-900 font-bold text-red-300 border-b-2 border-red-300 focus:border-red-300`
])
const Message = styled.p(({ $error, $info, $success }) => [
  tw`py-2 font-bold w-full`,
  $error && tw`text-red-300`,
  $info && tw`text-blue-300`,
  $success && tw`text-green-300`
])

const Form = forwardRef(({ children, ...rest }, ref) => {
  Form.displayName = 'Form'

  return (
    <Container {...rest} ref={ref}>
      {children}
    </Container>
  )
})

Form.Button = forwardRef(({ children, ...rest }, ref) => {
  Form.Button.displayName = 'FormButton'

  return (
    <Button {...rest} ref={ref}>
      {children}
    </Button>
  )
})

Form.Input = forwardRef(({ name, type, ...rest }, ref) => {
  Form.Input.displayName = 'FormInput'

  return <Input {...rest} id={name} name={name} type={type} ref={ref} />
})

Form.Message = forwardRef(({ children, ...rest }, ref) => {
  Form.Message.displayName = 'FormMessage'

  return (
    <Message {...rest} ref={ref}>
      {children}
    </Message>
  )
})

export default Form
