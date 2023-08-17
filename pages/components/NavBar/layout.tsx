import  Content  from "./content"
import  Box  from "./box";
import { HtmlHTMLAttributes } from "react";

const Layout = ({ children }: HtmlHTMLAttributes<string>) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
    <Content />
  </Box>
);

export default Layout;