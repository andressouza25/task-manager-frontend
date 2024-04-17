import Tasks from "./components/Tasks";
import Siderbar from "./components/Siderbar";
import "./App.scss";
const App = () => {
    return (
        <>
            <div className="app-container">
                <Siderbar />
                <Tasks />
            </div>
        </>
    );
};

export default App;
