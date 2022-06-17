import React from 'react'
import ContactCard from '../components/ContactCard'

function Contact() {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-5xl mt-20 text-theme font-bold'>Contact Me!</p>
      <p className='mt-2'>I would love to get in touch with you!</p>
      <div class="grid gap-10 grid-cols-1 grid-rows-3 mt-12 w-4/5 md:grid-cols-2">
        <ContactCard platform={"Email"} desc={"Send me something!"} myInfo={"yusufnissar8@gmail.com"} link={"mailto:yusufnissar8@gmail.com"}></ContactCard>
        <ContactCard platform={"Github"} desc={"Fork my repos!"} myInfo={"/Waldohatesyou"} link={"https://github.com/Waldohatesyou"}></ContactCard>
        <ContactCard platform={"LinkedIn"} desc={"Hire me!"} myInfo={"/yusufnissar"} link={"https://www.linkedin.com/in/yusufnissar/"}></ContactCard>
        <ContactCard platform={"Instagram"} desc={"Follow me!"} myInfo={"@yusufnissar_"} link={"https://www.instagram.com/yusufnissar_/"}></ContactCard>
      </div>
    </div>
  )
}

export default Contact