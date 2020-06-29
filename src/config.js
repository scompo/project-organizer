module.exports = {
  read: async () => {
    const res = {
      server: {
        port: process.env.PORT ? process.env.PORT : '3000'
      }
    }
    console.log(res)
    return res
  }
}
