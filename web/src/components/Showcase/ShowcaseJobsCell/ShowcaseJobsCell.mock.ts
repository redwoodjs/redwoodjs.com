// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  jobs: [
    {
      id: 42,
      title: 'string',
      locations: 'string',
      aboutJob: 'string',
      createdAt: new Date().toISOString(),
    },
    {
      id: 43,
      title: 'string',
      locations: 'string',
      aboutJob: 'string',
      createdAt: new Date().toISOString(),
    },
    {
      id: 44,
      title: 'string',
      locations: 'string',
      aboutJob: 'string',
      createdAt: new Date().toISOString(),
    },
  ],
})
