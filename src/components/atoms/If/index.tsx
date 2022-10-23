import React from 'react'

type Props = {
  condition?: boolean
  children?: React.ReactNode
}
export const If: React.FC<Props> = ({ condition = false, children = null }) => {
  if (!!condition && children) return <>{children}</>
  return null
}
