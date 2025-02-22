import React from "react";
import CardWithDetails from "../CardWithDetails";

const loansData = [
  {
    id: 1,
    title: "Mutual Funds",
    description:
      "From 35+ options, choose a card matching your lifestyle & needs",
    buttonText: "Get Best Offers",
    imageSrc: "/assets/hdfc.png",
    imageAlt: "hdfc",
    link: "#",
  },
  {
    id: 2,
    title: "Fixed Deposit",
    description:
      "Select the best offer curated just for you from a wide choice of Banks & NBFC's",
    buttonText: "Check Eligibility",
    imageSrc: "/assets/icici.png",
    imageAlt: "icici",
    link: "#",
  },
];

const Investments = () => {
  return <CardWithDetails title={"Investments"} data={loansData} />;
};

export default Investments;
