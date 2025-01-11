import {Wand2} from 'lucide-react'
import axios from "axios";

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cn } from "@/lib/utils";
import GridPattern  from "../components/ui/grid-pattern"
import Codemirror from "@uiw/react-codemirror"
import { useState } from "react";
import Header from './Header';
export default function LandingPage(){
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
        <div className=' p-40 text-center text-4xl font-bold text-[#001744]'>
      
       <h1 className=' font-font2 text-5xl -ml-96 mt-5  font-bold  '> AI-Powered Code Reviews</h1> <br />
       
       <h1 className='font-font2  text-3xl -mt-8 font-light text-black  '>In Seconds
       </h1>

       <div className='text-gray-600 text-lg font-extralight'>
       No Credit Card Required
       </div>

       <button className='mt-20 rounded-[15px] border-2 text-lg text-white  border-gray-500 bg-[#001744] p-3 font-medium'>Get Started</button>
        </div>
        
      </div>
       </>
    )
}