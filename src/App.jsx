import { useState } from 'react'

function App() {
  const [avatar, setAvatar] = useState('👨')
  const [text, setText] = useState('')

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        Talking AI Avatar
      </h1>

      <div className="card p-4">

        <h3>Avatar auswählen</h3>

        <div className="mb-4">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => setAvatar('👨')}
          >
            👨
          </button>

          <button
            className="btn btn-outline-primary me-2"
            onClick={() => setAvatar('👩')}
          >
            👩
          </button>

          <button
            className="btn btn-outline-primary"
            onClick={() => setAvatar('🤖')}
          >
            🤖
          </button>
        </div>

        <div className="text-center mb-4">
          <div style={{ fontSize: '80px' }}>
            {avatar}
          </div>

          <p>Dein Avatar</p>
        </div>

        <h3>Text schreiben</h3>

        <textarea
          className="form-control"
          rows="5"
          placeholder="Schreibe deinen Text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="mt-4">
          <h5>Dein Text:</h5>
          <p>{text}</p>
        </div>

      </div>

    </div>
  )
}

export default App