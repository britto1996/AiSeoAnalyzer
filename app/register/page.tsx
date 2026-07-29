import Register from '../components/Register'
import { AppProvider } from '../context/AppContext'

const RegisterPage = () => {
  return (
    <AppProvider>
      <div className="flex min-h-screen w-full bg-linear-to-r from-green-700 to-blue-900">
        <Register />
      </div>
    </AppProvider>
  )
}

export default RegisterPage