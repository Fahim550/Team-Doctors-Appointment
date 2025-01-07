import React from "react";
import Layout from "../../layout/Layout";
import { useParams } from "react-router-dom";

export default function PaymentSuccess() {
    const {tranid}= useParams()
  return (
    <div>
      <Layout>
        <div className="text-lime-500 min-h-full text-2xl mt-6  flex justify-center ">
        Payment Successfull {tranid}
            </div></Layout>
            
    </div>
  );
}
