import { NavLink } from 'react-router-dom'

const linkStyle: React.CSSProperties = {
  display:'block', padding:'10px 14px', textDecoration:'none', color:'#333', borderRadius:8, margin:'4px 8px'
}

const activeStyle: React.CSSProperties = { background:'#b3d326ff', color:'#1a4cff' }

export default function Sidebar() {
  const items = [
    { to:'/', label:'Dashboard' },
    { to:'/calibration', label:'Calibration' },
    { to:'/standards', label:'Standards' },
    { to:'/batches', label:'Batches' },
    { to:'/reports', label:'Reports' },
    { to:'/devices', label:'Devices' },
    { to:'/clients', label:'Clients' },
    { to:'/settings', label:'Settings' },
  ]
  return (
    <aside style={{padding:'12px'}}>
      <h1 style={{fontSize:18, fontWeight:700, margin:'8px 8px 16px'}}>Arcocool QC</h1>
      <nav>
        {items.map(it => (
          <NavLink key={it.to} to={it.to} end={it.to==='/'}
            style={({isActive}) => ({...linkStyle, ...(isActive?activeStyle:{})})}>
            {it.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}