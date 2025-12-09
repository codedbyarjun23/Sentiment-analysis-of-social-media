import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import GlassCard from '../components/GlassCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ArrowUp, ArrowDown, Activity, MessageCircle, BarChart2 } from 'lucide-react';
import axios from 'axios';

const Dashboard = () => {
    const [summary, setSummary] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // In a real app we'd fetch from backend, for now we will assume the backend is simpler or just use mock state if backend isn't ready.
                // But I implemented backend routes so let's try to fetch if possible, or fallback to mock data here for robustness if user hasn't started backend.
                // Integrating real fetch:
                const summaryRes = await axios.get('http://localhost:5000/api/dashboard/summary');
                const postsRes = await axios.get('http://localhost:5000/api/dashboard/posts');

                setSummary(summaryRes.data);
                setPosts(postsRes.data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch dashboard data", err);
                // Fallback Mock Data
                setSummary({
                    totalPosts: 1245,
                    overallSentiment: { positive: 45, neutral: 30, negative: 25 },
                    engagement: '4.2%',
                    trend: 'up',
                });
                setPosts([
                    { id: 1, text: "Loving the new features! #awesome", platform: "Twitter", sentiment: "Positive", date: "2 mins ago" },
                    { id: 2, text: "Not sure about this update...", platform: "Facebook", sentiment: "Neutral", date: "15 mins ago" },
                    { id: 3, text: "The service is down again. Frustrating.", platform: "Twitter", sentiment: "Negative", date: "1 hour ago" }
                ]);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const data = [
        { name: 'Mon', sentiment: 65 },
        { name: 'Tue', sentiment: 59 },
        { name: 'Wed', sentiment: 80 },
        { name: 'Thu', sentiment: 81 },
        { name: 'Fri', sentiment: 56 },
        { name: 'Sat', sentiment: 55 },
        { name: 'Sun', sentiment: 40 },
    ];

    const pieData = [
        { name: 'Positive', value: summary?.overallSentiment?.positive || 45 },
        { name: 'Neutral', value: summary?.overallSentiment?.neutral || 30 },
        { name: 'Negative', value: summary?.overallSentiment?.negative || 25 },
    ];

    const COLORS = ['#38B2AC', '#A0AEC0', '#E53E3E'];

    if (loading) return <Layout><div className="flex justify-center items-center h-screen">Loading...</div></Layout>;

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <GlassCard className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Total Posts</p>
                            <p className="text-2xl font-bold">{summary.totalPosts}</p>
                        </div>
                        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-500">
                            <MessageCircle className="w-6 h-6" />
                        </div>
                    </GlassCard>
                    <GlassCard className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Engagement</p>
                            <p className="text-2xl font-bold">{summary.engagement}</p>
                        </div>
                        <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full text-purple-500">
                            <Activity className="w-6 h-6" />
                        </div>
                    </GlassCard>
                    <GlassCard className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Sentiment</p>
                            <p className="text-2xl font-bold text-green-500">{summary.overallSentiment.positive}% Pos</p>
                        </div>
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full text-green-500">
                            <BarChart2 className="w-6 h-6" />
                        </div>
                    </GlassCard>
                    <GlassCard className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm font-medium">Trend</p>
                            <p className="text-2xl font-bold flex items-center">
                                {summary.trend === 'up' ? <ArrowUp className="w-5 h-5 text-green-500 mr-1" /> : <ArrowDown className="w-5 h-5 text-red-500 mr-1" />}
                                {summary.trend === 'up' ? 'Rising' : 'Falling'}
                            </p>
                        </div>
                        <div className={`p-3 rounded-full ${summary.trend === 'up' ? 'bg-green-100 dark:bg-green-900 text-green-500' : 'bg-red-100 dark:bg-red-900 text-red-500'}`}>
                            {summary.trend === 'up' ? <ArrowUp className="w-6 h-6" /> : <ArrowDown className="w-6 h-6" />}
                        </div>
                    </GlassCard>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <GlassCard className="lg:col-span-2">
                        <h3 className="text-xl font-bold mb-4">Sentiment Over Time (Last 7 Days)</h3>
                        <div className="h-72 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                                    <XAxis dataKey="name" stroke="#888888" />
                                    <YAxis stroke="#888888" />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                                    />
                                    <Line type="monotone" dataKey="sentiment" stroke="#6B46C1" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </GlassCard>
                    <GlassCard>
                        <h3 className="text-xl font-bold mb-4">Sentiment Distribution</h3>
                        <div className="h-72 w-full flex justify-center items-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex justify-center space-x-4 mt-2">
                            {pieData.map((entry, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index] }}></div>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{entry.name}</span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>

                {/* Recent Posts */}
                <GlassCard>
                    <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-3 border-b border-gray-200 dark:border-gray-700 text-gray-500 font-medium text-sm">Post Content</th>
                                    <th className="p-3 border-b border-gray-200 dark:border-gray-700 text-gray-500 font-medium text-sm">Platform</th>
                                    <th className="p-3 border-b border-gray-200 dark:border-gray-700 text-gray-500 font-medium text-sm">Sentiment</th>
                                    <th className="p-3 border-b border-gray-200 dark:border-gray-700 text-gray-500 font-medium text-sm">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post) => (
                                    <tr key={post.id} className="hover:bg-white/10 transition-colors">
                                        <td className="p-3 border-b border-gray-100 dark:border-gray-800">{post.text}</td>
                                        <td className="p-3 border-b border-gray-100 dark:border-gray-800">
                                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                                {post.platform}
                                            </span>
                                        </td>
                                        <td className="p-3 border-b border-gray-100 dark:border-gray-800">
                                            <span className={`text-xs font-medium px-2.5 py-0.5 rounded 
                                                ${post.sentiment === 'Positive' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                                                    post.sentiment === 'Negative' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' :
                                                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                                                {post.sentiment}
                                            </span>
                                        </td>
                                        <td className="p-3 border-b border-gray-100 dark:border-gray-800 text-gray-500 text-sm">{post.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </GlassCard>
            </div>
        </Layout>
    );
};

export default Dashboard;
