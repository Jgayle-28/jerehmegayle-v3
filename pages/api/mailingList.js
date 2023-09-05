import axios from 'axios'

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    axios
      .put(
        'https://api.sendgrid.com/v3/marketing/contacts',
        {
          contacts: [{ email: `${req.body.email}` }],
          list_ids: [process.env.NEXT_PUBLIC_SENDGRID_MAILING_ID],
        },
        {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDGRID_SECRET}`,
          },
        }
      )
      .then((result) => {
        res.status(200).send({
          result,
          message:
            'Success! Your email has been successfully added to the mailing list. Welcome to the Code Gang 👊',
        })
      })
      .catch((err) => {
        console.log('err :>> ', err)
        res.status(500).send({
          error: err,
          message:
            'Oops, there was a problem with your subscription, please try again or contact us',
        })
      })
  }
}
