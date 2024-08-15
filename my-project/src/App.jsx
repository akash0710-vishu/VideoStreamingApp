import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import './App.css'
import VideoUpload from './components/VideoUpload'

function App() {
  const [count, setCount] = useState(0)
  
  const [videoId, setVideoId]=useState('0653bbff-11f2-4688-b1c3-79631adf8bce')
  return (
    <>
       <Toaster />
       <div className="flex flex-col items-center space-y-9 justify-center py-9">
           <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
             Video Streaming App
           </h1>
         <div className="flex mt-14 w-full justify-around">
           <div>
              <h1 className="text-white">Playing Video</h1>
              <video 
              style={{
                width: 500,
                
              }}
              src={'http://localhost:8080/api/v1/videos/stream/${videoId}'} 
              controls>
              </video>

           </div>
          </div>
          
          <VideoUpload/>
       </div>

    </>
  )
}

export default App
