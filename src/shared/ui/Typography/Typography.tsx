import { ComponentProps, ElementType, ReactNode } from 'react'

type EditableComponentOwnProps<E extends ElementType = ElementType> = {
  children: ReactNode
  as?: E
  className?: string
}

type EditableComponentProps<E extends ElementType> = EditableComponentOwnProps<E> &
  Omit<ComponentProps<E>, keyof EditableComponentOwnProps>

const __DEFAULT_ELEMENT__ = 'span' as const

export const Typography = <E extends ElementType = typeof __DEFAULT_ELEMENT__>({
  as,
  children,
  className,
  ...rest
}: EditableComponentProps<E>) => {
  const Component = as || __DEFAULT_ELEMENT__

  return (
    <Component {...rest} className={className}>
      {children}
    </Component>
  )
}
