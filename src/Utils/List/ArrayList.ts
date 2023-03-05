export class ArrayList<Data> {
  public data: Data[] = []

  public get length() {
    return this.data.length
  }

  public get(index: number) {
    return this.data[index]
  }

  public set(index: number, data: Data) {
    this.data[index] = data
  }

  public push(data: Data) {
    this.data.push(data)
  }

  public pop(): Data | null {
    return this.data.pop() || null
  }

  public unshift(data: Data) {
    this.data.unshift(data)
  }

  public shift(): Data | null {
    return this.data.shift() || null
  }

  public slice(start: number, end: number) {
    return this.data.slice(start, end)
  }

  public splice(start: number, deleteCount: number, ...items: Data[]) {
    return this.data.splice(start, deleteCount, ...items)
  }

  public insert(index: number, data: Data) {
    this.data.splice(index, 0, data)
  }

  public clear() {
    this.data = []
    this.data.length = 0
  }

  public forEach(callback: (data: Data, index: number) => void) {
    this.data.forEach(callback)
  }

  public first(): Data | null {
    return this.data[0] ?? null
  }

  public *[Symbol.iterator]() {
    for (const data of this.data)
      yield data
  }
}
