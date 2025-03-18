import React from 'react'

function Header() {
  return (
      <div className="bg-white border-b-2 border-borderc py-5 sticky top-0">
        <div className="w-9/12 mx-auto flex items-end justify-between">
          <div className="font-title mr-5 text-2xl">UP-Search</div>
          <ul className="font-general flex text-darktext h-min gap-5">
            <li className="cursor-pointer">Research Materials</li>
            <li className="cursor-pointer">Writers</li>
            <li className="cursor-pointer">Bookmarks</li>
          </ul>
        </div>
      </div>
  )
}

export default Header