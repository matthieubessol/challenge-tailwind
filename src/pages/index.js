import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <div className="bg-gray-800 text-white font-sans h-screen ">
    <header className="flex justify-between items-center max-w-6xl justify-self-center mx-auto mb-16 pt-4">
      <img className="m-0 w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1597166532139-5c3075da8739?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cG5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
      <nav className="flex space-x-8">
        <a>Market</a>
        <a>Discover</a>
        <a>About</a>
        <a>Artist</a>
      </nav>
      <div className="relative">
        <button className="rounded-full gradient-bg p-0.5 ">
          <input className="bg-gray-800 placeholder:text-white rounded-full p-2" type="text" placeholder="search" />
        </button>
        <div className="absolute right-4 top-2">
          <img className="w-6" src="https://cdns.iconmonstr.com/wp-content/assets/preview/2018/240/iconmonstr-search-thin.png"/>
        </div>
      </div>
    </header>

    <main className="">
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-16">
        {/* left */}
        <div>
          <h1 className="text-8xl mb-16 leading-normal">Best <span className="gradient-bg bg-clip-text textfill-transparent">MDR</span><br/>Collection for<br/>Your Future</h1>
          <div className="mb-16">
            <button className="rounded-full gradient-bg px-4 py-2 mr-8" >Explore now</button>
            <button className="rounded-full gradient-bg p-0.5 "><div className="bg-gray-800 w-full h-full rounded-full py-1.5 px-3.5">Create MDR</div></button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="mb-2 block font-bold text-2xl">62500</span>
              <span>Collection</span>
            </div>
            <div className="w-0.5 h-12 bg-gray-300"/>
            <div className="flex flex-col">
              <span className="mb-2 block font-bold text-2xl">62500</span>
              <span>Collection</span>
            </div>
            <div className="w-0.5 h-12 bg-gray-300"/>
            <div className="flex flex-col">
              <span className="mb-2 block font-bold text-2xl">62500</span>
              <span>Collection</span>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="relative">
          <div className="relative">
            <img className="w-[400px] h-[400px] rounded-[200px] " src="https://images.unsplash.com/photo-1597166532139-5c3075da8739?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cG5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
            <div className="absolute right-0 bottom-10 bg-gray-300 bg-opacity-80 rounded-xl p-2 flex space-x-8 text-white">
              <div>
                <p className="m-0">Current Bld</p>
                <p className="m-0 mb-2 text-xl font-bold">12,43 JPP</p>
                <button className="rounded-full gradient-bg px-4 py-2 text-white" >Place now</button>
              </div>
              <div>
                <p className="m-0">Current Bld</p>
                <p className="m-0 mb-2 text-xl font-bold">12,43 JPP</p>
                <button className="bg-transparent border-2 rounded-full border-white px-4 py-2 text-white" >Place now</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-between max-w-6xl mx-auto mb-16">
        <div className="flex items-center space-x-8">
          <div className="gradient-bg rounded-full w-32 h-32 flex items-center justify-center">
            <img className="m-0 w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1597166532139-5c3075da8739?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cG5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <p className="m-0 font-bold text-lg">Trusted with 10<br/>Achievements</p>
        </div>
        <div className="flex items-center space-x-8">
          <div className="gradient-bg rounded-full w-32 h-32 flex items-center justify-center">
            <img className="m-0 w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1597166532139-5c3075da8739?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cG5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <p className="m-0 font-bold text-lg">Trusted with 10<br/>Achievements</p>
        </div>
        <div className="flex items-center space-x-8">
          <div className="gradient-bg rounded-full w-32 h-32 flex items-center justify-center">
            <img className="m-0 w-16 h-16 rounded-full" src="https://images.unsplash.com/photo-1597166532139-5c3075da8739?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cG5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
          </div>
          <p className="m-0 font-bold text-lg">Trusted with 10<br/>Achievements</p>
        </div>
      </div>
      <div className="flex justify-between max-w-6xl mx-auto items-center">
        <p className="font-bold text-4xl">Latest <span className="gradient-bg bg-clip-text textfill-transparent">MDR</span> Artwork</p>
        <a href="#" className="underline underline-offset-8 decoration-red-400">View all artwork</a>
      </div>
    </main>
  </div>
)

export default IndexPage
