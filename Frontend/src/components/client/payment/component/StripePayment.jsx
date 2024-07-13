import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
  CardElement
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
const navigate=useNavigate()
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements == null) {
      return;
    }
    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }
    // const { client_secret: clientSecret } = await res.json();
    const clientSecret =
"sk_test_51OyzgCP8DhZtuvySpddp5Zl9pGW7aZ020ufXFfqJy79s3ihqIFbhUHNHaCbhHtEpOTtEnkHzrjrryOfdG7f7Swv900Wf5o1ixA";

try {
  await stripe.confirmPayment({
    //`Elements` instance that was used to create the Payment Element
    elements,
    clientSecret,
    confirmParams: {
      return_url: "http://localhost:5173/payment",
    },
  });
  navigate("/doctors")
} catch (error) {
  console.log("error",error);
}
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="my-2 p-2 border-2 border-yellow-200 text-slate-50"/>
      <button
        type="submit"
        disabled={!stripe || !elements}
        className="w-full bg-green-500 text-white px-5 py-2 rounded-lg mt-2"
        onClick={()=>navigate("/home")}
      >
        Pay Now
      </button>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};
const stripePromise = loadStripe("pk_test_51OyzgCP8DhZtuvyShZ31EHbtGksFyhldX0G0GGU6Ah0rHSkcxxjVuOwEIfBCNSiqiSbxyEXr4IPfytYXUePLeOBi00JOU6EU8D"
);

export default function StripePayment({ money}) {
  const Money=Math?.round(money/105)
  console.log("money",Money);
  const options = {
    mode: "payment",
    amount:Money?Money:1,
    currency: "usd",
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };
  return (
    <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements>
  );
}
