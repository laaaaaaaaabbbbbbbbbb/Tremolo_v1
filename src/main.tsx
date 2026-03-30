import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const myHeaders = new Headers();

myHeaders.append("Content-Type", nosniff);
myHeaders.get("Content-Type"); // should return 'text/xml'

createRoot(document.getElementById("root")!).render(<App />);
