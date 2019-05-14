import styled from 'styled-components'

const Icon = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  margin: 0 0.25rem;
  padding: 0.3rem;
  height: 2rem;
  width: 2rem;

  img {
    width: 100%;
    height: 100%;
  }
`

export default ({ slug, color, name, ...rest }) => {
  const url = `https://icon.now.sh/${slug}/${color}`

  return (
    <Icon {...rest} type='button'>
      <img src={url} alt={name} />
    </Icon>
  )
}
