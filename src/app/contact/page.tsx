import FaqSection from "@/src/components/systemUI/FaqSection";
import { Linkedin, Mail, MessageSquare } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SwiftPDF Support & Feedback",
  description:
    "Have a question or a complaint? Reach out to the SwiftPDF team via LinkedIn or Email for fast support.",
};

const contactFaqs = [
  {
    question: "How can I contact SwiftPDF?",
    answer:
      "You can get in touch, with us by using our contact form sending an email or going to our support page. We do our best to answer all the questions people send us.",
  },
  {
    question: "How long does it take to get a response?",
    answer:
      "We usually get back to people within 24 hours.. The time it takes to respond can be different because we get a lot of requests, at certain times.",
  },
  {
    question: "Can I report a technical issue?",
    answer:
      "You can tell us about any problems or technical issues, with our contact form. It is an idea to include a lot of details so we can fix the bugs and technical issues with our system quickly.",
  },
  {
    question: "Do you offer customer support for all tools?",
    answer:
      "We give support for all of our PDF tools. If you have any problems, with our PDF tools you can talk to us about our PDF tools.",
  },
  {
    question: "Can I suggest a new feature?",
    answer:
      "Absolutely! We love getting feedback and ideas for features. Your thoughts really help us make our tools better and make it more enjoyable for you to use.",
  },
  {
    question: "Is there a support email I can use?",
    answer:
      "You can get in touch with us directly by sending a message to our support email. This email address is, on the contact page.",
  },
  {
    question: "Do I need an account to contact support?",
    answer:
      "You do not have to make an account to get in touch with us. We are here to help all of our users.",
  },
  {
    question:
      "Do you offer rewards for reporting bugs or suggesting improvements?",
    answer:
      "Not right now.. We do plan to give rewards in the future. These rewards will be, for users who help make SwiftPDF better. They can do this by telling us about bugs or suggesting features.",
  },
  {
    question: "What is the best way to reach you on LinkedIn?",
    answer:
      "The best way to reach us is through our LinkedIn page. You can send a message or connect with us for updates, support and business inquiries on LinkedIn. We usually respond quickly as possible during working hours, on LinkedIn.",
  },
  {
    question: "What is the mission and vision of your company?",
    answer:
      "Our goal is to make it easy for people to use PDF tools. We want to make these tools simple and fast. We also want to make sure everyone can use them without having to pay for them or figure out how to use them. We want to help students and professionals and businesses work with their documents in a way that's easy and safe. Our dream is to have a website that people around the world can use to work with PDFs. We want people to be able to use our website without having to give us any information or pay for anything. We want to make it easy for people to use PDF tools without having to buy software. We want PDF tools to be easy to use and safe, for everyone.",
  },
];
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
          How can we <span className="text-red-600">help?</span>
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Whether you have found a bug or have a suggestion for a feature we
          want to hear from you. We really want to know what you think. You can
          tell us if something is not working right. If you have an idea, for
          something new we want to hear that too. We care about what you have to
          say.
        </p>

        <div className="grid gap-6">
          <a
            href="https://www.linkedin.com/company/swift-pdf-cloud"
            target="_blank"
            className="flex items-center p-6 bg-white rounded-2xl border-2 border-transparent hover:border-blue-500 shadow-sm transition-all group"
          >
            <div className="bg-blue-50 p-4 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Linkedin size={28} />
            </div>
            <div className="text-left ml-6">
              <h2 className="text-xl font-bold text-gray-900">
                Connect on LinkedIn — Best for complex file issues.
              </h2>
              <p className="text-sm text-gray-500">
                We give the response for bug reports and business inquiries.
                This means you will get an answer when you send us a bug report
                or a business inquiry. We do this so that people who send us bug
                reports and business inquiries can get the help they need soon,
                as possible for their bug reports and business inquiries.
              </p>
            </div>
          </a>

          {/* Email - The Formal Channel */}
          <a
            href="mailto:support@swiftpdf.cloud"
            className="flex items-center p-6 bg-white rounded-2xl border-2 border-transparent hover:border-red-500 shadow-sm transition-all group"
          >
            <div className="bg-red-50 p-4 rounded-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Mail size={28} />
            </div>
            <div className="text-left ml-6">
              <h2 className="text-xl font-bold text-gray-900">Email Support</h2>
              <p className="text-sm text-gray-500">support@swiftpdf.cloud </p>
            </div>
          </a>
        </div>

        <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100">
          <p className="text-sm text-blue-800 leading-relaxed italic">
            "As a developer I personally go through every piece of feedback to
            make our PDF conversion more accurate. Connecting with me on
            LinkedIn helps me know who my users are so I can build tools for you
            and improve the conversion accuracy."
          </p>
          <p className="mt-4 font-bold text-blue-900">
            Syed Ali — Founder, SwiftPDF
          </p>
        </div>
      </div>
      <div className="mt-10">
        <FaqSection faqs={contactFaqs} />
      </div>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact SwiftPDF Support",
      "description": "Get in touch with the SwiftPDF team for technical support, bug reports, or feature suggestions.",
      "url": "https://swiftpdf.cloud/contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "SwiftPDF",
        "url": "https://swiftpdf.cloud",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "email": "support@swiftpdf.cloud",
            "contactType": "customer support",
            "url": "https://swiftpdf.cloud/contact"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/swift-pdf-cloud"
        ]
      }
    }),
  }}
/>
    </div>
  );
}
