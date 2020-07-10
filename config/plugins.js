module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY','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'),
    },
    settings: {
      defaultFrom: 'subho.com.model@gmail.com',
      defaultReplyTo: 'subho.com.model@gmail.com',
    },
  },
});
