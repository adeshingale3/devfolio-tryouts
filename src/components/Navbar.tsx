import { Bell } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='h-18 shadow-black/10 shadow-sm w-full px-40 flex flex-row justify-between items-center'>
            <div className='flex flex-row gap-10 items-center'>
                <h1 className='text-2xl font-bold montserrat '>Devfolio</h1>
                <div className='text-gray-600 flex flex-row gap-8 text-md'>
                    <h3>Home</h3>
                    <h3>Blog</h3>
                </div>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <Bell color='gray' />
                <div className='flex flex-row gap-2 items-center group cursor-pointer'>
                    <img
                        className='w-10 h-10 rounded-full shadow-lg group-hover:ring-blue-200 transition-all duration-300'
                        src='https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fusers%2Fb7e8d98e741f48eea51cab6b859695d1%2Favatar-f1185bde-bb1b-44ca-b5e1-243e01e8cbbf.jpeg&w=360&q=75'
                        alt="Profile"
                    />
                    <h1>Adeshx</h1>

                </div>
            </div>
        </div>
    )
}

export default Navbar