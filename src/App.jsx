import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import { Form } from "react-router-dom";
import Form from "./components/Form";
function App() {
    return (
        <>
            <Navbar />
            <main>
                <Form />
            </main>
            <Footer />
        </>
    );
}

export default App;
