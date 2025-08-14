import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function AppLayout() {
  return (
    <div style={{display:'grid', gridTemplateColumns:'260px 1fr', gridTemplateRows:'56px 1fr', height:'100vh'}}>
      <div style={{gridColumn:'1 / 2', gridRow:'1 / 3', borderRight:'1px solid #b12323ff'}}>
        <Sidebar />
      </div>
      <div style={{gridColumn:'2 / 3', gridRow:'1 / 2', borderBottom:'1px solid #2bd3a1ff'}}>
        <Topbar />
      </div>
      <main style={{gridColumn:'2 / 3', gridRow:'2 / 3', padding:'16px', overflow:'auto'}}>
        <Outlet />
      </main>
    </div>
  )
}