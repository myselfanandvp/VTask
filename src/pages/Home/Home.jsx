import Header from "../../components/Header"
import Footer from "../../components/Footer"
import TodoApp from "../../components/TodoApp"

export default function Home() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header />
            
            {/* 1. Removed 'items-baseline' to prevent the app from jumping to the very top 
               2. Added 'w-full' to ensure the child (TodoApp) can control its own max-width
            */}
            <main className="grow flex justify-center bg-gray-300 ">
                <div className="w-2xl">
                   <TodoApp />
                </div>
            </main>

            <Footer />
        </div>
    )
}