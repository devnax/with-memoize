import {useMemo, createElement, ComponentType} from 'react'

export type Resolver<P> = (props: P) => any[]

const withMemo = <T, R extends Resolver<T>>(Comp: ComponentType<T>, resolve?: R) => {
  const Render = <P extends T>(props: P) => {
    let deps: any = [Object.values(props)]
    if(resolve){
      deps = resolve(props)
    }
    return useMemo(() => createElement(Comp, props), deps)
  }
  return Render
}

export default withMemo