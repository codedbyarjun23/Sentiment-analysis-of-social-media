import React, { useState } from 'react';
import Layout from '../components/Layout';
import GlassCard from '../components/GlassCard';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Mock submission
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-12">
                <GlassCard className="max-w-xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

                    {submitted ? (
                        <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center">
                            Thank you! Your message has been sent.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Name</label>
                                <input type="text" className="glass-input w-full" placeholder="Your Name" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Email</label>
                                <input type="email" className="glass-input w-full" placeholder="your@email.com" required />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Message</label>
                                <textarea className="glass-input w-full h-32 resize-none" placeholder="How can we help?" required></textarea>
                            </div>
                            <button type="submit" className="glass-btn w-full text-lg">Send Message</button>
                        </form>
                    )}
                </GlassCard>
            </div>
        </Layout>
    );
};

export default Contact;
