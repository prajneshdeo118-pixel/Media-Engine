import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import Navbar from '../components/Navbar'
const HomePage = () => {
    return (
        <div>
            <Navbar />
            <SearchBar />
            <Tabs />
            <ResultGrid />
        </div>
    )
}

export default HomePage
