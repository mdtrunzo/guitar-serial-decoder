import React, { useState } from 'react'
import { decodeSerial, DecodedInfo } from '../helpers/serialDecoder'

const Gibson: React.FC = () => {
  const [serial, setSerial] = useState<string>('')
  const [decoded, setDecoded] = useState<DecodedInfo | null>(null)
  const [error, setError] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSerial(e.target.value)
  }

  const handleDecode = (): void => {
    const result = decodeSerial(serial)
    if (result) {
      setDecoded(result)
      setError('')
    } else {
      setDecoded(null)
      setError('Please enter a valid 9-digit serial number.')
    }
  }

  return (
    <div className='main-container'>
      <h2>Gibson Guitar Date Decoder</h2>
      <input
        type="text"
        value={serial}
        onChange={handleInputChange}
        placeholder="Enter 9-digit serial number"
      />
      <button onClick={handleDecode}>Decode</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {decoded && (
        <div>
          <p>
            <strong>Year:</strong> {decoded.year}
          </p>
          <p>
            <strong>Date:</strong> {decoded.date}
          </p>
          <p>
            <strong>Item Number:</strong> {decoded.itemNumber}
          </p>
        </div>
      )}
    </div>
  )
}

export default Gibson
