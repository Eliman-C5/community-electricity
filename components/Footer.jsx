import Section from './Wrappers/NormalAndFadeInSection'

export const Footer = () => {
  return (
    <Section>
      <div className="flex gap-28 py-16">
      
        <div className="">
          <img src="/images/cubos-footer.png" alt="" className='w-[236px]' />
          <h2 className='text-[18px]'>Community Electricity</h2>
          <p className='text-[16px]'>Join the prusumer network and monetize as you decarbonize</p>
          <form className='flex gap-6 mt-4'>
            <input type="text" className='outline-0 text-black w-2/3 '/>
            <button className='bg-[#9885F7] rounded w-[120px] h-[40px]'>Suscribe</button>
          </form>
        </div>
        
        <div className="">
          <img src="/images/footerpuzzle.png" alt="" />
        </div>
      </div>
      
      <p className="">We are creating the infrastructure and mechanisms to make impact sexy, personal, and material.</p>
    </Section>
  )
}
