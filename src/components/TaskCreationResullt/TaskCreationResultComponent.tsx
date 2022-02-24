import { ITaskCreationResult } from "../../interfaces/ITaskCreationResult";

export const TaskCreationResultComponent = (result:ITaskCreationResult) => {
  let styling = result.success ? "text-green-500" : "text-red-500"
  styling += ' text-sm'
  return (<span className={styling}>{result.message}</span>)
}