import React, { useState } from 'react';
import Layout from '../components/Layout';
import GlassCard from '../components/GlassCard';
import axios from 'axios';
import { Send, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

const Analyze = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const onAnalyze = async () => {
        if (!text) return;
        setLoading(true);
        try {
            const res = await axios.post('http://localhost:5000/api/analyze', { text });
            setResult(res.data);
        } catch (err) {
            console.error("Analysis failed", err);
        }
        setLoading(false);
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <GlassCard className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6 text-center">Analyze Text Sentiment</h1>
                    <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
                        Enter any text, tweet, or comment below to analyze its sentiment score and keywords.
                    </p>

                    <div className="mb-6">
                        <textarea
                            className="glass-input w-full h-40 resize-none p-4 text-lg"
                            placeholder="Type or paste text here..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>

                    <div className="text-center mb-8">
                        <button
                            onClick={onAnalyze}
                            disabled={loading || !text}
                            className={`glass-btn text-lg px-8 py-3 rounded-full flex items-center justify-center mx-auto ${loading || !text ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Analyzing...' : <><Send className="w-5 h-5 mr-2" /> Analyze Sentiment</>}
                        </button>
                    </div>

                    {result && (
                        <div className="animate-fade-in-up mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
                            <h2 className="text-2xl font-bold mb-6">Analysis Results</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className={`p-6 rounded-xl border flex flex-col items-center justify-center
                                    ${result.sentiment === 'Positive' ? 'bg-green-50/50 border-green-200 dark:bg-green-900/20 dark:border-green-800' :
                                        result.sentiment === 'Negative' ? 'bg-red-50/50 border-red-200 dark:bg-red-900/20 dark:border-red-800' :
                                            'bg-gray-50/50 border-gray-200 dark:bg-gray-800/20 dark:border-gray-700'}`}>
                                    {result.sentiment === 'Positive' && <CheckCircle className="w-16 h-16 text-green-500 mb-4" />}
                                    {result.sentiment === 'Negative' && <AlertCircle className="w-16 h-16 text-red-500 mb-4" />}
                                    {result.sentiment === 'Neutral' && <HelpCircle className="w-16 h-16 text-gray-500 mb-4" />}

                                    <h3 className="text-2xl font-bold mb-1">{result.sentiment}</h3>
                                    <p className="text-gray-500">Overall Sentiment</p>
                                </div>

                                <div className="p-6 rounded-xl border border-white/20 bg-white/10 dark:bg-black/10">
                                    <h3 className="text-xl font-bold mb-4">Confidence Score</h3>
                                    <div className="flex items-end mb-2">
                                        <span className="text-4xl font-bold text-primary">{(result.confidence * 100).toFixed(0)}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${result.confidence * 100}%` }}></div>
                                    </div>

                                    <h3 className="text-xl font-bold mt-6 mb-3">Keywords Detected</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {result.keywords && result.keywords.length > 0 ? (
                                            result.keywords.map((word, idx) => (
                                                <span key={idx} className="bg-white/30 border border-white/30 px-3 py-1 rounded-full text-sm">
                                                    {word}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="text-gray-500 italic">No specific keywords detected.</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </GlassCard>
            </div>
        </Layout>
    );
};

export default Analyze;
