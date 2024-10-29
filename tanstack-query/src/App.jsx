import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrimeReactProvider } from 'primereact/api';
import MainApp from "./components/mainApp";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

const queryClient = new QueryClient(); // our cache.

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <PrimeReactProvider>
                <MainApp />
            </PrimeReactProvider>
        </QueryClientProvider>
    );
}

export default App;
