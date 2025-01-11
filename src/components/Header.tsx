import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
   
export default function Header(){
    return (
        <>
       <header className="fixed left-0 right-0 top-0  z-50 p-4 transition-all duration-300 ease-in-out">
      <div className="mx-auto max-w-[700px]">
        <nav
          className="rounded-2xl border-[1.5px] border-gray-300 bg-background px-2 transition-all duration-300 ease-in-out dark:border-gray-50"
          aria-label="Main navigation"
        >
          <div className="flex h-12 items-center justify-between">
            <div className="flex items-center">
              <a
                href="/"
                className="flex flex-shrink-0 items-center"
                aria-label="PearAI Home"
              >
                {/* <PearHeroLogo className="mb-1 h-7" /> */}
                <div className="ml-72 text-3xl  font-bold text-[#001744] font-font1">PealAi</div>
              </a>
              <nav className="ml-4 hidden md:block" aria-label="Main menu">
                <div>
                {/* <div className="ml-auto text-black/60 dark:text-gray-500">
                  
                  <button className='ml-[1300%] font-font1 font-2xl border border-gray-400 p-1'>Try now</button>
                  </div> */}
                </div>
            </nav>
            </div>
           
          </div>
        </nav>
      </div>
    </header>
     
        </>
    )
}