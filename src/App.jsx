function App() {
  return (
    <div className="p-10 flex flex-col items-center gap-4 bg-base-200 min-h-screen">
      <h1 className="text-4xl font-bold text-primary">Hello daisyUI!</h1>
      
      <p className="text-lg">Tailwind CSS + React + daisyUI is ready.</p>

      {/* A daisyUI Button */}
      <button className="btn btn-secondary">Click Me</button>

      {/* A daisyUI Card */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Success!</h2>
          <p>If you see a styled card and a purple button, the setup worked.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-accent">Nice!</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App