module.exports = {
  read: async () => {
    return {
      server: {
        port: process.env.PORT ? process.env.PORT : '3000'
      }
    }
  }
}
