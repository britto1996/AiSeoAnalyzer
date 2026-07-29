import Login from '../components/Login'
import { AppProvider } from '../context/AppContext'

const LoginPage = () => {
  return (
    <AppProvider>
      <div className="flex min-h-screen w-full bg-linear-to-r from-green-700 to-blue-900">
          <Login />
      </div>
    </AppProvider>
  )
}

export default LoginPage