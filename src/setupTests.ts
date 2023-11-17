// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { server } from "./mocks/server";
import { testQueryClient } from "./mocks/testQueryClient";
beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  testQueryClient.clear();
});
afterAll(() => {
  server.close();
});

server.events.on("request:start", (req) => {
  console.log(`[request:start] ${req.method} ${req.url.href}`);
});
