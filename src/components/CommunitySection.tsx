import React from 'react';
import { MessageSquare, Users, Clock, Plus, Heart } from 'lucide-react';
import { ForumPost } from '../types';

const CommunitySection: React.FC = () => {
  const forumPosts: ForumPost[] = [
    {
      id: '1',
      title: "Dealing with exam anxiety - what strategies work for you?",
      author: "Anonymous Student",
      timestamp: "2 hours ago",
      replyCount: 24,
      preview: "I've been struggling with severe anxiety during exams. My mind goes blank even when I know the material. Has anyone found techniques that actually help?"
    },
    {
      id: '2',
      title: "Feeling isolated in a new city - how to make connections?",
      author: "NewStudent2024",
      timestamp: "5 hours ago",
      replyCount: 18,
      preview: "Starting college in a new city where I don't know anyone. It's been really lonely and I'm not sure how to put myself out there to make friends."
    },
    {
      id: '3',
      title: "Balancing work and studies without burning out",
      author: "WorkingStudent",
      timestamp: "1 day ago",
      replyCount: 31,
      preview: "Working 25 hours a week while taking a full course load. Feeling overwhelmed and like I'm failing at everything. How do you manage it all?"
    },
    {
      id: '4',
      title: "Success story: From depression to thriving",
      author: "HopefulGrad",
      timestamp: "2 days ago",
      replyCount: 47,
      preview: "Wanted to share my journey from a really dark place freshman year to graduating with honors. There is hope, and I want others to know that."
    }
  ];

  const stats = [
    { label: "Active Members", value: "8,247" },
    { label: "Posts This Week", value: "342" },
    { label: "Success Stories", value: "156" }
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Community Forum</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with fellow students in a safe, anonymous space. Share experiences, find support, and discover you're not alone.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center gap-2">
              <Plus className="h-5 w-5" />
              Start New Discussion
            </button>
            <button className="px-6 py-3 border border-purple-600 text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors duration-200">
              Browse All Topics
            </button>
          </div>

          {/* Forum Posts */}
          <div className="space-y-6">
            {forumPosts.map((post) => (
              <div
                key={post.id}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{post.author}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.timestamp}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      {post.replyCount}
                    </div>
                    <button className="p-2 hover:bg-white rounded-lg transition-colors duration-200">
                      <Heart className="h-4 w-4 hover:text-red-500" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">{post.preview}</p>

                <div className="flex items-center justify-between mt-4">
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors duration-200">
                    Join Discussion →
                  </button>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">+{post.replyCount - 3} others</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Community Guidelines */}
          <div className="mt-16 bg-purple-50 rounded-xl p-8 border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Community Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                  <p className="text-sm text-gray-600">Maintain anonymity and respect others' privacy</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                  <p className="text-sm text-gray-600">Be supportive and non-judgmental</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                  <p className="text-sm text-gray-600">No medical advice - share experiences only</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                  <p className="text-sm text-gray-600">Report concerning content to moderators</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                  <p className="text-sm text-gray-600">Encourage seeking professional help when needed</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                  <p className="text-sm text-gray-600">Keep discussions focused on mental health support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;