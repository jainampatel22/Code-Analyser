import { Input } from "@/components/ui/input"
import { useState } from "react"
import Codemirror from "@uiw/react-codemirror"
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { rust } from '@codemirror/lang-rust';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { CSSProperties } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { go } from '@codemirror/lang-go';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import axios from 'axios'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Hero() {
    const languages = {
        javascript: { name: 'Javascript', extension: javascript() },
        jsx: { name: 'JSX', extension: javascript({ jsx: true }) },
        typescript: { name: 'TypeScript', extension: javascript({ typescript: true }) },
        tsx: { name: 'TSX', extension: javascript({ typescript: true, jsx: true }) },
        python: { name: 'Python', extension: python() },
        go: { name: "Golang", extension: go() },
        rust: { name: 'Rust', extension: rust() },
        cpp: { name: 'C++', extension: cpp() },
        java: { name: 'Java', extension: java() },
    };

    type Language = keyof typeof languages;
    const theme: { [key: string]: CSSProperties } = vscDarkPlus as { [key: string]: CSSProperties }

    const [code, setCode] = useState("your code goes here");
    const [selectLanguage, setSelectLanguage] = useState<Language>('typescript');
    const [Response, setResponse] = useState(null);

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
         <div className="flex h-screen bg-gray-900 text-[#deff00]">
      {/* Left Panel - Code Editor */}
      <div className="w-1/2 border-r border-gray-700 flex flex-col">
        <div className="p-4 bg-[#02010a] border-b-2 border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
            
              <h2 className="text-lg font-semibold">Code Editor</h2>
            </div>

          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <Codemirror
            value={code}
            height="100%"
            theme={vscodeDark}
            
            onChange={(value) => setCode(value)}
            className="h-full"
          />
        </div>
        <div className="p-2 flex justify-center items-center bg-[#02010a] border-t border-gray-700">
          <button
            onClick={submitData}
            className="h-10 w-[30%] bg-[#7C3AED]/60 hover:bg-[#7C3AED]/80 text-white font-semibold py-2 px-3 rounded-md transition-colors"
          >
            Analyze Code
          </button>
        </div>
      </div>

      {/* Right Panel - AI Feedback */}
      <div className=" w-1/2 flex flex-col">
        <div className="p-4 bg-[#02010a] border-b-2 border-gray-800">
          <div className="flex items-center space-x-2">
                       <h2 className="text-lg font-semibold">Feedback</h2>
            {/* <Wand2 className="w-5 h-5 text-purple-400" /> */}
          </div>
        </div>
        <div className="p-4 flex-1 overflow-y-auto bg-[#02010a] " id='reviewDiv'>
        <ReactMarkdown
            className="prose prose-invert max-w-none"
            components={{
              code({ className, children, ...props }) {
               
                return  (
                  <SyntaxHighlighter
                  //@ts-ignore
                  style={vscDarkPlus as { [key: string]: React.CSSProperties }}
                  
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                )
              },
            }}
          >
            {Response}
          </ReactMarkdown>
        </div>
      </div>
    </div>
       </>
    );
}
