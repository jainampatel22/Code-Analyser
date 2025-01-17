import {Wand2} from 'lucide-react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import image from '../assets/Screenshot (98).png'
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cn } from "@/lib/utils";
import GridPattern  from "../components/ui/grid-pattern"
import Codemirror from "@uiw/react-codemirror"
import { useState } from "react";
import Header from './Header';
export default function LandingPage(){
    const navigate = useNavigate();
    const [code, setCode] = useState("")
    const [response, setResponse] = useState(null)
    const submitData = async (e: React.FormEvent) => {
        e.preventDefault();
        if (code.trim() !== '') {
            try {
                const response = await axios.post(
                    "https://codeanalyzer-backend.onrender.com/api/v1/code-review", { code }
                );
console.log(response.data.review)
                setResponse(response.data.review);
            } catch (error) {
                console.log(error, "error");
            }
        }
    };
    return (
       <>
      <div className='bg-white/90 w-full min-h-screen'>
        <Header/>
        <div className='flex -mt-5'>

        
        <div className=' p-40  text-center text-4xl font-bold text-black '>
      
       <h1 className=' font-font2 -ml-36 text-6xl     font-bold  '> AI-Powered <span className='text-purple-600'>Code</span></h1> <br />
       
       <h1 className='font-font2  text-6xl -ml-20  font-bold   -mt-8  text-black  '><span className='text-purple-600'>Reviews</span> in Seconds.
       </h1>

       <div className='text-black mt-2  text-lg font-normal'>
     {/* <span>    Get instant, intelligent code reviews that help you write better</span> <br /> <span className='-ml-10'>code. Our AI analyzes your code for bugs, security issues,</span> <br /> <span className='-ml-60'>and best practices in real-time.</span> */}

       </div>

       <button onClick={()=>navigate('/review')} className='mt-6 rounded-[25px] font-font1 hover:bg-black  -ml-40  border-2 text-lg text-white   bg-purple-600 p-3 font-medium'>Get Started</button>
        </div>
        <div className='mt-36  ml-10' >
            <img className='rounded-2xl h-60 w-84' src={image} alt="" />

        </div>  
        </div>
     
      </div>
       </>
    )
}