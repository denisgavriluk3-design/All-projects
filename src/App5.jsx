function App5() {
    return (
        <div>
        
      <div className='container mx-auto text-center mt-5'>
        <h1 className="00bg-blue-500 bg-blue-500 text-black p-4 rouded-lg dark:text-1xl"> Hello,Bootstrap is working!</h1>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-3 bg-mainColor">click for me</button>
      </div>
      <div className='pt-big'>
        <div className="space-x-5">
            <button className="hover:underline md:px-0">about</button>
            <button className="bg-red-500 py-2 px-4 rounded-full hover:bg-red-600">about</button>
            <button >about</button>
        </div>
      </div>
      <div className="conteiner flex justify-center  pt-big-text
        space-x-0 md:space-x-10 flex-col md:flex-row space-y-5 md:space-y-0">
        <div className="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">button</div>
        <div className="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">button</div>
        <div className="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">button</div>
        <div className="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">button</div>
        <div className="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">button</div>
        <div className="bg-red-500 py-2 px-4 rounded-full hover:bg-red-700">button</div>
      </div>
      <div className="container mx-auto py-big grid-cols-4 grid-flow-col gap-4">
        <div className="bg-purple-500 w-1/2 h-[100px]"></div>
        <div className="bg-purple-500 w-3/5 h-[100px]"></div>
        <div className="bg-purple-500 w-1/6 h-[100px]"></div>
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full h-[100px]"></div>
      </div>
      </div>
      
    )
}

export default App5