import { ITask } from "./ITask";

export interface ITaskGroup {
  tasks: ITask[],
  name: string,
  collapsable: boolean
}