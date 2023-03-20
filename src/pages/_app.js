import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [selectedCategory, setSelectedCategory] = useState({});
  return (
    <Layout>
      <Component
        {...pageProps}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </Layout>
  );
}
