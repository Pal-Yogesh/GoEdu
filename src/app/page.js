"use client";
import Head from "next/head";
import About from "../../components/About";
import Faq from "../../components/FAQ";
import Featureandbenefits from "../../components/Featureandbenefits";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Howwework from "../../components/Howwework";
import Navbar from "../../components/Navbar";
import Popup from "../../components/Popup";
import Testimonials from "../../components/Testimonials";
import Work from "../../components/Work";

export default function Home() {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="author" content="Digital 360" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>No.1 AI College Counseling in India 2024-25 | Go Edu</title>
        <title>No.1 AI College Counseling in India </title>
        <meta name="description" content="Experience India's premier AI college counseling with Go Edu. Get tailored college matches, expert guidance, and achieve your academic dreams." />
        <meta name="keywords" content="AI College Counseling, College Counseling, AI Counseling, Best AI college counseling, admission counseling, college counselor, college admissions counselor, best college counseling" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="No.1 AI College Counseling in India 2024-25 | Go Edu" />
        <meta property="og:description" content="Experience India's premier AI college counseling with Go Edu. Get tailored college matches, expert guidance, and achieve your academic dreams." />
        <meta property="og:url" content="https://www.goedu.in" />
        <meta property="og:site_name" content="No.1 AI College Counseling in India | Go Edu" />
        <meta property="og:image" content="https://www.goedu.in/back.svg" />

        <script type="application/ld+json"
     dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "Go Edu",
              "alternateName": "Go Edu",
              "url": "https://www.goedu.in",
              "logo": "https://www.goedu.in/goEdu%201.svg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "9557695360",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "en"
              },
              "sameAs": [
                "https://www.instagram.com/goedu_india/",
                "https://www.facebook.com/people/GoEdu/61552427439719/"
              ]
            })
     }}/>


       

<script type="application/ld+json"
     dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Go Edu",
              "image": "https://www.goedu.in/back.svg",
              "@id": "https://www.goedu.in",
              "url": "https://www.goedu.in",
              "telephone": "9557695360",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "B-36 Nehru Colony",
                "addressLocality": "Dehradun",
                "postalCode": "248001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.301513,
                "longitude": 78.0525119
              },
              "sameAs": [
                "https://www.instagram.com/goedu_india/",
                "https://www.facebook.com/people/GoEdu/61552427439719/"
              ]
            })
     }}/>


   
        <script type="application/ld+json"
     dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What is Go Edu and how does it work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Go Edu is an AI-powered college counseling portal in India. It provides personalized college recommendations based on your academic profile, interests, and career goals. Our platform offers expert guidance, application tracking, and continuous support to help you navigate the college admissions process efficiently."
                }
              },{
                "@type": "Question",
                "name": "How does Go Edu's AI technology benefit me?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our AI technology analyzes multiple factors, including your academic achievements and personal preferences, to provide accurate and tailored college recommendations. This ensures you find the best college match, saving you time and reducing stress in the decision-making process."
                }
              },{
                "@type": "Question",
                "name": "What kind of support does Go Edu offer during the application process?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Go Edu offers comprehensive support, including personalized assessments, expert guidance from experienced counselors, smart application tracking, and continuous support even after application submission. We assist with essay writing, interview preparation, scholarship searches, and financial aid applications."
                }
              },{
                "@type": "Question",
                "name": "Is Go Edu suitable for students with specific career goals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Go Edu's personalized assessments consider your career goals alongside your academic profile and interests. Whether you aim for a career in engineering, business, arts, or any other field, our platform provides recommendations that align with your aspirations."
                }
              },{
                "@type": "Question",
                "name": "How can I get started with Go Edu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Getting started with Go Edu is simple. Sign up on our website, complete your profile, and our AI will begin analyzing your data to provide personalized college recommendations. You can then access our expert counseling services and track your applications through our user-friendly platform."
                }
              },{
                "@type": "Question",
                "name": "How can I get started with Go Edu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Go Edu offers assistance in searching for scholarships and financial aid opportunities. Our counselors provide guidance on how to apply for financial support, ensuring you have access to resources that can help fund your education."
                }
              }]
            })
     }}/>


     
        <script type="application/ld+json"
     dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Go Edu",
              "url": "https://www.goedu.in/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.goedu.in/google-search/?search_query={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
     }}/>

      </head>

      <Navbar />
      <Hero />
      <Popup />
      <About />
      <Howwework />
      <Featureandbenefits />
      <Work />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
