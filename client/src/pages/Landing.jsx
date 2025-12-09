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
                        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-sm"
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
                        <Link to="/register" className="glass-btn text-lg px-8 py-3 rounded-full hover:shadow-[0_0_20px_rgba(110,231,183,0.5)] transition-shadow duration-300">
                            Get Started <ArrowRight className="inline-block ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>

                {/* Background Blobs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
                ></motion.div>
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, -60, 0],
                        x: [0, 50, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
                ></motion.div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white/5 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold text-center mb-16"
                    >
                        Key Features
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Activity className="w-12 h-12 text-primary mb-4" />,
                                title: "Real-time Monitoring",
                                desc: "Track sentiment across platforms in real-time to stay ahead of the conversation."
                            },
                            {
                                icon: <BarChart className="w-12 h-12 text-secondary mb-4" />,
                                title: "Visual Insights",
                                desc: "Comprehensive dashboards with intuitive charts and graphs for easy analysis."
                            },
                            {
                                icon: <Search className="w-12 h-12 text-primary mb-4" />,
                                title: "Keyword Analysis",
                                desc: "Identify trending keywords and hashtags driving positive or negative sentiment."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <GlassCard className="hover:scale-105 transition-transform duration-300 hover:bg-glass/80 h-full">
                                    {feature.icon}
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {feature.desc}
                                    </p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Landing;
