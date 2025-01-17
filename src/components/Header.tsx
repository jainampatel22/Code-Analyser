// 
import img from '../assets/download.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Header(){
  return (
    <>
    <div className="h-20 flex p-3 text-purple-600 w-full ">
  <h1 className="text-3xl ml-[42%] font-bold font-font2">Peal Ai</h1>
  <h5 className="ml-[48%]">
  <FontAwesomeIcon size='xl' icon={faXTwitter} />
 </h5>
    </div>
    </>
  )
  }