export interface User {
  _id?: string,
  username: string,
  password: string,
  name: string,
  type?: string,
  college: string,
  degree: string,
  gender: string,
  career: string,
  evaluation?: string
}