import TopPage from "@/components/TopPage";
import TopSection from "@/components/TopSection";
import React from "react";
import { Link } from "react-router-dom";

import insuranceImg from "../../assets/images/policy/insurance.webp";
import insurancePdf from "../../assets/pdf/CertificateOfCoverage-2.pdf";

import { FaDownload } from "react-icons/fa";

export default function Policy() {
  const policy = [
    {
      title: "Licensed, Insured and Bonded",
      parag:
        "Best Portland Cleaners is a home cleaning service that is licensed, insured and bonded and has specialized in providing quality professional cleaning services. We are responsible for all payroll taxes and have workers compensation insurance. We provide all equipment and supplies, but will use specialty products such as Green products or non-scented products at the client’s instruction/choice (additional fees for the client). We guarantee consistent quality cleaning services. (Proof of insurance can be found on the bottom of the page)",
    },
    {
      title: "Our Goals",
      parag:
        "We employ reliable, trustworthy cleaning teams that are motivated by company motivations and rewards. The same dedicated crew will clean your home on each every visit. We do not guarantee the same crew will be able to accommodate the clients home per visit, however we will do the best we can to make sure we send the cleaner of our clients preference. Our goal is to exceed your expectations for professional cleaning services in Portland and surrounding areas.",
    },
    {
      title: "100% Satisfaction Guarantee",
      parag:
        "We inspect our work before leaving the premises. If you find our service unsatisfactory, please contact us within 24 hours so we can correct the issues as soon as possible at no additional charge. Requests received by our office more than 24 hours after the service was provided will be incorporated into your next scheduled cleaning.",
    },
    {
      title: "Applicable Fees",
      parag:
        "Schedule Changes or Cancellations: Please notify us as soon as possible within 24 hours with any changes or cancellations. A cancellation fee of of $80 is billed upon your invoice if cleaning appointments are canceled the day of or client does not show up to let cleaners access the home.  We will always try to accommodate your schedule. A fee equal to one year’s cleaning service will be charged to any client who hires any employee currently employed of Best Portland Cleaners.",
    },
    {
      title: "Payment",
      parag:
        "Unless you are invoiced monthly or already provided your card information upon booking, full payments is required upon completion of the cleaning service. Any outstanding invoices within 72 hours of cleaning service will be charged an additional 10% interest fee per week until fully paid. Any unpaid or outstanding balances within 90 days will be place into collections with any additional fees included. We accept check payments (made payable to Best Portland Cleaners), cash, or you may call our office to pay by credit card if not provided already. No credit card information is stored electronically.  Returned checks are subject to a $30 reprocessing fee plus any additional fees if applicable.",
    },
    {
      title: "Property Damages",
      parag:
        "Our cleaning crew will immediately notify the client or our office of any accidental damage that occurs during any job. If applicable, we will reimburse any damaged item in the home to its current pricing found in any retail store unless the client provides a valid receipt with the item ID and price. However, Best Portland Cleaners is not responsible for any preventive damages.",
    },
    {
      title: "Estimate Arrival Time",
      parag:
        "Scheduled appointment arrival times has a time frame of an hour to give your cleaner(s) time for enough time fo any unfortunate events (traffic, delays, etc.).",
    },
    {
      title: "Customer Referrals",
      parag:
        "When you refer your friends and family to us, they receive an additional one-time $50 discount and YOU also will receive an additional one-time $50 discount upon your next service. Service from referred customers must be completed before receiving discount.",
    },
  ];
  return (
    <>
      <TopPage page="privacy policy" />
      <section className={"py-10 bg-pink-100"}>
        <div className="container">
          <TopSection
            subtitle="Our Policy / Insurance"
            title="Best Portland Cleaners Policy"
            intro="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolor iste id dicta esse earum fugiat sit alias inventore! Nulla?"
          />
          <div className={"mt-6"}>
            {policy.map((item, index) => (
              <div key={index} className={"mb-4"}>
                <h3
                  className={
                    "text-xl text-steel-blue font-semibold capitalize mb-1"
                  }
                >
                  {item.title} :
                </h3>
                <p className={"parag"}>{item.parag}</p>
              </div>
            ))}
          </div>
          <div className={"flex flex-col items-center gap-4 mt-20"}>
            <h3
              className={
                "text-3xl text-rose-bonbon font-bold text-center capitalize"
              }
            >
              Workers comp. proof of insurance
            </h3>
            <a
              href={insurancePdf}
              download="Insurance-Document.pdf"
              className={
                "flex items-center gap-2 text-steel-blue font-semibold"
              }
            >
              <span>Download PDF</span>
              <FaDownload />
            </a>
            <Link to={insurancePdf} target="_blank">
              <img
                src={insuranceImg}
                alt=""
                className={"w-full max-w-[650px] border border-slate-600"}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
