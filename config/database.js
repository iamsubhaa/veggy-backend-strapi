module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        uri:'mongodb+srv://iamsubhaa:vlY4BgeYdQV7uDo2@cluster0.in1zt.mongodb.net/veggy?retryWrites=true&w=majority',
        // filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        ssl:true,
        // useNullAsDefault: true,
      },
    },
  },
});
