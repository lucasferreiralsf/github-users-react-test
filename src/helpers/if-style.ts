export function ifStyle(style: string) {
  return (ifTrue: any, ifFalse: any) => (props: any) =>
    props[style] ? ifTrue : ifFalse
}
