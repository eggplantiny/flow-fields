export class Node<Data> {
  public data: Data
  public next: Node<Data> | null = null
  public prev: Node<Data> | null = null

  constructor(data: Data) {
    this.data = data
  }
}

export class LinkedList<Data> {
  public head: Node<Data> | null
  public tail: Node<Data> | null
  public length: number

  public constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  public push(data: Data) {
    const node = new Node(data)

    if (this.tail) {
      this.tail.next = node
      node.prev = this.tail
    }
    else {
      this.head = node
    }

    this.tail = node
    this.length += 1
  }

  public pop(): Data | null {
    if (!this.tail)
      return null

    const data = this.tail.data

    if (this.tail.prev) {
      this.tail = this.tail.prev
      this.tail.next = null
    }
    else {
      this.head = null
      this.tail = null
    }

    this.length -= 1
    return data
  }

  public unshift(data: Data) {
    const node = new Node(data)

    if (this.head) {
      this.head.prev = node
      node.next = this.head
    }
    else {
      this.tail = node
    }

    this.head = node
    this.length += 1
  }

  public shift(): Data | null {
    if (!this.head)
      return null

    const data = this.head.data

    if (this.head.next) {
      this.head = this.head.next
      this.head.prev = null
    }
    else {
      this.head = null
      this.tail = null
    }

    this.length -= 1

    return data
  }

  public remove(node: Node<Data>) {
    if (node.prev)
      node.prev.next = node.next
    else
      this.head = node.next

    if (node.next)
      node.next.prev = node.prev
    else
      this.tail = node.prev

    this.length -= 1
  }

  public first(): Data | null {
    return this.head?.data ?? null
  }

  public clear(): void {
    this.head = null
    this.tail = null
    this.length = 0
  }

  public *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node.data
      node = node.next
    }
  }
}
