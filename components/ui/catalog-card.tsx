import Image from 'next/image'
const Index = (props:any) => {
  return (
    <div className={`w-[187px] h-[247px] bg-[${props.bg}] px-5 py-[25px] rounded-lg flex flex-col items-center justify-between cursor-pointer`}>
      <p className='text-[20px]'>{props.title}</p>
      <Image src={props.image} alt="image" />
    </div>
  )
}

export default Index