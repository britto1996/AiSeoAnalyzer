import Register from '../components/Register'
import { AppProvider } from '../context/AppContext'

const RegisterPage = () => {
  return (
    <AppProvider>
      <div className="flex h-175 w-full">
        <Register />
      </div>
    </AppProvider>
  )
}

export default RegisterPage