import Link from 'next/link';

const SigninPage = () => {
    return (
        <>
<div className="flex flex-col-reverse lg:flex-row">
<div className="hidden lg:flex items-center justify-center bg-gray-400 flex-1 h-screen">
  <img src="login.png" className="h-screen w-full object-cover" />
</div>

  <div className="lg:w-full xl:max-w-screen-sm">
    <div className="py-8 lg:py-12 bg-gray-100 lg:bg-white flex flex-col lg:flex-row lg:justify-between lg:px-12">
      <div className="cursor-pointer flex items-center justify-center lg:justify-start lg:ml-20 mr-[-15px] lg:mt-10">
        <div className="flex items-center justify-center ml-20 mt-20">
        <svg width="223" height="33" viewBox="0 0 223 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M207.294 32.0728C215.936 32.0728 222.941 25.0675 222.941 16.4258C222.941 7.78418 215.936 0.778809 207.294 0.778809C198.653 0.778809 191.647 7.78418 191.647 16.4258C191.647 25.0675 198.653 32.0728 207.294 32.0728ZM204.179 13.3103L215.29 8.4297L210.41 19.5412L199.298 24.4218L204.179 13.3103Z" fill="#FF385C"/>
<path d="M207.294 18.0421C208.286 18.0421 209.089 17.2384 209.089 16.2471C209.089 15.2558 208.286 14.4521 207.294 14.4521C206.303 14.4521 205.5 15.2558 205.5 16.2471C205.5 17.2384 206.303 18.0421 207.294 18.0421Z" fill="#FF385C"/>
<path d="M25.2485 15.7793C25.2485 6.97987 19.785 1.96289 12.6536 1.96289C5.48271 1.96289 0.0585938 6.97987 0.0585938 15.7793C0.0585938 24.5393 5.48271 29.5957 12.6536 29.5957C19.785 29.5957 25.2485 24.5787 25.2485 15.7793ZM19.483 15.7793C19.483 21.4792 16.7775 24.5655 12.6536 24.5655C8.51653 24.5655 5.82418 21.4792 5.82418 15.7793C5.82418 10.0794 8.51653 6.993 12.6536 6.993C16.7775 6.993 19.483 10.0794 19.483 15.7793Z" fill="#282828"/>
<path d="M29.4611 29.2279H35.1479V20.5073H39.9284C46.1143 20.5073 49.7129 16.8168 49.7129 11.4452C49.7129 6.09993 46.18 2.33063 40.0729 2.33063H29.4611V29.2279ZM35.1479 15.95V6.97987H38.9828C42.2662 6.97987 43.8553 8.76601 43.8553 11.4452C43.8553 14.1113 42.2662 15.95 39.0091 15.95H35.1479Z" fill="#282828"/>
<path d="M53.4066 29.2279H71.5833V24.5393H59.0934V18.117H70.5983V13.4284H59.0934V7.01927H71.5308V2.33063H53.4066V29.2279Z" fill="#282828"/>
<path d="M98.5496 2.33063H92.8891V19.2465H92.6526L81.0427 2.33063H76.052V29.2279H81.7388V12.2989H81.9358L93.6376 29.2279H98.5496V2.33063Z" fill="#282828"/>
<path d="M102.224 7.01927H110.458V29.2279H116.079V7.01927H124.314V2.33063H102.224V7.01927Z" fill="#282828"/>
<path d="M127.952 29.2279H133.639V19.693H137.789L142.885 29.2279H149.163L143.45 18.7737C146.51 17.4604 148.204 14.7943 148.204 11.1169C148.204 5.77159 144.671 2.33063 138.564 2.33063H127.952V29.2279ZM133.639 15.1226V6.97987H137.474C140.757 6.97987 142.346 8.43768 142.346 11.1169C142.346 13.783 140.757 15.1226 137.5 15.1226H133.639Z" fill="#282828"/>
<path d="M157.909 2.33063H152.223V29.2279H157.909V2.33063Z" fill="#282828"/>
<path d="M162.588 29.2279H168.275V20.5073H173.056C179.241 20.5073 182.84 16.8168 182.84 11.4452C182.84 6.09993 179.307 2.33063 173.2 2.33063H162.588V29.2279ZM168.275 15.95V6.97987H172.11C175.393 6.97987 176.982 8.76601 176.982 11.4452C176.982 14.1113 175.393 15.95 172.136 15.95H168.275Z" fill="#282828"/>
</svg>
    
        </div>
      </div>
    </div>
    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
      <div className="mt-12">
        <form>
          <div>
            <div className="text-sm  text-gray-700 tracking-wide">Email Address</div>
            <input className="w-full mt-2 text-lg py-4 border border-gray-300 focus:outline-none focus:border-gray-500 rounded-lg" type />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <div className="text-sm  text-gray-700 tracking-wide">
                Password
              </div>
              <div>
                <a className="text-xs font-display font-semibold text-gray-600 hover:text-gray-800
                              cursor-pointer">
                  Forgot Password?
                </a>
              </div>
            </div>
            <input className="w-full mt-2 text-lg py-4 border border-gray-300 focus:outline-none focus:border-gray-500 rounded-lg" type />
          </div>
          <div className="mt-10">
            <a className="bg-red-600 text-gray-100 p-4 w-full rounded-lg tracking-wide 
                      font-semibold font-display block focus:outline-none focus:shadow-outline hover:bg-gray-500
                      shadow-lg text-center text-lg">
             <Link href="/sections">
    Login
  </Link>
            </a>
          </div>
        </form>
        <div className="mt-12 text-sm font-display text-gray-500 text-center mb-20">
          Don't have an account ? <a className="cursor-pointer text-gray-600 hover:text-gray-800">Register here</a>
        </div>
      </div>
    </div>
    <div className="text-sm font-display text-gray-500 text-center mt-20">© 2020 OPENTRIP. All rights reserved</div>
    
    </div>
  </div>



        </>
    );
};
export default SigninPage;