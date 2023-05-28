import { QueryClient, QueryClientProvider } from "react-query";

export const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
});

export const QueryClientWrapper = ({ children }: any) => (
  <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>
);
