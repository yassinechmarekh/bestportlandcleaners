import React from "react";

export default function AppoitmentDetailsTable() {
  const data = [
    {
      question: "First Name",
      answer: "William",
    },
    {
      question: "Last Name",
      answer: "Jibbour",
    },
    {
      question: "Email",
      answer: "William.jibbour@email.com",
    },
    {
      question: "Phone",
      answer: "+1 503-465-5331",
    },
    {
      question: "Preferable type of service",
      answer: "Standard Cleaning",
    },
    {
      question: "How often you would like this service ?",
      answer: "One time",
    },
    {
      question: "Home Address",
      answer: "1409 Southwest Broadway, Portland, OR, United States, Oregon",
    },
    {
      question: "City / State / Zip",
      answer: "Vancouver, WA 98663",
    },
    {
      question: "Bedrooms",
      answer: "2",
    },
    {
      question: "Bathrooms",
      answer: "1",
    },
    {
      question: "Any additional rooms ( family, room offices, ect)",
      answer: "3",
    },
    {
      question: "Approximate square footage",
      answer: "Approximate square footage",
    },
    {
      question: "When would you like us to come ?",
      answer: "November 22nd, 2024",
    },
    {
      question: "Extras add-ons",
      answer: [
        "Interior Oven: $50",
        "Interior Fridge: $50",
        "Interior/Exterior Cabinets: $65",
      ],
    },
    {
      question: "Interior Windows",
      answer: "8",
    },
    {
      question: "Dust / Wipe-Down blinds",
      answer: "1",
    },
    {
      question: "Conditions",
      answer: "5",
    },
    {
      question:
        "When is the last time your home has been professionally cleaned ?",
      answer: "0 - 6 weeks",
    },
    {
      question: "Parking information",
      answer: "Free neighborhood parking",
    },
    {
      question: "What else should we know ?",
      answer: "none",
    },
    {
      question: "Text me all cool reminders / heads up",
      answer: "Yeah !",
    },
  ];
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-50 border border-steel-blue">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead class="text-sm text-rose-bonbon uppercase border-b border-steel-blue">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 border-r border-dashed border-steel-blue"
            >
              Questions
            </th>
            <th scope="col" class="px-6 py-3">
              Answers of client
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} class="border-b border-gray-200">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-steel-blue whitespace-nowrap border-r border-dashed border-steel-blue"
              >
                {item.question}
              </th>
              <td class="px-6 py-4">
                {Array.isArray(item.answer) ? (
                  <ul>
                    {item.answer.map((answer, i) => (
                      <li key={i}>{answer}</li>
                    ))}
                  </ul>
                ) : (
                  item.answer
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
