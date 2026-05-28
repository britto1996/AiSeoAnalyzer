import { AppProvider } from '../context/AppContext'
import Dashboard from '../components/Dashboard'

const DashboardPage = () => {
  return (
    <AppProvider>
        <Dashboard />
    </AppProvider>
  )
}

export default DashboardPage