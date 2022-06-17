import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

export default function ProjectCard({name, technologies, imageLocation, desc, projectLink}) {
  return (
    <div>
        <img src={imageLocation} href={projectLink} className="max-w-full h-auto hover:opacity-80 duration-100 sm:rounded-t"></img>
        <div className="bg-white shadow overflow-hidden sm:rounded-b">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 text-theme font-semibold">{name}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{technologies}</p>
      </div>
      <div className="border-t border-gray-200">
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {desc}
            </dd>
          </div>
      </div>
    </div>
    </div>
  )
}