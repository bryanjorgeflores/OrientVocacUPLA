export interface Evaluation {
  _id?: string,
  test: Array<string>,
  results: Array<{
    code: number,
    chord: boolean
  }>
  last: Array<number>,
  message: string
}