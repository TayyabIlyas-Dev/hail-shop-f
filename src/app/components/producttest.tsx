
// import React from "react";
// import { client } from "../../sanity/lib/client";
// import { urlForImage } from "../../sanity/lib/image";
// import Link from "next/link";
// import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

// interface Product {
//   title: string;
//   price: number;
//   image: any;
//   ItemURL?: string;
// }

// const ProCard: React.FC = async () => {
//   const productsQuery = `*[_type == "product"]{
//     title,
//     price,
//     image,
//     ItemURL
//   }`;
//   const products: Product[] = await client.fetch(productsQuery);

//   return (
//     <>


//       <div className="font-[sans-serif] bg-[#f8f8f8]p-4 mx-0 max-w-[1400px] px-5">

//         <div className="mt-2">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 ">
//             {products.map((product, index) => (
//               <div
//               key={index}
//                 className="group overflow-hidden cursor-pointer relative hover:shadow-lg"
//               >
//                 {product.ItemURL ? (
//                     <Link href={product.ItemURL} passHref>
//                     <div className="bg-gray-100 w-full overflow-hidden ">
//                       {product.image && (
//                           <img
//                           src={urlForImage(product.image.asset).url()}
//                           alt={product.title}
//                           style={{ width: "250px", height: "250px" }}
//                           />
//                         )}
//                     </div>
//                   </Link>
//                 ) : (
//                   <div className="bg-gray-100 w-full overflow-hidden rounded-t-2xl">
//                     {product.image && (
//                       <img
//                         src={urlForImage(product.image.asset).url()}
//                         alt={product.title}
//                         style={{ width: "250px", height: "250px" }}
//                       />
//                     )}
//                   </div>
//                 )}
//                 <div
//                   className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
//                   transition-all duration-500
//                   left-0 right-0
//                   group-hover:bottom-20 group-hover:py-3 group-hover:bg-white group-hover:opacity-100
//                   lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
//                   max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60
//                   hover:padding-top-4 lg:hover:padding-top-3 lg:hover:padding-bottom-3"
//                   >
//                   <button
//                     type="button"
//                     title="Add to wishlist"
//                     className="bg-transparent outline-none border-none"
//                     >
//                     <AiOutlineHeart className="fill-gray-800 w-5 h-5 inline-block" />
//                   </button>
//                   <button
//                     type="button"
//                     title="Add to cart"
//                     className="bg-transparent outline-none border-none"
//                   >
//                     <AiOutlineShoppingCart className="fill-gray-800 w-5 h-5 inline-block" />
//                   </button>
//                 </div>
//                 <div className="z-20 relative bg-white p-4 rounded-br-2xl rounded-bl-2xl">
//                   <h4 className="text-[20px] font-semibold text-gray-800 truncate">
//                     {product.title}
//                   </h4>
//                   <h6 className="text-sm font-sans text-gray-600 mt-2 cursor-auto">
//                    <span className="text-green-500">$</span>  {product.price}
//                   </h6>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//     </>
//   );
// };

// export default ProCard;






// tried uiversse


// import React from 'react';
// import styled from 'styled-components';

// const ProCard = () => {
//   return (
//     <StyledWrapper>
//       <div className="container p-32">
//         <div data-text="Github" style={{transform: 'rotate(-15deg)'}} className="glass">
//           <svg viewBox="0 0 496 512" height="1em" xmlns="http://www.w3.org/2000/svg">
//             <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
//           </svg>
//         </div>
//         <div data-text="Code" style={{transform: 'rotate(5deg)'}} className="glass">
//           <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
//             <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
//           </svg>
//         </div>
//         <div data-text="Earn" style={{transform: 'rotate(25deg)'}} className="glass">
//           <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
//             <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
//           </svg>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .container {
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .container .glass {
//     position: relative;
//     width: 180px;
//     height: 200px;
//     background: linear-gradient(#fff2, transparent);
//     border: 1px solid rgba(255, 255, 255, 0.1);
//     box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     transition: 0.5s;
//     border-radius: 10px;
//     margin: 0 -45px;
//     backdrop-filter: blur(10px);
//     transform: rotate(calc(var(--r) * 1deg));
//   }

//   .container:hover .glass {
//     transform: rotate(0deg);
//     margin: 0 10px;
//   }

//   .container .glass::before {
//     content: attr(data-text);
//     position: absolute;
//     bottom: 0;
//     width: 100%;
//     height: 40px;
//     background: rgba(255, 255, 255, 0.05);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: #fff;
//   }
//   .container .glass svg {
//     font-size: 2.5em;
//     fill: #fff;
//   }`;

// export default ProCard;











// 'use client';

// import { useChat } from 'ai/react';

// export default function Chat() {
//   const { messages, input, handleInputChange, handleSubmit } = useChat();

//   return (
//     <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
//       {messages.map(m => (
//         <div key={m.id} className="whitespace-pre-wrap">
//           {m.role === 'user' ? 'User: ' : 'AI: '}
//           {m.content}
//         </div>
//       ))}

//       <form onSubmit={handleSubmit}>
//         <input
//           className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
//           value={input}
//           placeholder="Say something..."
//           onChange={handleInputChange}
//         />
//       </form>
//     </div>
//   );
// }
