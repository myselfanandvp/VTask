import { Button } from "./Button"

const  SearchBar=()=>{
return (
    <form className="w-full mx-auto shadow-2xl px-2">   
    <label for="search" className="block mb-2.5 text-lg font-bold text-heading sr-only">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
        </div>
        <input type="search" id="search" className="block w-full p-3 ps-9  bg-neutral-secondary-medium border border-gray-400 text-heading text-sm rounded-base focus:ring-brand placeholder:text-body rounded-2xl" placeholder="Search" required />
        <button type="button" className="absolute end-0 bottom-0 px-3 py-4   bg-blue-600  hover:bg-blue-700 transition duration-150 ease-in-out transform hover:scale-105 active:scale-95 shadow-xl/30 active:shadow-sm text-white  font-bold h-5 w-30   rounded-lg m-2 flex items-center justify-center gap-2 text-shadow-lg/30">Search</button>
    </div>
</form>
)
}

export default SearchBar