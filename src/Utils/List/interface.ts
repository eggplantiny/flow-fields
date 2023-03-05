export interface List<Data> {
  length: number
  get(index: number): Data
  set(index: number, data: Data): void
  push(data: Data): void
  pop(): Data | null
  unshift(data: Data): void
  shift(): Data | null
  slice(start: number, end: number): List<Data>
  splice(start: number, deleteCount: number, ...items: Data[]): List<Data>
  insert(index: number, data: Data): void
  clear(): void
  forEach(callback: (data: Data, index: number) => void): void
}
