import { FooterLogo } from "../constants"

const Footer = () => {
  return (
    <footer className='flex justify-center items-center bg-black h-40'>
        <img src={FooterLogo} width={168} height={38} alt="logo" />
    </footer>
  )
}

export default Footer