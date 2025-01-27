import { Link } from "react-router-dom";


const Navbar = () => {

  return (
   <header className="bg-gradient-to-r from-gray-500 to-green-500 text-white py-4 shadow-md">
           <div className="container mx-auto flex justify-between items-center px-4">
            <Link
             to="/">
             <h1 className="text-3xl font-bold">Saylani Microfinance</h1>
             </Link>
             

            <Link to="/">
             <img src="data:image/jpeg;base64,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8XH7eKKr1jUM8VVJPZoe8fWPsr18zyl72mZ6YSkUqQUBVFgBYeU1rWKxoZkSyWnGMVpuV4hWI8wDaRpCrwW0KzaBA7ZKLaEKoLq2Yk8bXXoTqIhKXiKzrRc1KiK4U2I9VSdE9bx6yRV7B2hXxTLV7VUprcGgF+sJy2JqFtVNyCFGliNTeBNx+1AcNUqUHGYIxW41FmK3KnW11PwkCVh9p0Xz5XH1bMr3upVlNmuGtYcDfgQQRA5nBb2vicNXqUkKGlVCFwC6iiXt2q3AzFU1I5Ecxa4XWxlDo6VHWuKbmnmbKz90C/aCwAa5PAcMst1THhSaRPmHmI3UwL+thaXuUL/xtNK8jLHyynjYp+EU7jbO/wDmX+p/+5b9Vl/Ks8PF+Gynujg0/d4ajf8AiXN85W3IzT4lMcXFHiEylsogWD5F9mkiIPjYmctq5L/dZrGOI8M02LRvdlznq5L/ADmccWkd57rdEJtOiqiygAeAAm9aVr4hMQytJNPOzF72F+ttfjJ3KOmHtpCWUlJAQEBAQEBAQEBAQI+Iwwax1DDgw4j/ALHhMr44t3+UaRMTqpSumZT95QSPO3FT8ZhkjqjpyQiVMdmNwpYoZfZLEED3GcNuLaO1L9mfTPxKRs7ZtCi2apUV3GoA116hRckzTBxMeKeq07latYWxqVH0QFF9ph3vcv6n4Tum17+O0LeUjD0AgsPMnmT1J5zTHSKwlumiSBrxCZlIBtcEXte1x05wKJt10ZB2rO1UBrvTd8MGvaylaTDuiwABvAgbG3HoWz4ukjVDlJUM7IpW1iGY3YmwJJvqTbQwJv7KrTObB1qmHYk9oRarnUhRl+tvbKFULbRQLWtpAxw+59HtzXrfWMqolPRlsiMzDtLNaq2Zibke6BnW3UUX+j16lIPmFYaVu0U20JrZrEAWHIAkWgbF3SwllGV8qhBk7WqEORQozUw2UmygHTW0Cx2bsulQz9kCDUbO5ZmclrAcWJNgAABwAECbAQEBAQEBAQEBAQEBAQEBAQEBAQEBA8MiRregp4qD5gGUmlfwjT1KSjgAPIWkxSI8QNkukgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgf/2Q==" 
               className="h-15 w-50 ml-1" />
               </Link>
             
             <nav className="flex gap-4">
             
          
               <Link
                 to="/register"
                 className={"px-2 py-1 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100"}
               >
                 Register
               </Link>
               <Link
                 to="/login"
                 className="px-2 py-1 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100"
               >
                 Login
               </Link>
               <Link
                 to="/loanrequest"
                 className="px-2 py-1 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100"
               >
                 Loan Request
               </Link>
               <Link
                 to="/admindashboard"
                 className="px-2 py-1 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100"
               >
                 Admin Dashboard
               </Link>
             </nav>
           </div>
         </header>
  );
};

export default Navbar;







