

// code 3
"use client";
import { ChartComponent } from "@/components/chart";
import React, { useEffect, useState } from "react";
import { client } from "@/src/sanity/lib/client";
import RecentSales from "./RecentSales";
import { History, Megaphone, MessageSquareHeart, TrendingUp } from "lucide-react";
import { GiCash } from "react-icons/gi";


const DashboardCard = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [activeOrders, setActiveOrders] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [totalComplaints, setTotalComplaints] = useState(0);

  const fetchReviews = async () => {
    try {
      const allReviews = await client.fetch(`count(*[_type=="review"])`);
      setTotalReviews(allReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };
  
  useEffect(() => {
    fetchReviews();
  
    const subscription = client.listen(`*[_type == "review"]`).subscribe(() => {
      fetchReviews();
    });
  
    return () => subscription.unsubscribe();
  }, []);


  const fetchComplaints = async () => {
    try {
      const allComplaints = await client.fetch(`count(*[_type=="complaint"])`);
      setTotalComplaints(allComplaints);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };
  
  useEffect(() => {
    fetchComplaints();
  
    const subscription = client.listen(`*[_type == "complaint"]`).subscribe(() => {
      fetchComplaints();
    });
    return () => subscription.unsubscribe();
  }, []);
  // ✅ Fetch All Orders
  const fetchOrders = async () => {
    try {
      // ✅ Fetch All Orders (For Total Sales & Revenue)
      const allOrders = await client.fetch(
        `*[_type=="order"]{ totalPrice, totalQuantity, productStatus }`
      );

      // ✅ Fetch Only Active Orders (Not Delivered)
      const activeOrdersData = await client.fetch(
        `*[_type=="order" && productStatus != "Delivered"]{ productStatus }`
      );

      // ✅ Calculate Total Revenue
      setTotalRevenue(
        allOrders.reduce((acc: number, order: { totalPrice: number }) => acc + order.totalPrice, 0)
      );

      // ✅ Calculate Total Sales (All Orders Counted)
      setTotalSales(
        allOrders.reduce((acc: number, order: { totalQuantity: number }) => acc + order.totalQuantity, 0)
      );

      // ✅ Set Active Orders (Only Orders Not Delivered)
      setActiveOrders(activeOrdersData.length);

    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders(); // ✅ Initial Fetch

    // ✅ Real-time Listener (Auto-update on any change)
    const subscription = client.listen(`*[_type == "order"]`).subscribe(() => {
      fetchOrders(); // ✅ Fetch Latest Orders when any change happens
    });

    return () => subscription.unsubscribe(); // ✅ Cleanup
  }, []);
  
  return (


    <div className="pt-4 ">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold px-9 text-start">
          Admin Dashboard
        </h1>
      </div>
      <div className="grid grid-cols-1 mx-4 p-3 md:grid-cols-3 lg:grid-cols-4 mt-3 gap-3">
        <div className="pl-6 pr-3 py-6 mx-1 my-2 text-2xl shadow-md rounded-xl border border-gray-300 hover:scale-[1.02] transition-all duration-500">
          <h1 className="text-xl flex  justify-between font-semibold">Total Revenue <GiCash className="mx-3 text-3xl text-[#e9c500]" /></h1>
          <h4 className="text-2xl font-bold"><span className="text-green-300">$ </span>{Math.floor(totalRevenue)}</h4>

          <h2 className="text-[13px] text-gray-600 font-semibold">
            +20.1% from last month
          </h2>
        </div>




        {/* <div className="pl-6 pr-3 py-6 mx-1 my-2 text-2xl shadow-md rounded-xl border border-gray-300 hover:scale-[1.02] transition-all duration-500">
          <h1 className="text-xl font-semibold">Reviews</h1>
          <h4 className="text-2xl font-bold">+{totalReviews}</h4>
          <h2 className="text-[13px] text-gray-600 font-semibold">
            +18.1% from last month
          </h2>
        </div> */}
        <div className="pl-6 pr-3 py-6 mx-1 my-2 text-2xl shadow-md rounded-xl border border-gray-300 hover:scale-[1.02] transition-all duration-500">
          <h1 className="text-xl flex  justify-between font-semibold">Sales  <TrendingUp className="mx-3 text-green-400" /></h1>
          <h4 className="text-2xl font-bold">+{totalSales}  
           
          </h4>
          <h2 className="text-[13px] text-gray-600 font-semibold">
            +19% from last month
          </h2>
        </div>
        <div className="pl-6 pr-3 py-6 mx-1 my-2 text-2xl shadow-md rounded-xl border border-gray-300 hover:scale-[1.02] transition-all duration-500">
        <h1 className="text-xl flex  justify-between font-semibold">Active Now <History className="mx-3 text-3xl text-orange-400" /></h1>
          <h4 className="text-2xl font-bold">{activeOrders}</h4>
          <h2 className="text-[13px] text-gray-600 font-semibold">
            201 since last month
          </h2>
        </div>
        <div className="flex flex-col pt-2 gap-2">
  {/* Reviews Box */}
  <div className="pl-4 pr-2 py-2 mx-1 text-lg shadow-md rounded-lg border border-gray-300 hover:scale-[1.02] transition-all duration-300">

 <h1 className="text-xl flex  text-blue-500 justify-between font-semibold">{totalReviews}+ Reviews <MessageSquareHeart className="mx-3 text-black text-3xl" /></h1>
    <p className="text-xs">&apos;Customer reviews matter a lot.&apos;</p>
  </div>

  {/* Complaints Box */}
  <div className="pl-4 pr-2 py-3 mx-1  text-lg shadow-md rounded-lg border border-gray-300 hover:scale-[1.02] transition-all duration-300">
  <h1 className="text-xl flex  text-red-500 justify-between font-semibold">{totalComplaints} Complains <Megaphone className="mx-3 text-black text-3xl" /></h1>
    
   <p className="text-xs">Complaints drive improvement.</p>
  </div>
</div>
      </div>
      
      <div className="mx-5 py-5 block md:flex">
        <div className="sm:w-[500px] w-[310px] transition-all hover:scale-[1.015] duration-700 p-3">
          <ChartComponent />
        </div>
        {/* Dashboard component wrapped in a container with class "limited-view" */}
        <div className=" px-2 py-1 w-full transition-all hover:scale-[1.01] duration-700 ">
          <RecentSales />
        </div>
      </div>
      
    </div>
  );
};

export default DashboardCard;
