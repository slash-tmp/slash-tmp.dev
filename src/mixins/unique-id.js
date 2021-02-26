let nextId = 0

export default {
  created() {
    this.uniqueId = nextId
    nextId++
  }
}
