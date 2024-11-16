import React, { useState } from 'react';
import clsx from 'clsx';
import greenCheck from '../images/svg/checkbox-green.svg'
import Image from 'next/image';
import { ArrowRight, Building2, Globe2, LineChart } from 'lucide-react';

// Card Components
const Card = ({ className, children, ...props }) => (
  <div
    className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ className, children, ...props }) => (
  <div
    className={`p-6 pt-0 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const HowItWorksCard = ({ number, title, description, icon: Icon }) => (
  <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
      <span className="text-green-600 font-semibold">{number}</span>
    </div>
    <div className="flex-1">
      <div className="flex items-center space-x-2 mb-2">
        <Icon className="w-5 h-5 text-green-600" />
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const FormInput = ({ label, placeholder, type = "text" }) => (
  <label className="mb-4 flex flex-col w-full">
    <span className="mb-2 text-gray-700 font-medium text-sm">{label}</span>
    <input
      type={type}
      className="py-3 px-4 w-full text-gray-900 bg-white rounded-lg border border-gray-200 hover:border-colorPrimary focus:border-colorPrimary focus:ring-2 focus:ring-green-200 transition-colors duration-200"
      placeholder={placeholder}
      aria-label={label}
    />
  </label>
);

export function Hero() {
  return (
    <section className="relative py-16 lg:py-16 overflow-hidden bg-gradient-to-b from-green-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="max-w-xl">
              <h1 className="mb-5 text-4xl lg:text-4xl font-bold leading-tight text-gray-900">
                We Help You Reach{' '}
                <span className="text-green-600">Net-Zero</span>{' '}
                Profitably and Sustainably.
              </h1>

              <p className="mb-5 text-lg text-gray-600 leading-relaxed">
                Your business's journey to net-zero emissions doesn't have to compromise growth.
                Get a tailored carbon assessment that identifies actionable steps to reduce your
                carbon footprint while maintaining profitability.
              </p>

              {/* How It Works Cards */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">How It Works</h2>
                <HowItWorksCard
                  number="1"
                  title="Start Your Free Assessment"
                  description="Get a no-obligation, customized carbon assessment for your business."
                  icon={Building2}
                />
                <HowItWorksCard
                  number="2"
                  title="Receive Actionable Insights"
                  description="We'll provide personalized recommendations on reducing emissions profitably."
                  icon={LineChart}
                />
                <HowItWorksCard
                  number="3"
                  title="Track Your Progress"
                  description="Monitor your sustainability progress in real-time and stay on track toward your goals."
                  icon={Globe2}
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 px-4">
            <Card className="relative p-8 bg-white rounded-xl shadow-xl lg:ml-8">
              <CardContent>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <div className="w-20 h-20 bg-colorPrimary rounded-full flex items-center justify-center">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="text-center mb-8 pt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Tell Us About Your Business
                  </h2>
                  <p className="text-gray-600">
                    Let's Personalize Your Assessment
                  </p>
                </div>

                <form className="space-y-4">
                  <FormInput
                    label="Business Name"
                    placeholder="Enter your business name"
                  />
                  <FormInput
                    label="Business Industry"
                    placeholder="Select your business industry"
                  />
                  <FormInput
                    label="Business Country"
                    placeholder="Select your business country"
                  />

                  <button
                    className="w-full py-4 px-6 bg-colorPrimary hover:bg-green-600 
                             text-white font-medium rounded-lg transition-colors duration-200
                             flex items-center justify-center space-x-2 group"
                  >
                    <span>Start Carbon Assessment</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}