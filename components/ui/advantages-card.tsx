import Image from 'next/image'
const index = (props:any) => {
  return (
    <div className={`w-[292px] h-[289px] bg-[#fff] pl-[40px] rounded-lg flex flex-col items-start justify-center gap-[30px] cursor-pointer`}>
      <Image src={props.image} alt="image" />
      <p className='text-[20px] text-[#000]'>{props.title}</p>
    </div>
  )
}

export default index