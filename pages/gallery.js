// pages/gallery.js
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const GalleryPage = () => (
  <ChakraProvider>
    <Navbar />
    <Gallery />
    <Footer />
  </ChakraProvider>
);

export default GalleryPage;