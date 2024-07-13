import Link from "next/link";

import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";

import Container from "@/components/Container";
import Row from "@/components/Row";
import Column from "@/components/Column";

import { ligaSans } from "@/config/fonts.config";

export default function Attribution() {
  return (
    <>
      <Navbar />

      <section className="bg-primary text-white py-8">
        <Container>
          <Row>
            <Column className={"justify-center gap-2"}>
              <h1 className={ligaSans.className + " text-[2rem]"}>Contact</h1>
            </Column>
          </Row>
        </Container>
      </section>

      <section className="py-4 min-h-[75vh]">
        <Container>
          <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl font-bold mb-6 text-gray-900">
                Contact Us
              </h1>
              <p className="text-lg mb-8 text-gray-600">
                We’d love to hear from you! Whether you have a question about
                our products, need assistance, or just want to share your
                feedback, we’re here to help.
              </p>
              <div className="flex flex-col lg:flex-row gap-12">
                {/* Contact Form */}
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Get in Touch
                  </h2>
                  <form
                    action="/api/contact" // Ensure you set up the API route for handling form submissions
                    method="POST"
                    className="space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
