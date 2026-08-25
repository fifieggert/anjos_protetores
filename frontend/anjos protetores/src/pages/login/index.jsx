import { Link } from 'react-router-dom'
import './style.css'
import logo from '../../assets/logo.png'

function PawIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="4" r="2"></circle>
      <circle cx="18" cy="8" r="2"></circle>
      <circle cx="20" cy="16" r="2"></circle>
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="login-input-icon"
      aria-hidden="true"
    >
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    </svg>
  )
}

function LockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="login-input-icon"
      aria-hidden="true"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  )
}

function BrandMark() {
  return (
    <div className="login-brand-mark">
      <img src={logo} alt="Anjos Protetores" className="login-brand-mark-logo" />
    </div>
  )
}

function Login() {
  return (
    <div className="login-page">
      <div className="login-side">
        <div className="login-blob login-blob-1" />
        <div className="login-blob login-blob-2" />

        <BrandMark />

        <div className="login-side-content">
          <PawIcon className="login-side-icon" />
          <h1>Cuidar é um ato de amor.</h1>
          <p>Gerencie animais, doações e adoções do seu abrigo com simplicidade e carinho.</p>
        </div>

        <p className="login-side-footer">© 2026 Anjos Protetores · Feito com ♥ no Brasil</p>
      </div>

      <div className="login-form-panel">
        <form className="login-form">
          <div className="login-form-mobile-brand">
            <BrandMark />
          </div>

          <div className="login-form-heading">
            <h2>Bem-vinda de volta</h2>
            <p>Entre com sua conta para continuar.</p>
          </div>

          <div className="login-fields">
            <label className="login-field">
              <span>E-mail</span>
              <div className="login-input-wrapper">
                <MailIcon />
                <input type="email" id="email" name="email" required />
              </div>
            </label>

            <label className="login-field">
              <span>Senha</span>
              <div className="login-input-wrapper">
                <LockIcon />
                <input type="password" id="password" name="password" required />
              </div>
            </label>
          </div>

          <div className="login-form-row">
            <label className="login-remember">
              <input type="checkbox" />
              Lembrar de mim
            </label>
            <a href="#">Esqueci minha senha</a>
          </div>

          <button type="submit">Entrar</button>

          <p className="login-visitor">
            Visitante? <Link to="/publico">Conheça os animais para adoção</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
