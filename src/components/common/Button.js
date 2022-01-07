import { Add, Block, Delete, Done, Edit, RadioButtonUnchecked } from '@styled-icons/material'
import React from 'react'
import tw, { styled } from 'twin.macro'

const colorVariants = {
  blue: tw`text-sky-500`,
  green: tw`text-emerald-500`,
  red: tw`text-red-500`,
  white: tw`text-white`
}
const Icon = styled.button(() => [
  tw`flex justify-center content-center border-0 bg-transparent cursor-pointer mx-1 my-auto p-1 h-8 w-8 disabled:opacity-60`,
  ({ $color }) => colorVariants[$color]
])

const Button = ({ children, ...rest }) => <Icon {...rest}>{children}</Icon>

Button.Add = ({ ...rest }) => {
  Button.Add.displayName = 'ButtonAdd'

  return (
    <Icon $color='green' {...rest}>
      <Add />
    </Icon>
  )
}

Button.Block = ({ ...rest }) => {
  Button.Block.displayName = 'ButtonBlock'

  return (
    <Icon $color='red' {...rest}>
      <Block />
    </Icon>
  )
}

Button.Delete = ({ ...rest }) => {
  Button.Delete.displayName = 'ButtonDelete'

  return (
    <Icon $color='red' {...rest}>
      <Delete />
    </Icon>
  )
}

Button.Done = ({ ...rest }) => {
  Button.Done.displayName = 'ButtonDone'

  return (
    <Icon $color='green' {...rest}>
      <Done />
    </Icon>
  )
}

Button.Edit = ({ ...rest }) => {
  Button.Edit.displayName = 'ButtonEdit'

  return (
    <Icon $color='blue' {...rest}>
      <Edit />
    </Icon>
  )
}

Button.Undone = ({ ...rest }) => {
  Button.Undone.displayName = 'ButtonUndone'

  return (
    <Icon>
      <RadioButtonUnchecked {...rest} />
    </Icon>
  )
}

export default Button
