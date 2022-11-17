'use client'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      h2: {
        textTransform: "capitalize"
      }
    }
  }
})

export default function RootLayout({ children }) {
  return (
      <html>
        <head />
        <body>
          <ChakraProvider theme={theme}>
            {children}
          </ChakraProvider>
        </body>
      </html>
  )
}
