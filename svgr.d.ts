declare module '*.svg' {
  import { FC, SVGProps } from 'react'
  const content: FC<SVGProps<SVGElement>>
  export default content
}

declare module '*.svg?url' {
  // biome-ignore lint/suspicious/noExplicitAny: SVG URL modules require any type for proper typing(https://react-svgr.com/docs/next/#typescript)
  const content: any
  export default content
}
