import { House, ShoppingBag, Plus, SquarePlay, CircleUser } from 'lucide-react';
const Footer = () => {
  return (
    <div className='h-[80px] bg-white mt-20 border-t-2 border-[#E4E6EC]'>
      <div className='flex  justify-around'>
        <div className='p-4'>

          <House />
        </div>
        <div className='border-t-2 border-[#E1A5AA]  p-4'>
          <ShoppingBag className='text-[#E1A5AA]' />
        </div>
        <div className='p-4'>
          <Plus />
        </div>
        <div className='p-4'>

          <SquarePlay />
        </div>
        <div className='p-4'>
          <CircleUser />
        </div>
      </div>
    </div>
  )
}

export default Footer
