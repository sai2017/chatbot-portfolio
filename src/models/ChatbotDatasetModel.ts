import { AnswerModel } from './AnswerModel'

export interface ChatbotDatasetModel {
  [key: string]: { answers: AnswerModel[], question: string};
}
