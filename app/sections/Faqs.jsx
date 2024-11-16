import Image from 'next/image'

import { Container } from './Container'

const faqs = [
  [
    {
      question: 'What is Footprints Collective, and how does it work?',
      answer:
        'Footprints Collective is a comprehensive platform for sustainability tracking and community impact management, helping organizations reduce their environmental footprint and engage in measurable impact.',
    },
    {
      question: 'Is Footprints Collective suitable for all types of organizations?',
      answer:
        'Yes, Footprints Collective is adaptable for a variety of industries and organization sizes, offering customized solutions for sustainability and impact goals.',
    },
    {
      question: 'How does Footprints Collective handle real-time tracking?',
      answer:
        'Our platform includes real-time tracking tools, enabling organizations to monitor their carbon footprint and community impact in a transparent and measurable way.',
    },
  ],
  [
    {
      question: 'Can Footprints Collective be accessed on mobile devices?',
      answer:
        'Yes, Footprints Collective is fully optimized for mobile, allowing you to access data and manage your sustainability initiatives on the go.',
    },
    {
      question:
        'Does Footprints Collective provide support and training for our team?',
      answer:
        'Absolutely. We offer onboarding resources and ongoing support to ensure your team is equipped to use our platform effectively.',
    },
    {
      question:
        'How do I adjust my Footprints Collective plan if my organization’s needs change?',
      answer:
        'Plans are flexible, and you can easily upgrade or modify them as your sustainability goals evolve.',
    },
  ],
  [
    {
      question: 'Can Footprints Collective support impact tracking across multiple locations?',
      answer:
        'Yes, Footprints Collective is designed to manage sustainability tracking across multiple sites, making it easy to oversee and report across locations.',
    },
    {
      question: 'Does Footprints Collective track compliance with sustainability standards?',
      answer:
        'Yes, our platform is developed to align with major sustainability and environmental standards, ensuring you stay compliant.',
    },
    {
      question: 'How quickly can we start using Footprints Collective?',
      answer:
        'Implementation is fast and user-friendly, allowing your organization to begin tracking and managing sustainability within hours.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-white py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%] bg-white"
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative bg-white">
        <div className="mx-auto max-w-2xl lg:mx-0 bg-white">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
