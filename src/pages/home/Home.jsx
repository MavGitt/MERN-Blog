import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
import "./home.css"

export default function Home() {
    return (
        <>
        <Header />
        <div className="home">
            <Posts />
            <Sidebar />
        </div>
        </>
    )
}
