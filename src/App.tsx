import { QueryClient, QueryClientProvider } from "react-query";
import PageHeader from "./components/pageHeader";
import TimeLogs from "./features/timeLogs/timeLogs";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <PageHeader />
        <TimeLogs />
      </div>
    </QueryClientProvider>
  );
}

export default App;
