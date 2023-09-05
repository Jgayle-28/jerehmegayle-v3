import React, { useState, useCallback } from 'react'
import axios from 'axios'
import { validateEmail } from '@utils/general'
import Alert from './Alert'

function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState(null)

  const handleSubmit = useCallback(() => {
    if (!email) return setMessage('Please enter a valid email address')
    if (!validateEmail(email))
      return setMessage('Please enter a valid email address')
    setLoading(true)
    axios
      .put(
        'https://api.sendgrid.com/v3/marketing/contacts',
        {
          contacts: [{ email }],
          list_ids: [process.env.NEXT_PUBLIC_SENDGRID_MAILING_ID],
        },
        {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SENDGRID_SECRET}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200 || res.status === 201 || res.status === 202) {
          setLoading(false)
          setSuccess(true)
          setEmail('')
        }
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        setMessage('Oops, looks like something went wrong, please try again.')
      })
  }, [email])

  return (
    <>
      {!success && (
        <>
          <p className='text-sm text-left mb-4 mb2 text-brandPrimary'>
            Want to be the first to know when this beast goes live?
          </p>
          <p className='text-sm text-left mb-4 mb2 text-brandPrimary'>
            Sign up and become a member of the Code Gang below, and as an extra
            bonus you will get some extra sauce in meantime.
          </p>
        </>
      )}
      {success && (
        <Alert type='success'>
          <p className='text-left mb-3'>
            Your email has been successfully added to the mailing list.
          </p>
          <p className='text-left mb-3'>Welcome to the Code Gang 👊</p>
          <p className='text-left '>
            👉 P.S. You might need to check your spam folder for your welcome
            email
          </p>
        </Alert>
      )}
      {!success && message && (
        <Alert type='error'>
          <p className='text-left '>{message}</p>
        </Alert>
      )}
      {!success && (
        <>
          <div className='flex flex-col sm:flex-row items-center'>
            <input
              type='email'
              class='h-12 sm:mr-2 w-full sm:w-3/4  pl-3 !text-white text-sm tracking-wide bg-brandBlack border  border-white rounded-lg focus:outline-none focus:border-brandPrimary focus:bg-brandPrimary/5 focus:text-white transition ease-in duration-200'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button
              type='button'
              onClick={handleSubmit}
              disabled={loading}
              className={
                'h-12 w-full sm:w-1/4 mt-2 sm:mt-0 flex justify-center items-center bg-brandBlack border border-white hover:border-brandPrimary hover:text-brandPrimary hover:bg-brandPrimary/5 text-white p-3 rounded-lg tracking-widest cursor-pointer text-xs transition ease-in duration-200'
              }
            >
              {loading && (
                <svg
                  class='animate-spin border-t-transparent border-solid rounded-full border-white border-2 h-5 w-5 mr-3 text-white'
                  viewBox='0 0 24 24'
                >
                  {/* <!-- ... --> */}
                </svg>
              )}

              {loading ? 'PROCESSING' : 'SEND IT'}
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default NewsletterSignup
