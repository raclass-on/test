import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css'
import './share.css'
import ShareApp from './ShareApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShareApp />
  </StrictMode>,
)
