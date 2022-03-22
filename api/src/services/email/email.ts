import * as nodemailer from 'nodemailer'

export const mailer = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_PORT === '465',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export const newJob = async ({ job }) => {
  await mailer.sendMail({
    from: '"RedwoodJS Jobs" <jobs@redwoodjs.com>',
    to: job.email,
    subject: 'Your RedwoodJS job post is live!',
    text: `Your job post is live here: https://redwoodjs.com/jobs/${job.id}\n\nIf you need to edit your post you can do that here: https://redwoodjs.com/jobs/${job.id}/edit?token=${job.token}`,
    html: `<p>Your job post is live here: <a href="https://redwoodjs.com/jobs/${job.id}">https://redwoodjs.com/jobs/${job.id}</a></p><p>If you need to edit your job post you can do so here: <a href="https://redwoodjs.com/jobs/${job.id}/edit?token=${job.token}">https://redwoodjs.com/jobs/${job.id}/edit?token=${job.token}</a></p>`,
  })
}

export const newJobProfile = async ({ jobProfile }) => {
  await mailer.sendMail({
    from: '"RedwoodJS Jobs" <jobs@redwoodjs.com>',
    to: jobProfile.email,
    subject: 'Your RedwoodJS job profile is live!',
    text: `Your job profile is live here: https://redwoodjs.com/job-profiles/${jobProfile.id}\n\nIf you need to edit your post you can do that here: https://redwoodjs.com/job-profiles/${jobProfile.id}/edit?token=${jobProfile.token}`,
    html: `<p>Your job profile is live here: <a href="https://redwoodjs.com/job-profiles/${jobProfile.id}">https://redwoodjs.com/job-profiles/${jobProfile.id}</a></p><p>If you need to edit your job post you can do so here: <a href="https://redwoodjs.com/job-profiles/${jobProfile.id}/edit?token=${jobProfile.token}">https://redwoodjs.com/job-profiles/${jobProfile.id}/edit?token=${jobProfile.token}</a></p>`,
  })
}
