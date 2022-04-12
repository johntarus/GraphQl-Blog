import React, { useState, useEffect, useRef } from 'react'

const CommentsForm = () => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storedDataEl = useRef()

  const handleCommentSubmition = () => {
    setError(false)

    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { value: storeData } = storeDataEl.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }
  }

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        Comments Form
      </h3>
      <div className="mb-4 grid grid-cols-1 gap-4">
        <textarea
          ref={commentEl}
          className="round-lg focus w-full bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          ref={nameEl}
          className="round-lg focus w-full bg-gray-100 px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          ref={emailEl}
          className="round-lg focus w-full bg-gray-100 px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Email"
          name="email"
        />
      </div>
      <div classNmae="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={storedDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
            className="" //checking
          ></input>
          <label
            className="ml-2 cursor-pointer text-gray-500"
            htmlFor="storeData"
          >
            Save my credentials for next time
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmition}
          className="ease inline-block cursor-pointer rounded-full bg-pink-600 py-2 px-6 text-lg text-white transition duration-500 hover:bg-indigo-900"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="float-right mt-3 text-xl font-semibold text-green-500">
            comment submitted for review
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
