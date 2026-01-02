import Header from "../../components/Header"
import Footer from "../../components/Footer"
import TodoApp from "../../components/TodoApp"
export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow">
                <TodoApp />
            </main>
            <Footer />
        </div>
    )
}