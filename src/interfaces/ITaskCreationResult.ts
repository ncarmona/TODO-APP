import { Messages } from '../constants/TaskCreationResultMessages'
export interface ITaskCreationResult {
  success: boolean,
  message: Messages
}