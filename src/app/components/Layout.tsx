"use client";

import { usePathname } from "next/navigation";
import { Navbar, Footer } from "@/src/app/components";
import { CartProvider } from "@/src/app/context/CartContext";
import { FavouritesProvider } from "@/src/app/context/FavouritesContext";
import { ToastProvider } from "@/src/app/context/ToastContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
import PageLoader from "./PageLoader";
import { ThankyouToastProvider } from "./ThankyouToast";
import { BsFillSendExclamationFill } from "react-icons/bs";
import Link from "next/link";
import ValuePoints from "./ValuePoints";
import { TbMessageCircleFilled } from "react-icons/tb";

import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showChat, setShowChat] = useState(false);


  const pathname = usePathname(); // Get the current route path

  // Check if the user is on any page inside "/dashboard2"
  const isDashboard = pathname.startsWith("/dashboard2");
  const isHome = pathname === "/"; // Sirf home page ke liye true hoga

  return (
    <ClerkProvider>
      <CartProvider>
        <FavouritesProvider>
          <ToastProvider>
            <ThankyouToastProvider>
              <Toaster position="top-right" reverseOrder={false} />

              {/* Show Navbar only if NOT on a dashboard page */}
              {!isDashboard && <Navbar />}
              {/* <PageLoader /> */}
              {!isHome && <PageLoader/>}

              {children}
            
              {/* {showChat && ( */}
               <div className="">
              
             </div>
              {/* )} */}

           
           
              {/* } */}


          
              {!isDashboard && <ValuePoints />}
              {!isDashboard && <Footer />}
            </ThankyouToastProvider>
          </ToastProvider>
        </FavouritesProvider>
      </CartProvider>
    </ClerkProvider>
  );
}
