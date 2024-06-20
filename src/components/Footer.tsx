import { FooterLogo } from "../constants"

const Footer = () => {
  return (
    <footer className='flex justify-center items-center bg-black h-40'>
        <img src={FooterLogo} alt="logo" />
    </footer>
  )
}

export default Footer