import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"

export const CollapseComponent = (props:any) => {
  const { state, clickHandler } = props
  const Icon = ():JSX.Element => state ? <ChevronDownIcon className="h-6" onClick={() => clickHandler()} /> : <ChevronUpIcon onClick={() => clickHandler()} className="h-6" />
  return(<Icon />)
}