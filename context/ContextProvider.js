import { TaskProvider } from '../context'

const ProviderComposer = ({ contexts, children }) => {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  )
}

const ContextProvider = ({ children }) => {
  return <ProviderComposer contexts={[<TaskProvider />]}>{children}</ProviderComposer>
}

export { ContextProvider }
