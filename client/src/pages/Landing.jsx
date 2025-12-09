import React from 'react';
import Layout from '../components/Layout';
import GlassCard from '../components/GlassCard';
import { ArrowRight, BarChart, Activity, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Landing = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="container mx-auto px-4 text-center z-10 relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                    >
                        Sentiment Analysis <br /> of Social Media Presence
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
                    >
                        Monitor public sentiment on social media to assess brand reputation and inform marketing strategies.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link to="/register" className="glass-btn text-lg px-8 py-3 rounded-full">
                            Get Started <ArrowRight className="inline-block ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>

                {/* Background Blobs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white/5 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <GlassCard className="hover:scale-105 transition-transform duration-300">
                            <Activity className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">Real-time Monitoring</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Track sentiment across platforms in real-time to stay ahead of the conversation.
                            </p>
                        </GlassCard>
                        <GlassCard className="hover:scale-105 transition-transform duration-300">
                            <BarChart className="w-12 h-12 text-secondary mb-4" />
                            <h3 className="text-xl font-bold mb-2">Visual Insights</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Comprehensive dashboards with intuitive charts and graphs for easy analysis.
                            </p>
                        </GlassCard>
                        <GlassCard className="hover:scale-105 transition-transform duration-300">
                            <Search className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">Keyword Analysis</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Identify trending keywords and hashtags driving positive or negative sentiment.
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Landing;
