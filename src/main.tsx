import ReactDOM from "react-dom/client"
import { App } from "./App.tsx"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import { store } from "./services/store.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
