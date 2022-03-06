// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  jobProfile: {
    id: 42,
    email: 'string',
    portfolioUrl: 'string',
    status: 'string',
    name: 'string',
    photo: 'string',
    title: 'string',
    locations: 'string',
    about: 'string',
    updatedAt: new Date().toISOString(),
  },
})
