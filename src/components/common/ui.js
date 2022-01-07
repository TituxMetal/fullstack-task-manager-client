import tw, { styled } from 'twin.macro'

export const Container = styled.section(({ $bordered }) => [
  tw`text-left w-full my-4 mx-auto p-4 bg-neutral rounded-lg`,
  $bordered && tw`border-2 border-dashed border-secondary`
])

export const ItemContainer = tw.li`flex justify-between py-4 my-4 cursor-pointer font-bold`

export const ItemContent = styled.p(({ $isDone }) => [
  tw`w-10/12 text-center text-secondary`,
  $isDone && tw`line-through text-primary`
])

export const List = tw(Container)`divide-primary divide-y-2`

export const Text = styled.p(({ $title }) => [
  tw`py-2 text-white`,
  $title && tw`p-0 my-4 text-secondary text-center text-4xl font-bold`
])
