import axios from 'axios'

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    axios
      .put(
        'https://api.sendgrid.com/v3/marketing/contacts',
        {
          contacts: [{ email: `${req.body.email}` }],
          list_ids: [process.env.SENDGRID_MAILING_ID],
        },
        {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${process.env.SENDGRID_SECRET}`,
          },
        }
      )
      .then((result) => {
        res.status(200).send({
          message:
            'Success! Your email has been successfully added to the mailing list. Welcome to the Code Gang 👊',
        })
      })
      .catch((err) => {
        res.status(500).send({
          message:
            'Oops, there was a problem with your subscription, please try again or contact us',
        })
      })
  }
}
