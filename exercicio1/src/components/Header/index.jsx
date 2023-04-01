import './styles.css'

import bagImg from '../../assets/bag.svg'

export function Header() {
  return (
    <header className="header-container">
      <img src={bagImg} alt="Logo" />
      <p>Market Cubos</p>
    </header>
  )
}