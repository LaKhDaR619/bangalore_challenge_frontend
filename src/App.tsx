import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PageHeader from "./components/pageHeader";
import AddLog from "./features/timeLogs/addLog/addLog";
import TimeLogs from "./features/timeLogs/timeLogs";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <PageHeader />
        <Route path="/" exact>
          <TimeLogs />
        </Route>
        <Route path="/add_log">
          <AddLog />
        </Route>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
