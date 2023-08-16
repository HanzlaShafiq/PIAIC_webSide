import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    
    <div className='bg-gradient-to-r  from-purple-500 to-pink-500'>
    <div className="menu flex justify-around bg-gradient-to-r  from-pink-500 to-purple-500 text-2xl mx-3 pt-3
     rounded-full p-3 " >
    <a href="/">Home</a>
    <a href="/components"> About</a>
    <a href="/web3"> Web3.0</a>
    <button className='bg-pink-500 rounded-full w-28  animate-bounce' >
    <a href="https://portal.piaic.org/signup" className=' font-bold text-slate-800'>APPLY</a>
    </button>
    
  </div>
  
  
  <section>
  <div className='bg-gradient-to-r  from-purple-500 to-pink-500'>
      <h1 className=' animate-pulse from-text-slate-600 drop-shadow-2xl to-text-slate-50 text-8xl my-0 p-32 font-autography text-center'>Launch Your Dev Career With Web 3 and Metaverse</h1>
      <p className=' text-2xl  mb-8 pb-0  space-y-0 text-center' >Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready 
        for the Next Generation of the Internet.</p>
    </div>
    </section>
    <div className="box-border h-auto w-lg p-4  bg-slate-600">
  <div className="menu flex justify-around  text-gray-300 text-2xl  
     rounded-full p-3 wrapper " >
    <p className="font-autography text-2xl my-auto">HANZLA SHAFIQ <br/> Front end Developer </p>
    <div className=" my-auto">
    <a href="hanzlashafiq99@gmail.com" >hanzlashafiq99@gamil.com</a>
    <br />
    <a href="https://wa.me/923040666355/">+923040666355</a>
    </div>
     <img src="./personal.jpg"
    className="rounded h-32 w-32" alt="Hanzla Shafiq" /> 
     
    
    
  </div>
  
</div>
</div>
    
      </>
  )
}
