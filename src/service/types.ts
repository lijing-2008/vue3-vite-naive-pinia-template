interface IDataType<T = any> {
  status: number
  msg: string
  data: T
}

export { IDataType }
