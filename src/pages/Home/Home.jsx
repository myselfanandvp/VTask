import Header from "../../components/Header"
import Footer from "../../components/Footer"
import TodoApp from "../../components/TodoApp"
export default function Home() {
    return (
        <>
        <div className="flex flex-col w-full min-h-screen items-center">
            <Header />
            <main className="grow mx-2 flex items-baseline justify-center">
                <TodoApp />
            </main>
           
        </div>
         <Footer />
        </>
        
    )
}