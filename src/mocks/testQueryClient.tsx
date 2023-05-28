import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

export const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
});

export const QueryClientWrapper = ({ children }: any) => (
  <MemoryRouter>
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  </MemoryRouter>
);
