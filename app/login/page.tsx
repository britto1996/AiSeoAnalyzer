import Login from '../components/Login'
import { AppProvider } from '../context/AppContext'

const LoginPage = () => {
  return (
    <AppProvider>
      <div className="flex h-175 w-full">
          <Login />
      </div>
    </AppProvider>
  )
}

export default LoginPage