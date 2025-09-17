"use client";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const faqs = [
  {
    question: "What is Ahia Global Store?",
    answer:
      "Ahia Global Store is your one-stop marketplace for groceries, fashion, electronics, home essentials, and more. We connect buyers with trusted sellers worldwide.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Simply browse through our categories, add items to your cart, and proceed to checkout. You can pay securely using cards, bank transfer, or supported wallets.",
  },
  {
    question: "Do you offer nationwide delivery?",
    answer:
      "Yes, we deliver across all major cities and towns. Delivery times vary depending on your location and the type of product.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day return policy on eligible items. The product must be unused, in original packaging, and returned with proof of purchase.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our 24/7 customer support team via live chat, email at support@ahiaglobal.com, or through our official phone line.",
  },
];

export default function FAQ() {
  return (
    <Box sx={{ maxWidth: "80%", mx: "auto", p: 3 }}>
      <Typography
        variant="h5"
        fontWeight="500"
        textAlign="left"
        gutterBottom
      >
        Frequently Asked Questions
      </Typography>

      {faqs.map((faq, index) => (
        <Accordion key={index} sx={{ mb: 2, borderRadius: 2, boxShadow: 1 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography fontWeight="500">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
